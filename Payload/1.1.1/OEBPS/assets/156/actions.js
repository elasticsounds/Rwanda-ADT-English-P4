pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 45712;
pubcoder.page.title = pubcoder.page.title || "156";
pubcoder.page.number = pubcoder.page.number || 156;
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
var obj45970_onTap_activeActionGroupIndex = -1;
var obj45970_onTap_runningActionsCount = 0;
var obj45970_onTap_loopCount = 0;
var obj45967_onTap_activeActionGroupIndex = -1;
var obj45967_onTap_runningActionsCount = 0;
var obj45967_onTap_loopCount = 0;
var obj45963_onTap_activeActionGroupIndex = -1;
var obj45963_onTap_runningActionsCount = 0;
var obj45963_onTap_loopCount = 0;
var obj45872_onDrag_activeActionGroupIndex = -1;
var obj45872_onDrag_runningActionsCount = 0;
var obj45872_onDrag_loopCount = 0;
var obj45872_onTouchDown_activeActionGroupIndex = -1;
var obj45872_onTouchDown_runningActionsCount = 0;
var obj45872_onTouchDown_loopCount = 0;
var obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_loopCount = 0;
var obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_4_loopCount = 0;
var obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_3_loopCount = 0;
var obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_2_loopCount = 0;
var obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45872_droppedInsideTargetActions_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_loopCount = 0;
var obj45819_onDrag_activeActionGroupIndex = -1;
var obj45819_onDrag_runningActionsCount = 0;
var obj45819_onDrag_loopCount = 0;
var obj45819_onTouchDown_activeActionGroupIndex = -1;
var obj45819_onTouchDown_runningActionsCount = 0;
var obj45819_onTouchDown_loopCount = 0;
var obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_loopCount = 0;
var obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_4_loopCount = 0;
var obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_3_loopCount = 0;
var obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_2_loopCount = 0;
var obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45819_droppedInsideTargetActions_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_loopCount = 0;
var obj45766_onDrag_activeActionGroupIndex = -1;
var obj45766_onDrag_runningActionsCount = 0;
var obj45766_onDrag_loopCount = 0;
var obj45766_onTouchDown_activeActionGroupIndex = -1;
var obj45766_onTouchDown_runningActionsCount = 0;
var obj45766_onTouchDown_loopCount = 0;
var obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_loopCount = 0;
var obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_4_loopCount = 0;
var obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_3_loopCount = 0;
var obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_2_loopCount = 0;
var obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45766_droppedInsideTargetActions_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_loopCount = 0;
var obj45713_onDrag_activeActionGroupIndex = -1;
var obj45713_onDrag_runningActionsCount = 0;
var obj45713_onDrag_loopCount = 0;
var obj45713_onTouchDown_activeActionGroupIndex = -1;
var obj45713_onTouchDown_runningActionsCount = 0;
var obj45713_onTouchDown_loopCount = 0;
var obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_loopCount = 0;
var obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_4_loopCount = 0;
var obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_3_loopCount = 0;
var obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_2_loopCount = 0;
var obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj45713_droppedInsideTargetActions_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_loopCount = 0;
var obj67502_onTap_activeActionGroupIndex = -1;
var obj67502_onTap_runningActionsCount = 0;
var obj67502_onTap_loopCount = 0;
var obj67494_onTap_activeActionGroupIndex = -1;
var obj67494_onTap_runningActionsCount = 0;
var obj67494_onTap_loopCount = 0;
var obj88753_onTap_activeActionGroupIndex = -1;
var obj88753_onTap_runningActionsCount = 0;
var obj88753_onTap_loopCount = 0;
var obj88748_onTap_activeActionGroupIndex = -1;
var obj88748_onTap_runningActionsCount = 0;
var obj88748_onTap_loopCount = 0;
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
		
