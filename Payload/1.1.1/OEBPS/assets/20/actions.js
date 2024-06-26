pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2890;
pubcoder.page.title = pubcoder.page.title || "20";
pubcoder.page.number = pubcoder.page.number || 20;
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
var obj2896_onTap_activeActionGroupIndex = -1;
var obj2896_onTap_runningActionsCount = 0;
var obj2896_onTap_loopCount = 0;
var obj2893_onTap_activeActionGroupIndex = -1;
var obj2893_onTap_runningActionsCount = 0;
var obj2893_onTap_loopCount = 0;
var obj2899_onTap_activeActionGroupIndex = -1;
var obj2899_onTap_runningActionsCount = 0;
var obj2899_onTap_loopCount = 0;
var obj2962_onDrag_activeActionGroupIndex = -1;
var obj2962_onDrag_runningActionsCount = 0;
var obj2962_onDrag_loopCount = 0;
var obj2962_onTouchDown_activeActionGroupIndex = -1;
var obj2962_onTouchDown_runningActionsCount = 0;
var obj2962_onTouchDown_loopCount = 0;
var obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_loopCount = 0;
var obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_4_loopCount = 0;
var obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_3_loopCount = 0;
var obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_2_loopCount = 0;
var obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2962_droppedInsideTargetActions_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_loopCount = 0;
var obj3012_onDrag_activeActionGroupIndex = -1;
var obj3012_onDrag_runningActionsCount = 0;
var obj3012_onDrag_loopCount = 0;
var obj3012_onTouchDown_activeActionGroupIndex = -1;
var obj3012_onTouchDown_runningActionsCount = 0;
var obj3012_onTouchDown_loopCount = 0;
var obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_loopCount = 0;
var obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_4_loopCount = 0;
var obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_3_loopCount = 0;
var obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_2_loopCount = 0;
var obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3012_droppedInsideTargetActions_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_loopCount = 0;
var obj3062_onDrag_activeActionGroupIndex = -1;
var obj3062_onDrag_runningActionsCount = 0;
var obj3062_onDrag_loopCount = 0;
var obj3062_onTouchDown_activeActionGroupIndex = -1;
var obj3062_onTouchDown_runningActionsCount = 0;
var obj3062_onTouchDown_loopCount = 0;
var obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_loopCount = 0;
var obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_4_loopCount = 0;
var obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_3_loopCount = 0;
var obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_2_loopCount = 0;
var obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3062_droppedInsideTargetActions_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_loopCount = 0;
var obj3112_onDrag_activeActionGroupIndex = -1;
var obj3112_onDrag_runningActionsCount = 0;
var obj3112_onDrag_loopCount = 0;
var obj3112_onTouchDown_activeActionGroupIndex = -1;
var obj3112_onTouchDown_runningActionsCount = 0;
var obj3112_onTouchDown_loopCount = 0;
var obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_loopCount = 0;
var obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_4_loopCount = 0;
var obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_3_loopCount = 0;
var obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_2_loopCount = 0;
var obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj3112_droppedInsideTargetActions_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_loopCount = 0;
var obj65278_onTap_activeActionGroupIndex = -1;
var obj65278_onTap_runningActionsCount = 0;
var obj65278_onTap_loopCount = 0;
var obj65270_onTap_activeActionGroupIndex = -1;
var obj65270_onTap_runningActionsCount = 0;
var obj65270_onTap_loopCount = 0;
var obj87045_onTap_activeActionGroupIndex = -1;
var obj87045_onTap_runningActionsCount = 0;
var obj87045_onTap_loopCount = 0;
var obj87040_onTap_activeActionGroupIndex = -1;
var obj87040_onTap_runningActionsCount = 0;
var obj87040_onTap_loopCount = 0;
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
		
