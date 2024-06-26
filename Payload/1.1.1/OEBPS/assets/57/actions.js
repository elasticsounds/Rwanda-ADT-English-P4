pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 14630;
pubcoder.page.title = pubcoder.page.title || "57";
pubcoder.page.number = pubcoder.page.number || 57;
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
var obj73951_onTap_activeActionGroupIndex = -1;
var obj73951_onTap_runningActionsCount = 0;
var obj73951_onTap_loopCount = 0;
var obj73948_onTap_activeActionGroupIndex = -1;
var obj73948_onTap_runningActionsCount = 0;
var obj73948_onTap_loopCount = 0;
var obj73944_onTap_activeActionGroupIndex = -1;
var obj73944_onTap_runningActionsCount = 0;
var obj73944_onTap_loopCount = 0;
var obj73841_onDrag_activeActionGroupIndex = -1;
var obj73841_onDrag_runningActionsCount = 0;
var obj73841_onDrag_loopCount = 0;
var obj73841_onTouchDown_activeActionGroupIndex = -1;
var obj73841_onTouchDown_runningActionsCount = 0;
var obj73841_onTouchDown_loopCount = 0;
var obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_loopCount = 0;
var obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_4_loopCount = 0;
var obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_3_loopCount = 0;
var obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_2_loopCount = 0;
var obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj73841_droppedInsideTargetActions_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_loopCount = 0;
var obj73788_onDrag_activeActionGroupIndex = -1;
var obj73788_onDrag_runningActionsCount = 0;
var obj73788_onDrag_loopCount = 0;
var obj73788_onTouchDown_activeActionGroupIndex = -1;
var obj73788_onTouchDown_runningActionsCount = 0;
var obj73788_onTouchDown_loopCount = 0;
var obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_loopCount = 0;
var obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_4_loopCount = 0;
var obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_3_loopCount = 0;
var obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_2_loopCount = 0;
var obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj73788_droppedInsideTargetActions_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_loopCount = 0;
var obj73735_onDrag_activeActionGroupIndex = -1;
var obj73735_onDrag_runningActionsCount = 0;
var obj73735_onDrag_loopCount = 0;
var obj73735_onTouchDown_activeActionGroupIndex = -1;
var obj73735_onTouchDown_runningActionsCount = 0;
var obj73735_onTouchDown_loopCount = 0;
var obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_loopCount = 0;
var obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_4_loopCount = 0;
var obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_3_loopCount = 0;
var obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_2_loopCount = 0;
var obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj73735_droppedInsideTargetActions_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_loopCount = 0;
var obj73682_onDrag_activeActionGroupIndex = -1;
var obj73682_onDrag_runningActionsCount = 0;
var obj73682_onDrag_loopCount = 0;
var obj73682_onTouchDown_activeActionGroupIndex = -1;
var obj73682_onTouchDown_runningActionsCount = 0;
var obj73682_onTouchDown_loopCount = 0;
var obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_loopCount = 0;
var obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_4_loopCount = 0;
var obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_3_loopCount = 0;
var obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_2_loopCount = 0;
var obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj73682_droppedInsideTargetActions_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_loopCount = 0;
var obj73664_onTap_activeActionGroupIndex = -1;
var obj73664_onTap_runningActionsCount = 0;
var obj73664_onTap_loopCount = 0;
var obj73656_onTap_activeActionGroupIndex = -1;
var obj73656_onTap_runningActionsCount = 0;
var obj73656_onTap_loopCount = 0;
var obj89912_onTap_activeActionGroupIndex = -1;
var obj89912_onTap_runningActionsCount = 0;
var obj89912_onTap_loopCount = 0;
var obj89907_onTap_activeActionGroupIndex = -1;
var obj89907_onTap_runningActionsCount = 0;
var obj89907_onTap_loopCount = 0;
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
		
