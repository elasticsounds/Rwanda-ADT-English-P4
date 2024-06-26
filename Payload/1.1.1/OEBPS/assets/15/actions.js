pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 2161;
pubcoder.page.title = pubcoder.page.title || "15";
pubcoder.page.number = pubcoder.page.number || 15;
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
var obj2175_onTap_activeActionGroupIndex = -1;
var obj2175_onTap_runningActionsCount = 0;
var obj2175_onTap_loopCount = 0;
var obj2172_onTap_activeActionGroupIndex = -1;
var obj2172_onTap_runningActionsCount = 0;
var obj2172_onTap_loopCount = 0;
var obj2178_onTap_activeActionGroupIndex = -1;
var obj2178_onTap_runningActionsCount = 0;
var obj2178_onTap_loopCount = 0;
var obj2221_onDrag_activeActionGroupIndex = -1;
var obj2221_onDrag_runningActionsCount = 0;
var obj2221_onDrag_loopCount = 0;
var obj2221_onTouchDown_activeActionGroupIndex = -1;
var obj2221_onTouchDown_runningActionsCount = 0;
var obj2221_onTouchDown_loopCount = 0;
var obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_loopCount = 0;
var obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_4_loopCount = 0;
var obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_3_loopCount = 0;
var obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_2_loopCount = 0;
var obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2221_droppedInsideTargetActions_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_loopCount = 0;
var obj2223_onDrag_activeActionGroupIndex = -1;
var obj2223_onDrag_runningActionsCount = 0;
var obj2223_onDrag_loopCount = 0;
var obj2223_onTouchDown_activeActionGroupIndex = -1;
var obj2223_onTouchDown_runningActionsCount = 0;
var obj2223_onTouchDown_loopCount = 0;
var obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_loopCount = 0;
var obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_4_loopCount = 0;
var obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_3_loopCount = 0;
var obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_2_loopCount = 0;
var obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2223_droppedInsideTargetActions_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_loopCount = 0;
var obj2225_onDrag_activeActionGroupIndex = -1;
var obj2225_onDrag_runningActionsCount = 0;
var obj2225_onDrag_loopCount = 0;
var obj2225_onTouchDown_activeActionGroupIndex = -1;
var obj2225_onTouchDown_runningActionsCount = 0;
var obj2225_onTouchDown_loopCount = 0;
var obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_loopCount = 0;
var obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_4_loopCount = 0;
var obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_3_loopCount = 0;
var obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_2_loopCount = 0;
var obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2225_droppedInsideTargetActions_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_loopCount = 0;
var obj2227_onDrag_activeActionGroupIndex = -1;
var obj2227_onDrag_runningActionsCount = 0;
var obj2227_onDrag_loopCount = 0;
var obj2227_onTouchDown_activeActionGroupIndex = -1;
var obj2227_onTouchDown_runningActionsCount = 0;
var obj2227_onTouchDown_loopCount = 0;
var obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_loopCount = 0;
var obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_4_loopCount = 0;
var obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_3_loopCount = 0;
var obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_2_loopCount = 0;
var obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj2227_droppedInsideTargetActions_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_loopCount = 0;
var obj65198_onTap_activeActionGroupIndex = -1;
var obj65198_onTap_runningActionsCount = 0;
var obj65198_onTap_loopCount = 0;
var obj65190_onTap_activeActionGroupIndex = -1;
var obj65190_onTap_runningActionsCount = 0;
var obj65190_onTap_loopCount = 0;
var obj86977_onTap_activeActionGroupIndex = -1;
var obj86977_onTap_runningActionsCount = 0;
var obj86977_onTap_loopCount = 0;
var obj86972_onTap_activeActionGroupIndex = -1;
var obj86972_onTap_runningActionsCount = 0;
var obj86972_onTap_loopCount = 0;
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
		