obj2896_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2896_onTap_activeActionGroupIndex = -1;
		$("#obj2896").trigger("obj2896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2896) {
				console.warn("de-queueing event obj2896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2896_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2898();
function goToPage_2898() {
	window.obj2896_onTap_runningActionsCount = obj2896_onTap_runningActionsCount + 1;
	$("#anchor124")[0].click();
	window.obj2896_onTap_runningActionsCount = window.obj2896_onTap_runningActionsCount - 1;
if (window.obj2896_onTap_runningActionsCount < 0) {
	window.obj2896_onTap_runningActionsCount = 0;
} else if (window.obj2896_onTap_runningActionsCount == 0) {
	obj2896_onTap_actionGroup1();
}
}





















};
obj2896_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2896_onTap_activeActionGroupIndex = -1;
		$("#obj2896").trigger("obj2896_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2896) {
				console.warn("de-queueing event obj2896." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2896").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2896_onTap_activeActionGroupIndex = 1;
	





















};
obj2893_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2893_onTap_activeActionGroupIndex = -1;
		$("#obj2893").trigger("obj2893_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2893) {
				console.warn("de-queueing event obj2893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2893_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2895();
function goToPage_2895() {
	window.obj2893_onTap_runningActionsCount = obj2893_onTap_runningActionsCount + 1;
	$("#anchor125")[0].click();
	window.obj2893_onTap_runningActionsCount = window.obj2893_onTap_runningActionsCount - 1;
if (window.obj2893_onTap_runningActionsCount < 0) {
	window.obj2893_onTap_runningActionsCount = 0;
} else if (window.obj2893_onTap_runningActionsCount == 0) {
	obj2893_onTap_actionGroup1();
}
}





















};
obj2893_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2893_onTap_activeActionGroupIndex = -1;
		$("#obj2893").trigger("obj2893_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2893) {
				console.warn("de-queueing event obj2893." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2893").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2893_onTap_activeActionGroupIndex = 1;
	





















};
obj2899_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2899_onTap_activeActionGroupIndex = -1;
		$("#obj2899").trigger("obj2899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2899) {
				console.warn("de-queueing event obj2899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2899_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2901();
function goToPage_2901() {
	window.obj2899_onTap_runningActionsCount = obj2899_onTap_runningActionsCount + 1;
	$("#anchor126")[0].click();
	window.obj2899_onTap_runningActionsCount = window.obj2899_onTap_runningActionsCount - 1;
if (window.obj2899_onTap_runningActionsCount < 0) {
	window.obj2899_onTap_runningActionsCount = 0;
} else if (window.obj2899_onTap_runningActionsCount == 0) {
	obj2899_onTap_actionGroup1();
}
}





















};
obj2899_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2899_onTap_activeActionGroupIndex = -1;
		$("#obj2899").trigger("obj2899_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2899) {
				console.warn("de-queueing event obj2899." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2899").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2899_onTap_activeActionGroupIndex = 1;
	





















};
obj2962_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2962");
//	action: dragDrop
//	target: obj2962 
dragDrop_2965();
function dragDrop_2965() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2962_onTouchDown_runningActionsCount = obj2962_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2962');
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
	  	containerNode = $('#obj2924');
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
    	window.obj2962_onTouchDown_runningActionsCount = window.obj2962_onTouchDown_runningActionsCount - 1;
if (window.obj2962_onTouchDown_runningActionsCount < 0) {
	window.obj2962_onTouchDown_runningActionsCount = 0;
} else if (window.obj2962_onTouchDown_runningActionsCount == 0) {
	obj2962_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2950","#obj2928","#obj2944","#obj2956");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2965 = false;
    	var dropped_id_2965;
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
					dropped_2965 = true;
					dropped_id_2965 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2965) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2962").trigger('SCActionDragDrop2965_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2962_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2962_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2962 
move_92140();
function move_92140() {
	window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount = obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount = window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2962_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3246();
function runjs_3246() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3247();
function runjs_3247() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#C00000"); $("#obj2956").css("border-width", "2px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2958 
hide_3248();
function hide_3248() {
	var selector = "#obj2958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3248(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2962_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3249();
function runjs_3249() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2962").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3250();
function switchText_3250() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2962 
move_3251();
function move_3251() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2962_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3252();
function runjs_3252() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3253();
function runjs_3253() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#000000"); $("#obj2956").css("border-width", "1px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2958
(function(){
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2958";
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
					window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2962_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3255();
function runjs_3255() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2962").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3256();
function runjs_3256() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2962").css("border-color", "rgba(0,0,0,0)"); $("#obj2962").css("border-width", "0px"); $("#obj2962").css("border-style", "solid"); $("#obj2962").css("border-radius", "10px"); $("#obj2962").css("-webkit-border-radius", "10px"); $("#obj2962").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3257();
function playAudio_3257() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj2962_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3258();
function switchText_3258() {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = obj2962_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_4_runningActionsCount = window.obj2962_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj2962_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3232();
function runjs_3232() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3233();
function runjs_3233() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#C00000"); $("#obj2944").css("border-width", "2px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2946 
hide_3234();
function hide_3234() {
	var selector = "#obj2946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3234(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2962_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3235();
function runjs_3235() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2962").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3236();
function switchText_3236() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2962 
move_3237();
function move_3237() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2962_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3238();
function runjs_3238() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3239();
function runjs_3239() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#000000"); $("#obj2944").css("border-width", "1px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2946
(function(){
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2946";
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
					window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2962_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3241();
function runjs_3241() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2962").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3242();
function runjs_3242() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2962").css("border-color", "rgba(0,0,0,0)"); $("#obj2962").css("border-width", "0px"); $("#obj2962").css("border-style", "solid"); $("#obj2962").css("border-radius", "10px"); $("#obj2962").css("-webkit-border-radius", "10px"); $("#obj2962").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3243();
function playAudio_3243() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj2962_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3244();
function switchText_3244() {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = obj2962_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_3_runningActionsCount = window.obj2962_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj2962_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3209();
function runjs_3209() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3210();
function runjs_3210() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#C00000"); $("#obj2928").css("border-width", "2px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2926 
hide_3211();
function hide_3211() {
	var selector = "#obj2926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3211(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2962_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3212();
function runjs_3212() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2962").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3219();
function switchText_3219() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2962 
move_3215();
function move_3215() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2962");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2962_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3216();
function runjs_3216() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3217();
function runjs_3217() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#000000"); $("#obj2928").css("border-width", "1px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2926
(function(){
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2926";
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
					window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2962_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3225();
function runjs_3225() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2962").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3226();
function runjs_3226() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2962").css("border-color", "rgba(0,0,0,0)"); $("#obj2962").css("border-width", "0px"); $("#obj2962").css("border-style", "solid"); $("#obj2962").css("border-radius", "10px"); $("#obj2962").css("-webkit-border-radius", "10px"); $("#obj2962").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3214();
function playAudio_3214() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj2962_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3220();
function switchText_3220() {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = obj2962_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_2_runningActionsCount = window.obj2962_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj2962_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3195();
function runjs_3195() {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3199();
function switchText_3199() {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3196();
function runjs_3196() {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#058E3F"); $("#obj2950").css("border-width", "2px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2952 
hide_3197();
function hide_3197() {
	var selector = "#obj2952";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3197(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2962_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3198();
function runjs_3198() {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2962").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2962_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3172 
playAudio_3200();
function playAudio_3200() {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2962_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90099();
function switchText_90099() {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = obj2962_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2962_droppedInsideTargetActions_runningActionsCount = window.obj2962_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2962_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2962_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2962_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2962_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2962_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2962").trigger("obj2962_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2962) {
				console.warn("de-queueing event obj2962." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2962").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2962_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj3012_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3012");
//	action: dragDrop
//	target: obj3012 
dragDrop_3015();
function dragDrop_3015() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3012_onTouchDown_runningActionsCount = obj3012_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3012');
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
	  	containerNode = $('#obj2924');
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
    	window.obj3012_onTouchDown_runningActionsCount = window.obj3012_onTouchDown_runningActionsCount - 1;
if (window.obj3012_onTouchDown_runningActionsCount < 0) {
	window.obj3012_onTouchDown_runningActionsCount = 0;
} else if (window.obj3012_onTouchDown_runningActionsCount == 0) {
	obj3012_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2956","#obj2928","#obj2944","#obj2950");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3015 = false;
    	var dropped_id_3015;
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
					dropped_3015 = true;
					dropped_id_3015 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3015) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3012").trigger('SCActionDragDrop3015_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3012_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3012_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3012 
move_92142();
function move_92142() {
	window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount = obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3012");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount = window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3012_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3288();
function runjs_3288() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3289();
function runjs_3289() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#C00000"); $("#obj2950").css("border-width", "2px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2952 
hide_3290();
function hide_3290() {
	var selector = "#obj2952";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3290(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3012_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3291();
function runjs_3291() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3012").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3292();
function switchText_3292() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3012 
move_3293();
function move_3293() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3012");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3012_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3294();
function runjs_3294() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3295();
function runjs_3295() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#000000"); $("#obj2950").css("border-width", "1px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2952
(function(){
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2952";
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
					window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3012_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3297();
function runjs_3297() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3012").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3298();
function runjs_3298() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3012").css("border-color", "rgba(0,0,0,0)"); $("#obj3012").css("border-width", "0px"); $("#obj3012").css("border-style", "solid"); $("#obj3012").css("border-radius", "10px"); $("#obj3012").css("-webkit-border-radius", "10px"); $("#obj3012").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3299();
function playAudio_3299() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3012_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3300();
function switchText_3300() {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = obj3012_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_4_runningActionsCount = window.obj3012_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3012_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3274();
function runjs_3274() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3275();
function runjs_3275() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#C00000"); $("#obj2944").css("border-width", "2px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2946 
hide_3276();
function hide_3276() {
	var selector = "#obj2946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3276(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3012_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3277();
function runjs_3277() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3012").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3278();
function switchText_3278() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3012 
move_3279();
function move_3279() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3012");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3012_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3280();
function runjs_3280() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3281();
function runjs_3281() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#000000"); $("#obj2944").css("border-width", "1px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2946
(function(){
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2946";
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
					window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3012_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3283();
function runjs_3283() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3012").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3284();
function runjs_3284() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3012").css("border-color", "rgba(0,0,0,0)"); $("#obj3012").css("border-width", "0px"); $("#obj3012").css("border-style", "solid"); $("#obj3012").css("border-radius", "10px"); $("#obj3012").css("-webkit-border-radius", "10px"); $("#obj3012").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3285();
function playAudio_3285() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3012_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3286();
function switchText_3286() {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = obj3012_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_3_runningActionsCount = window.obj3012_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3012_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3260();
function runjs_3260() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3261();
function runjs_3261() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#C00000"); $("#obj2928").css("border-width", "2px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2926 
hide_3262();
function hide_3262() {
	var selector = "#obj2926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3262(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3012_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3263();
function runjs_3263() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3012").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3264();
function switchText_3264() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3012 
move_3265();
function move_3265() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3012");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3012_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3266();
function runjs_3266() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3267();
function runjs_3267() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#000000"); $("#obj2928").css("border-width", "1px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2926
(function(){
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2926";
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
					window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3012_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3269();
function runjs_3269() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3012").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3270();
function runjs_3270() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3012").css("border-color", "rgba(0,0,0,0)"); $("#obj3012").css("border-width", "0px"); $("#obj3012").css("border-style", "solid"); $("#obj3012").css("border-radius", "10px"); $("#obj3012").css("-webkit-border-radius", "10px"); $("#obj3012").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3271();
function playAudio_3271() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3012_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3272();
function switchText_3272() {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = obj3012_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_2_runningActionsCount = window.obj3012_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3012_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3202();
function runjs_3202() {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3206();
function switchText_3206() {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3203();
function runjs_3203() {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#058E3F"); $("#obj2956").css("border-width", "2px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2958 
hide_3204();
function hide_3204() {
	var selector = "#obj2958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3204(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3012_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3205();
function runjs_3205() {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3012").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3012_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3172 
playAudio_3207();
function playAudio_3207() {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3012_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90100();
function switchText_90100() {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = obj3012_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3012_droppedInsideTargetActions_runningActionsCount = window.obj3012_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3012_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3012_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3012_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3012_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3012_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3012").trigger("obj3012_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3012) {
				console.warn("de-queueing event obj3012." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3012").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3012_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj3062_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3062");
//	action: dragDrop
//	target: obj3062 
dragDrop_3065();
function dragDrop_3065() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3062_onTouchDown_runningActionsCount = obj3062_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3062');
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
	  	containerNode = $('#obj2924');
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
    	window.obj3062_onTouchDown_runningActionsCount = window.obj3062_onTouchDown_runningActionsCount - 1;
if (window.obj3062_onTouchDown_runningActionsCount < 0) {
	window.obj3062_onTouchDown_runningActionsCount = 0;
} else if (window.obj3062_onTouchDown_runningActionsCount == 0) {
	obj3062_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2928","#obj2944","#obj2950","#obj2956");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3065 = false;
    	var dropped_id_3065;
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
					dropped_3065 = true;
					dropped_id_3065 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3065) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3062").trigger('SCActionDragDrop3065_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3062_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3062_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3062 
move_92144();
function move_92144() {
	window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount = obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3062");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount = window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3062_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3330();
function runjs_3330() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3331();
function runjs_3331() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#C00000"); $("#obj2956").css("border-width", "2px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2958 
hide_3332();
function hide_3332() {
	var selector = "#obj2958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3332(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3062_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3333();
function runjs_3333() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3062").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3334();
function switchText_3334() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3062 
move_3335();
function move_3335() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3062");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3062_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3336();
function runjs_3336() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3337();
function runjs_3337() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#000000"); $("#obj2956").css("border-width", "1px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2958
(function(){
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2958";
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
					window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3062_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3339();
function runjs_3339() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3062").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3340();
function runjs_3340() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3062").css("border-color", "rgba(0,0,0,0)"); $("#obj3062").css("border-width", "0px"); $("#obj3062").css("border-style", "solid"); $("#obj3062").css("border-radius", "10px"); $("#obj3062").css("-webkit-border-radius", "10px"); $("#obj3062").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3341();
function playAudio_3341() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3062_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3342();
function switchText_3342() {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = obj3062_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_4_runningActionsCount = window.obj3062_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3062_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3316();
function runjs_3316() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3317();
function runjs_3317() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#C00000"); $("#obj2950").css("border-width", "2px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2952 
hide_3318();
function hide_3318() {
	var selector = "#obj2952";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3318(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3062_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3319();
function runjs_3319() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3062").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3320();
function switchText_3320() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3062 
move_3321();
function move_3321() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3062");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3062_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3322();
function runjs_3322() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3323();
function runjs_3323() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#000000"); $("#obj2950").css("border-width", "1px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2952
(function(){
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2952";
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
					window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3062_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3325();
function runjs_3325() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3062").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3326();
function runjs_3326() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3062").css("border-color", "rgba(0,0,0,0)"); $("#obj3062").css("border-width", "0px"); $("#obj3062").css("border-style", "solid"); $("#obj3062").css("border-radius", "10px"); $("#obj3062").css("-webkit-border-radius", "10px"); $("#obj3062").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3327();
function playAudio_3327() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3062_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3328();
function switchText_3328() {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = obj3062_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_3_runningActionsCount = window.obj3062_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3062_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3302();
function runjs_3302() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3303();
function runjs_3303() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#C00000"); $("#obj2944").css("border-width", "2px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2946 
hide_3304();
function hide_3304() {
	var selector = "#obj2946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3304(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3062_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3305();
function runjs_3305() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3062").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3306();
function switchText_3306() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3062 
move_3307();
function move_3307() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3062");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 305;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3062_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3308();
function runjs_3308() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3309();
function runjs_3309() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#000000"); $("#obj2944").css("border-width", "1px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2946
(function(){
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2946";
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
					window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3062_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3311();
function runjs_3311() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3062").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3312();
function runjs_3312() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3062").css("border-color", "rgba(0,0,0,0)"); $("#obj3062").css("border-width", "0px"); $("#obj3062").css("border-style", "solid"); $("#obj3062").css("border-radius", "10px"); $("#obj3062").css("-webkit-border-radius", "10px"); $("#obj3062").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3313();
function playAudio_3313() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3062_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3314();
function switchText_3314() {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = obj3062_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_2_runningActionsCount = window.obj3062_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3062_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3167();
function runjs_3167() {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3173();
function switchText_3173() {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3168();
function runjs_3168() {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#058E3F"); $("#obj2928").css("border-width", "2px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2926 
hide_3178();
function hide_3178() {
	var selector = "#obj2926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3178(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3062_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3169();
function runjs_3169() {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3062").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3062_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3172 
playAudio_3170();
function playAudio_3170() {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3062_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90101();
function switchText_90101() {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = obj3062_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3062_droppedInsideTargetActions_runningActionsCount = window.obj3062_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3062_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3062_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3062_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3062_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3062_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3062").trigger("obj3062_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3062) {
				console.warn("de-queueing event obj3062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3062_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj3112_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj3112");
//	action: dragDrop
//	target: obj3112 
dragDrop_3115();
function dragDrop_3115() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj3112_onTouchDown_runningActionsCount = obj3112_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj3112');
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
	  	containerNode = $('#obj2924');
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
    	window.obj3112_onTouchDown_runningActionsCount = window.obj3112_onTouchDown_runningActionsCount - 1;
if (window.obj3112_onTouchDown_runningActionsCount < 0) {
	window.obj3112_onTouchDown_runningActionsCount = 0;
} else if (window.obj3112_onTouchDown_runningActionsCount == 0) {
	obj3112_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2944","#obj2928","#obj2950","#obj2956");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_3115 = false;
    	var dropped_id_3115;
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
					dropped_3115 = true;
					dropped_id_3115 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_3115) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj3112").trigger('SCActionDragDrop3115_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj3112_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3112_onTouchDown_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj3112 
move_92146();
function move_92146() {
	window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount = obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj3112");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 419;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount = window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj3112_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3372();
function runjs_3372() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3373();
function runjs_3373() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#C00000"); $("#obj2956").css("border-width", "2px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2958 
hide_3374();
function hide_3374() {
	var selector = "#obj2958";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3374(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3112_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3375();
function runjs_3375() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3112").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3376();
function switchText_3376() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3112 
move_3377();
function move_3377() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj3112");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 419;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj3112_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3378();
function runjs_3378() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3379();
function runjs_3379() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2956").css("border-color", "#000000"); $("#obj2956").css("border-width", "1px"); $("#obj2956").css("border-style", "solid"); $("#obj2956").css("border-radius", "10px"); $("#obj2956").css("-webkit-border-radius", "10px"); $("#obj2956").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2958
(function(){
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2958";
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
					window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3112_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3381();
function runjs_3381() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3112").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3382();
function runjs_3382() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj3112").css("border-color", "rgba(0,0,0,0)"); $("#obj3112").css("border-width", "0px"); $("#obj3112").css("border-style", "solid"); $("#obj3112").css("border-radius", "10px"); $("#obj3112").css("-webkit-border-radius", "10px"); $("#obj3112").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3383();
function playAudio_3383() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj3112_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3384();
function switchText_3384() {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = obj3112_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_4_runningActionsCount = window.obj3112_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj3112_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3358();
function runjs_3358() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3359();
function runjs_3359() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#C00000"); $("#obj2950").css("border-width", "2px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2952 
hide_3360();
function hide_3360() {
	var selector = "#obj2952";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3360(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3112_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3361();
function runjs_3361() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3112").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3362();
function switchText_3362() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3112 
move_3363();
function move_3363() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj3112");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 419;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj3112_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3364();
function runjs_3364() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3365();
function runjs_3365() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2950").css("border-color", "#000000"); $("#obj2950").css("border-width", "1px"); $("#obj2950").css("border-style", "solid"); $("#obj2950").css("border-radius", "10px"); $("#obj2950").css("-webkit-border-radius", "10px"); $("#obj2950").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2952
(function(){
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2952";
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
					window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3112_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3367();
function runjs_3367() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3112").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3368();
function runjs_3368() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj3112").css("border-color", "rgba(0,0,0,0)"); $("#obj3112").css("border-width", "0px"); $("#obj3112").css("border-style", "solid"); $("#obj3112").css("border-radius", "10px"); $("#obj3112").css("-webkit-border-radius", "10px"); $("#obj3112").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3369();
function playAudio_3369() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj3112_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3370();
function switchText_3370() {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = obj3112_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_3_runningActionsCount = window.obj3112_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj3112_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3344();
function runjs_3344() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_3345();
function runjs_3345() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#C00000"); $("#obj2928").css("border-width", "2px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj2926 
hide_3346();
function hide_3346() {
	var selector = "#obj2926";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3346(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3112_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_3347();
function runjs_3347() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3112").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_3348();
function switchText_3348() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj3112 
move_3349();
function move_3349() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj3112");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 419;
	var moveY = 665;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj3112_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_3350();
function runjs_3350() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_3351();
function runjs_3351() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2928").css("border-color", "#000000"); $("#obj2928").css("border-width", "1px"); $("#obj2928").css("border-style", "solid"); $("#obj2928").css("border-radius", "10px"); $("#obj2928").css("-webkit-border-radius", "10px"); $("#obj2928").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj2926
(function(){
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2926";
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
					window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj3112_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_3353();
function runjs_3353() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3112").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_3354();
function runjs_3354() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj3112").css("border-color", "rgba(0,0,0,0)"); $("#obj3112").css("border-width", "0px"); $("#obj3112").css("border-style", "solid"); $("#obj3112").css("border-radius", "10px"); $("#obj3112").css("-webkit-border-radius", "10px"); $("#obj3112").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj3171 
playAudio_3355();
function playAudio_3355() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj3171")[0];
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
		    window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj3112_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_3356();
function switchText_3356() {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = obj3112_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_2_runningActionsCount = window.obj3112_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj3112_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_3188();
function runjs_3188() {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2944").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_3192();
function switchText_3192() {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_3189();
function runjs_3189() {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2944").css("border-color", "#058E3F"); $("#obj2944").css("border-width", "2px"); $("#obj2944").css("border-style", "solid"); $("#obj2944").css("border-radius", "10px"); $("#obj2944").css("-webkit-border-radius", "10px"); $("#obj2944").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2946 
hide_3190();
function hide_3190() {
	var selector = "#obj2946";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_3190(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj3112_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_3191();
function runjs_3191() {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj3112").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj3112_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj3172 
playAudio_3193();
function playAudio_3193() {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj3172")[0];
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
		    window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj3112_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90102();
function switchText_90102() {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = obj3112_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj3164_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj3164_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj3164").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj3164_content");
			setTimeout(function () {
				window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj3164 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj3112_droppedInsideTargetActions_runningActionsCount = window.obj3112_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj3112_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj3112_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj3112_droppedInsideTargetActions_runningActionsCount == 0) {
	obj3112_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj3112_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj3112").trigger("obj3112_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 3112) {
				console.warn("de-queueing event obj3112." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj3112").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj3112_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65278_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65278_onTap_activeActionGroupIndex = -1;
		$("#obj65278").trigger("obj65278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65278) {
				console.warn("de-queueing event obj65278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65278_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65278 
hide_65281();
function hide_65281() {
	var selector = "#obj65278";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65278_onTap_runningActionsCount = obj65278_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65278_onTap_runningActionsCount = window.obj65278_onTap_runningActionsCount - 1;
if (window.obj65278_onTap_runningActionsCount < 0) {
	window.obj65278_onTap_runningActionsCount = 0;
} else if (window.obj65278_onTap_runningActionsCount == 0) {
	obj65278_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65281(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65278_onTap_runningActionsCount = window.obj65278_onTap_runningActionsCount - 1;
if (window.obj65278_onTap_runningActionsCount < 0) {
	window.obj65278_onTap_runningActionsCount = 0;
} else if (window.obj65278_onTap_runningActionsCount == 0) {
	obj65278_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65284 
stopMovie_65280();
function stopMovie_65280() {
	window.obj65278_onTap_runningActionsCount = obj65278_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65284")[0];
	myVideo.pause();
	window.obj65278_onTap_runningActionsCount = window.obj65278_onTap_runningActionsCount - 1;
if (window.obj65278_onTap_runningActionsCount < 0) {
	window.obj65278_onTap_runningActionsCount = 0;
} else if (window.obj65278_onTap_runningActionsCount == 0) {
	obj65278_onTap_actionGroup1();
}
}
















};
obj65278_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65278_onTap_activeActionGroupIndex = -1;
		$("#obj65278").trigger("obj65278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65278) {
				console.warn("de-queueing event obj65278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65278_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65270
(function(){
	window.obj65278_onTap_runningActionsCount = obj65278_onTap_runningActionsCount + 1;

	var selector = "#obj65270";
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
					window.obj65278_onTap_runningActionsCount = window.obj65278_onTap_runningActionsCount - 1;
if (window.obj65278_onTap_runningActionsCount < 0) {
	window.obj65278_onTap_runningActionsCount = 0;
} else if (window.obj65278_onTap_runningActionsCount == 0) {
	obj65278_onTap_actionGroup2();
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
				window.obj65278_onTap_runningActionsCount = window.obj65278_onTap_runningActionsCount - 1;
if (window.obj65278_onTap_runningActionsCount < 0) {
	window.obj65278_onTap_runningActionsCount = 0;
} else if (window.obj65278_onTap_runningActionsCount == 0) {
	obj65278_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65278_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65278_onTap_activeActionGroupIndex = -1;
		$("#obj65278").trigger("obj65278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65278) {
				console.warn("de-queueing event obj65278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65278_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65284 
move_65283();
function move_65283() {
	window.obj65278_onTap_runningActionsCount = obj65278_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65284");
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
			window.obj65278_onTap_runningActionsCount = window.obj65278_onTap_runningActionsCount - 1;
if (window.obj65278_onTap_runningActionsCount < 0) {
	window.obj65278_onTap_runningActionsCount = 0;
} else if (window.obj65278_onTap_runningActionsCount == 0) {
	obj65278_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65278_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65278_onTap_activeActionGroupIndex = -1;
		$("#obj65278").trigger("obj65278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65278) {
				console.warn("de-queueing event obj65278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65278_onTap_activeActionGroupIndex = 3;
	





















};
obj65270_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65270_onTap_activeActionGroupIndex = -1;
		$("#obj65270").trigger("obj65270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65270) {
				console.warn("de-queueing event obj65270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65270_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65270 
hide_65273();
function hide_65273() {
	var selector = "#obj65270";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65270_onTap_runningActionsCount = obj65270_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65270_onTap_runningActionsCount = window.obj65270_onTap_runningActionsCount - 1;
if (window.obj65270_onTap_runningActionsCount < 0) {
	window.obj65270_onTap_runningActionsCount = 0;
} else if (window.obj65270_onTap_runningActionsCount == 0) {
	obj65270_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65273(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65270_onTap_runningActionsCount = window.obj65270_onTap_runningActionsCount - 1;
if (window.obj65270_onTap_runningActionsCount < 0) {
	window.obj65270_onTap_runningActionsCount = 0;
} else if (window.obj65270_onTap_runningActionsCount == 0) {
	obj65270_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65284 
playPauseMovie_65272();
function playPauseMovie_65272() {
	window.obj65270_onTap_runningActionsCount = obj65270_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65284")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65270_onTap_runningActionsCount = window.obj65270_onTap_runningActionsCount - 1;
if (window.obj65270_onTap_runningActionsCount < 0) {
	window.obj65270_onTap_runningActionsCount = 0;
} else if (window.obj65270_onTap_runningActionsCount == 0) {
	obj65270_onTap_actionGroup1();
}
}

















};
obj65270_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65270_onTap_activeActionGroupIndex = -1;
		$("#obj65270").trigger("obj65270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65270) {
				console.warn("de-queueing event obj65270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65270_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65278
(function(){
	window.obj65270_onTap_runningActionsCount = obj65270_onTap_runningActionsCount + 1;

	var selector = "#obj65278";
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
					window.obj65270_onTap_runningActionsCount = window.obj65270_onTap_runningActionsCount - 1;
if (window.obj65270_onTap_runningActionsCount < 0) {
	window.obj65270_onTap_runningActionsCount = 0;
} else if (window.obj65270_onTap_runningActionsCount == 0) {
	obj65270_onTap_actionGroup2();
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
				window.obj65270_onTap_runningActionsCount = window.obj65270_onTap_runningActionsCount - 1;
if (window.obj65270_onTap_runningActionsCount < 0) {
	window.obj65270_onTap_runningActionsCount = 0;
} else if (window.obj65270_onTap_runningActionsCount == 0) {
	obj65270_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65270_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65270_onTap_activeActionGroupIndex = -1;
		$("#obj65270").trigger("obj65270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65270) {
				console.warn("de-queueing event obj65270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65270_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65284 
move_65275();
function move_65275() {
	window.obj65270_onTap_runningActionsCount = obj65270_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65284");
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
			window.obj65270_onTap_runningActionsCount = window.obj65270_onTap_runningActionsCount - 1;
if (window.obj65270_onTap_runningActionsCount < 0) {
	window.obj65270_onTap_runningActionsCount = 0;
} else if (window.obj65270_onTap_runningActionsCount == 0) {
	obj65270_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65270_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65270_onTap_activeActionGroupIndex = -1;
		$("#obj65270").trigger("obj65270_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65270) {
				console.warn("de-queueing event obj65270." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65270").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65270_onTap_activeActionGroupIndex = 3;
	





















};
obj87045_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87045_onTap_activeActionGroupIndex = -1;
		$("#obj87045").trigger("obj87045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87045) {
				console.warn("de-queueing event obj87045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87045_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87050 
stopAudio_87047();
function stopAudio_87047() {
	window.obj87045_onTap_runningActionsCount = obj87045_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87050")[0];
	myAudio.pause();
	window.obj87045_onTap_runningActionsCount = window.obj87045_onTap_runningActionsCount - 1;
if (window.obj87045_onTap_runningActionsCount < 0) {
	window.obj87045_onTap_runningActionsCount = 0;
} else if (window.obj87045_onTap_runningActionsCount == 0) {
	obj87045_onTap_actionGroup1();
}
}








};
obj87045_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87045_onTap_activeActionGroupIndex = -1;
		$("#obj87045").trigger("obj87045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87045) {
				console.warn("de-queueing event obj87045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87045_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87045 
hide_87048();
function hide_87048() {
	var selector = "#obj87045";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87045_onTap_runningActionsCount = obj87045_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87045_onTap_runningActionsCount = window.obj87045_onTap_runningActionsCount - 1;
if (window.obj87045_onTap_runningActionsCount < 0) {
	window.obj87045_onTap_runningActionsCount = 0;
} else if (window.obj87045_onTap_runningActionsCount == 0) {
	obj87045_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87048(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87045_onTap_runningActionsCount = window.obj87045_onTap_runningActionsCount - 1;
if (window.obj87045_onTap_runningActionsCount < 0) {
	window.obj87045_onTap_runningActionsCount = 0;
} else if (window.obj87045_onTap_runningActionsCount == 0) {
	obj87045_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87045_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87045_onTap_activeActionGroupIndex = -1;
		$("#obj87045").trigger("obj87045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87045) {
				console.warn("de-queueing event obj87045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87045_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87040
(function(){
	window.obj87045_onTap_runningActionsCount = obj87045_onTap_runningActionsCount + 1;

	var selector = "#obj87040";
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
					window.obj87045_onTap_runningActionsCount = window.obj87045_onTap_runningActionsCount - 1;
if (window.obj87045_onTap_runningActionsCount < 0) {
	window.obj87045_onTap_runningActionsCount = 0;
} else if (window.obj87045_onTap_runningActionsCount == 0) {
	obj87045_onTap_actionGroup3();
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
				window.obj87045_onTap_runningActionsCount = window.obj87045_onTap_runningActionsCount - 1;
if (window.obj87045_onTap_runningActionsCount < 0) {
	window.obj87045_onTap_runningActionsCount = 0;
} else if (window.obj87045_onTap_runningActionsCount == 0) {
	obj87045_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87045_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87045_onTap_activeActionGroupIndex = -1;
		$("#obj87045").trigger("obj87045_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87045) {
				console.warn("de-queueing event obj87045." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87045").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87045_onTap_activeActionGroupIndex = 3;
	





















};
obj87040_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87040_onTap_activeActionGroupIndex = -1;
		$("#obj87040").trigger("obj87040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87040) {
				console.warn("de-queueing event obj87040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87040_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87040 
hide_87042();
function hide_87042() {
	var selector = "#obj87040";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87040_onTap_runningActionsCount = obj87040_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87040_onTap_runningActionsCount = window.obj87040_onTap_runningActionsCount - 1;
if (window.obj87040_onTap_runningActionsCount < 0) {
	window.obj87040_onTap_runningActionsCount = 0;
} else if (window.obj87040_onTap_runningActionsCount == 0) {
	obj87040_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87042(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87040_onTap_runningActionsCount = window.obj87040_onTap_runningActionsCount - 1;
if (window.obj87040_onTap_runningActionsCount < 0) {
	window.obj87040_onTap_runningActionsCount = 0;
} else if (window.obj87040_onTap_runningActionsCount == 0) {
	obj87040_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87040_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87040_onTap_activeActionGroupIndex = -1;
		$("#obj87040").trigger("obj87040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87040) {
				console.warn("de-queueing event obj87040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87040_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87045
(function(){
	window.obj87040_onTap_runningActionsCount = obj87040_onTap_runningActionsCount + 1;

	var selector = "#obj87045";
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
					window.obj87040_onTap_runningActionsCount = window.obj87040_onTap_runningActionsCount - 1;
if (window.obj87040_onTap_runningActionsCount < 0) {
	window.obj87040_onTap_runningActionsCount = 0;
} else if (window.obj87040_onTap_runningActionsCount == 0) {
	obj87040_onTap_actionGroup2();
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
				window.obj87040_onTap_runningActionsCount = window.obj87040_onTap_runningActionsCount - 1;
if (window.obj87040_onTap_runningActionsCount < 0) {
	window.obj87040_onTap_runningActionsCount = 0;
} else if (window.obj87040_onTap_runningActionsCount == 0) {
	obj87040_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87040_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87040_onTap_activeActionGroupIndex = -1;
		$("#obj87040").trigger("obj87040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87040) {
				console.warn("de-queueing event obj87040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87040_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87050 
playAudio_87044();
function playAudio_87044() {
	window.obj87040_onTap_runningActionsCount = obj87040_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87050")[0];
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
		    window.obj87040_onTap_runningActionsCount = window.obj87040_onTap_runningActionsCount - 1;
if (window.obj87040_onTap_runningActionsCount < 0) {
	window.obj87040_onTap_runningActionsCount = 0;
} else if (window.obj87040_onTap_runningActionsCount == 0) {
	obj87040_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87040_onTap_runningActionsCount = window.obj87040_onTap_runningActionsCount - 1;
if (window.obj87040_onTap_runningActionsCount < 0) {
	window.obj87040_onTap_runningActionsCount = 0;
} else if (window.obj87040_onTap_runningActionsCount == 0) {
	obj87040_onTap_actionGroup3();
}
	}
}









};
obj87040_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87040_onTap_activeActionGroupIndex = -1;
		$("#obj87040").trigger("obj87040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87040) {
				console.warn("de-queueing event obj87040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87040_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2896: Event Touch Down
 *
 */
$("#obj2896").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2896_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2896_onTap is still running");
	return;
}
var obj2896_onTap_runningActionsCount = 0;
var obj2896_onTap_loopCount = 0;
obj2896_onTap_actionGroup0();
});










/*
 *
 *   obj2893: Event Touch Down
 *
 */
$("#obj2893").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2893_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2893_onTap is still running");
	return;
}
var obj2893_onTap_runningActionsCount = 0;
var obj2893_onTap_loopCount = 0;
obj2893_onTap_actionGroup0();
});










/*
 *
 *   obj2899: Event Touch Down
 *
 */
$("#obj2899").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2899_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2899_onTap is still running");
	return;
}
var obj2899_onTap_runningActionsCount = 0;
var obj2899_onTap_loopCount = 0;
obj2899_onTap_actionGroup0();
});





































































































































































































































































/*
 *
 *   obj2962: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2962");
	var winTarget = document.getElementById("obj2962");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2962").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2962_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2962_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2962_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2962_onTouchDown is still running");
	return;
}
var obj2962_onTouchDown_runningActionsCount = 0;
var obj2962_onTouchDown_loopCount = 0;
obj2962_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2962: Event SCActionDragDrop2965_droppedOutsideTargetActions
 *
 */
$("#obj2962").bind("SCActionDragDrop2965_droppedOutsideTargetActions", function(event) {
	if (window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2962_SCActionDragDrop2965_droppedOutsideTargetActions is still running");
	return;
}
var obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_loopCount = 0;
obj2962_SCActionDragDrop2965_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2962: Event droppedInsideTargetActions_4
 *
 */
$("#obj2962").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2962_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2962_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2962_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_4_loopCount = 0;
obj2962_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2962: Event droppedInsideTargetActions_3
 *
 */
$("#obj2962").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2962_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2962_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2962_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_3_loopCount = 0;
obj2962_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2962: Event droppedInsideTargetActions_2
 *
 */
$("#obj2962").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2962_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2962_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2962_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_2_loopCount = 0;
obj2962_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2962: Event droppedInsideTargetActions
 *
 */
$("#obj2962").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2962_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2962_droppedInsideTargetActions is still running");
	return;
}
var obj2962_droppedInsideTargetActions_runningActionsCount = 0;
var obj2962_droppedInsideTargetActions_loopCount = 0;
obj2962_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj3012: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3012");
	var winTarget = document.getElementById("obj3012");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3012").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3012_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3012_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3012_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3012_onTouchDown is still running");
	return;
}
var obj3012_onTouchDown_runningActionsCount = 0;
var obj3012_onTouchDown_loopCount = 0;
obj3012_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3012: Event SCActionDragDrop3015_droppedOutsideTargetActions
 *
 */
$("#obj3012").bind("SCActionDragDrop3015_droppedOutsideTargetActions", function(event) {
	if (window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3012_SCActionDragDrop3015_droppedOutsideTargetActions is still running");
	return;
}
var obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_loopCount = 0;
obj3012_SCActionDragDrop3015_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3012: Event droppedInsideTargetActions_4
 *
 */
$("#obj3012").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3012_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3012_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3012_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_4_loopCount = 0;
obj3012_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3012: Event droppedInsideTargetActions_3
 *
 */
$("#obj3012").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3012_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3012_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3012_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_3_loopCount = 0;
obj3012_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3012: Event droppedInsideTargetActions_2
 *
 */
$("#obj3012").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3012_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3012_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3012_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_2_loopCount = 0;
obj3012_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3012: Event droppedInsideTargetActions
 *
 */
$("#obj3012").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3012_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3012_droppedInsideTargetActions is still running");
	return;
}
var obj3012_droppedInsideTargetActions_runningActionsCount = 0;
var obj3012_droppedInsideTargetActions_loopCount = 0;
obj3012_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj3062: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3062");
	var winTarget = document.getElementById("obj3062");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3062").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3062_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3062_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3062_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3062_onTouchDown is still running");
	return;
}
var obj3062_onTouchDown_runningActionsCount = 0;
var obj3062_onTouchDown_loopCount = 0;
obj3062_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3062: Event SCActionDragDrop3065_droppedOutsideTargetActions
 *
 */
$("#obj3062").bind("SCActionDragDrop3065_droppedOutsideTargetActions", function(event) {
	if (window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3062_SCActionDragDrop3065_droppedOutsideTargetActions is still running");
	return;
}
var obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_loopCount = 0;
obj3062_SCActionDragDrop3065_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3062: Event droppedInsideTargetActions_4
 *
 */
$("#obj3062").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3062_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3062_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3062_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_4_loopCount = 0;
obj3062_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3062: Event droppedInsideTargetActions_3
 *
 */
$("#obj3062").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3062_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3062_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3062_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_3_loopCount = 0;
obj3062_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3062: Event droppedInsideTargetActions_2
 *
 */
$("#obj3062").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3062_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3062_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3062_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_2_loopCount = 0;
obj3062_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3062: Event droppedInsideTargetActions
 *
 */
$("#obj3062").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3062_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3062_droppedInsideTargetActions is still running");
	return;
}
var obj3062_droppedInsideTargetActions_runningActionsCount = 0;
var obj3062_droppedInsideTargetActions_loopCount = 0;
obj3062_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj3112: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj3112");
	var winTarget = document.getElementById("obj3112");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj3112").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj3112_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj3112_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj3112_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3112_onTouchDown is still running");
	return;
}
var obj3112_onTouchDown_runningActionsCount = 0;
var obj3112_onTouchDown_loopCount = 0;
obj3112_onTouchDown_actionGroup0();
});



/*
 *
 *   obj3112: Event SCActionDragDrop3115_droppedOutsideTargetActions
 *
 */
$("#obj3112").bind("SCActionDragDrop3115_droppedOutsideTargetActions", function(event) {
	if (window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3112_SCActionDragDrop3115_droppedOutsideTargetActions is still running");
	return;
}
var obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_runningActionsCount = 0;
var obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_loopCount = 0;
obj3112_SCActionDragDrop3115_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj3112: Event droppedInsideTargetActions_4
 *
 */
$("#obj3112").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj3112_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3112_droppedInsideTargetActions_4 is still running");
	return;
}
var obj3112_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_4_loopCount = 0;
obj3112_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj3112: Event droppedInsideTargetActions_3
 *
 */
$("#obj3112").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj3112_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3112_droppedInsideTargetActions_3 is still running");
	return;
}
var obj3112_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_3_loopCount = 0;
obj3112_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj3112: Event droppedInsideTargetActions_2
 *
 */
$("#obj3112").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj3112_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3112_droppedInsideTargetActions_2 is still running");
	return;
}
var obj3112_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_2_loopCount = 0;
obj3112_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj3112: Event droppedInsideTargetActions
 *
 */
$("#obj3112").bind("droppedInsideTargetActions", function(event) {
	if (window.obj3112_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj3112_droppedInsideTargetActions is still running");
	return;
}
var obj3112_droppedInsideTargetActions_runningActionsCount = 0;
var obj3112_droppedInsideTargetActions_loopCount = 0;
obj3112_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65278: Event Touch Down
 *
 */
$("#obj65278").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65278_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65278_onTap is still running");
	return;
}
var obj65278_onTap_runningActionsCount = 0;
var obj65278_onTap_loopCount = 0;
obj65278_onTap_actionGroup0();
});










/*
 *
 *   obj65270: Event Touch Down
 *
 */
$("#obj65270").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65270_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65270_onTap is still running");
	return;
}
var obj65270_onTap_runningActionsCount = 0;
var obj65270_onTap_loopCount = 0;
obj65270_onTap_actionGroup0();
});










/*
 *
 *   obj87045: Event Touch Down
 *
 */
$("#obj87045").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87045_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87045_onTap is still running");
	return;
}
var obj87045_onTap_runningActionsCount = 0;
var obj87045_onTap_loopCount = 0;
obj87045_onTap_actionGroup0();
});










/*
 *
 *   obj87040: Event Touch Down
 *
 */
$("#obj87040").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87040_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87040_onTap is still running");
	return;
}
var obj87040_onTap_runningActionsCount = 0;
var obj87040_onTap_loopCount = 0;
obj87040_onTap_actionGroup0();
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
	
$("#obj2891").trigger('SCEventShow');
$("#obj2896").trigger('SCEventShow');
$("#obj2893").trigger('SCEventShow');
$("#obj2899").trigger('SCEventShow');
$("#obj2920").trigger('SCEventShow');
$("#obj2916").trigger('SCEventShow');
$("#obj2918").trigger('SCEventShow');
$("#obj2922").trigger('SCEventShow');
$("#obj2924").trigger('SCEventShow');
$("#obj2930").trigger('SCEventShow');
$("#obj2936").trigger('SCEventShow');
$("#obj2938").trigger('SCEventShow');
$("#obj2940").trigger('SCEventShow');
$("#obj2942").trigger('SCEventShow');
$("#obj2928").trigger('SCEventShow');
$("#obj2926").trigger('SCEventShow');
$("#obj2948").trigger('SCEventShow');
$("#obj2944").trigger('SCEventShow');
$("#obj2946").trigger('SCEventShow');
$("#obj2954").trigger('SCEventShow');
$("#obj2950").trigger('SCEventShow');
$("#obj2952").trigger('SCEventShow');
$("#obj2960").trigger('SCEventShow');
$("#obj2956").trigger('SCEventShow');
$("#obj2958").trigger('SCEventShow');
$("#obj3162").trigger('SCEventShow');
$("#obj3164").trigger('SCEventShow');
$("#obj3171").trigger('SCEventShow');
$("#obj3172").trigger('SCEventShow');
$("#obj2962").trigger('SCEventShow');
$("#obj3012").trigger('SCEventShow');
$("#obj3062").trigger('SCEventShow');
$("#obj3112").trigger('SCEventShow');
$("#obj65278").trigger('SCEventShow');
$("#obj65270").trigger('SCEventShow');
$("#obj87045").trigger('SCEventShow');
$("#obj87040").trigger('SCEventShow');
$("#obj87050").trigger('SCEventShow');
$("#obj94669").trigger('SCEventShow');
$("#obj65284").trigger('SCEventShow');
	
});