obj73951_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73951_onTap_activeActionGroupIndex = -1;
		$("#obj73951").trigger("obj73951_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73951) {
				console.warn("de-queueing event obj73951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73951_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73953();
function goToPage_73953() {
	window.obj73951_onTap_runningActionsCount = obj73951_onTap_runningActionsCount + 1;
	$("#anchor338")[0].click();
	window.obj73951_onTap_runningActionsCount = window.obj73951_onTap_runningActionsCount - 1;
if (window.obj73951_onTap_runningActionsCount < 0) {
	window.obj73951_onTap_runningActionsCount = 0;
} else if (window.obj73951_onTap_runningActionsCount == 0) {
	obj73951_onTap_actionGroup1();
}
}





















};
obj73951_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73951_onTap_activeActionGroupIndex = -1;
		$("#obj73951").trigger("obj73951_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73951) {
				console.warn("de-queueing event obj73951." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73951").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73951_onTap_activeActionGroupIndex = 1;
	





















};
obj73948_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73948_onTap_activeActionGroupIndex = -1;
		$("#obj73948").trigger("obj73948_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73948) {
				console.warn("de-queueing event obj73948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73948_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73950();
function goToPage_73950() {
	window.obj73948_onTap_runningActionsCount = obj73948_onTap_runningActionsCount + 1;
	$("#anchor339")[0].click();
	window.obj73948_onTap_runningActionsCount = window.obj73948_onTap_runningActionsCount - 1;
if (window.obj73948_onTap_runningActionsCount < 0) {
	window.obj73948_onTap_runningActionsCount = 0;
} else if (window.obj73948_onTap_runningActionsCount == 0) {
	obj73948_onTap_actionGroup1();
}
}





















};
obj73948_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73948_onTap_activeActionGroupIndex = -1;
		$("#obj73948").trigger("obj73948_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73948) {
				console.warn("de-queueing event obj73948." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73948").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73948_onTap_activeActionGroupIndex = 1;
	





















};
obj73944_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73944_onTap_activeActionGroupIndex = -1;
		$("#obj73944").trigger("obj73944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73944) {
				console.warn("de-queueing event obj73944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73944_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_73946();
function goToPage_73946() {
	window.obj73944_onTap_runningActionsCount = obj73944_onTap_runningActionsCount + 1;
	$("#anchor340")[0].click();
	window.obj73944_onTap_runningActionsCount = window.obj73944_onTap_runningActionsCount - 1;
if (window.obj73944_onTap_runningActionsCount < 0) {
	window.obj73944_onTap_runningActionsCount = 0;
} else if (window.obj73944_onTap_runningActionsCount == 0) {
	obj73944_onTap_actionGroup1();
}
}





















};
obj73944_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73944_onTap_activeActionGroupIndex = -1;
		$("#obj73944").trigger("obj73944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73944) {
				console.warn("de-queueing event obj73944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73944_onTap_activeActionGroupIndex = 1;
	





















};
obj73841_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj73841");
//	action: dragDrop
//	target: obj73841 
dragDrop_73844();
function dragDrop_73844() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj73841_onTouchDown_runningActionsCount = obj73841_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj73841');
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
	  	containerNode = $('#obj73936');
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
    	window.obj73841_onTouchDown_runningActionsCount = window.obj73841_onTouchDown_runningActionsCount - 1;
if (window.obj73841_onTouchDown_runningActionsCount < 0) {
	window.obj73841_onTouchDown_runningActionsCount = 0;
} else if (window.obj73841_onTouchDown_runningActionsCount == 0) {
	obj73841_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj73926","#obj73920","#obj73914","#obj73902");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_73844 = false;
    	var dropped_id_73844;
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
					dropped_73844 = true;
					dropped_id_73844 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_73844) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj73841").trigger('SCActionDragDrop73844_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj73841_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73841_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj73841 
move_92280();
function move_92280() {
	window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount = obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj73841");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount = window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj73841_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73881();
function runjs_73881() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73882();
function runjs_73882() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#C00000"); $("#obj73902").css("border-width", "2px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73900 
hide_73883();
function hide_73883() {
	var selector = "#obj73900";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73883(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73841_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73884();
function runjs_73884() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73841").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73885();
function switchText_73885() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73841 
move_73886();
function move_73886() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj73841");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj73841_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73887();
function runjs_73887() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73888();
function runjs_73888() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#000000"); $("#obj73902").css("border-width", "1px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73900
(function(){
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj73900";
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
					window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73841_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73890();
function runjs_73890() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73841").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73891();
function runjs_73891() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73841").css("border-color", "rgba(0,0,0,0)"); $("#obj73841").css("border-width", "0px"); $("#obj73841").css("border-style", "solid"); $("#obj73841").css("border-radius", "10px"); $("#obj73841").css("-webkit-border-radius", "10px"); $("#obj73841").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73892();
function playAudio_73892() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj73841_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73893();
function switchText_73893() {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = obj73841_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_4_runningActionsCount = window.obj73841_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj73841_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73867();
function runjs_73867() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73868();
function runjs_73868() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#C00000"); $("#obj73914").css("border-width", "2px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73912 
hide_73869();
function hide_73869() {
	var selector = "#obj73912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73869(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73841_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73870();
function runjs_73870() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73841").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73871();
function switchText_73871() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73841 
move_73872();
function move_73872() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj73841");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj73841_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73873();
function runjs_73873() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73874();
function runjs_73874() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#000000"); $("#obj73914").css("border-width", "1px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73912
(function(){
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj73912";
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
					window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73841_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73876();
function runjs_73876() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73841").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73877();
function runjs_73877() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73841").css("border-color", "rgba(0,0,0,0)"); $("#obj73841").css("border-width", "0px"); $("#obj73841").css("border-style", "solid"); $("#obj73841").css("border-radius", "10px"); $("#obj73841").css("-webkit-border-radius", "10px"); $("#obj73841").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73878();
function playAudio_73878() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj73841_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73879();
function switchText_73879() {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = obj73841_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_3_runningActionsCount = window.obj73841_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj73841_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73853();
function runjs_73853() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73854();
function runjs_73854() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#C00000"); $("#obj73920").css("border-width", "2px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73918 
hide_73855();
function hide_73855() {
	var selector = "#obj73918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73855(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73841_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73856();
function runjs_73856() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73841").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73857();
function switchText_73857() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73841 
move_73858();
function move_73858() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj73841");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj73841_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73859();
function runjs_73859() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73860();
function runjs_73860() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#000000"); $("#obj73920").css("border-width", "1px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73918
(function(){
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj73918";
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
					window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73841_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73862();
function runjs_73862() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73841").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73863();
function runjs_73863() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73841").css("border-color", "rgba(0,0,0,0)"); $("#obj73841").css("border-width", "0px"); $("#obj73841").css("border-style", "solid"); $("#obj73841").css("border-radius", "10px"); $("#obj73841").css("-webkit-border-radius", "10px"); $("#obj73841").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73864();
function playAudio_73864() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj73841_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73865();
function switchText_73865() {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = obj73841_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_2_runningActionsCount = window.obj73841_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj73841_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73846();
function runjs_73846() {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_73850();
function switchText_73850() {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_73847();
function runjs_73847() {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#058E3F"); $("#obj73926").css("border-width", "2px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj73924 
hide_73848();
function hide_73848() {
	var selector = "#obj73924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73848(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73841_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_73849();
function runjs_73849() {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73841").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj73841_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj73896 
playAudio_73851();
function playAudio_73851() {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj73896")[0];
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
		    window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj73841_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90179();
function switchText_90179() {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = obj73841_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73841_droppedInsideTargetActions_runningActionsCount = window.obj73841_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73841_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73841_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73841_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73841_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj73841_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73841").trigger("obj73841_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73841) {
				console.warn("de-queueing event obj73841." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73841").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73841_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj73788_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj73788");
//	action: dragDrop
//	target: obj73788 
dragDrop_73791();
function dragDrop_73791() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj73788_onTouchDown_runningActionsCount = obj73788_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj73788');
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
	  	containerNode = $('#obj73936');
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
    	window.obj73788_onTouchDown_runningActionsCount = window.obj73788_onTouchDown_runningActionsCount - 1;
if (window.obj73788_onTouchDown_runningActionsCount < 0) {
	window.obj73788_onTouchDown_runningActionsCount = 0;
} else if (window.obj73788_onTouchDown_runningActionsCount == 0) {
	obj73788_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj73914","#obj73926","#obj73920","#obj73902");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_73791 = false;
    	var dropped_id_73791;
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
					dropped_73791 = true;
					dropped_id_73791 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_73791) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj73788").trigger('SCActionDragDrop73791_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj73788_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73788_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj73788 
move_92282();
function move_92282() {
	window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount = obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj73788");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount = window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj73788_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73828();
function runjs_73828() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73829();
function runjs_73829() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#C00000"); $("#obj73902").css("border-width", "2px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73900 
hide_73830();
function hide_73830() {
	var selector = "#obj73900";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73830(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73788_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73831();
function runjs_73831() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73788").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73832();
function switchText_73832() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73788 
move_73833();
function move_73833() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj73788");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj73788_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73834();
function runjs_73834() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73835();
function runjs_73835() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#000000"); $("#obj73902").css("border-width", "1px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73900
(function(){
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj73900";
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
					window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73788_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73837();
function runjs_73837() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73788").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73838();
function runjs_73838() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73788").css("border-color", "rgba(0,0,0,0)"); $("#obj73788").css("border-width", "0px"); $("#obj73788").css("border-style", "solid"); $("#obj73788").css("border-radius", "10px"); $("#obj73788").css("-webkit-border-radius", "10px"); $("#obj73788").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73839();
function playAudio_73839() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj73788_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73840();
function switchText_73840() {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = obj73788_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_4_runningActionsCount = window.obj73788_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj73788_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73814();
function runjs_73814() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73815();
function runjs_73815() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#C00000"); $("#obj73920").css("border-width", "2px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73918 
hide_73816();
function hide_73816() {
	var selector = "#obj73918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73816(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73788_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73817();
function runjs_73817() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73788").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73818();
function switchText_73818() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73788 
move_73819();
function move_73819() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj73788");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj73788_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73820();
function runjs_73820() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73821();
function runjs_73821() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#000000"); $("#obj73920").css("border-width", "1px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73918
(function(){
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj73918";
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
					window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73788_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73823();
function runjs_73823() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73788").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73824();
function runjs_73824() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73788").css("border-color", "rgba(0,0,0,0)"); $("#obj73788").css("border-width", "0px"); $("#obj73788").css("border-style", "solid"); $("#obj73788").css("border-radius", "10px"); $("#obj73788").css("-webkit-border-radius", "10px"); $("#obj73788").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73825();
function playAudio_73825() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj73788_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73826();
function switchText_73826() {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = obj73788_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_3_runningActionsCount = window.obj73788_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj73788_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73800();
function runjs_73800() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73801();
function runjs_73801() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#C00000"); $("#obj73926").css("border-width", "2px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73924 
hide_73802();
function hide_73802() {
	var selector = "#obj73924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73802(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73788_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73803();
function runjs_73803() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73788").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73804();
function switchText_73804() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73788 
move_73805();
function move_73805() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj73788");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 156;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj73788_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73806();
function runjs_73806() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73807();
function runjs_73807() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#000000"); $("#obj73926").css("border-width", "1px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73924
(function(){
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj73924";
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
					window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73788_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73809();
function runjs_73809() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73788").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73810();
function runjs_73810() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73788").css("border-color", "rgba(0,0,0,0)"); $("#obj73788").css("border-width", "0px"); $("#obj73788").css("border-style", "solid"); $("#obj73788").css("border-radius", "10px"); $("#obj73788").css("-webkit-border-radius", "10px"); $("#obj73788").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73811();
function playAudio_73811() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj73788_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73812();
function switchText_73812() {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = obj73788_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_2_runningActionsCount = window.obj73788_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj73788_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73793();
function runjs_73793() {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_73797();
function switchText_73797() {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_73794();
function runjs_73794() {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#058E3F"); $("#obj73914").css("border-width", "2px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj73912 
hide_73795();
function hide_73795() {
	var selector = "#obj73912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73795(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73788_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_73796();
function runjs_73796() {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73788").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj73788_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj73896 
playAudio_73798();
function playAudio_73798() {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj73896")[0];
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
		    window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj73788_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90180();
function switchText_90180() {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = obj73788_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73788_droppedInsideTargetActions_runningActionsCount = window.obj73788_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73788_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73788_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73788_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73788_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj73788_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73788").trigger("obj73788_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73788) {
				console.warn("de-queueing event obj73788." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73788").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73788_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj73735_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj73735");
//	action: dragDrop
//	target: obj73735 
dragDrop_73738();
function dragDrop_73738() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj73735_onTouchDown_runningActionsCount = obj73735_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj73735');
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
	  	containerNode = $('#obj73936');
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
    	window.obj73735_onTouchDown_runningActionsCount = window.obj73735_onTouchDown_runningActionsCount - 1;
if (window.obj73735_onTouchDown_runningActionsCount < 0) {
	window.obj73735_onTouchDown_runningActionsCount = 0;
} else if (window.obj73735_onTouchDown_runningActionsCount == 0) {
	obj73735_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj73920","#obj73926","#obj73914","#obj73902");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_73738 = false;
    	var dropped_id_73738;
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
					dropped_73738 = true;
					dropped_id_73738 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_73738) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj73735").trigger('SCActionDragDrop73738_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj73735_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73735_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj73735 
move_92284();
function move_92284() {
	window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount = obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj73735");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount = window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj73735_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73775();
function runjs_73775() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73776();
function runjs_73776() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#C00000"); $("#obj73902").css("border-width", "2px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73900 
hide_73777();
function hide_73777() {
	var selector = "#obj73900";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73777(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73735_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73778();
function runjs_73778() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73735").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73779();
function switchText_73779() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73735 
move_73780();
function move_73780() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj73735");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj73735_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73781();
function runjs_73781() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73782();
function runjs_73782() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#000000"); $("#obj73902").css("border-width", "1px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73900
(function(){
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj73900";
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
					window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73735_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73784();
function runjs_73784() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73735").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73785();
function runjs_73785() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73735").css("border-color", "rgba(0,0,0,0)"); $("#obj73735").css("border-width", "0px"); $("#obj73735").css("border-style", "solid"); $("#obj73735").css("border-radius", "10px"); $("#obj73735").css("-webkit-border-radius", "10px"); $("#obj73735").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73786();
function playAudio_73786() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj73735_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73787();
function switchText_73787() {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = obj73735_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_4_runningActionsCount = window.obj73735_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj73735_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73761();
function runjs_73761() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73762();
function runjs_73762() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#C00000"); $("#obj73914").css("border-width", "2px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73912 
hide_73763();
function hide_73763() {
	var selector = "#obj73912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73763(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73735_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73764();
function runjs_73764() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73735").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73765();
function switchText_73765() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73735 
move_73766();
function move_73766() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj73735");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj73735_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73767();
function runjs_73767() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73768();
function runjs_73768() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#000000"); $("#obj73914").css("border-width", "1px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73912
(function(){
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj73912";
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
					window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73735_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73770();
function runjs_73770() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73735").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73771();
function runjs_73771() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73735").css("border-color", "rgba(0,0,0,0)"); $("#obj73735").css("border-width", "0px"); $("#obj73735").css("border-style", "solid"); $("#obj73735").css("border-radius", "10px"); $("#obj73735").css("-webkit-border-radius", "10px"); $("#obj73735").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73772();
function playAudio_73772() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj73735_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73773();
function switchText_73773() {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = obj73735_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_3_runningActionsCount = window.obj73735_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj73735_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73747();
function runjs_73747() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73748();
function runjs_73748() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#C00000"); $("#obj73926").css("border-width", "2px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73924 
hide_73749();
function hide_73749() {
	var selector = "#obj73924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73749(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73735_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73750();
function runjs_73750() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73735").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73751();
function switchText_73751() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73735 
move_73752();
function move_73752() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj73735");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 634;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj73735_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73753();
function runjs_73753() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73754();
function runjs_73754() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#000000"); $("#obj73926").css("border-width", "1px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73924
(function(){
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj73924";
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
					window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73735_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73756();
function runjs_73756() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73735").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73757();
function runjs_73757() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73735").css("border-color", "rgba(0,0,0,0)"); $("#obj73735").css("border-width", "0px"); $("#obj73735").css("border-style", "solid"); $("#obj73735").css("border-radius", "10px"); $("#obj73735").css("-webkit-border-radius", "10px"); $("#obj73735").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73758();
function playAudio_73758() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj73735_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73759();
function switchText_73759() {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = obj73735_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_2_runningActionsCount = window.obj73735_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj73735_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73740();
function runjs_73740() {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_73744();
function switchText_73744() {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_73741();
function runjs_73741() {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#058E3F"); $("#obj73920").css("border-width", "2px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj73918 
hide_73742();
function hide_73742() {
	var selector = "#obj73918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73742(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73735_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_73743();
function runjs_73743() {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73735").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj73735_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj73896 
playAudio_73745();
function playAudio_73745() {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj73896")[0];
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
		    window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj73735_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90181();
function switchText_90181() {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = obj73735_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73735_droppedInsideTargetActions_runningActionsCount = window.obj73735_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73735_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73735_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73735_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73735_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj73735_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73735").trigger("obj73735_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73735) {
				console.warn("de-queueing event obj73735." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73735").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73735_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj73682_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj73682");
//	action: dragDrop
//	target: obj73682 
dragDrop_73685();
function dragDrop_73685() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj73682_onTouchDown_runningActionsCount = obj73682_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj73682');
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
	  	containerNode = $('#obj73936');
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
    	window.obj73682_onTouchDown_runningActionsCount = window.obj73682_onTouchDown_runningActionsCount - 1;
if (window.obj73682_onTouchDown_runningActionsCount < 0) {
	window.obj73682_onTouchDown_runningActionsCount = 0;
} else if (window.obj73682_onTouchDown_runningActionsCount == 0) {
	obj73682_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj73902","#obj73926","#obj73920","#obj73914");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_73685 = false;
    	var dropped_id_73685;
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
					dropped_73685 = true;
					dropped_id_73685 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_73685) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj73682").trigger('SCActionDragDrop73685_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj73682_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73682_onTouchDown_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj73682 
move_92286();
function move_92286() {
	window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount = obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj73682");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount = window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj73682_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73722();
function runjs_73722() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73723();
function runjs_73723() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#C00000"); $("#obj73914").css("border-width", "2px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73912 
hide_73724();
function hide_73724() {
	var selector = "#obj73912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73724(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73682_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73725();
function runjs_73725() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73682").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73726();
function switchText_73726() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73682 
move_73727();
function move_73727() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj73682");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj73682_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73728();
function runjs_73728() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73914").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73729();
function runjs_73729() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73914").css("border-color", "#000000"); $("#obj73914").css("border-width", "1px"); $("#obj73914").css("border-style", "solid"); $("#obj73914").css("border-radius", "10px"); $("#obj73914").css("-webkit-border-radius", "10px"); $("#obj73914").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73912
(function(){
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj73912";
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
					window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73682_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73731();
function runjs_73731() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73682").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73732();
function runjs_73732() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj73682").css("border-color", "rgba(0,0,0,0)"); $("#obj73682").css("border-width", "0px"); $("#obj73682").css("border-style", "solid"); $("#obj73682").css("border-radius", "10px"); $("#obj73682").css("-webkit-border-radius", "10px"); $("#obj73682").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73733();
function playAudio_73733() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj73682_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73734();
function switchText_73734() {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = obj73682_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_4_runningActionsCount = window.obj73682_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj73682_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73708();
function runjs_73708() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73709();
function runjs_73709() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#C00000"); $("#obj73920").css("border-width", "2px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73918 
hide_73710();
function hide_73710() {
	var selector = "#obj73918";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73710(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73682_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73711();
function runjs_73711() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73682").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73712();
function switchText_73712() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73682 
move_73713();
function move_73713() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj73682");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj73682_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73714();
function runjs_73714() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73715();
function runjs_73715() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73920").css("border-color", "#000000"); $("#obj73920").css("border-width", "1px"); $("#obj73920").css("border-style", "solid"); $("#obj73920").css("border-radius", "10px"); $("#obj73920").css("-webkit-border-radius", "10px"); $("#obj73920").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73918
(function(){
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj73918";
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
					window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73682_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73717();
function runjs_73717() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73682").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73718();
function runjs_73718() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj73682").css("border-color", "rgba(0,0,0,0)"); $("#obj73682").css("border-width", "0px"); $("#obj73682").css("border-style", "solid"); $("#obj73682").css("border-radius", "10px"); $("#obj73682").css("-webkit-border-radius", "10px"); $("#obj73682").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73719();
function playAudio_73719() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj73682_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73720();
function switchText_73720() {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = obj73682_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_3_runningActionsCount = window.obj73682_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj73682_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73694();
function runjs_73694() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_73695();
function runjs_73695() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#C00000"); $("#obj73926").css("border-width", "2px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj73924 
hide_73696();
function hide_73696() {
	var selector = "#obj73924";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73696(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73682_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_73697();
function runjs_73697() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73682").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_73698();
function switchText_73698() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj73682 
move_73699();
function move_73699() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj73682");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 320;
	var moveY = 674;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj73682_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_73700();
function runjs_73700() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_73701();
function runjs_73701() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73926").css("border-color", "#000000"); $("#obj73926").css("border-width", "1px"); $("#obj73926").css("border-style", "solid"); $("#obj73926").css("border-radius", "10px"); $("#obj73926").css("-webkit-border-radius", "10px"); $("#obj73926").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj73924
(function(){
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj73924";
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
					window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73682_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_73703();
function runjs_73703() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73682").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_73704();
function runjs_73704() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj73682").css("border-color", "rgba(0,0,0,0)"); $("#obj73682").css("border-width", "0px"); $("#obj73682").css("border-style", "solid"); $("#obj73682").css("border-radius", "10px"); $("#obj73682").css("-webkit-border-radius", "10px"); $("#obj73682").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj73894 
playAudio_73705();
function playAudio_73705() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj73894")[0];
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
		    window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj73682_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_73706();
function switchText_73706() {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = obj73682_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_2_runningActionsCount = window.obj73682_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj73682_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_73687();
function runjs_73687() {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73902").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_73691();
function switchText_73691() {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_73688();
function runjs_73688() {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73902").css("border-color", "#058E3F"); $("#obj73902").css("border-width", "2px"); $("#obj73902").css("border-style", "solid"); $("#obj73902").css("border-radius", "10px"); $("#obj73902").css("-webkit-border-radius", "10px"); $("#obj73902").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj73900 
hide_73689();
function hide_73689() {
	var selector = "#obj73900";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73689(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj73682_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_73690();
function runjs_73690() {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj73682").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj73682_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj73896 
playAudio_73692();
function playAudio_73692() {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj73896")[0];
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
		    window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj73682_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90182();
function switchText_90182() {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = obj73682_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj73910_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj73910_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj73910").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj73910_content");
			setTimeout(function () {
				window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj73910 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj73682_droppedInsideTargetActions_runningActionsCount = window.obj73682_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj73682_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj73682_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj73682_droppedInsideTargetActions_runningActionsCount == 0) {
	obj73682_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj73682_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj73682").trigger("obj73682_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73682) {
				console.warn("de-queueing event obj73682." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73682").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73682_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj73664_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73664_onTap_activeActionGroupIndex = -1;
		$("#obj73664").trigger("obj73664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73664) {
				console.warn("de-queueing event obj73664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73664_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73664 
hide_73667();
function hide_73667() {
	var selector = "#obj73664";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73664_onTap_runningActionsCount = obj73664_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73664_onTap_runningActionsCount = window.obj73664_onTap_runningActionsCount - 1;
if (window.obj73664_onTap_runningActionsCount < 0) {
	window.obj73664_onTap_runningActionsCount = 0;
} else if (window.obj73664_onTap_runningActionsCount == 0) {
	obj73664_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73667(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73664_onTap_runningActionsCount = window.obj73664_onTap_runningActionsCount - 1;
if (window.obj73664_onTap_runningActionsCount < 0) {
	window.obj73664_onTap_runningActionsCount = 0;
} else if (window.obj73664_onTap_runningActionsCount == 0) {
	obj73664_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj73654 
stopMovie_73666();
function stopMovie_73666() {
	window.obj73664_onTap_runningActionsCount = obj73664_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73654")[0];
	myVideo.pause();
	window.obj73664_onTap_runningActionsCount = window.obj73664_onTap_runningActionsCount - 1;
if (window.obj73664_onTap_runningActionsCount < 0) {
	window.obj73664_onTap_runningActionsCount = 0;
} else if (window.obj73664_onTap_runningActionsCount == 0) {
	obj73664_onTap_actionGroup1();
}
}
















};
obj73664_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73664_onTap_activeActionGroupIndex = -1;
		$("#obj73664").trigger("obj73664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73664) {
				console.warn("de-queueing event obj73664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73664_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73656
(function(){
	window.obj73664_onTap_runningActionsCount = obj73664_onTap_runningActionsCount + 1;

	var selector = "#obj73656";
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
					window.obj73664_onTap_runningActionsCount = window.obj73664_onTap_runningActionsCount - 1;
if (window.obj73664_onTap_runningActionsCount < 0) {
	window.obj73664_onTap_runningActionsCount = 0;
} else if (window.obj73664_onTap_runningActionsCount == 0) {
	obj73664_onTap_actionGroup2();
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
				window.obj73664_onTap_runningActionsCount = window.obj73664_onTap_runningActionsCount - 1;
if (window.obj73664_onTap_runningActionsCount < 0) {
	window.obj73664_onTap_runningActionsCount = 0;
} else if (window.obj73664_onTap_runningActionsCount == 0) {
	obj73664_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73664_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73664_onTap_activeActionGroupIndex = -1;
		$("#obj73664").trigger("obj73664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73664) {
				console.warn("de-queueing event obj73664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73664_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73654 
move_73669();
function move_73669() {
	window.obj73664_onTap_runningActionsCount = obj73664_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73654");
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
			window.obj73664_onTap_runningActionsCount = window.obj73664_onTap_runningActionsCount - 1;
if (window.obj73664_onTap_runningActionsCount < 0) {
	window.obj73664_onTap_runningActionsCount = 0;
} else if (window.obj73664_onTap_runningActionsCount == 0) {
	obj73664_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73664_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73664_onTap_activeActionGroupIndex = -1;
		$("#obj73664").trigger("obj73664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73664) {
				console.warn("de-queueing event obj73664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73664_onTap_activeActionGroupIndex = 3;
	





















};
obj73656_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73656_onTap_activeActionGroupIndex = -1;
		$("#obj73656").trigger("obj73656_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73656) {
				console.warn("de-queueing event obj73656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73656_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj73656 
hide_73659();
function hide_73659() {
	var selector = "#obj73656";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj73656_onTap_runningActionsCount = obj73656_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj73656_onTap_runningActionsCount = window.obj73656_onTap_runningActionsCount - 1;
if (window.obj73656_onTap_runningActionsCount < 0) {
	window.obj73656_onTap_runningActionsCount = 0;
} else if (window.obj73656_onTap_runningActionsCount == 0) {
	obj73656_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_73659(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj73656_onTap_runningActionsCount = window.obj73656_onTap_runningActionsCount - 1;
if (window.obj73656_onTap_runningActionsCount < 0) {
	window.obj73656_onTap_runningActionsCount = 0;
} else if (window.obj73656_onTap_runningActionsCount == 0) {
	obj73656_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj73654 
playPauseMovie_73658();
function playPauseMovie_73658() {
	window.obj73656_onTap_runningActionsCount = obj73656_onTap_runningActionsCount + 1;
	var myVideo = $("#obj73654")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj73656_onTap_runningActionsCount = window.obj73656_onTap_runningActionsCount - 1;
if (window.obj73656_onTap_runningActionsCount < 0) {
	window.obj73656_onTap_runningActionsCount = 0;
} else if (window.obj73656_onTap_runningActionsCount == 0) {
	obj73656_onTap_actionGroup1();
}
}

















};
obj73656_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73656_onTap_activeActionGroupIndex = -1;
		$("#obj73656").trigger("obj73656_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73656) {
				console.warn("de-queueing event obj73656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73656_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj73664
(function(){
	window.obj73656_onTap_runningActionsCount = obj73656_onTap_runningActionsCount + 1;

	var selector = "#obj73664";
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
					window.obj73656_onTap_runningActionsCount = window.obj73656_onTap_runningActionsCount - 1;
if (window.obj73656_onTap_runningActionsCount < 0) {
	window.obj73656_onTap_runningActionsCount = 0;
} else if (window.obj73656_onTap_runningActionsCount == 0) {
	obj73656_onTap_actionGroup2();
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
				window.obj73656_onTap_runningActionsCount = window.obj73656_onTap_runningActionsCount - 1;
if (window.obj73656_onTap_runningActionsCount < 0) {
	window.obj73656_onTap_runningActionsCount = 0;
} else if (window.obj73656_onTap_runningActionsCount == 0) {
	obj73656_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj73656_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj73656_onTap_activeActionGroupIndex = -1;
		$("#obj73656").trigger("obj73656_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73656) {
				console.warn("de-queueing event obj73656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73656_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj73654 
move_73661();
function move_73661() {
	window.obj73656_onTap_runningActionsCount = obj73656_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj73654");
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
			window.obj73656_onTap_runningActionsCount = window.obj73656_onTap_runningActionsCount - 1;
if (window.obj73656_onTap_runningActionsCount < 0) {
	window.obj73656_onTap_runningActionsCount = 0;
} else if (window.obj73656_onTap_runningActionsCount == 0) {
	obj73656_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj73656_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj73656_onTap_activeActionGroupIndex = -1;
		$("#obj73656").trigger("obj73656_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 73656) {
				console.warn("de-queueing event obj73656." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj73656").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj73656_onTap_activeActionGroupIndex = 3;
	





















};
obj89912_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89912_onTap_activeActionGroupIndex = -1;
		$("#obj89912").trigger("obj89912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89912) {
				console.warn("de-queueing event obj89912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89912_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89917 
stopAudio_89914();
function stopAudio_89914() {
	window.obj89912_onTap_runningActionsCount = obj89912_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89917")[0];
	myAudio.pause();
	window.obj89912_onTap_runningActionsCount = window.obj89912_onTap_runningActionsCount - 1;
if (window.obj89912_onTap_runningActionsCount < 0) {
	window.obj89912_onTap_runningActionsCount = 0;
} else if (window.obj89912_onTap_runningActionsCount == 0) {
	obj89912_onTap_actionGroup1();
}
}








};
obj89912_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89912_onTap_activeActionGroupIndex = -1;
		$("#obj89912").trigger("obj89912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89912) {
				console.warn("de-queueing event obj89912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89912_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89912 
hide_89915();
function hide_89915() {
	var selector = "#obj89912";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89912_onTap_runningActionsCount = obj89912_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89912_onTap_runningActionsCount = window.obj89912_onTap_runningActionsCount - 1;
if (window.obj89912_onTap_runningActionsCount < 0) {
	window.obj89912_onTap_runningActionsCount = 0;
} else if (window.obj89912_onTap_runningActionsCount == 0) {
	obj89912_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89915(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89912_onTap_runningActionsCount = window.obj89912_onTap_runningActionsCount - 1;
if (window.obj89912_onTap_runningActionsCount < 0) {
	window.obj89912_onTap_runningActionsCount = 0;
} else if (window.obj89912_onTap_runningActionsCount == 0) {
	obj89912_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89912_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89912_onTap_activeActionGroupIndex = -1;
		$("#obj89912").trigger("obj89912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89912) {
				console.warn("de-queueing event obj89912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89912_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89907
(function(){
	window.obj89912_onTap_runningActionsCount = obj89912_onTap_runningActionsCount + 1;

	var selector = "#obj89907";
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
					window.obj89912_onTap_runningActionsCount = window.obj89912_onTap_runningActionsCount - 1;
if (window.obj89912_onTap_runningActionsCount < 0) {
	window.obj89912_onTap_runningActionsCount = 0;
} else if (window.obj89912_onTap_runningActionsCount == 0) {
	obj89912_onTap_actionGroup3();
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
				window.obj89912_onTap_runningActionsCount = window.obj89912_onTap_runningActionsCount - 1;
if (window.obj89912_onTap_runningActionsCount < 0) {
	window.obj89912_onTap_runningActionsCount = 0;
} else if (window.obj89912_onTap_runningActionsCount == 0) {
	obj89912_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89912_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89912_onTap_activeActionGroupIndex = -1;
		$("#obj89912").trigger("obj89912_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89912) {
				console.warn("de-queueing event obj89912." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89912").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89912_onTap_activeActionGroupIndex = 3;
	





















};
obj89907_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89907_onTap_activeActionGroupIndex = -1;
		$("#obj89907").trigger("obj89907_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89907) {
				console.warn("de-queueing event obj89907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89907_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89907 
hide_89909();
function hide_89909() {
	var selector = "#obj89907";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89907_onTap_runningActionsCount = obj89907_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89907_onTap_runningActionsCount = window.obj89907_onTap_runningActionsCount - 1;
if (window.obj89907_onTap_runningActionsCount < 0) {
	window.obj89907_onTap_runningActionsCount = 0;
} else if (window.obj89907_onTap_runningActionsCount == 0) {
	obj89907_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89909(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89907_onTap_runningActionsCount = window.obj89907_onTap_runningActionsCount - 1;
if (window.obj89907_onTap_runningActionsCount < 0) {
	window.obj89907_onTap_runningActionsCount = 0;
} else if (window.obj89907_onTap_runningActionsCount == 0) {
	obj89907_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89907_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89907_onTap_activeActionGroupIndex = -1;
		$("#obj89907").trigger("obj89907_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89907) {
				console.warn("de-queueing event obj89907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89907_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89912
(function(){
	window.obj89907_onTap_runningActionsCount = obj89907_onTap_runningActionsCount + 1;

	var selector = "#obj89912";
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
					window.obj89907_onTap_runningActionsCount = window.obj89907_onTap_runningActionsCount - 1;
if (window.obj89907_onTap_runningActionsCount < 0) {
	window.obj89907_onTap_runningActionsCount = 0;
} else if (window.obj89907_onTap_runningActionsCount == 0) {
	obj89907_onTap_actionGroup2();
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
				window.obj89907_onTap_runningActionsCount = window.obj89907_onTap_runningActionsCount - 1;
if (window.obj89907_onTap_runningActionsCount < 0) {
	window.obj89907_onTap_runningActionsCount = 0;
} else if (window.obj89907_onTap_runningActionsCount == 0) {
	obj89907_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89907_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89907_onTap_activeActionGroupIndex = -1;
		$("#obj89907").trigger("obj89907_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89907) {
				console.warn("de-queueing event obj89907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89907_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89917 
playAudio_89911();
function playAudio_89911() {
	window.obj89907_onTap_runningActionsCount = obj89907_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89917")[0];
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
		    window.obj89907_onTap_runningActionsCount = window.obj89907_onTap_runningActionsCount - 1;
if (window.obj89907_onTap_runningActionsCount < 0) {
	window.obj89907_onTap_runningActionsCount = 0;
} else if (window.obj89907_onTap_runningActionsCount == 0) {
	obj89907_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89907_onTap_runningActionsCount = window.obj89907_onTap_runningActionsCount - 1;
if (window.obj89907_onTap_runningActionsCount < 0) {
	window.obj89907_onTap_runningActionsCount = 0;
} else if (window.obj89907_onTap_runningActionsCount == 0) {
	obj89907_onTap_actionGroup3();
}
	}
}









};
obj89907_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89907_onTap_activeActionGroupIndex = -1;
		$("#obj89907").trigger("obj89907_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89907) {
				console.warn("de-queueing event obj89907." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89907").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89907_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj73951: Event Touch Down
 *
 */
$("#obj73951").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73951_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73951_onTap is still running");
	return;
}
var obj73951_onTap_runningActionsCount = 0;
var obj73951_onTap_loopCount = 0;
obj73951_onTap_actionGroup0();
});










/*
 *
 *   obj73948: Event Touch Down
 *
 */
$("#obj73948").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73948_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73948_onTap is still running");
	return;
}
var obj73948_onTap_runningActionsCount = 0;
var obj73948_onTap_loopCount = 0;
obj73948_onTap_actionGroup0();
});










/*
 *
 *   obj73944: Event Touch Down
 *
 */
$("#obj73944").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73944_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73944_onTap is still running");
	return;
}
var obj73944_onTap_runningActionsCount = 0;
var obj73944_onTap_loopCount = 0;
obj73944_onTap_actionGroup0();
});





































































































































































































































































/*
 *
 *   obj73841: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj73841");
	var winTarget = document.getElementById("obj73841");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj73841").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj73841_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj73841_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj73841_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73841_onTouchDown is still running");
	return;
}
var obj73841_onTouchDown_runningActionsCount = 0;
var obj73841_onTouchDown_loopCount = 0;
obj73841_onTouchDown_actionGroup0();
});



/*
 *
 *   obj73841: Event SCActionDragDrop73844_droppedOutsideTargetActions
 *
 */
$("#obj73841").bind("SCActionDragDrop73844_droppedOutsideTargetActions", function(event) {
	if (window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73841_SCActionDragDrop73844_droppedOutsideTargetActions is still running");
	return;
}
var obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_loopCount = 0;
obj73841_SCActionDragDrop73844_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj73841: Event droppedInsideTargetActions_4
 *
 */
$("#obj73841").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj73841_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73841_droppedInsideTargetActions_4 is still running");
	return;
}
var obj73841_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_4_loopCount = 0;
obj73841_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj73841: Event droppedInsideTargetActions_3
 *
 */
$("#obj73841").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj73841_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73841_droppedInsideTargetActions_3 is still running");
	return;
}
var obj73841_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_3_loopCount = 0;
obj73841_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj73841: Event droppedInsideTargetActions_2
 *
 */
$("#obj73841").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj73841_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73841_droppedInsideTargetActions_2 is still running");
	return;
}
var obj73841_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_2_loopCount = 0;
obj73841_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj73841: Event droppedInsideTargetActions
 *
 */
$("#obj73841").bind("droppedInsideTargetActions", function(event) {
	if (window.obj73841_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73841_droppedInsideTargetActions is still running");
	return;
}
var obj73841_droppedInsideTargetActions_runningActionsCount = 0;
var obj73841_droppedInsideTargetActions_loopCount = 0;
obj73841_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj73788: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj73788");
	var winTarget = document.getElementById("obj73788");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj73788").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj73788_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj73788_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj73788_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73788_onTouchDown is still running");
	return;
}
var obj73788_onTouchDown_runningActionsCount = 0;
var obj73788_onTouchDown_loopCount = 0;
obj73788_onTouchDown_actionGroup0();
});



/*
 *
 *   obj73788: Event SCActionDragDrop73791_droppedOutsideTargetActions
 *
 */
$("#obj73788").bind("SCActionDragDrop73791_droppedOutsideTargetActions", function(event) {
	if (window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73788_SCActionDragDrop73791_droppedOutsideTargetActions is still running");
	return;
}
var obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_loopCount = 0;
obj73788_SCActionDragDrop73791_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj73788: Event droppedInsideTargetActions_4
 *
 */
$("#obj73788").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj73788_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73788_droppedInsideTargetActions_4 is still running");
	return;
}
var obj73788_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_4_loopCount = 0;
obj73788_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj73788: Event droppedInsideTargetActions_3
 *
 */
$("#obj73788").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj73788_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73788_droppedInsideTargetActions_3 is still running");
	return;
}
var obj73788_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_3_loopCount = 0;
obj73788_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj73788: Event droppedInsideTargetActions_2
 *
 */
$("#obj73788").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj73788_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73788_droppedInsideTargetActions_2 is still running");
	return;
}
var obj73788_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_2_loopCount = 0;
obj73788_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj73788: Event droppedInsideTargetActions
 *
 */
$("#obj73788").bind("droppedInsideTargetActions", function(event) {
	if (window.obj73788_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73788_droppedInsideTargetActions is still running");
	return;
}
var obj73788_droppedInsideTargetActions_runningActionsCount = 0;
var obj73788_droppedInsideTargetActions_loopCount = 0;
obj73788_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj73735: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj73735");
	var winTarget = document.getElementById("obj73735");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj73735").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj73735_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj73735_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj73735_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73735_onTouchDown is still running");
	return;
}
var obj73735_onTouchDown_runningActionsCount = 0;
var obj73735_onTouchDown_loopCount = 0;
obj73735_onTouchDown_actionGroup0();
});



/*
 *
 *   obj73735: Event SCActionDragDrop73738_droppedOutsideTargetActions
 *
 */
$("#obj73735").bind("SCActionDragDrop73738_droppedOutsideTargetActions", function(event) {
	if (window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73735_SCActionDragDrop73738_droppedOutsideTargetActions is still running");
	return;
}
var obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_loopCount = 0;
obj73735_SCActionDragDrop73738_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj73735: Event droppedInsideTargetActions_4
 *
 */
$("#obj73735").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj73735_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73735_droppedInsideTargetActions_4 is still running");
	return;
}
var obj73735_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_4_loopCount = 0;
obj73735_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj73735: Event droppedInsideTargetActions_3
 *
 */
$("#obj73735").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj73735_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73735_droppedInsideTargetActions_3 is still running");
	return;
}
var obj73735_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_3_loopCount = 0;
obj73735_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj73735: Event droppedInsideTargetActions_2
 *
 */
$("#obj73735").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj73735_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73735_droppedInsideTargetActions_2 is still running");
	return;
}
var obj73735_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_2_loopCount = 0;
obj73735_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj73735: Event droppedInsideTargetActions
 *
 */
$("#obj73735").bind("droppedInsideTargetActions", function(event) {
	if (window.obj73735_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73735_droppedInsideTargetActions is still running");
	return;
}
var obj73735_droppedInsideTargetActions_runningActionsCount = 0;
var obj73735_droppedInsideTargetActions_loopCount = 0;
obj73735_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj73682: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj73682");
	var winTarget = document.getElementById("obj73682");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj73682").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj73682_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj73682_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj73682_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73682_onTouchDown is still running");
	return;
}
var obj73682_onTouchDown_runningActionsCount = 0;
var obj73682_onTouchDown_loopCount = 0;
obj73682_onTouchDown_actionGroup0();
});



/*
 *
 *   obj73682: Event SCActionDragDrop73685_droppedOutsideTargetActions
 *
 */
$("#obj73682").bind("SCActionDragDrop73685_droppedOutsideTargetActions", function(event) {
	if (window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73682_SCActionDragDrop73685_droppedOutsideTargetActions is still running");
	return;
}
var obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_runningActionsCount = 0;
var obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_loopCount = 0;
obj73682_SCActionDragDrop73685_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj73682: Event droppedInsideTargetActions_4
 *
 */
$("#obj73682").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj73682_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73682_droppedInsideTargetActions_4 is still running");
	return;
}
var obj73682_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_4_loopCount = 0;
obj73682_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj73682: Event droppedInsideTargetActions_3
 *
 */
$("#obj73682").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj73682_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73682_droppedInsideTargetActions_3 is still running");
	return;
}
var obj73682_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_3_loopCount = 0;
obj73682_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj73682: Event droppedInsideTargetActions_2
 *
 */
$("#obj73682").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj73682_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73682_droppedInsideTargetActions_2 is still running");
	return;
}
var obj73682_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_2_loopCount = 0;
obj73682_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj73682: Event droppedInsideTargetActions
 *
 */
$("#obj73682").bind("droppedInsideTargetActions", function(event) {
	if (window.obj73682_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73682_droppedInsideTargetActions is still running");
	return;
}
var obj73682_droppedInsideTargetActions_runningActionsCount = 0;
var obj73682_droppedInsideTargetActions_loopCount = 0;
obj73682_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj73664: Event Touch Down
 *
 */
$("#obj73664").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73664_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73664_onTap is still running");
	return;
}
var obj73664_onTap_runningActionsCount = 0;
var obj73664_onTap_loopCount = 0;
obj73664_onTap_actionGroup0();
});










/*
 *
 *   obj73656: Event Touch Down
 *
 */
$("#obj73656").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj73656_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj73656_onTap is still running");
	return;
}
var obj73656_onTap_runningActionsCount = 0;
var obj73656_onTap_loopCount = 0;
obj73656_onTap_actionGroup0();
});










/*
 *
 *   obj89912: Event Touch Down
 *
 */
$("#obj89912").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89912_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89912_onTap is still running");
	return;
}
var obj89912_onTap_runningActionsCount = 0;
var obj89912_onTap_loopCount = 0;
obj89912_onTap_actionGroup0();
});










/*
 *
 *   obj89907: Event Touch Down
 *
 */
$("#obj89907").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89907_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89907_onTap is still running");
	return;
}
var obj89907_onTap_runningActionsCount = 0;
var obj89907_onTap_loopCount = 0;
obj89907_onTap_actionGroup0();
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
	
$("#obj73954").trigger('SCEventShow');
$("#obj73951").trigger('SCEventShow');
$("#obj73948").trigger('SCEventShow');
$("#obj73944").trigger('SCEventShow');
$("#obj73942").trigger('SCEventShow');
$("#obj73940").trigger('SCEventShow');
$("#obj73938").trigger('SCEventShow');
$("#obj73936").trigger('SCEventShow');
$("#obj73934").trigger('SCEventShow');
$("#obj73932").trigger('SCEventShow');
$("#obj73930").trigger('SCEventShow');
$("#obj73928").trigger('SCEventShow');
$("#obj73926").trigger('SCEventShow');
$("#obj73924").trigger('SCEventShow');
$("#obj73922").trigger('SCEventShow');
$("#obj73920").trigger('SCEventShow');
$("#obj73918").trigger('SCEventShow');
$("#obj73916").trigger('SCEventShow');
$("#obj73914").trigger('SCEventShow');
$("#obj73912").trigger('SCEventShow');
$("#obj73910").trigger('SCEventShow');
$("#obj73908").trigger('SCEventShow');
$("#obj73906").trigger('SCEventShow');
$("#obj73904").trigger('SCEventShow');
$("#obj73902").trigger('SCEventShow');
$("#obj73900").trigger('SCEventShow');
$("#obj73898").trigger('SCEventShow');
$("#obj73896").trigger('SCEventShow');
$("#obj73894").trigger('SCEventShow');
$("#obj73841").trigger('SCEventShow');
$("#obj73788").trigger('SCEventShow');
$("#obj73735").trigger('SCEventShow');
$("#obj73682").trigger('SCEventShow');
$("#obj73664").trigger('SCEventShow');
$("#obj73656").trigger('SCEventShow');
$("#obj89912").trigger('SCEventShow');
$("#obj89907").trigger('SCEventShow');
$("#obj89917").trigger('SCEventShow');
$("#obj94743").trigger('SCEventShow');
$("#obj73654").trigger('SCEventShow');
	
});