obj2175_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2175_onTap_activeActionGroupIndex = -1;
		$("#obj2175").trigger("obj2175_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2175) {
				console.warn("de-queueing event obj2175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2175_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2177();
function goToPage_2177() {
	window.obj2175_onTap_runningActionsCount = obj2175_onTap_runningActionsCount + 1;
	$("#anchor97")[0].click();
	window.obj2175_onTap_runningActionsCount = window.obj2175_onTap_runningActionsCount - 1;
if (window.obj2175_onTap_runningActionsCount < 0) {
	window.obj2175_onTap_runningActionsCount = 0;
} else if (window.obj2175_onTap_runningActionsCount == 0) {
	obj2175_onTap_actionGroup1();
}
}





















};
obj2175_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2175_onTap_activeActionGroupIndex = -1;
		$("#obj2175").trigger("obj2175_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2175) {
				console.warn("de-queueing event obj2175." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2175").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2175_onTap_activeActionGroupIndex = 1;
	





















};
obj2172_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2172_onTap_activeActionGroupIndex = -1;
		$("#obj2172").trigger("obj2172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2172) {
				console.warn("de-queueing event obj2172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2172_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2174();
function goToPage_2174() {
	window.obj2172_onTap_runningActionsCount = obj2172_onTap_runningActionsCount + 1;
	$("#anchor98")[0].click();
	window.obj2172_onTap_runningActionsCount = window.obj2172_onTap_runningActionsCount - 1;
if (window.obj2172_onTap_runningActionsCount < 0) {
	window.obj2172_onTap_runningActionsCount = 0;
} else if (window.obj2172_onTap_runningActionsCount == 0) {
	obj2172_onTap_actionGroup1();
}
}





















};
obj2172_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2172_onTap_activeActionGroupIndex = -1;
		$("#obj2172").trigger("obj2172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2172) {
				console.warn("de-queueing event obj2172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2172_onTap_activeActionGroupIndex = 1;
	





















};
obj2178_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2178_onTap_activeActionGroupIndex = -1;
		$("#obj2178").trigger("obj2178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2178) {
				console.warn("de-queueing event obj2178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2178_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_2180();
function goToPage_2180() {
	window.obj2178_onTap_runningActionsCount = obj2178_onTap_runningActionsCount + 1;
	$("#anchor99")[0].click();
	window.obj2178_onTap_runningActionsCount = window.obj2178_onTap_runningActionsCount - 1;
if (window.obj2178_onTap_runningActionsCount < 0) {
	window.obj2178_onTap_runningActionsCount = 0;
} else if (window.obj2178_onTap_runningActionsCount == 0) {
	obj2178_onTap_actionGroup1();
}
}





















};
obj2178_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2178_onTap_activeActionGroupIndex = -1;
		$("#obj2178").trigger("obj2178_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2178) {
				console.warn("de-queueing event obj2178." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2178").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2178_onTap_activeActionGroupIndex = 1;
	





















};
obj2221_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2221");
//	action: dragDrop
//	target: obj2221 
dragDrop_2257();
function dragDrop_2257() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2221_onTouchDown_runningActionsCount = obj2221_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2221');
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
	  	containerNode = $('#obj2195');
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
    	window.obj2221_onTouchDown_runningActionsCount = window.obj2221_onTouchDown_runningActionsCount - 1;
if (window.obj2221_onTouchDown_runningActionsCount < 0) {
	window.obj2221_onTouchDown_runningActionsCount = 0;
} else if (window.obj2221_onTouchDown_runningActionsCount == 0) {
	obj2221_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2209","#obj2205","#obj2207","#obj2211");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2257 = false;
    	var dropped_id_2257;
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
					dropped_2257 = true;
					dropped_id_2257 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2257) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2221").trigger('SCActionDragDrop2257_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2221_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2221_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2221 
move_92118();
function move_92118() {
	window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount = obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2221");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount = window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2221_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2314();
function runjs_2314() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2315();
function runjs_2315() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#C00000"); $("#obj2211").css("border-width", "2px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2316();
function runjs_2316() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2221").css("border-color", "rgba(0,0,0,0)"); $("#obj2221").css("border-width", "0px"); $("#obj2221").css("border-style", "solid"); $("#obj2221").css("border-radius", "0px"); $("#obj2221").css("-webkit-border-radius", "0px"); $("#obj2221").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2219 
hide_2317();
function hide_2317() {
	var selector = "#obj2219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2317(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2221_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2318();
function switchText_2318() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2221 
move_2319();
function move_2319() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2221");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2221_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2320();
function runjs_2320() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2321();
function runjs_2321() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#000000"); $("#obj2211").css("border-width", "1px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2322();
function runjs_2322() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2221").css("border-color", "rgba(0,0,0,0)"); $("#obj2221").css("border-width", "0px"); $("#obj2221").css("border-style", "solid"); $("#obj2221").css("border-radius", "10px"); $("#obj2221").css("-webkit-border-radius", "10px"); $("#obj2221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2219
(function(){
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2219";
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
					window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2221_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2325();
function playAudio_2325() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2221_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2324();
function switchText_2324() {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = obj2221_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_4_runningActionsCount = window.obj2221_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2221_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2301();
function runjs_2301() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2302();
function runjs_2302() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#C00000"); $("#obj2207").css("border-width", "2px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2303();
function runjs_2303() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2221").css("border-color", "rgba(0,0,0,0)"); $("#obj2221").css("border-width", "0px"); $("#obj2221").css("border-style", "solid"); $("#obj2221").css("border-radius", "0px"); $("#obj2221").css("-webkit-border-radius", "0px"); $("#obj2221").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2215 
hide_2304();
function hide_2304() {
	var selector = "#obj2215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2304(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2221_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2305();
function switchText_2305() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2221 
move_2306();
function move_2306() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2221");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2221_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2307();
function runjs_2307() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2308();
function runjs_2308() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#000000"); $("#obj2207").css("border-width", "1px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2309();
function runjs_2309() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2221").css("border-color", "rgba(0,0,0,0)"); $("#obj2221").css("border-width", "0px"); $("#obj2221").css("border-style", "solid"); $("#obj2221").css("border-radius", "10px"); $("#obj2221").css("-webkit-border-radius", "10px"); $("#obj2221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2215
(function(){
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2215";
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
					window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2221_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2312();
function playAudio_2312() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2221_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2311();
function switchText_2311() {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = obj2221_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_3_runningActionsCount = window.obj2221_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2221_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2284();
function runjs_2284() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2285();
function runjs_2285() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#C00000"); $("#obj2205").css("border-width", "2px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2287();
function runjs_2287() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2221").css("border-color", "rgba(0,0,0,0)"); $("#obj2221").css("border-width", "0px"); $("#obj2221").css("border-style", "solid"); $("#obj2221").css("border-radius", "0px"); $("#obj2221").css("-webkit-border-radius", "0px"); $("#obj2221").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2213 
hide_2294();
function hide_2294() {
	var selector = "#obj2213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2294(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2221_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2286();
function switchText_2286() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2221 
move_2278();
function move_2278() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2221");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 69;
	var moveY = 645;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2221_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2288();
function runjs_2288() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2289();
function runjs_2289() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#000000"); $("#obj2205").css("border-width", "1px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2281();
function runjs_2281() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2221").css("border-color", "rgba(0,0,0,0)"); $("#obj2221").css("border-width", "0px"); $("#obj2221").css("border-style", "solid"); $("#obj2221").css("border-radius", "10px"); $("#obj2221").css("-webkit-border-radius", "10px"); $("#obj2221").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2213
(function(){
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2213";
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
					window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2221_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2283();
function playAudio_2283() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2221_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2282();
function switchText_2282() {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = obj2221_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_2_runningActionsCount = window.obj2221_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2221_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2259();
function runjs_2259() {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2263();
function switchText_2263() {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2260();
function runjs_2260() {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#058E3F"); $("#obj2209").css("border-width", "2px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2217 
hide_2261();
function hide_2261() {
	var selector = "#obj2217";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2261(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2221_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2262();
function runjs_2262() {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2221").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2221_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2244 
playAudio_2264();
function playAudio_2264() {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2244")[0];
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
		    window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2221_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90087();
function switchText_90087() {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = obj2221_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2221_droppedInsideTargetActions_runningActionsCount = window.obj2221_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2221_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2221_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2221_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2221_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2221_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2221").trigger("obj2221_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2221) {
				console.warn("de-queueing event obj2221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2221_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj2223_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2223");
//	action: dragDrop
//	target: obj2223 
dragDrop_2266();
function dragDrop_2266() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2223_onTouchDown_runningActionsCount = obj2223_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2223');
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
	  	containerNode = $('#obj2195');
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
    	window.obj2223_onTouchDown_runningActionsCount = window.obj2223_onTouchDown_runningActionsCount - 1;
if (window.obj2223_onTouchDown_runningActionsCount < 0) {
	window.obj2223_onTouchDown_runningActionsCount = 0;
} else if (window.obj2223_onTouchDown_runningActionsCount == 0) {
	obj2223_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2211","#obj2205","#obj2207","#obj2209");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2266 = false;
    	var dropped_id_2266;
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
					dropped_2266 = true;
					dropped_id_2266 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2266) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2223").trigger('SCActionDragDrop2266_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2223_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2223 
move_92120();
function move_92120() {
	window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount = obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2223");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 189;
	var moveY = 644;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount = window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2223_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2353();
function runjs_2353() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2354();
function runjs_2354() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#C00000"); $("#obj2209").css("border-width", "2px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2355();
function runjs_2355() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2223").css("border-color", "rgba(0,0,0,0)"); $("#obj2223").css("border-width", "0px"); $("#obj2223").css("border-style", "solid"); $("#obj2223").css("border-radius", "0px"); $("#obj2223").css("-webkit-border-radius", "0px"); $("#obj2223").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2217 
hide_2356();
function hide_2356() {
	var selector = "#obj2217";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2356(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2223_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2357();
function switchText_2357() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2223 
move_2358();
function move_2358() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2223");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 189;
	var moveY = 644;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2223_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2359();
function runjs_2359() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2360();
function runjs_2360() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#000000"); $("#obj2209").css("border-width", "1px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2361();
function runjs_2361() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2223").css("border-color", "rgba(0,0,0,0)"); $("#obj2223").css("border-width", "0px"); $("#obj2223").css("border-style", "solid"); $("#obj2223").css("border-radius", "10px"); $("#obj2223").css("-webkit-border-radius", "10px"); $("#obj2223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2217
(function(){
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2217";
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
					window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2223_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2364();
function playAudio_2364() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2223_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2363();
function switchText_2363() {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = obj2223_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_4_runningActionsCount = window.obj2223_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2223_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2340();
function runjs_2340() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2341();
function runjs_2341() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#C00000"); $("#obj2207").css("border-width", "2px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2342();
function runjs_2342() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2223").css("border-color", "rgba(0,0,0,0)"); $("#obj2223").css("border-width", "0px"); $("#obj2223").css("border-style", "solid"); $("#obj2223").css("border-radius", "0px"); $("#obj2223").css("-webkit-border-radius", "0px"); $("#obj2223").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2215 
hide_2343();
function hide_2343() {
	var selector = "#obj2215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2343(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2223_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2344();
function switchText_2344() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2223 
move_2345();
function move_2345() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2223");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 189;
	var moveY = 644;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2223_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2346();
function runjs_2346() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2347();
function runjs_2347() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#000000"); $("#obj2207").css("border-width", "1px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2348();
function runjs_2348() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2223").css("border-color", "rgba(0,0,0,0)"); $("#obj2223").css("border-width", "0px"); $("#obj2223").css("border-style", "solid"); $("#obj2223").css("border-radius", "10px"); $("#obj2223").css("-webkit-border-radius", "10px"); $("#obj2223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2215
(function(){
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2215";
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
					window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2223_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2351();
function playAudio_2351() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2223_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2350();
function switchText_2350() {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = obj2223_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_3_runningActionsCount = window.obj2223_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2223_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2327();
function runjs_2327() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2328();
function runjs_2328() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#C00000"); $("#obj2205").css("border-width", "2px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2329();
function runjs_2329() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2223").css("border-color", "rgba(0,0,0,0)"); $("#obj2223").css("border-width", "0px"); $("#obj2223").css("border-style", "solid"); $("#obj2223").css("border-radius", "0px"); $("#obj2223").css("-webkit-border-radius", "0px"); $("#obj2223").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2213 
hide_2330();
function hide_2330() {
	var selector = "#obj2213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2330(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2223_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2331();
function switchText_2331() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2223 
move_2332();
function move_2332() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2223");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 189;
	var moveY = 644;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2223_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2333();
function runjs_2333() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2334();
function runjs_2334() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#000000"); $("#obj2205").css("border-width", "1px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2335();
function runjs_2335() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2223").css("border-color", "rgba(0,0,0,0)"); $("#obj2223").css("border-width", "0px"); $("#obj2223").css("border-style", "solid"); $("#obj2223").css("border-radius", "10px"); $("#obj2223").css("-webkit-border-radius", "10px"); $("#obj2223").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2213
(function(){
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2213";
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
					window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2223_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2338();
function playAudio_2338() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2223_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2337();
function switchText_2337() {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = obj2223_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_2_runningActionsCount = window.obj2223_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2223_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2268();
function runjs_2268() {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2272();
function switchText_2272() {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2269();
function runjs_2269() {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#058E3F"); $("#obj2211").css("border-width", "2px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2219 
hide_2270();
function hide_2270() {
	var selector = "#obj2219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2270(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2223_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2271();
function runjs_2271() {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2223").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2223_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2244 
playAudio_2273();
function playAudio_2273() {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2244")[0];
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
		    window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2223_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90088();
function switchText_90088() {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = obj2223_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2223_droppedInsideTargetActions_runningActionsCount = window.obj2223_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2223_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2223_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2223_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2223_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2223_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2223").trigger("obj2223_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2223) {
				console.warn("de-queueing event obj2223." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2223").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2223_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj2225_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2225");
//	action: dragDrop
//	target: obj2225 
dragDrop_2235();
function dragDrop_2235() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2225_onTouchDown_runningActionsCount = obj2225_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2225');
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
	  	containerNode = $('#obj2195');
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
    	window.obj2225_onTouchDown_runningActionsCount = window.obj2225_onTouchDown_runningActionsCount - 1;
if (window.obj2225_onTouchDown_runningActionsCount < 0) {
	window.obj2225_onTouchDown_runningActionsCount = 0;
} else if (window.obj2225_onTouchDown_runningActionsCount == 0) {
	obj2225_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2205","#obj2207","#obj2209","#obj2211");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2235 = false;
    	var dropped_id_2235;
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
					dropped_2235 = true;
					dropped_id_2235 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2235) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2225").trigger('SCActionDragDrop2235_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2225_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2225_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2225 
move_92122();
function move_92122() {
	window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount = obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2225");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount = window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2225_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2392();
function runjs_2392() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2393();
function runjs_2393() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#C00000"); $("#obj2211").css("border-width", "2px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2394();
function runjs_2394() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2225").css("border-color", "rgba(0,0,0,0)"); $("#obj2225").css("border-width", "0px"); $("#obj2225").css("border-style", "solid"); $("#obj2225").css("border-radius", "0px"); $("#obj2225").css("-webkit-border-radius", "0px"); $("#obj2225").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2219 
hide_2395();
function hide_2395() {
	var selector = "#obj2219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2395(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2225_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2396();
function switchText_2396() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2225 
move_2397();
function move_2397() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2225");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2225_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2398();
function runjs_2398() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2399();
function runjs_2399() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#000000"); $("#obj2211").css("border-width", "1px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2400();
function runjs_2400() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2225").css("border-color", "rgba(0,0,0,0)"); $("#obj2225").css("border-width", "0px"); $("#obj2225").css("border-style", "solid"); $("#obj2225").css("border-radius", "10px"); $("#obj2225").css("-webkit-border-radius", "10px"); $("#obj2225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2219
(function(){
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2219";
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
					window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2225_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2403();
function playAudio_2403() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2225_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2402();
function switchText_2402() {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = obj2225_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_4_runningActionsCount = window.obj2225_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2225_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2379();
function runjs_2379() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2380();
function runjs_2380() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#C00000"); $("#obj2209").css("border-width", "2px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2381();
function runjs_2381() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2225").css("border-color", "rgba(0,0,0,0)"); $("#obj2225").css("border-width", "0px"); $("#obj2225").css("border-style", "solid"); $("#obj2225").css("border-radius", "0px"); $("#obj2225").css("-webkit-border-radius", "0px"); $("#obj2225").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2217 
hide_2382();
function hide_2382() {
	var selector = "#obj2217";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2382(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2225_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2383();
function switchText_2383() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2225 
move_2384();
function move_2384() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2225");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2225_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2385();
function runjs_2385() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2386();
function runjs_2386() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#000000"); $("#obj2209").css("border-width", "1px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2387();
function runjs_2387() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2225").css("border-color", "rgba(0,0,0,0)"); $("#obj2225").css("border-width", "0px"); $("#obj2225").css("border-style", "solid"); $("#obj2225").css("border-radius", "10px"); $("#obj2225").css("-webkit-border-radius", "10px"); $("#obj2225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2217
(function(){
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2217";
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
					window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2225_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2390();
function playAudio_2390() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2225_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2389();
function switchText_2389() {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = obj2225_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_3_runningActionsCount = window.obj2225_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2225_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2366();
function runjs_2366() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2207").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2367();
function runjs_2367() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#C00000"); $("#obj2207").css("border-width", "2px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2368();
function runjs_2368() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2225").css("border-color", "rgba(0,0,0,0)"); $("#obj2225").css("border-width", "0px"); $("#obj2225").css("border-style", "solid"); $("#obj2225").css("border-radius", "0px"); $("#obj2225").css("-webkit-border-radius", "0px"); $("#obj2225").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2215 
hide_2369();
function hide_2369() {
	var selector = "#obj2215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2369(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2225_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2370();
function switchText_2370() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2225 
move_2371();
function move_2371() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2225");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 643;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2225_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2372();
function runjs_2372() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2207").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2373();
function runjs_2373() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#000000"); $("#obj2207").css("border-width", "1px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2374();
function runjs_2374() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2225").css("border-color", "rgba(0,0,0,0)"); $("#obj2225").css("border-width", "0px"); $("#obj2225").css("border-style", "solid"); $("#obj2225").css("border-radius", "10px"); $("#obj2225").css("-webkit-border-radius", "10px"); $("#obj2225").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2215
(function(){
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2215";
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
					window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2225_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2377();
function playAudio_2377() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2225_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2376();
function switchText_2376() {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = obj2225_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_2_runningActionsCount = window.obj2225_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2225_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2237();
function runjs_2237() {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2205").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2241();
function switchText_2241() {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2238();
function runjs_2238() {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#058E3F"); $("#obj2205").css("border-width", "2px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2213 
hide_2239();
function hide_2239() {
	var selector = "#obj2213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2239(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2225_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2240();
function runjs_2240() {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2225").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2225_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2244 
playAudio_2242();
function playAudio_2242() {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2244")[0];
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
		    window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2225_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90089();
function switchText_90089() {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = obj2225_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2225_droppedInsideTargetActions_runningActionsCount = window.obj2225_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2225_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2225_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2225_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2225_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2225_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2225").trigger("obj2225_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2225) {
				console.warn("de-queueing event obj2225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2225_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj2227_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj2227");
//	action: dragDrop
//	target: obj2227 
dragDrop_2248();
function dragDrop_2248() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj2227_onTouchDown_runningActionsCount = obj2227_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj2227');
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
	  	containerNode = $('#obj2195');
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
    	window.obj2227_onTouchDown_runningActionsCount = window.obj2227_onTouchDown_runningActionsCount - 1;
if (window.obj2227_onTouchDown_runningActionsCount < 0) {
	window.obj2227_onTouchDown_runningActionsCount = 0;
} else if (window.obj2227_onTouchDown_runningActionsCount == 0) {
	obj2227_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj2207","#obj2205","#obj2209","#obj2211");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_2248 = false;
    	var dropped_id_2248;
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
					dropped_2248 = true;
					dropped_id_2248 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_2248) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj2227").trigger('SCActionDragDrop2248_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj2227_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2227_onTouchDown_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj2227 
move_92124();
function move_92124() {
	window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount = obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj2227");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 424;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount = window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj2227_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2431();
function runjs_2431() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2432();
function runjs_2432() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#C00000"); $("#obj2211").css("border-width", "2px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2433();
function runjs_2433() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2227").css("border-color", "rgba(0,0,0,0)"); $("#obj2227").css("border-width", "0px"); $("#obj2227").css("border-style", "solid"); $("#obj2227").css("border-radius", "0px"); $("#obj2227").css("-webkit-border-radius", "0px"); $("#obj2227").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup3();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2219 
hide_2434();
function hide_2434() {
	var selector = "#obj2219";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2434(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2227_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2435();
function switchText_2435() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2227 
move_2436();
function move_2436() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj2227");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 424;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj2227_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2437();
function runjs_2437() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2438();
function runjs_2438() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2211").css("border-color", "#000000"); $("#obj2211").css("border-width", "1px"); $("#obj2211").css("border-style", "solid"); $("#obj2211").css("border-radius", "10px"); $("#obj2211").css("-webkit-border-radius", "10px"); $("#obj2211").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2439();
function runjs_2439() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj2227").css("border-color", "rgba(0,0,0,0)"); $("#obj2227").css("border-width", "0px"); $("#obj2227").css("border-style", "solid"); $("#obj2227").css("border-radius", "10px"); $("#obj2227").css("-webkit-border-radius", "10px"); $("#obj2227").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup9();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2219
(function(){
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj2219";
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
					window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup10();
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
				window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2227_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2442();
function playAudio_2442() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup11();
}
	}
}









};
obj2227_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2441();
function switchText_2441() {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = obj2227_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_4_runningActionsCount = window.obj2227_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_4_actionGroup12();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	





















};
obj2227_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2418();
function runjs_2418() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2419();
function runjs_2419() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#C00000"); $("#obj2209").css("border-width", "2px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2420();
function runjs_2420() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2227").css("border-color", "rgba(0,0,0,0)"); $("#obj2227").css("border-width", "0px"); $("#obj2227").css("border-style", "solid"); $("#obj2227").css("border-radius", "0px"); $("#obj2227").css("-webkit-border-radius", "0px"); $("#obj2227").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup3();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2217 
hide_2421();
function hide_2421() {
	var selector = "#obj2217";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2421(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2227_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2422();
function switchText_2422() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2227 
move_2423();
function move_2423() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj2227");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 424;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj2227_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2424();
function runjs_2424() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2425();
function runjs_2425() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2209").css("border-color", "#000000"); $("#obj2209").css("border-width", "1px"); $("#obj2209").css("border-style", "solid"); $("#obj2209").css("border-radius", "10px"); $("#obj2209").css("-webkit-border-radius", "10px"); $("#obj2209").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2426();
function runjs_2426() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj2227").css("border-color", "rgba(0,0,0,0)"); $("#obj2227").css("border-width", "0px"); $("#obj2227").css("border-style", "solid"); $("#obj2227").css("border-radius", "10px"); $("#obj2227").css("-webkit-border-radius", "10px"); $("#obj2227").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup9();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2217
(function(){
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj2217";
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
					window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup10();
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
				window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2227_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2429();
function playAudio_2429() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup11();
}
	}
}









};
obj2227_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2428();
function switchText_2428() {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = obj2227_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_3_runningActionsCount = window.obj2227_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_3_actionGroup12();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	





















};
obj2227_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2405();
function runjs_2405() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2406();
function runjs_2406() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#C00000"); $("#obj2205").css("border-width", "2px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2407();
function runjs_2407() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2227").css("border-color", "rgba(0,0,0,0)"); $("#obj2227").css("border-width", "0px"); $("#obj2227").css("border-style", "solid"); $("#obj2227").css("border-radius", "0px"); $("#obj2227").css("-webkit-border-radius", "0px"); $("#obj2227").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup3();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2213 
hide_2408();
function hide_2408() {
	var selector = "#obj2213";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2227_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_2409();
function switchText_2409() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj2227 
move_2410();
function move_2410() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj2227");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 424;
	var moveY = 641;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj2227_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2411();
function runjs_2411() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_2412();
function runjs_2412() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2205").css("border-color", "#000000"); $("#obj2205").css("border-width", "1px"); $("#obj2205").css("border-style", "solid"); $("#obj2205").css("border-radius", "10px"); $("#obj2205").css("-webkit-border-radius", "10px"); $("#obj2205").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	















//	action: Run JavaScript
runjs_2413();
function runjs_2413() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj2227").css("border-color", "rgba(0,0,0,0)"); $("#obj2227").css("border-width", "0px"); $("#obj2227").css("border-style", "solid"); $("#obj2227").css("border-radius", "10px"); $("#obj2227").css("-webkit-border-radius", "10px"); $("#obj2227").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup9();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	

//	action: show 
//	selector: #obj2213
(function(){
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj2213";
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
					window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup10();
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
				window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup10();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj2227_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	












//	action: playAudio
//	target: obj2243 
playAudio_2416();
function playAudio_2416() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj2243")[0];
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
		    window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup11();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup11();
}
	}
}









};
obj2227_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	















//	action: Switch Text
switchText_2415();
function switchText_2415() {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = obj2227_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup12();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_2_runningActionsCount = window.obj2227_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_2_actionGroup12();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	





















};
obj2227_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2250();
function runjs_2250() {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2207").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_2254();
function switchText_2254() {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_2251();
function runjs_2251() {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2207").css("border-color", "#058E3F"); $("#obj2207").css("border-width", "2px"); $("#obj2207").css("border-style", "solid"); $("#obj2207").css("border-radius", "10px"); $("#obj2207").css("-webkit-border-radius", "10px"); $("#obj2207").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj2215 
hide_2252();
function hide_2252() {
	var selector = "#obj2215";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_2252(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj2227_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2253();
function runjs_2253() {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj2227").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj2227_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj2244 
playAudio_2255();
function playAudio_2255() {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj2244")[0];
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
		    window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj2227_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90090();
function switchText_90090() {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = obj2227_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj2232_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj2232_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj2232").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj2232_content");
			setTimeout(function () {
				window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj2232 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj2227_droppedInsideTargetActions_runningActionsCount = window.obj2227_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj2227_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj2227_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj2227_droppedInsideTargetActions_runningActionsCount == 0) {
	obj2227_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj2227_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj2227").trigger("obj2227_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 2227) {
				console.warn("de-queueing event obj2227." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj2227").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj2227_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj65198_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65198_onTap_activeActionGroupIndex = -1;
		$("#obj65198").trigger("obj65198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65198) {
				console.warn("de-queueing event obj65198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65198_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65198 
hide_65201();
function hide_65201() {
	var selector = "#obj65198";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65198_onTap_runningActionsCount = obj65198_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65198_onTap_runningActionsCount = window.obj65198_onTap_runningActionsCount - 1;
if (window.obj65198_onTap_runningActionsCount < 0) {
	window.obj65198_onTap_runningActionsCount = 0;
} else if (window.obj65198_onTap_runningActionsCount == 0) {
	obj65198_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65201(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65198_onTap_runningActionsCount = window.obj65198_onTap_runningActionsCount - 1;
if (window.obj65198_onTap_runningActionsCount < 0) {
	window.obj65198_onTap_runningActionsCount = 0;
} else if (window.obj65198_onTap_runningActionsCount == 0) {
	obj65198_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65204 
stopMovie_65200();
function stopMovie_65200() {
	window.obj65198_onTap_runningActionsCount = obj65198_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65204")[0];
	myVideo.pause();
	window.obj65198_onTap_runningActionsCount = window.obj65198_onTap_runningActionsCount - 1;
if (window.obj65198_onTap_runningActionsCount < 0) {
	window.obj65198_onTap_runningActionsCount = 0;
} else if (window.obj65198_onTap_runningActionsCount == 0) {
	obj65198_onTap_actionGroup1();
}
}
















};
obj65198_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65198_onTap_activeActionGroupIndex = -1;
		$("#obj65198").trigger("obj65198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65198) {
				console.warn("de-queueing event obj65198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65198_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65190
(function(){
	window.obj65198_onTap_runningActionsCount = obj65198_onTap_runningActionsCount + 1;

	var selector = "#obj65190";
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
					window.obj65198_onTap_runningActionsCount = window.obj65198_onTap_runningActionsCount - 1;
if (window.obj65198_onTap_runningActionsCount < 0) {
	window.obj65198_onTap_runningActionsCount = 0;
} else if (window.obj65198_onTap_runningActionsCount == 0) {
	obj65198_onTap_actionGroup2();
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
				window.obj65198_onTap_runningActionsCount = window.obj65198_onTap_runningActionsCount - 1;
if (window.obj65198_onTap_runningActionsCount < 0) {
	window.obj65198_onTap_runningActionsCount = 0;
} else if (window.obj65198_onTap_runningActionsCount == 0) {
	obj65198_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65198_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65198_onTap_activeActionGroupIndex = -1;
		$("#obj65198").trigger("obj65198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65198) {
				console.warn("de-queueing event obj65198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65198_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65204 
move_65203();
function move_65203() {
	window.obj65198_onTap_runningActionsCount = obj65198_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65204");
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
			window.obj65198_onTap_runningActionsCount = window.obj65198_onTap_runningActionsCount - 1;
if (window.obj65198_onTap_runningActionsCount < 0) {
	window.obj65198_onTap_runningActionsCount = 0;
} else if (window.obj65198_onTap_runningActionsCount == 0) {
	obj65198_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65198_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65198_onTap_activeActionGroupIndex = -1;
		$("#obj65198").trigger("obj65198_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65198) {
				console.warn("de-queueing event obj65198." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65198").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65198_onTap_activeActionGroupIndex = 3;
	





















};
obj65190_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65190_onTap_activeActionGroupIndex = -1;
		$("#obj65190").trigger("obj65190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65190) {
				console.warn("de-queueing event obj65190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65190_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65190 
hide_65193();
function hide_65193() {
	var selector = "#obj65190";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65190_onTap_runningActionsCount = obj65190_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65190_onTap_runningActionsCount = window.obj65190_onTap_runningActionsCount - 1;
if (window.obj65190_onTap_runningActionsCount < 0) {
	window.obj65190_onTap_runningActionsCount = 0;
} else if (window.obj65190_onTap_runningActionsCount == 0) {
	obj65190_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65193(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65190_onTap_runningActionsCount = window.obj65190_onTap_runningActionsCount - 1;
if (window.obj65190_onTap_runningActionsCount < 0) {
	window.obj65190_onTap_runningActionsCount = 0;
} else if (window.obj65190_onTap_runningActionsCount == 0) {
	obj65190_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65204 
playPauseMovie_65192();
function playPauseMovie_65192() {
	window.obj65190_onTap_runningActionsCount = obj65190_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65204")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65190_onTap_runningActionsCount = window.obj65190_onTap_runningActionsCount - 1;
if (window.obj65190_onTap_runningActionsCount < 0) {
	window.obj65190_onTap_runningActionsCount = 0;
} else if (window.obj65190_onTap_runningActionsCount == 0) {
	obj65190_onTap_actionGroup1();
}
}

















};
obj65190_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65190_onTap_activeActionGroupIndex = -1;
		$("#obj65190").trigger("obj65190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65190) {
				console.warn("de-queueing event obj65190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65190_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65198
(function(){
	window.obj65190_onTap_runningActionsCount = obj65190_onTap_runningActionsCount + 1;

	var selector = "#obj65198";
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
					window.obj65190_onTap_runningActionsCount = window.obj65190_onTap_runningActionsCount - 1;
if (window.obj65190_onTap_runningActionsCount < 0) {
	window.obj65190_onTap_runningActionsCount = 0;
} else if (window.obj65190_onTap_runningActionsCount == 0) {
	obj65190_onTap_actionGroup2();
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
				window.obj65190_onTap_runningActionsCount = window.obj65190_onTap_runningActionsCount - 1;
if (window.obj65190_onTap_runningActionsCount < 0) {
	window.obj65190_onTap_runningActionsCount = 0;
} else if (window.obj65190_onTap_runningActionsCount == 0) {
	obj65190_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65190_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65190_onTap_activeActionGroupIndex = -1;
		$("#obj65190").trigger("obj65190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65190) {
				console.warn("de-queueing event obj65190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65190_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65204 
move_65195();
function move_65195() {
	window.obj65190_onTap_runningActionsCount = obj65190_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65204");
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
			window.obj65190_onTap_runningActionsCount = window.obj65190_onTap_runningActionsCount - 1;
if (window.obj65190_onTap_runningActionsCount < 0) {
	window.obj65190_onTap_runningActionsCount = 0;
} else if (window.obj65190_onTap_runningActionsCount == 0) {
	obj65190_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65190_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65190_onTap_activeActionGroupIndex = -1;
		$("#obj65190").trigger("obj65190_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65190) {
				console.warn("de-queueing event obj65190." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65190").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65190_onTap_activeActionGroupIndex = 3;
	





















};
obj86977_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86977_onTap_activeActionGroupIndex = -1;
		$("#obj86977").trigger("obj86977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86977) {
				console.warn("de-queueing event obj86977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86977_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86982 
stopAudio_86979();
function stopAudio_86979() {
	window.obj86977_onTap_runningActionsCount = obj86977_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86982")[0];
	myAudio.pause();
	window.obj86977_onTap_runningActionsCount = window.obj86977_onTap_runningActionsCount - 1;
if (window.obj86977_onTap_runningActionsCount < 0) {
	window.obj86977_onTap_runningActionsCount = 0;
} else if (window.obj86977_onTap_runningActionsCount == 0) {
	obj86977_onTap_actionGroup1();
}
}








};
obj86977_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86977_onTap_activeActionGroupIndex = -1;
		$("#obj86977").trigger("obj86977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86977) {
				console.warn("de-queueing event obj86977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86977_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86977 
hide_86980();
function hide_86980() {
	var selector = "#obj86977";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86977_onTap_runningActionsCount = obj86977_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86977_onTap_runningActionsCount = window.obj86977_onTap_runningActionsCount - 1;
if (window.obj86977_onTap_runningActionsCount < 0) {
	window.obj86977_onTap_runningActionsCount = 0;
} else if (window.obj86977_onTap_runningActionsCount == 0) {
	obj86977_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86980(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86977_onTap_runningActionsCount = window.obj86977_onTap_runningActionsCount - 1;
if (window.obj86977_onTap_runningActionsCount < 0) {
	window.obj86977_onTap_runningActionsCount = 0;
} else if (window.obj86977_onTap_runningActionsCount == 0) {
	obj86977_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86977_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86977_onTap_activeActionGroupIndex = -1;
		$("#obj86977").trigger("obj86977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86977) {
				console.warn("de-queueing event obj86977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86977_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86972
(function(){
	window.obj86977_onTap_runningActionsCount = obj86977_onTap_runningActionsCount + 1;

	var selector = "#obj86972";
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
					window.obj86977_onTap_runningActionsCount = window.obj86977_onTap_runningActionsCount - 1;
if (window.obj86977_onTap_runningActionsCount < 0) {
	window.obj86977_onTap_runningActionsCount = 0;
} else if (window.obj86977_onTap_runningActionsCount == 0) {
	obj86977_onTap_actionGroup3();
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
				window.obj86977_onTap_runningActionsCount = window.obj86977_onTap_runningActionsCount - 1;
if (window.obj86977_onTap_runningActionsCount < 0) {
	window.obj86977_onTap_runningActionsCount = 0;
} else if (window.obj86977_onTap_runningActionsCount == 0) {
	obj86977_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86977_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86977_onTap_activeActionGroupIndex = -1;
		$("#obj86977").trigger("obj86977_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86977) {
				console.warn("de-queueing event obj86977." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86977").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86977_onTap_activeActionGroupIndex = 3;
	





















};
obj86972_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86972_onTap_activeActionGroupIndex = -1;
		$("#obj86972").trigger("obj86972_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86972) {
				console.warn("de-queueing event obj86972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86972_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86972 
hide_86974();
function hide_86974() {
	var selector = "#obj86972";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86972_onTap_runningActionsCount = obj86972_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86972_onTap_runningActionsCount = window.obj86972_onTap_runningActionsCount - 1;
if (window.obj86972_onTap_runningActionsCount < 0) {
	window.obj86972_onTap_runningActionsCount = 0;
} else if (window.obj86972_onTap_runningActionsCount == 0) {
	obj86972_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86974(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86972_onTap_runningActionsCount = window.obj86972_onTap_runningActionsCount - 1;
if (window.obj86972_onTap_runningActionsCount < 0) {
	window.obj86972_onTap_runningActionsCount = 0;
} else if (window.obj86972_onTap_runningActionsCount == 0) {
	obj86972_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86972_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86972_onTap_activeActionGroupIndex = -1;
		$("#obj86972").trigger("obj86972_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86972) {
				console.warn("de-queueing event obj86972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86972_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86977
(function(){
	window.obj86972_onTap_runningActionsCount = obj86972_onTap_runningActionsCount + 1;

	var selector = "#obj86977";
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
					window.obj86972_onTap_runningActionsCount = window.obj86972_onTap_runningActionsCount - 1;
if (window.obj86972_onTap_runningActionsCount < 0) {
	window.obj86972_onTap_runningActionsCount = 0;
} else if (window.obj86972_onTap_runningActionsCount == 0) {
	obj86972_onTap_actionGroup2();
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
				window.obj86972_onTap_runningActionsCount = window.obj86972_onTap_runningActionsCount - 1;
if (window.obj86972_onTap_runningActionsCount < 0) {
	window.obj86972_onTap_runningActionsCount = 0;
} else if (window.obj86972_onTap_runningActionsCount == 0) {
	obj86972_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86972_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86972_onTap_activeActionGroupIndex = -1;
		$("#obj86972").trigger("obj86972_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86972) {
				console.warn("de-queueing event obj86972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86972_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86982 
playAudio_86976();
function playAudio_86976() {
	window.obj86972_onTap_runningActionsCount = obj86972_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86982")[0];
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
		    window.obj86972_onTap_runningActionsCount = window.obj86972_onTap_runningActionsCount - 1;
if (window.obj86972_onTap_runningActionsCount < 0) {
	window.obj86972_onTap_runningActionsCount = 0;
} else if (window.obj86972_onTap_runningActionsCount == 0) {
	obj86972_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86972_onTap_runningActionsCount = window.obj86972_onTap_runningActionsCount - 1;
if (window.obj86972_onTap_runningActionsCount < 0) {
	window.obj86972_onTap_runningActionsCount = 0;
} else if (window.obj86972_onTap_runningActionsCount == 0) {
	obj86972_onTap_actionGroup3();
}
	}
}









};
obj86972_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86972_onTap_activeActionGroupIndex = -1;
		$("#obj86972").trigger("obj86972_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86972) {
				console.warn("de-queueing event obj86972." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86972").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86972_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj2175: Event Touch Down
 *
 */
$("#obj2175").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2175_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2175_onTap is still running");
	return;
}
var obj2175_onTap_runningActionsCount = 0;
var obj2175_onTap_loopCount = 0;
obj2175_onTap_actionGroup0();
});










/*
 *
 *   obj2172: Event Touch Down
 *
 */
$("#obj2172").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2172_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2172_onTap is still running");
	return;
}
var obj2172_onTap_runningActionsCount = 0;
var obj2172_onTap_loopCount = 0;
obj2172_onTap_actionGroup0();
});










/*
 *
 *   obj2178: Event Touch Down
 *
 */
$("#obj2178").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj2178_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2178_onTap is still running");
	return;
}
var obj2178_onTap_runningActionsCount = 0;
var obj2178_onTap_loopCount = 0;
obj2178_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj2221: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2221");
	var winTarget = document.getElementById("obj2221");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2221").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2221_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2221_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2221_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2221_onTouchDown is still running");
	return;
}
var obj2221_onTouchDown_runningActionsCount = 0;
var obj2221_onTouchDown_loopCount = 0;
obj2221_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2221: Event SCActionDragDrop2257_droppedOutsideTargetActions
 *
 */
$("#obj2221").bind("SCActionDragDrop2257_droppedOutsideTargetActions", function(event) {
	if (window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2221_SCActionDragDrop2257_droppedOutsideTargetActions is still running");
	return;
}
var obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_loopCount = 0;
obj2221_SCActionDragDrop2257_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2221: Event droppedInsideTargetActions_4
 *
 */
$("#obj2221").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2221_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2221_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2221_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_4_loopCount = 0;
obj2221_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2221: Event droppedInsideTargetActions_3
 *
 */
$("#obj2221").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2221_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2221_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2221_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_3_loopCount = 0;
obj2221_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2221: Event droppedInsideTargetActions_2
 *
 */
$("#obj2221").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2221_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2221_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2221_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_2_loopCount = 0;
obj2221_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2221: Event droppedInsideTargetActions
 *
 */
$("#obj2221").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2221_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2221_droppedInsideTargetActions is still running");
	return;
}
var obj2221_droppedInsideTargetActions_runningActionsCount = 0;
var obj2221_droppedInsideTargetActions_loopCount = 0;
obj2221_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj2223: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2223");
	var winTarget = document.getElementById("obj2223");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2223").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2223_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2223_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2223_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_onTouchDown is still running");
	return;
}
var obj2223_onTouchDown_runningActionsCount = 0;
var obj2223_onTouchDown_loopCount = 0;
obj2223_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2223: Event SCActionDragDrop2266_droppedOutsideTargetActions
 *
 */
$("#obj2223").bind("SCActionDragDrop2266_droppedOutsideTargetActions", function(event) {
	if (window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_SCActionDragDrop2266_droppedOutsideTargetActions is still running");
	return;
}
var obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_loopCount = 0;
obj2223_SCActionDragDrop2266_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2223: Event droppedInsideTargetActions_4
 *
 */
$("#obj2223").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2223_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2223_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_4_loopCount = 0;
obj2223_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2223: Event droppedInsideTargetActions_3
 *
 */
$("#obj2223").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2223_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2223_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_3_loopCount = 0;
obj2223_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2223: Event droppedInsideTargetActions_2
 *
 */
$("#obj2223").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2223_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2223_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_2_loopCount = 0;
obj2223_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2223: Event droppedInsideTargetActions
 *
 */
$("#obj2223").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2223_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2223_droppedInsideTargetActions is still running");
	return;
}
var obj2223_droppedInsideTargetActions_runningActionsCount = 0;
var obj2223_droppedInsideTargetActions_loopCount = 0;
obj2223_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj2225: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2225");
	var winTarget = document.getElementById("obj2225");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2225").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2225_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2225_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2225_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2225_onTouchDown is still running");
	return;
}
var obj2225_onTouchDown_runningActionsCount = 0;
var obj2225_onTouchDown_loopCount = 0;
obj2225_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2225: Event SCActionDragDrop2235_droppedOutsideTargetActions
 *
 */
$("#obj2225").bind("SCActionDragDrop2235_droppedOutsideTargetActions", function(event) {
	if (window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2225_SCActionDragDrop2235_droppedOutsideTargetActions is still running");
	return;
}
var obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_loopCount = 0;
obj2225_SCActionDragDrop2235_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2225: Event droppedInsideTargetActions_4
 *
 */
$("#obj2225").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2225_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2225_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2225_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_4_loopCount = 0;
obj2225_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2225: Event droppedInsideTargetActions_3
 *
 */
$("#obj2225").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2225_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2225_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2225_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_3_loopCount = 0;
obj2225_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2225: Event droppedInsideTargetActions_2
 *
 */
$("#obj2225").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2225_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2225_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2225_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_2_loopCount = 0;
obj2225_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2225: Event droppedInsideTargetActions
 *
 */
$("#obj2225").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2225_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2225_droppedInsideTargetActions is still running");
	return;
}
var obj2225_droppedInsideTargetActions_runningActionsCount = 0;
var obj2225_droppedInsideTargetActions_loopCount = 0;
obj2225_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj2227: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj2227");
	var winTarget = document.getElementById("obj2227");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj2227").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj2227_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj2227_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj2227_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2227_onTouchDown is still running");
	return;
}
var obj2227_onTouchDown_runningActionsCount = 0;
var obj2227_onTouchDown_loopCount = 0;
obj2227_onTouchDown_actionGroup0();
});



/*
 *
 *   obj2227: Event SCActionDragDrop2248_droppedOutsideTargetActions
 *
 */
$("#obj2227").bind("SCActionDragDrop2248_droppedOutsideTargetActions", function(event) {
	if (window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2227_SCActionDragDrop2248_droppedOutsideTargetActions is still running");
	return;
}
var obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_runningActionsCount = 0;
var obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_loopCount = 0;
obj2227_SCActionDragDrop2248_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj2227: Event droppedInsideTargetActions_4
 *
 */
$("#obj2227").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj2227_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2227_droppedInsideTargetActions_4 is still running");
	return;
}
var obj2227_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_4_loopCount = 0;
obj2227_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj2227: Event droppedInsideTargetActions_3
 *
 */
$("#obj2227").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj2227_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2227_droppedInsideTargetActions_3 is still running");
	return;
}
var obj2227_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_3_loopCount = 0;
obj2227_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj2227: Event droppedInsideTargetActions_2
 *
 */
$("#obj2227").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj2227_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2227_droppedInsideTargetActions_2 is still running");
	return;
}
var obj2227_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_2_loopCount = 0;
obj2227_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj2227: Event droppedInsideTargetActions
 *
 */
$("#obj2227").bind("droppedInsideTargetActions", function(event) {
	if (window.obj2227_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj2227_droppedInsideTargetActions is still running");
	return;
}
var obj2227_droppedInsideTargetActions_runningActionsCount = 0;
var obj2227_droppedInsideTargetActions_loopCount = 0;
obj2227_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65198: Event Touch Down
 *
 */
$("#obj65198").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65198_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65198_onTap is still running");
	return;
}
var obj65198_onTap_runningActionsCount = 0;
var obj65198_onTap_loopCount = 0;
obj65198_onTap_actionGroup0();
});










/*
 *
 *   obj65190: Event Touch Down
 *
 */
$("#obj65190").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65190_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65190_onTap is still running");
	return;
}
var obj65190_onTap_runningActionsCount = 0;
var obj65190_onTap_loopCount = 0;
obj65190_onTap_actionGroup0();
});










/*
 *
 *   obj86977: Event Touch Down
 *
 */
$("#obj86977").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86977_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86977_onTap is still running");
	return;
}
var obj86977_onTap_runningActionsCount = 0;
var obj86977_onTap_loopCount = 0;
obj86977_onTap_actionGroup0();
});










/*
 *
 *   obj86972: Event Touch Down
 *
 */
$("#obj86972").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86972_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86972_onTap is still running");
	return;
}
var obj86972_onTap_runningActionsCount = 0;
var obj86972_onTap_loopCount = 0;
obj86972_onTap_actionGroup0();
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
	
$("#obj2170").trigger('SCEventShow');
$("#obj2175").trigger('SCEventShow');
$("#obj2172").trigger('SCEventShow');
$("#obj2178").trigger('SCEventShow');
$("#obj2168").trigger('SCEventShow');
$("#obj2166").trigger('SCEventShow');
$("#obj2164").trigger('SCEventShow');
$("#obj2162").trigger('SCEventShow');
$("#obj2195").trigger('SCEventShow');
$("#obj2197").trigger('SCEventShow');
$("#obj2199").trigger('SCEventShow');
$("#obj2201").trigger('SCEventShow');
$("#obj2203").trigger('SCEventShow');
$("#obj2205").trigger('SCEventShow');
$("#obj2207").trigger('SCEventShow');
$("#obj2209").trigger('SCEventShow');
$("#obj2211").trigger('SCEventShow');
$("#obj2213").trigger('SCEventShow');
$("#obj2215").trigger('SCEventShow');
$("#obj2217").trigger('SCEventShow');
$("#obj2219").trigger('SCEventShow');
$("#obj2230").trigger('SCEventShow');
$("#obj2232").trigger('SCEventShow');
$("#obj2243").trigger('SCEventShow');
$("#obj2244").trigger('SCEventShow');
$("#obj2221").trigger('SCEventShow');
$("#obj2223").trigger('SCEventShow');
$("#obj2225").trigger('SCEventShow');
$("#obj2227").trigger('SCEventShow');
$("#obj65198").trigger('SCEventShow');
$("#obj65190").trigger('SCEventShow');
$("#obj86977").trigger('SCEventShow');
$("#obj86972").trigger('SCEventShow');
$("#obj86982").trigger('SCEventShow');
$("#obj94659").trigger('SCEventShow');
$("#obj65204").trigger('SCEventShow');
	
});