obj45970_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45970_onTap_activeActionGroupIndex = -1;
		$("#obj45970").trigger("obj45970_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45970) {
				console.warn("de-queueing event obj45970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45970_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45972();
function goToPage_45972() {
	window.obj45970_onTap_runningActionsCount = obj45970_onTap_runningActionsCount + 1;
	$("#anchor924")[0].click();
	window.obj45970_onTap_runningActionsCount = window.obj45970_onTap_runningActionsCount - 1;
if (window.obj45970_onTap_runningActionsCount < 0) {
	window.obj45970_onTap_runningActionsCount = 0;
} else if (window.obj45970_onTap_runningActionsCount == 0) {
	obj45970_onTap_actionGroup1();
}
}





















};
obj45970_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45970_onTap_activeActionGroupIndex = -1;
		$("#obj45970").trigger("obj45970_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45970) {
				console.warn("de-queueing event obj45970." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45970").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45970_onTap_activeActionGroupIndex = 1;
	





















};
obj45967_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45967_onTap_activeActionGroupIndex = -1;
		$("#obj45967").trigger("obj45967_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45967) {
				console.warn("de-queueing event obj45967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45967_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45969();
function goToPage_45969() {
	window.obj45967_onTap_runningActionsCount = obj45967_onTap_runningActionsCount + 1;
	$("#anchor925")[0].click();
	window.obj45967_onTap_runningActionsCount = window.obj45967_onTap_runningActionsCount - 1;
if (window.obj45967_onTap_runningActionsCount < 0) {
	window.obj45967_onTap_runningActionsCount = 0;
} else if (window.obj45967_onTap_runningActionsCount == 0) {
	obj45967_onTap_actionGroup1();
}
}





















};
obj45967_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45967_onTap_activeActionGroupIndex = -1;
		$("#obj45967").trigger("obj45967_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45967) {
				console.warn("de-queueing event obj45967." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45967").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45967_onTap_activeActionGroupIndex = 1;
	





















};
obj45963_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45963_onTap_activeActionGroupIndex = -1;
		$("#obj45963").trigger("obj45963_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45963) {
				console.warn("de-queueing event obj45963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45963_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_45965();
function goToPage_45965() {
	window.obj45963_onTap_runningActionsCount = obj45963_onTap_runningActionsCount + 1;
	$("#anchor926")[0].click();
	window.obj45963_onTap_runningActionsCount = window.obj45963_onTap_runningActionsCount - 1;
if (window.obj45963_onTap_runningActionsCount < 0) {
	window.obj45963_onTap_runningActionsCount = 0;
} else if (window.obj45963_onTap_runningActionsCount == 0) {
	obj45963_onTap_actionGroup1();
}
}





















};
obj45963_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45963_onTap_activeActionGroupIndex = -1;
		$("#obj45963").trigger("obj45963_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45963) {
				console.warn("de-queueing event obj45963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45963_onTap_activeActionGroupIndex = 1;
	





















};
obj45872_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45872");
//	action: dragDrop
//	target: obj45872 
dragDrop_45875();
function dragDrop_45875() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45872_onTouchDown_runningActionsCount = obj45872_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45872');
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
	  	containerNode = $('#obj45953');
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
    	window.obj45872_onTouchDown_runningActionsCount = window.obj45872_onTouchDown_runningActionsCount - 1;
if (window.obj45872_onTouchDown_runningActionsCount < 0) {
	window.obj45872_onTouchDown_runningActionsCount = 0;
} else if (window.obj45872_onTouchDown_runningActionsCount == 0) {
	obj45872_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45939","#obj45943","#obj45941","#obj45927");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45875 = false;
    	var dropped_id_45875;
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
					dropped_45875 = true;
					dropped_id_45875 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45875) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45872").trigger('SCActionDragDrop45875_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45872_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45872_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45872 
move_92685();
function move_92685() {
	window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount = obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45872");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount = window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45872_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45912();
function runjs_45912() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45913();
function runjs_45913() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#C00000"); $("#obj45927").css("border-width", "2px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45925 
hide_45914();
function hide_45914() {
	var selector = "#obj45925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45914(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45872_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45915();
function runjs_45915() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45872").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45916();
function switchText_45916() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45872 
move_45917();
function move_45917() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45872");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45872_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45918();
function runjs_45918() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45919();
function runjs_45919() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#000000"); $("#obj45927").css("border-width", "1px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45925
(function(){
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45925";
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
					window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45872_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45921();
function runjs_45921() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45872").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45922();
function runjs_45922() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45872").css("border-color", "rgba(0,0,0,0)"); $("#obj45872").css("border-width", "0px"); $("#obj45872").css("border-style", "solid"); $("#obj45872").css("border-radius", "10px"); $("#obj45872").css("-webkit-border-radius", "10px"); $("#obj45872").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45923();
function playAudio_45923() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45872_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45924();
function switchText_45924() {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = obj45872_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_4_runningActionsCount = window.obj45872_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45872_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45898();
function runjs_45898() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45899();
function runjs_45899() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#C00000"); $("#obj45941").css("border-width", "2px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45935 
hide_45900();
function hide_45900() {
	var selector = "#obj45935";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45900(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45872_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45901();
function runjs_45901() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45872").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45902();
function switchText_45902() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45872 
move_45903();
function move_45903() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45872");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45872_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45904();
function runjs_45904() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45905();
function runjs_45905() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#000000"); $("#obj45941").css("border-width", "1px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45935
(function(){
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45935";
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
					window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45872_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45907();
function runjs_45907() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45872").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45908();
function runjs_45908() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45872").css("border-color", "rgba(0,0,0,0)"); $("#obj45872").css("border-width", "0px"); $("#obj45872").css("border-style", "solid"); $("#obj45872").css("border-radius", "10px"); $("#obj45872").css("-webkit-border-radius", "10px"); $("#obj45872").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45909();
function playAudio_45909() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45872_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45910();
function switchText_45910() {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = obj45872_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_3_runningActionsCount = window.obj45872_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45872_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45884();
function runjs_45884() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45885();
function runjs_45885() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#C00000"); $("#obj45943").css("border-width", "2px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45937 
hide_45886();
function hide_45886() {
	var selector = "#obj45937";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45886(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45872_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45887();
function runjs_45887() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45872").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45888();
function switchText_45888() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45872 
move_45889();
function move_45889() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45872");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45872_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45890();
function runjs_45890() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45891();
function runjs_45891() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#000000"); $("#obj45943").css("border-width", "1px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45937
(function(){
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45937";
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
					window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45872_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45893();
function runjs_45893() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45872").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45894();
function runjs_45894() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45872").css("border-color", "rgba(0,0,0,0)"); $("#obj45872").css("border-width", "0px"); $("#obj45872").css("border-style", "solid"); $("#obj45872").css("border-radius", "10px"); $("#obj45872").css("-webkit-border-radius", "10px"); $("#obj45872").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45895();
function playAudio_45895() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45872_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45896();
function switchText_45896() {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = obj45872_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_2_runningActionsCount = window.obj45872_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45872_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45877();
function runjs_45877() {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45881();
function switchText_45881() {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45878();
function runjs_45878() {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#058E3F"); $("#obj45939").css("border-width", "2px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45933 
hide_45879();
function hide_45879() {
	var selector = "#obj45933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45879(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45872_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45880();
function runjs_45880() {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45872").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45872_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45988 
playAudio_45882();
function playAudio_45882() {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45988")[0];
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
		    window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45872_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90578();
function switchText_90578() {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = obj45872_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45872_droppedInsideTargetActions_runningActionsCount = window.obj45872_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45872_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45872_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45872_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45872_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45872_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45872").trigger("obj45872_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45872) {
				console.warn("de-queueing event obj45872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45872_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj45819_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45819");
//	action: dragDrop
//	target: obj45819 
dragDrop_45822();
function dragDrop_45822() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45819_onTouchDown_runningActionsCount = obj45819_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45819');
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
	  	containerNode = $('#obj45953');
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
    	window.obj45819_onTouchDown_runningActionsCount = window.obj45819_onTouchDown_runningActionsCount - 1;
if (window.obj45819_onTouchDown_runningActionsCount < 0) {
	window.obj45819_onTouchDown_runningActionsCount = 0;
} else if (window.obj45819_onTouchDown_runningActionsCount == 0) {
	obj45819_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45941","#obj45943","#obj45939","#obj45927");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45822 = false;
    	var dropped_id_45822;
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
					dropped_45822 = true;
					dropped_id_45822 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45822) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45819").trigger('SCActionDragDrop45822_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45819_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45819_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45819 
move_92687();
function move_92687() {
	window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount = obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45819");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount = window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45819_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45859();
function runjs_45859() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45860();
function runjs_45860() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#C00000"); $("#obj45927").css("border-width", "2px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45925 
hide_45861();
function hide_45861() {
	var selector = "#obj45925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45861(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45819_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45862();
function runjs_45862() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45819").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45863();
function switchText_45863() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45819 
move_45864();
function move_45864() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45819");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45819_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45865();
function runjs_45865() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45866();
function runjs_45866() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#000000"); $("#obj45927").css("border-width", "1px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45925
(function(){
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45925";
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
					window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45819_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45868();
function runjs_45868() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45819").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45869();
function runjs_45869() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45819").css("border-color", "rgba(0,0,0,0)"); $("#obj45819").css("border-width", "0px"); $("#obj45819").css("border-style", "solid"); $("#obj45819").css("border-radius", "10px"); $("#obj45819").css("-webkit-border-radius", "10px"); $("#obj45819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45870();
function playAudio_45870() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45819_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45871();
function switchText_45871() {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = obj45819_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_4_runningActionsCount = window.obj45819_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45819_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45845();
function runjs_45845() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45846();
function runjs_45846() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#C00000"); $("#obj45939").css("border-width", "2px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45933 
hide_45847();
function hide_45847() {
	var selector = "#obj45933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45847(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45819_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45848();
function runjs_45848() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45819").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45849();
function switchText_45849() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45819 
move_45850();
function move_45850() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45819");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45819_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45851();
function runjs_45851() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45852();
function runjs_45852() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#000000"); $("#obj45939").css("border-width", "1px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45933
(function(){
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45933";
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
					window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45819_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45854();
function runjs_45854() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45819").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45855();
function runjs_45855() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45819").css("border-color", "rgba(0,0,0,0)"); $("#obj45819").css("border-width", "0px"); $("#obj45819").css("border-style", "solid"); $("#obj45819").css("border-radius", "10px"); $("#obj45819").css("-webkit-border-radius", "10px"); $("#obj45819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45856();
function playAudio_45856() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45819_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45857();
function switchText_45857() {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = obj45819_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_3_runningActionsCount = window.obj45819_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45819_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45831();
function runjs_45831() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45832();
function runjs_45832() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#C00000"); $("#obj45943").css("border-width", "2px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45937 
hide_45833();
function hide_45833() {
	var selector = "#obj45937";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45833(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45819_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45834();
function runjs_45834() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45819").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45835();
function switchText_45835() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45819 
move_45836();
function move_45836() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45819");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45819_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45837();
function runjs_45837() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45838();
function runjs_45838() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#000000"); $("#obj45943").css("border-width", "1px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45937
(function(){
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45937";
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
					window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45819_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45840();
function runjs_45840() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45819").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45841();
function runjs_45841() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45819").css("border-color", "rgba(0,0,0,0)"); $("#obj45819").css("border-width", "0px"); $("#obj45819").css("border-style", "solid"); $("#obj45819").css("border-radius", "10px"); $("#obj45819").css("-webkit-border-radius", "10px"); $("#obj45819").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45842();
function playAudio_45842() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45819_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45843();
function switchText_45843() {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = obj45819_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_2_runningActionsCount = window.obj45819_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45819_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45824();
function runjs_45824() {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45828();
function switchText_45828() {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45825();
function runjs_45825() {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#058E3F"); $("#obj45941").css("border-width", "2px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45935 
hide_45826();
function hide_45826() {
	var selector = "#obj45935";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45826(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45819_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45827();
function runjs_45827() {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45819").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45819_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45988 
playAudio_45829();
function playAudio_45829() {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45988")[0];
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
		    window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45819_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90577();
function switchText_90577() {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = obj45819_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45819_droppedInsideTargetActions_runningActionsCount = window.obj45819_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45819_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45819_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45819_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45819_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45819_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45819").trigger("obj45819_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45819) {
				console.warn("de-queueing event obj45819." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45819").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45819_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj45766_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45766");
//	action: dragDrop
//	target: obj45766 
dragDrop_45769();
function dragDrop_45769() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45766_onTouchDown_runningActionsCount = obj45766_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45766');
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
	  	containerNode = $('#obj45953');
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
    	window.obj45766_onTouchDown_runningActionsCount = window.obj45766_onTouchDown_runningActionsCount - 1;
if (window.obj45766_onTouchDown_runningActionsCount < 0) {
	window.obj45766_onTouchDown_runningActionsCount = 0;
} else if (window.obj45766_onTouchDown_runningActionsCount == 0) {
	obj45766_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45927","#obj45943","#obj45939","#obj45941");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45769 = false;
    	var dropped_id_45769;
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
					dropped_45769 = true;
					dropped_id_45769 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45769) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45766").trigger('SCActionDragDrop45769_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45766_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45766_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45766 
move_92683();
function move_92683() {
	window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount = obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount = window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45766_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45806();
function runjs_45806() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45807();
function runjs_45807() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#C00000"); $("#obj45941").css("border-width", "2px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45935 
hide_45808();
function hide_45808() {
	var selector = "#obj45935";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45808(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45766_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45809();
function runjs_45809() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45810();
function switchText_45810() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45766 
move_45811();
function move_45811() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45766_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45812();
function runjs_45812() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45813();
function runjs_45813() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#000000"); $("#obj45941").css("border-width", "1px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45935
(function(){
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45935";
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
					window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45766_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45815();
function runjs_45815() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45766").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45816();
function runjs_45816() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45766").css("border-color", "rgba(0,0,0,0)"); $("#obj45766").css("border-width", "0px"); $("#obj45766").css("border-style", "solid"); $("#obj45766").css("border-radius", "10px"); $("#obj45766").css("-webkit-border-radius", "10px"); $("#obj45766").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45817();
function playAudio_45817() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45766_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45818();
function switchText_45818() {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = obj45766_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_4_runningActionsCount = window.obj45766_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45766_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45792();
function runjs_45792() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45793();
function runjs_45793() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#C00000"); $("#obj45939").css("border-width", "2px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45933 
hide_45794();
function hide_45794() {
	var selector = "#obj45933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45794(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45766_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45795();
function runjs_45795() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45796();
function switchText_45796() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45766 
move_45797();
function move_45797() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45766_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45798();
function runjs_45798() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45799();
function runjs_45799() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#000000"); $("#obj45939").css("border-width", "1px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45933
(function(){
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45933";
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
					window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45766_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45801();
function runjs_45801() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45766").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45802();
function runjs_45802() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45766").css("border-color", "rgba(0,0,0,0)"); $("#obj45766").css("border-width", "0px"); $("#obj45766").css("border-style", "solid"); $("#obj45766").css("border-radius", "10px"); $("#obj45766").css("-webkit-border-radius", "10px"); $("#obj45766").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45803();
function playAudio_45803() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45766_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45804();
function switchText_45804() {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = obj45766_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_3_runningActionsCount = window.obj45766_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45766_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45778();
function runjs_45778() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45779();
function runjs_45779() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#C00000"); $("#obj45943").css("border-width", "2px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45937 
hide_45780();
function hide_45780() {
	var selector = "#obj45937";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45780(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45766_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45781();
function runjs_45781() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45782();
function switchText_45782() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45766 
move_45783();
function move_45783() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45766");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 80;
	var moveY = 557;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45766_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45784();
function runjs_45784() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45785();
function runjs_45785() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#000000"); $("#obj45943").css("border-width", "1px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45937
(function(){
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45937";
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
					window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45766_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45787();
function runjs_45787() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45766").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45788();
function runjs_45788() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45766").css("border-color", "rgba(0,0,0,0)"); $("#obj45766").css("border-width", "0px"); $("#obj45766").css("border-style", "solid"); $("#obj45766").css("border-radius", "10px"); $("#obj45766").css("-webkit-border-radius", "10px"); $("#obj45766").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45789();
function playAudio_45789() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45766_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45790();
function switchText_45790() {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = obj45766_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_2_runningActionsCount = window.obj45766_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45766_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45771();
function runjs_45771() {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45775();
function switchText_45775() {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45772();
function runjs_45772() {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#058E3F"); $("#obj45927").css("border-width", "2px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45925 
hide_45773();
function hide_45773() {
	var selector = "#obj45925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45773(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45766_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45774();
function runjs_45774() {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45766").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45766_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45988 
playAudio_45776();
function playAudio_45776() {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45988")[0];
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
		    window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45766_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90576();
function switchText_90576() {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = obj45766_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45766_droppedInsideTargetActions_runningActionsCount = window.obj45766_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45766_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45766_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45766_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45766_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45766_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45766").trigger("obj45766_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45766) {
				console.warn("de-queueing event obj45766." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45766").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45766_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj45713_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj45713");
//	action: dragDrop
//	target: obj45713 
dragDrop_45716();
function dragDrop_45716() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj45713_onTouchDown_runningActionsCount = obj45713_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj45713');
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
	  	containerNode = $('#obj45953');
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
    	window.obj45713_onTouchDown_runningActionsCount = window.obj45713_onTouchDown_runningActionsCount - 1;
if (window.obj45713_onTouchDown_runningActionsCount < 0) {
	window.obj45713_onTouchDown_runningActionsCount = 0;
} else if (window.obj45713_onTouchDown_runningActionsCount == 0) {
	obj45713_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj45943","#obj45941","#obj45939","#obj45927");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_45716 = false;
    	var dropped_id_45716;
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
					dropped_45716 = true;
					dropped_id_45716 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_45716) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj45713").trigger('SCActionDragDrop45716_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj45713_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45713_onTouchDown_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj45713 
move_92689();
function move_92689() {
	window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount = obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj45713");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount = window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj45713_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45753();
function runjs_45753() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45754();
function runjs_45754() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#C00000"); $("#obj45927").css("border-width", "2px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45925 
hide_45755();
function hide_45755() {
	var selector = "#obj45925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45755(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45713_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45756();
function runjs_45756() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45713").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45757();
function switchText_45757() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45713 
move_45758();
function move_45758() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj45713");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj45713_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45759();
function runjs_45759() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45760();
function runjs_45760() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45927").css("border-color", "#000000"); $("#obj45927").css("border-width", "1px"); $("#obj45927").css("border-style", "solid"); $("#obj45927").css("border-radius", "10px"); $("#obj45927").css("-webkit-border-radius", "10px"); $("#obj45927").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45925
(function(){
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj45925";
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
					window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45713_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45762();
function runjs_45762() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45713").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45763();
function runjs_45763() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj45713").css("border-color", "rgba(0,0,0,0)"); $("#obj45713").css("border-width", "0px"); $("#obj45713").css("border-style", "solid"); $("#obj45713").css("border-radius", "10px"); $("#obj45713").css("-webkit-border-radius", "10px"); $("#obj45713").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45764();
function playAudio_45764() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj45713_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45765();
function switchText_45765() {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = obj45713_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_4_runningActionsCount = window.obj45713_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj45713_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45739();
function runjs_45739() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45740();
function runjs_45740() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#C00000"); $("#obj45939").css("border-width", "2px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45933 
hide_45741();
function hide_45741() {
	var selector = "#obj45933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45741(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45713_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45742();
function runjs_45742() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45713").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45743();
function switchText_45743() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45713 
move_45744();
function move_45744() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj45713");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj45713_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45745();
function runjs_45745() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45746();
function runjs_45746() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45939").css("border-color", "#000000"); $("#obj45939").css("border-width", "1px"); $("#obj45939").css("border-style", "solid"); $("#obj45939").css("border-radius", "10px"); $("#obj45939").css("-webkit-border-radius", "10px"); $("#obj45939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45933
(function(){
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj45933";
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
					window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45713_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45748();
function runjs_45748() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45713").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45749();
function runjs_45749() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj45713").css("border-color", "rgba(0,0,0,0)"); $("#obj45713").css("border-width", "0px"); $("#obj45713").css("border-style", "solid"); $("#obj45713").css("border-radius", "10px"); $("#obj45713").css("-webkit-border-radius", "10px"); $("#obj45713").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45750();
function playAudio_45750() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj45713_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45751();
function switchText_45751() {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = obj45713_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_3_runningActionsCount = window.obj45713_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj45713_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45725();
function runjs_45725() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_45726();
function runjs_45726() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#C00000"); $("#obj45941").css("border-width", "2px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj45935 
hide_45727();
function hide_45727() {
	var selector = "#obj45935";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45727(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45713_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_45728();
function runjs_45728() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45713").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_45729();
function switchText_45729() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj45713 
move_45730();
function move_45730() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj45713");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 339;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj45713_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_45731();
function runjs_45731() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45941").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_45732();
function runjs_45732() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45941").css("border-color", "#000000"); $("#obj45941").css("border-width", "1px"); $("#obj45941").css("border-style", "solid"); $("#obj45941").css("border-radius", "10px"); $("#obj45941").css("-webkit-border-radius", "10px"); $("#obj45941").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj45935
(function(){
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj45935";
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
					window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj45713_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_45734();
function runjs_45734() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45713").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_45735();
function runjs_45735() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj45713").css("border-color", "rgba(0,0,0,0)"); $("#obj45713").css("border-width", "0px"); $("#obj45713").css("border-style", "solid"); $("#obj45713").css("border-radius", "10px"); $("#obj45713").css("-webkit-border-radius", "10px"); $("#obj45713").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj45989 
playAudio_45736();
function playAudio_45736() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj45989")[0];
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
		    window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj45713_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_45737();
function switchText_45737() {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = obj45713_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_2_runningActionsCount = window.obj45713_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj45713_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_45718();
function runjs_45718() {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45943").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_45722();
function switchText_45722() {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_45719();
function runjs_45719() {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45943").css("border-color", "#058E3F"); $("#obj45943").css("border-width", "2px"); $("#obj45943").css("border-style", "solid"); $("#obj45943").css("border-radius", "10px"); $("#obj45943").css("-webkit-border-radius", "10px"); $("#obj45943").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj45937 
hide_45720();
function hide_45720() {
	var selector = "#obj45937";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_45720(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj45713_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_45721();
function runjs_45721() {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj45713").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj45713_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj45988 
playAudio_45723();
function playAudio_45723() {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj45988")[0];
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
		    window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj45713_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90579();
function switchText_90579() {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = obj45713_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj45951_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj45951_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj45951").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj45951_content");
			setTimeout(function () {
				window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj45951 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj45713_droppedInsideTargetActions_runningActionsCount = window.obj45713_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj45713_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj45713_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj45713_droppedInsideTargetActions_runningActionsCount == 0) {
	obj45713_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj45713_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj45713").trigger("obj45713_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 45713) {
				console.warn("de-queueing event obj45713." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj45713").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj45713_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67502_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67502_onTap_activeActionGroupIndex = -1;
		$("#obj67502").trigger("obj67502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67502) {
				console.warn("de-queueing event obj67502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67502_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67502 
hide_67505();
function hide_67505() {
	var selector = "#obj67502";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67502_onTap_runningActionsCount = obj67502_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67502_onTap_runningActionsCount = window.obj67502_onTap_runningActionsCount - 1;
if (window.obj67502_onTap_runningActionsCount < 0) {
	window.obj67502_onTap_runningActionsCount = 0;
} else if (window.obj67502_onTap_runningActionsCount == 0) {
	obj67502_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67505(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67502_onTap_runningActionsCount = window.obj67502_onTap_runningActionsCount - 1;
if (window.obj67502_onTap_runningActionsCount < 0) {
	window.obj67502_onTap_runningActionsCount = 0;
} else if (window.obj67502_onTap_runningActionsCount == 0) {
	obj67502_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67508 
stopMovie_67504();
function stopMovie_67504() {
	window.obj67502_onTap_runningActionsCount = obj67502_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67508")[0];
	myVideo.pause();
	window.obj67502_onTap_runningActionsCount = window.obj67502_onTap_runningActionsCount - 1;
if (window.obj67502_onTap_runningActionsCount < 0) {
	window.obj67502_onTap_runningActionsCount = 0;
} else if (window.obj67502_onTap_runningActionsCount == 0) {
	obj67502_onTap_actionGroup1();
}
}
















};
obj67502_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67502_onTap_activeActionGroupIndex = -1;
		$("#obj67502").trigger("obj67502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67502) {
				console.warn("de-queueing event obj67502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67502_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67494
(function(){
	window.obj67502_onTap_runningActionsCount = obj67502_onTap_runningActionsCount + 1;

	var selector = "#obj67494";
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
					window.obj67502_onTap_runningActionsCount = window.obj67502_onTap_runningActionsCount - 1;
if (window.obj67502_onTap_runningActionsCount < 0) {
	window.obj67502_onTap_runningActionsCount = 0;
} else if (window.obj67502_onTap_runningActionsCount == 0) {
	obj67502_onTap_actionGroup2();
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
				window.obj67502_onTap_runningActionsCount = window.obj67502_onTap_runningActionsCount - 1;
if (window.obj67502_onTap_runningActionsCount < 0) {
	window.obj67502_onTap_runningActionsCount = 0;
} else if (window.obj67502_onTap_runningActionsCount == 0) {
	obj67502_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67502_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67502_onTap_activeActionGroupIndex = -1;
		$("#obj67502").trigger("obj67502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67502) {
				console.warn("de-queueing event obj67502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67502_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67508 
move_67507();
function move_67507() {
	window.obj67502_onTap_runningActionsCount = obj67502_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67508");
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
			window.obj67502_onTap_runningActionsCount = window.obj67502_onTap_runningActionsCount - 1;
if (window.obj67502_onTap_runningActionsCount < 0) {
	window.obj67502_onTap_runningActionsCount = 0;
} else if (window.obj67502_onTap_runningActionsCount == 0) {
	obj67502_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67502_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67502_onTap_activeActionGroupIndex = -1;
		$("#obj67502").trigger("obj67502_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67502) {
				console.warn("de-queueing event obj67502." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67502").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67502_onTap_activeActionGroupIndex = 3;
	





















};
obj67494_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67494_onTap_activeActionGroupIndex = -1;
		$("#obj67494").trigger("obj67494_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67494) {
				console.warn("de-queueing event obj67494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67494_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67494 
hide_67497();
function hide_67497() {
	var selector = "#obj67494";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67494_onTap_runningActionsCount = obj67494_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67494_onTap_runningActionsCount = window.obj67494_onTap_runningActionsCount - 1;
if (window.obj67494_onTap_runningActionsCount < 0) {
	window.obj67494_onTap_runningActionsCount = 0;
} else if (window.obj67494_onTap_runningActionsCount == 0) {
	obj67494_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67497(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67494_onTap_runningActionsCount = window.obj67494_onTap_runningActionsCount - 1;
if (window.obj67494_onTap_runningActionsCount < 0) {
	window.obj67494_onTap_runningActionsCount = 0;
} else if (window.obj67494_onTap_runningActionsCount == 0) {
	obj67494_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67508 
playPauseMovie_67496();
function playPauseMovie_67496() {
	window.obj67494_onTap_runningActionsCount = obj67494_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67508")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67494_onTap_runningActionsCount = window.obj67494_onTap_runningActionsCount - 1;
if (window.obj67494_onTap_runningActionsCount < 0) {
	window.obj67494_onTap_runningActionsCount = 0;
} else if (window.obj67494_onTap_runningActionsCount == 0) {
	obj67494_onTap_actionGroup1();
}
}

















};
obj67494_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67494_onTap_activeActionGroupIndex = -1;
		$("#obj67494").trigger("obj67494_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67494) {
				console.warn("de-queueing event obj67494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67494_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67502
(function(){
	window.obj67494_onTap_runningActionsCount = obj67494_onTap_runningActionsCount + 1;

	var selector = "#obj67502";
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
					window.obj67494_onTap_runningActionsCount = window.obj67494_onTap_runningActionsCount - 1;
if (window.obj67494_onTap_runningActionsCount < 0) {
	window.obj67494_onTap_runningActionsCount = 0;
} else if (window.obj67494_onTap_runningActionsCount == 0) {
	obj67494_onTap_actionGroup2();
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
				window.obj67494_onTap_runningActionsCount = window.obj67494_onTap_runningActionsCount - 1;
if (window.obj67494_onTap_runningActionsCount < 0) {
	window.obj67494_onTap_runningActionsCount = 0;
} else if (window.obj67494_onTap_runningActionsCount == 0) {
	obj67494_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67494_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67494_onTap_activeActionGroupIndex = -1;
		$("#obj67494").trigger("obj67494_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67494) {
				console.warn("de-queueing event obj67494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67494_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67508 
move_67499();
function move_67499() {
	window.obj67494_onTap_runningActionsCount = obj67494_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67508");
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
			window.obj67494_onTap_runningActionsCount = window.obj67494_onTap_runningActionsCount - 1;
if (window.obj67494_onTap_runningActionsCount < 0) {
	window.obj67494_onTap_runningActionsCount = 0;
} else if (window.obj67494_onTap_runningActionsCount == 0) {
	obj67494_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67494_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67494_onTap_activeActionGroupIndex = -1;
		$("#obj67494").trigger("obj67494_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67494) {
				console.warn("de-queueing event obj67494." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67494").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67494_onTap_activeActionGroupIndex = 3;
	





















};
obj88753_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88753_onTap_activeActionGroupIndex = -1;
		$("#obj88753").trigger("obj88753_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88753) {
				console.warn("de-queueing event obj88753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88753_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88758 
stopAudio_88755();
function stopAudio_88755() {
	window.obj88753_onTap_runningActionsCount = obj88753_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88758")[0];
	myAudio.pause();
	window.obj88753_onTap_runningActionsCount = window.obj88753_onTap_runningActionsCount - 1;
if (window.obj88753_onTap_runningActionsCount < 0) {
	window.obj88753_onTap_runningActionsCount = 0;
} else if (window.obj88753_onTap_runningActionsCount == 0) {
	obj88753_onTap_actionGroup1();
}
}








};
obj88753_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88753_onTap_activeActionGroupIndex = -1;
		$("#obj88753").trigger("obj88753_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88753) {
				console.warn("de-queueing event obj88753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88753_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88753 
hide_88756();
function hide_88756() {
	var selector = "#obj88753";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88753_onTap_runningActionsCount = obj88753_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88753_onTap_runningActionsCount = window.obj88753_onTap_runningActionsCount - 1;
if (window.obj88753_onTap_runningActionsCount < 0) {
	window.obj88753_onTap_runningActionsCount = 0;
} else if (window.obj88753_onTap_runningActionsCount == 0) {
	obj88753_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88756(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88753_onTap_runningActionsCount = window.obj88753_onTap_runningActionsCount - 1;
if (window.obj88753_onTap_runningActionsCount < 0) {
	window.obj88753_onTap_runningActionsCount = 0;
} else if (window.obj88753_onTap_runningActionsCount == 0) {
	obj88753_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88753_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88753_onTap_activeActionGroupIndex = -1;
		$("#obj88753").trigger("obj88753_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88753) {
				console.warn("de-queueing event obj88753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88753_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88748
(function(){
	window.obj88753_onTap_runningActionsCount = obj88753_onTap_runningActionsCount + 1;

	var selector = "#obj88748";
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
					window.obj88753_onTap_runningActionsCount = window.obj88753_onTap_runningActionsCount - 1;
if (window.obj88753_onTap_runningActionsCount < 0) {
	window.obj88753_onTap_runningActionsCount = 0;
} else if (window.obj88753_onTap_runningActionsCount == 0) {
	obj88753_onTap_actionGroup3();
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
				window.obj88753_onTap_runningActionsCount = window.obj88753_onTap_runningActionsCount - 1;
if (window.obj88753_onTap_runningActionsCount < 0) {
	window.obj88753_onTap_runningActionsCount = 0;
} else if (window.obj88753_onTap_runningActionsCount == 0) {
	obj88753_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88753_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88753_onTap_activeActionGroupIndex = -1;
		$("#obj88753").trigger("obj88753_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88753) {
				console.warn("de-queueing event obj88753." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88753").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88753_onTap_activeActionGroupIndex = 3;
	





















};
obj88748_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88748_onTap_activeActionGroupIndex = -1;
		$("#obj88748").trigger("obj88748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88748) {
				console.warn("de-queueing event obj88748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88748_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88748 
hide_88750();
function hide_88750() {
	var selector = "#obj88748";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88748_onTap_runningActionsCount = obj88748_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88748_onTap_runningActionsCount = window.obj88748_onTap_runningActionsCount - 1;
if (window.obj88748_onTap_runningActionsCount < 0) {
	window.obj88748_onTap_runningActionsCount = 0;
} else if (window.obj88748_onTap_runningActionsCount == 0) {
	obj88748_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88750(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88748_onTap_runningActionsCount = window.obj88748_onTap_runningActionsCount - 1;
if (window.obj88748_onTap_runningActionsCount < 0) {
	window.obj88748_onTap_runningActionsCount = 0;
} else if (window.obj88748_onTap_runningActionsCount == 0) {
	obj88748_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88748_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88748_onTap_activeActionGroupIndex = -1;
		$("#obj88748").trigger("obj88748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88748) {
				console.warn("de-queueing event obj88748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88748_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88753
(function(){
	window.obj88748_onTap_runningActionsCount = obj88748_onTap_runningActionsCount + 1;

	var selector = "#obj88753";
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
					window.obj88748_onTap_runningActionsCount = window.obj88748_onTap_runningActionsCount - 1;
if (window.obj88748_onTap_runningActionsCount < 0) {
	window.obj88748_onTap_runningActionsCount = 0;
} else if (window.obj88748_onTap_runningActionsCount == 0) {
	obj88748_onTap_actionGroup2();
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
				window.obj88748_onTap_runningActionsCount = window.obj88748_onTap_runningActionsCount - 1;
if (window.obj88748_onTap_runningActionsCount < 0) {
	window.obj88748_onTap_runningActionsCount = 0;
} else if (window.obj88748_onTap_runningActionsCount == 0) {
	obj88748_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88748_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88748_onTap_activeActionGroupIndex = -1;
		$("#obj88748").trigger("obj88748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88748) {
				console.warn("de-queueing event obj88748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88748_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88758 
playAudio_88752();
function playAudio_88752() {
	window.obj88748_onTap_runningActionsCount = obj88748_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88758")[0];
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
		    window.obj88748_onTap_runningActionsCount = window.obj88748_onTap_runningActionsCount - 1;
if (window.obj88748_onTap_runningActionsCount < 0) {
	window.obj88748_onTap_runningActionsCount = 0;
} else if (window.obj88748_onTap_runningActionsCount == 0) {
	obj88748_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88748_onTap_runningActionsCount = window.obj88748_onTap_runningActionsCount - 1;
if (window.obj88748_onTap_runningActionsCount < 0) {
	window.obj88748_onTap_runningActionsCount = 0;
} else if (window.obj88748_onTap_runningActionsCount == 0) {
	obj88748_onTap_actionGroup3();
}
	}
}









};
obj88748_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88748_onTap_activeActionGroupIndex = -1;
		$("#obj88748").trigger("obj88748_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88748) {
				console.warn("de-queueing event obj88748." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88748").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88748_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj45970: Event Touch Down
 *
 */
$("#obj45970").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45970_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45970_onTap is still running");
	return;
}
var obj45970_onTap_runningActionsCount = 0;
var obj45970_onTap_loopCount = 0;
obj45970_onTap_actionGroup0();
});










/*
 *
 *   obj45967: Event Touch Down
 *
 */
$("#obj45967").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45967_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45967_onTap is still running");
	return;
}
var obj45967_onTap_runningActionsCount = 0;
var obj45967_onTap_loopCount = 0;
obj45967_onTap_actionGroup0();
});










/*
 *
 *   obj45963: Event Touch Down
 *
 */
$("#obj45963").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj45963_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45963_onTap is still running");
	return;
}
var obj45963_onTap_runningActionsCount = 0;
var obj45963_onTap_loopCount = 0;
obj45963_onTap_actionGroup0();
});









































































































































































































/*
 *
 *   obj45872: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45872");
	var winTarget = document.getElementById("obj45872");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45872").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45872_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45872_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45872_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45872_onTouchDown is still running");
	return;
}
var obj45872_onTouchDown_runningActionsCount = 0;
var obj45872_onTouchDown_loopCount = 0;
obj45872_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45872: Event SCActionDragDrop45875_droppedOutsideTargetActions
 *
 */
$("#obj45872").bind("SCActionDragDrop45875_droppedOutsideTargetActions", function(event) {
	if (window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45872_SCActionDragDrop45875_droppedOutsideTargetActions is still running");
	return;
}
var obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_loopCount = 0;
obj45872_SCActionDragDrop45875_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45872: Event droppedInsideTargetActions_4
 *
 */
$("#obj45872").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45872_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45872_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45872_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_4_loopCount = 0;
obj45872_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45872: Event droppedInsideTargetActions_3
 *
 */
$("#obj45872").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45872_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45872_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45872_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_3_loopCount = 0;
obj45872_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45872: Event droppedInsideTargetActions_2
 *
 */
$("#obj45872").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45872_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45872_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45872_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_2_loopCount = 0;
obj45872_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45872: Event droppedInsideTargetActions
 *
 */
$("#obj45872").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45872_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45872_droppedInsideTargetActions is still running");
	return;
}
var obj45872_droppedInsideTargetActions_runningActionsCount = 0;
var obj45872_droppedInsideTargetActions_loopCount = 0;
obj45872_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45819: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45819");
	var winTarget = document.getElementById("obj45819");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45819").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45819_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45819_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45819_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45819_onTouchDown is still running");
	return;
}
var obj45819_onTouchDown_runningActionsCount = 0;
var obj45819_onTouchDown_loopCount = 0;
obj45819_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45819: Event SCActionDragDrop45822_droppedOutsideTargetActions
 *
 */
$("#obj45819").bind("SCActionDragDrop45822_droppedOutsideTargetActions", function(event) {
	if (window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45819_SCActionDragDrop45822_droppedOutsideTargetActions is still running");
	return;
}
var obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_loopCount = 0;
obj45819_SCActionDragDrop45822_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45819: Event droppedInsideTargetActions_4
 *
 */
$("#obj45819").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45819_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45819_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45819_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_4_loopCount = 0;
obj45819_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45819: Event droppedInsideTargetActions_3
 *
 */
$("#obj45819").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45819_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45819_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45819_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_3_loopCount = 0;
obj45819_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45819: Event droppedInsideTargetActions_2
 *
 */
$("#obj45819").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45819_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45819_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45819_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_2_loopCount = 0;
obj45819_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45819: Event droppedInsideTargetActions
 *
 */
$("#obj45819").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45819_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45819_droppedInsideTargetActions is still running");
	return;
}
var obj45819_droppedInsideTargetActions_runningActionsCount = 0;
var obj45819_droppedInsideTargetActions_loopCount = 0;
obj45819_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45766: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45766");
	var winTarget = document.getElementById("obj45766");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45766").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45766_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45766_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45766_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45766_onTouchDown is still running");
	return;
}
var obj45766_onTouchDown_runningActionsCount = 0;
var obj45766_onTouchDown_loopCount = 0;
obj45766_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45766: Event SCActionDragDrop45769_droppedOutsideTargetActions
 *
 */
$("#obj45766").bind("SCActionDragDrop45769_droppedOutsideTargetActions", function(event) {
	if (window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45766_SCActionDragDrop45769_droppedOutsideTargetActions is still running");
	return;
}
var obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_loopCount = 0;
obj45766_SCActionDragDrop45769_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45766: Event droppedInsideTargetActions_4
 *
 */
$("#obj45766").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45766_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45766_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45766_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_4_loopCount = 0;
obj45766_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45766: Event droppedInsideTargetActions_3
 *
 */
$("#obj45766").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45766_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45766_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45766_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_3_loopCount = 0;
obj45766_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45766: Event droppedInsideTargetActions_2
 *
 */
$("#obj45766").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45766_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45766_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45766_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_2_loopCount = 0;
obj45766_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45766: Event droppedInsideTargetActions
 *
 */
$("#obj45766").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45766_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45766_droppedInsideTargetActions is still running");
	return;
}
var obj45766_droppedInsideTargetActions_runningActionsCount = 0;
var obj45766_droppedInsideTargetActions_loopCount = 0;
obj45766_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj45713: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj45713");
	var winTarget = document.getElementById("obj45713");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj45713").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj45713_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj45713_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj45713_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45713_onTouchDown is still running");
	return;
}
var obj45713_onTouchDown_runningActionsCount = 0;
var obj45713_onTouchDown_loopCount = 0;
obj45713_onTouchDown_actionGroup0();
});



/*
 *
 *   obj45713: Event SCActionDragDrop45716_droppedOutsideTargetActions
 *
 */
$("#obj45713").bind("SCActionDragDrop45716_droppedOutsideTargetActions", function(event) {
	if (window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45713_SCActionDragDrop45716_droppedOutsideTargetActions is still running");
	return;
}
var obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_runningActionsCount = 0;
var obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_loopCount = 0;
obj45713_SCActionDragDrop45716_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj45713: Event droppedInsideTargetActions_4
 *
 */
$("#obj45713").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj45713_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45713_droppedInsideTargetActions_4 is still running");
	return;
}
var obj45713_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_4_loopCount = 0;
obj45713_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj45713: Event droppedInsideTargetActions_3
 *
 */
$("#obj45713").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj45713_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45713_droppedInsideTargetActions_3 is still running");
	return;
}
var obj45713_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_3_loopCount = 0;
obj45713_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj45713: Event droppedInsideTargetActions_2
 *
 */
$("#obj45713").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj45713_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45713_droppedInsideTargetActions_2 is still running");
	return;
}
var obj45713_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_2_loopCount = 0;
obj45713_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj45713: Event droppedInsideTargetActions
 *
 */
$("#obj45713").bind("droppedInsideTargetActions", function(event) {
	if (window.obj45713_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj45713_droppedInsideTargetActions is still running");
	return;
}
var obj45713_droppedInsideTargetActions_runningActionsCount = 0;
var obj45713_droppedInsideTargetActions_loopCount = 0;
obj45713_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67502: Event Touch Down
 *
 */
$("#obj67502").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67502_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67502_onTap is still running");
	return;
}
var obj67502_onTap_runningActionsCount = 0;
var obj67502_onTap_loopCount = 0;
obj67502_onTap_actionGroup0();
});










/*
 *
 *   obj67494: Event Touch Down
 *
 */
$("#obj67494").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67494_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67494_onTap is still running");
	return;
}
var obj67494_onTap_runningActionsCount = 0;
var obj67494_onTap_loopCount = 0;
obj67494_onTap_actionGroup0();
});










/*
 *
 *   obj88753: Event Touch Down
 *
 */
$("#obj88753").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88753_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88753_onTap is still running");
	return;
}
var obj88753_onTap_runningActionsCount = 0;
var obj88753_onTap_loopCount = 0;
obj88753_onTap_actionGroup0();
});










/*
 *
 *   obj88748: Event Touch Down
 *
 */
$("#obj88748").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88748_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88748_onTap is still running");
	return;
}
var obj88748_onTap_runningActionsCount = 0;
var obj88748_onTap_loopCount = 0;
obj88748_onTap_actionGroup0();
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
	
$("#obj45989").trigger('SCEventShow');
$("#obj45988").trigger('SCEventShow');
$("#obj45986").trigger('SCEventShow');
$("#obj45970").trigger('SCEventShow');
$("#obj45967").trigger('SCEventShow');
$("#obj45963").trigger('SCEventShow');
$("#obj45961").trigger('SCEventShow');
$("#obj45959").trigger('SCEventShow');
$("#obj45957").trigger('SCEventShow');
$("#obj45955").trigger('SCEventShow');
$("#obj45953").trigger('SCEventShow');
$("#obj45951").trigger('SCEventShow');
$("#obj45949").trigger('SCEventShow');
$("#obj45947").trigger('SCEventShow');
$("#obj45945").trigger('SCEventShow');
$("#obj45943").trigger('SCEventShow');
$("#obj45941").trigger('SCEventShow');
$("#obj45939").trigger('SCEventShow');
$("#obj45937").trigger('SCEventShow');
$("#obj45935").trigger('SCEventShow');
$("#obj45933").trigger('SCEventShow');
$("#obj45931").trigger('SCEventShow');
$("#obj45929").trigger('SCEventShow');
$("#obj45927").trigger('SCEventShow');
$("#obj45925").trigger('SCEventShow');
$("#obj45872").trigger('SCEventShow');
$("#obj45819").trigger('SCEventShow');
$("#obj45766").trigger('SCEventShow');
$("#obj45713").trigger('SCEventShow');
$("#obj67502").trigger('SCEventShow');
$("#obj67494").trigger('SCEventShow');
$("#obj88753").trigger('SCEventShow');
$("#obj88748").trigger('SCEventShow');
$("#obj88758").trigger('SCEventShow');
$("#obj94941").trigger('SCEventShow');
$("#obj67508").trigger('SCEventShow');
	
});