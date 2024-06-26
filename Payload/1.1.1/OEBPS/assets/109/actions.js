pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 29589;
pubcoder.page.title = pubcoder.page.title || "109";
pubcoder.page.number = pubcoder.page.number || 109;
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
var obj84171_onTap_activeActionGroupIndex = -1;
var obj84171_onTap_runningActionsCount = 0;
var obj84171_onTap_loopCount = 0;
var obj84168_onTap_activeActionGroupIndex = -1;
var obj84168_onTap_runningActionsCount = 0;
var obj84168_onTap_loopCount = 0;
var obj84164_onTap_activeActionGroupIndex = -1;
var obj84164_onTap_runningActionsCount = 0;
var obj84164_onTap_loopCount = 0;
var obj84069_onDrag_activeActionGroupIndex = -1;
var obj84069_onDrag_runningActionsCount = 0;
var obj84069_onDrag_loopCount = 0;
var obj84069_onTouchDown_activeActionGroupIndex = -1;
var obj84069_onTouchDown_runningActionsCount = 0;
var obj84069_onTouchDown_loopCount = 0;
var obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_loopCount = 0;
var obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_4_loopCount = 0;
var obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_3_loopCount = 0;
var obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_2_loopCount = 0;
var obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj84069_droppedInsideTargetActions_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_loopCount = 0;
var obj84016_onDrag_activeActionGroupIndex = -1;
var obj84016_onDrag_runningActionsCount = 0;
var obj84016_onDrag_loopCount = 0;
var obj84016_onTouchDown_activeActionGroupIndex = -1;
var obj84016_onTouchDown_runningActionsCount = 0;
var obj84016_onTouchDown_loopCount = 0;
var obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_loopCount = 0;
var obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_4_loopCount = 0;
var obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_3_loopCount = 0;
var obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_2_loopCount = 0;
var obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj84016_droppedInsideTargetActions_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_loopCount = 0;
var obj83963_onDrag_activeActionGroupIndex = -1;
var obj83963_onDrag_runningActionsCount = 0;
var obj83963_onDrag_loopCount = 0;
var obj83963_onTouchDown_activeActionGroupIndex = -1;
var obj83963_onTouchDown_runningActionsCount = 0;
var obj83963_onTouchDown_loopCount = 0;
var obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_loopCount = 0;
var obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_4_loopCount = 0;
var obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_3_loopCount = 0;
var obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_2_loopCount = 0;
var obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj83963_droppedInsideTargetActions_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_loopCount = 0;
var obj83910_onDrag_activeActionGroupIndex = -1;
var obj83910_onDrag_runningActionsCount = 0;
var obj83910_onDrag_loopCount = 0;
var obj83910_onTouchDown_activeActionGroupIndex = -1;
var obj83910_onTouchDown_runningActionsCount = 0;
var obj83910_onTouchDown_loopCount = 0;
var obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_loopCount = 0;
var obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_4_loopCount = 0;
var obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_3_loopCount = 0;
var obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_2_loopCount = 0;
var obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj83910_droppedInsideTargetActions_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_loopCount = 0;
var obj83892_onTap_activeActionGroupIndex = -1;
var obj83892_onTap_runningActionsCount = 0;
var obj83892_onTap_loopCount = 0;
var obj83884_onTap_activeActionGroupIndex = -1;
var obj83884_onTap_runningActionsCount = 0;
var obj83884_onTap_loopCount = 0;
var obj88177_onTap_activeActionGroupIndex = -1;
var obj88177_onTap_runningActionsCount = 0;
var obj88177_onTap_loopCount = 0;
var obj88172_onTap_activeActionGroupIndex = -1;
var obj88172_onTap_runningActionsCount = 0;
var obj88172_onTap_loopCount = 0;
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
		
obj84171_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84171_onTap_activeActionGroupIndex = -1;
		$("#obj84171").trigger("obj84171_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84171) {
				console.warn("de-queueing event obj84171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84171_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84173();
function goToPage_84173() {
	window.obj84171_onTap_runningActionsCount = obj84171_onTap_runningActionsCount + 1;
	$("#anchor654")[0].click();
	window.obj84171_onTap_runningActionsCount = window.obj84171_onTap_runningActionsCount - 1;
if (window.obj84171_onTap_runningActionsCount < 0) {
	window.obj84171_onTap_runningActionsCount = 0;
} else if (window.obj84171_onTap_runningActionsCount == 0) {
	obj84171_onTap_actionGroup1();
}
}





















};
obj84171_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84171_onTap_activeActionGroupIndex = -1;
		$("#obj84171").trigger("obj84171_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84171) {
				console.warn("de-queueing event obj84171." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84171").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84171_onTap_activeActionGroupIndex = 1;
	





















};
obj84168_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84168_onTap_activeActionGroupIndex = -1;
		$("#obj84168").trigger("obj84168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84168) {
				console.warn("de-queueing event obj84168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84168_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84170();
function goToPage_84170() {
	window.obj84168_onTap_runningActionsCount = obj84168_onTap_runningActionsCount + 1;
	$("#anchor655")[0].click();
	window.obj84168_onTap_runningActionsCount = window.obj84168_onTap_runningActionsCount - 1;
if (window.obj84168_onTap_runningActionsCount < 0) {
	window.obj84168_onTap_runningActionsCount = 0;
} else if (window.obj84168_onTap_runningActionsCount == 0) {
	obj84168_onTap_actionGroup1();
}
}





















};
obj84168_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84168_onTap_activeActionGroupIndex = -1;
		$("#obj84168").trigger("obj84168_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84168) {
				console.warn("de-queueing event obj84168." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84168").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84168_onTap_activeActionGroupIndex = 1;
	





















};
obj84164_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84164_onTap_activeActionGroupIndex = -1;
		$("#obj84164").trigger("obj84164_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84164) {
				console.warn("de-queueing event obj84164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84164_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_84166();
function goToPage_84166() {
	window.obj84164_onTap_runningActionsCount = obj84164_onTap_runningActionsCount + 1;
	$("#anchor656")[0].click();
	window.obj84164_onTap_runningActionsCount = window.obj84164_onTap_runningActionsCount - 1;
if (window.obj84164_onTap_runningActionsCount < 0) {
	window.obj84164_onTap_runningActionsCount = 0;
} else if (window.obj84164_onTap_runningActionsCount == 0) {
	obj84164_onTap_actionGroup1();
}
}





















};
obj84164_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84164_onTap_activeActionGroupIndex = -1;
		$("#obj84164").trigger("obj84164_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84164) {
				console.warn("de-queueing event obj84164." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84164").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84164_onTap_activeActionGroupIndex = 1;
	





















};
obj84069_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj84069");
//	action: dragDrop
//	target: obj84069 
dragDrop_84072();
function dragDrop_84072() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj84069_onTouchDown_runningActionsCount = obj84069_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj84069');
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
	  	containerNode = $('#obj84154');
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
    	window.obj84069_onTouchDown_runningActionsCount = window.obj84069_onTouchDown_runningActionsCount - 1;
if (window.obj84069_onTouchDown_runningActionsCount < 0) {
	window.obj84069_onTouchDown_runningActionsCount = 0;
} else if (window.obj84069_onTouchDown_runningActionsCount == 0) {
	obj84069_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj84136","#obj84140","#obj84138","#obj84124");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_84072 = false;
    	var dropped_id_84072;
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
					dropped_84072 = true;
					dropped_id_84072 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_84072) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj84069").trigger('SCActionDragDrop84072_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj84069_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84069_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj84069 
move_92477();
function move_92477() {
	window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount = obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj84069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 46;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount = window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj84069_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84109();
function runjs_84109() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84110();
function runjs_84110() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#C00000"); $("#obj84124").css("border-width", "2px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84122 
hide_84111();
function hide_84111() {
	var selector = "#obj84122";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84111(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84069_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84112();
function runjs_84112() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84113();
function switchText_84113() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84069 
move_84114();
function move_84114() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj84069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 46;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj84069_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84115();
function runjs_84115() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84116();
function runjs_84116() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#000000"); $("#obj84124").css("border-width", "1px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84122
(function(){
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj84122";
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
					window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84069_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84118();
function runjs_84118() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84069").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84119();
function runjs_84119() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84069").css("border-color", "rgba(0,0,0,0)"); $("#obj84069").css("border-width", "0px"); $("#obj84069").css("border-style", "solid"); $("#obj84069").css("border-radius", "10px"); $("#obj84069").css("-webkit-border-radius", "10px"); $("#obj84069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84120();
function playAudio_84120() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj84069_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84121();
function switchText_84121() {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = obj84069_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_4_runningActionsCount = window.obj84069_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj84069_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84095();
function runjs_84095() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84096();
function runjs_84096() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#C00000"); $("#obj84138").css("border-width", "2px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84132 
hide_84097();
function hide_84097() {
	var selector = "#obj84132";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84069_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84098();
function runjs_84098() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84099();
function switchText_84099() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84069 
move_84100();
function move_84100() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj84069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 46;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj84069_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84101();
function runjs_84101() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84102();
function runjs_84102() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#000000"); $("#obj84138").css("border-width", "1px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84132
(function(){
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj84132";
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
					window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84069_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84104();
function runjs_84104() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84069").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84105();
function runjs_84105() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84069").css("border-color", "rgba(0,0,0,0)"); $("#obj84069").css("border-width", "0px"); $("#obj84069").css("border-style", "solid"); $("#obj84069").css("border-radius", "10px"); $("#obj84069").css("-webkit-border-radius", "10px"); $("#obj84069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84106();
function playAudio_84106() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj84069_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84107();
function switchText_84107() {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = obj84069_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_3_runningActionsCount = window.obj84069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj84069_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84081();
function runjs_84081() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84082();
function runjs_84082() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#C00000"); $("#obj84140").css("border-width", "2px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84134 
hide_84083();
function hide_84083() {
	var selector = "#obj84134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84083(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84069_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84084();
function runjs_84084() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84085();
function switchText_84085() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84069 
move_84086();
function move_84086() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj84069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 46;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj84069_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84087();
function runjs_84087() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84088();
function runjs_84088() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#000000"); $("#obj84140").css("border-width", "1px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84134
(function(){
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj84134";
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
					window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84069_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84090();
function runjs_84090() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84069").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84091();
function runjs_84091() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84069").css("border-color", "rgba(0,0,0,0)"); $("#obj84069").css("border-width", "0px"); $("#obj84069").css("border-style", "solid"); $("#obj84069").css("border-radius", "10px"); $("#obj84069").css("-webkit-border-radius", "10px"); $("#obj84069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84092();
function playAudio_84092() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj84069_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84093();
function switchText_84093() {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = obj84069_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_2_runningActionsCount = window.obj84069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj84069_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84074();
function runjs_84074() {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_84078();
function switchText_84078() {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_84075();
function runjs_84075() {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#058E3F"); $("#obj84136").css("border-width", "2px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj84130 
hide_84076();
function hide_84076() {
	var selector = "#obj84130";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84076(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84069_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_84077();
function runjs_84077() {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj84069_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj84176 
playAudio_84079();
function playAudio_84079() {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj84176")[0];
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
		    window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj84069_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90397();
function switchText_90397() {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = obj84069_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84069_droppedInsideTargetActions_runningActionsCount = window.obj84069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84069_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj84069_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84069").trigger("obj84069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84069) {
				console.warn("de-queueing event obj84069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84069_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj84016_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj84016");
//	action: dragDrop
//	target: obj84016 
dragDrop_84019();
function dragDrop_84019() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj84016_onTouchDown_runningActionsCount = obj84016_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj84016');
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
	  	containerNode = $('#obj84154');
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
    	window.obj84016_onTouchDown_runningActionsCount = window.obj84016_onTouchDown_runningActionsCount - 1;
if (window.obj84016_onTouchDown_runningActionsCount < 0) {
	window.obj84016_onTouchDown_runningActionsCount = 0;
} else if (window.obj84016_onTouchDown_runningActionsCount == 0) {
	obj84016_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj84138","#obj84140","#obj84136","#obj84124");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_84019 = false;
    	var dropped_id_84019;
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
					dropped_84019 = true;
					dropped_id_84019 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_84019) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj84016").trigger('SCActionDragDrop84019_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj84016_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84016_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj84016 
move_92479();
function move_92479() {
	window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount = obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj84016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 174;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount = window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj84016_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84056();
function runjs_84056() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84057();
function runjs_84057() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#C00000"); $("#obj84124").css("border-width", "2px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84122 
hide_84058();
function hide_84058() {
	var selector = "#obj84122";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84058(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84016_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84059();
function runjs_84059() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84060();
function switchText_84060() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84016 
move_84061();
function move_84061() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj84016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 174;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj84016_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84062();
function runjs_84062() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84063();
function runjs_84063() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#000000"); $("#obj84124").css("border-width", "1px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84122
(function(){
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj84122";
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
					window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84016_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84065();
function runjs_84065() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84016").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84066();
function runjs_84066() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84016").css("border-color", "rgba(0,0,0,0)"); $("#obj84016").css("border-width", "0px"); $("#obj84016").css("border-style", "solid"); $("#obj84016").css("border-radius", "10px"); $("#obj84016").css("-webkit-border-radius", "10px"); $("#obj84016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84067();
function playAudio_84067() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj84016_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84068();
function switchText_84068() {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = obj84016_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_4_runningActionsCount = window.obj84016_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj84016_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84042();
function runjs_84042() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84043();
function runjs_84043() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#C00000"); $("#obj84136").css("border-width", "2px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84130 
hide_84044();
function hide_84044() {
	var selector = "#obj84130";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84044(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84016_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84045();
function runjs_84045() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84046();
function switchText_84046() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84016 
move_84047();
function move_84047() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj84016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 174;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj84016_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84048();
function runjs_84048() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84049();
function runjs_84049() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#000000"); $("#obj84136").css("border-width", "1px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84130
(function(){
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj84130";
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
					window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84016_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84051();
function runjs_84051() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84016").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84052();
function runjs_84052() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84016").css("border-color", "rgba(0,0,0,0)"); $("#obj84016").css("border-width", "0px"); $("#obj84016").css("border-style", "solid"); $("#obj84016").css("border-radius", "10px"); $("#obj84016").css("-webkit-border-radius", "10px"); $("#obj84016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84053();
function playAudio_84053() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj84016_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84054();
function switchText_84054() {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = obj84016_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_3_runningActionsCount = window.obj84016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj84016_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84028();
function runjs_84028() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84029();
function runjs_84029() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#C00000"); $("#obj84140").css("border-width", "2px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84134 
hide_84030();
function hide_84030() {
	var selector = "#obj84134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84030(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84016_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84031();
function runjs_84031() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84032();
function switchText_84032() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84016 
move_84033();
function move_84033() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj84016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 174;
	var moveY = 619;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj84016_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84034();
function runjs_84034() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84035();
function runjs_84035() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#000000"); $("#obj84140").css("border-width", "1px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84134
(function(){
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj84134";
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
					window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84016_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84037();
function runjs_84037() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84016").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84038();
function runjs_84038() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84016").css("border-color", "rgba(0,0,0,0)"); $("#obj84016").css("border-width", "0px"); $("#obj84016").css("border-style", "solid"); $("#obj84016").css("border-radius", "10px"); $("#obj84016").css("-webkit-border-radius", "10px"); $("#obj84016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84039();
function playAudio_84039() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj84016_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84040();
function switchText_84040() {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = obj84016_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_2_runningActionsCount = window.obj84016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj84016_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84021();
function runjs_84021() {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_84025();
function switchText_84025() {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_84022();
function runjs_84022() {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#058E3F"); $("#obj84138").css("border-width", "2px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj84132 
hide_84023();
function hide_84023() {
	var selector = "#obj84132";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84023(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84016_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_84024();
function runjs_84024() {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj84016_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj84176 
playAudio_84026();
function playAudio_84026() {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj84176")[0];
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
		    window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj84016_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90398();
function switchText_90398() {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = obj84016_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84016_droppedInsideTargetActions_runningActionsCount = window.obj84016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84016_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj84016_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84016").trigger("obj84016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84016) {
				console.warn("de-queueing event obj84016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84016_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj83963_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj83963");
//	action: dragDrop
//	target: obj83963 
dragDrop_83966();
function dragDrop_83966() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj83963_onTouchDown_runningActionsCount = obj83963_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj83963');
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
	  	containerNode = $('#obj84154');
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
    	window.obj83963_onTouchDown_runningActionsCount = window.obj83963_onTouchDown_runningActionsCount - 1;
if (window.obj83963_onTouchDown_runningActionsCount < 0) {
	window.obj83963_onTouchDown_runningActionsCount = 0;
} else if (window.obj83963_onTouchDown_runningActionsCount == 0) {
	obj83963_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj84124","#obj84140","#obj84136","#obj84138");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_83966 = false;
    	var dropped_id_83966;
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
					dropped_83966 = true;
					dropped_id_83966 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_83966) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj83963").trigger('SCActionDragDrop83966_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj83963_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83963_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj83963 
move_92481();
function move_92481() {
	window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount = obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj83963");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount = window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj83963_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84003();
function runjs_84003() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84004();
function runjs_84004() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#C00000"); $("#obj84138").css("border-width", "2px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84132 
hide_84005();
function hide_84005() {
	var selector = "#obj84132";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84005(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83963_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84006();
function runjs_84006() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj83963").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84007();
function switchText_84007() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj83963 
move_84008();
function move_84008() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj83963");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj83963_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84009();
function runjs_84009() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84010();
function runjs_84010() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#000000"); $("#obj84138").css("border-width", "1px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84132
(function(){
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj84132";
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
					window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83963_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84012();
function runjs_84012() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj83963").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84013();
function runjs_84013() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj83963").css("border-color", "rgba(0,0,0,0)"); $("#obj83963").css("border-width", "0px"); $("#obj83963").css("border-style", "solid"); $("#obj83963").css("border-radius", "10px"); $("#obj83963").css("-webkit-border-radius", "10px"); $("#obj83963").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84014();
function playAudio_84014() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj83963_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84015();
function switchText_84015() {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = obj83963_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_4_runningActionsCount = window.obj83963_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj83963_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83989();
function runjs_83989() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83990();
function runjs_83990() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#C00000"); $("#obj84136").css("border-width", "2px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84130 
hide_83991();
function hide_83991() {
	var selector = "#obj84130";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83991(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83963_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_83992();
function runjs_83992() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83963").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_83993();
function switchText_83993() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj83963 
move_83994();
function move_83994() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj83963");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj83963_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83995();
function runjs_83995() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_83996();
function runjs_83996() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#000000"); $("#obj84136").css("border-width", "1px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84130
(function(){
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj84130";
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
					window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83963_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_83998();
function runjs_83998() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83963").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_83999();
function runjs_83999() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83963").css("border-color", "rgba(0,0,0,0)"); $("#obj83963").css("border-width", "0px"); $("#obj83963").css("border-style", "solid"); $("#obj83963").css("border-radius", "10px"); $("#obj83963").css("-webkit-border-radius", "10px"); $("#obj83963").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_84000();
function playAudio_84000() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj83963_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84001();
function switchText_84001() {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = obj83963_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_3_runningActionsCount = window.obj83963_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj83963_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83975();
function runjs_83975() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83976();
function runjs_83976() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#C00000"); $("#obj84140").css("border-width", "2px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84134 
hide_83977();
function hide_83977() {
	var selector = "#obj84134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83977(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83963_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_83978();
function runjs_83978() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83963").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_83979();
function switchText_83979() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj83963 
move_83980();
function move_83980() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj83963");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj83963_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83981();
function runjs_83981() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_83982();
function runjs_83982() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#000000"); $("#obj84140").css("border-width", "1px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84134
(function(){
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj84134";
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
					window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83963_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_83984();
function runjs_83984() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83963").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_83985();
function runjs_83985() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83963").css("border-color", "rgba(0,0,0,0)"); $("#obj83963").css("border-width", "0px"); $("#obj83963").css("border-style", "solid"); $("#obj83963").css("border-radius", "10px"); $("#obj83963").css("-webkit-border-radius", "10px"); $("#obj83963").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_83986();
function playAudio_83986() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj83963_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_83987();
function switchText_83987() {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = obj83963_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_2_runningActionsCount = window.obj83963_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj83963_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83968();
function runjs_83968() {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_83972();
function switchText_83972() {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_83969();
function runjs_83969() {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#058E3F"); $("#obj84124").css("border-width", "2px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj84122 
hide_83970();
function hide_83970() {
	var selector = "#obj84122";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83970(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83963_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83971();
function runjs_83971() {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83963").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj83963_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj84176 
playAudio_83973();
function playAudio_83973() {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj84176")[0];
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
		    window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj83963_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90399();
function switchText_90399() {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = obj83963_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83963_droppedInsideTargetActions_runningActionsCount = window.obj83963_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83963_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83963_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83963_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83963_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj83963_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83963").trigger("obj83963_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83963) {
				console.warn("de-queueing event obj83963." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83963").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83963_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj83910_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj83910");
//	action: dragDrop
//	target: obj83910 
dragDrop_83913();
function dragDrop_83913() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj83910_onTouchDown_runningActionsCount = obj83910_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj83910');
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
	  	containerNode = $('#obj84154');
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
    	window.obj83910_onTouchDown_runningActionsCount = window.obj83910_onTouchDown_runningActionsCount - 1;
if (window.obj83910_onTouchDown_runningActionsCount < 0) {
	window.obj83910_onTouchDown_runningActionsCount = 0;
} else if (window.obj83910_onTouchDown_runningActionsCount == 0) {
	obj83910_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj84140","#obj84138","#obj84136","#obj84124");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_83913 = false;
    	var dropped_id_83913;
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
					dropped_83913 = true;
					dropped_id_83913 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_83913) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj83910").trigger('SCActionDragDrop83913_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj83910_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83910_onTouchDown_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj83910 
move_92483();
function move_92483() {
	window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount = obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj83910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 434;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount = window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj83910_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83950();
function runjs_83950() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83951();
function runjs_83951() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#C00000"); $("#obj84124").css("border-width", "2px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84122 
hide_83952();
function hide_83952() {
	var selector = "#obj84122";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83952(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83910_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_83953();
function runjs_83953() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj83910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_83954();
function switchText_83954() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj83910 
move_83955();
function move_83955() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj83910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 434;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj83910_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83956();
function runjs_83956() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_83957();
function runjs_83957() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj84124").css("border-color", "#000000"); $("#obj84124").css("border-width", "1px"); $("#obj84124").css("border-style", "solid"); $("#obj84124").css("border-radius", "10px"); $("#obj84124").css("-webkit-border-radius", "10px"); $("#obj84124").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84122
(function(){
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj84122";
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
					window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83910_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_83959();
function runjs_83959() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj83910").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_83960();
function runjs_83960() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj83910").css("border-color", "rgba(0,0,0,0)"); $("#obj83910").css("border-width", "0px"); $("#obj83910").css("border-style", "solid"); $("#obj83910").css("border-radius", "10px"); $("#obj83910").css("-webkit-border-radius", "10px"); $("#obj83910").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_83961();
function playAudio_83961() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj83910_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_83962();
function switchText_83962() {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = obj83910_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_4_runningActionsCount = window.obj83910_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj83910_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83936();
function runjs_83936() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83937();
function runjs_83937() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#C00000"); $("#obj84136").css("border-width", "2px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84130 
hide_83938();
function hide_83938() {
	var selector = "#obj84130";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83938(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83910_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_83939();
function runjs_83939() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_83940();
function switchText_83940() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj83910 
move_83941();
function move_83941() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj83910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 434;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj83910_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83942();
function runjs_83942() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_83943();
function runjs_83943() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84136").css("border-color", "#000000"); $("#obj84136").css("border-width", "1px"); $("#obj84136").css("border-style", "solid"); $("#obj84136").css("border-radius", "10px"); $("#obj84136").css("-webkit-border-radius", "10px"); $("#obj84136").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84130
(function(){
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj84130";
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
					window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83910_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_83945();
function runjs_83945() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83910").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_83946();
function runjs_83946() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj83910").css("border-color", "rgba(0,0,0,0)"); $("#obj83910").css("border-width", "0px"); $("#obj83910").css("border-style", "solid"); $("#obj83910").css("border-radius", "10px"); $("#obj83910").css("-webkit-border-radius", "10px"); $("#obj83910").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_83947();
function playAudio_83947() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj83910_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_83948();
function switchText_83948() {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = obj83910_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_3_runningActionsCount = window.obj83910_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj83910_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83922();
function runjs_83922() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_83923();
function runjs_83923() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#C00000"); $("#obj84138").css("border-width", "2px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj84132 
hide_83924();
function hide_83924() {
	var selector = "#obj84132";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83924(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83910_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_83925();
function runjs_83925() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_83926();
function switchText_83926() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj83910 
move_83927();
function move_83927() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj83910");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 434;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj83910_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_83928();
function runjs_83928() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84138").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_83929();
function runjs_83929() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84138").css("border-color", "#000000"); $("#obj84138").css("border-width", "1px"); $("#obj84138").css("border-style", "solid"); $("#obj84138").css("border-radius", "10px"); $("#obj84138").css("-webkit-border-radius", "10px"); $("#obj84138").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj84132
(function(){
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj84132";
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
					window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83910_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_83931();
function runjs_83931() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83910").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_83932();
function runjs_83932() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj83910").css("border-color", "rgba(0,0,0,0)"); $("#obj83910").css("border-width", "0px"); $("#obj83910").css("border-style", "solid"); $("#obj83910").css("border-radius", "10px"); $("#obj83910").css("-webkit-border-radius", "10px"); $("#obj83910").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj84177 
playAudio_83933();
function playAudio_83933() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj84177")[0];
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
		    window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj83910_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_83934();
function switchText_83934() {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = obj83910_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_2_runningActionsCount = window.obj83910_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj83910_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_83915();
function runjs_83915() {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84140").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_83919();
function switchText_83919() {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_83916();
function runjs_83916() {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84140").css("border-color", "#058E3F"); $("#obj84140").css("border-width", "2px"); $("#obj84140").css("border-style", "solid"); $("#obj84140").css("border-radius", "10px"); $("#obj84140").css("-webkit-border-radius", "10px"); $("#obj84140").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj84134 
hide_83917();
function hide_83917() {
	var selector = "#obj84134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83917(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj83910_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_83918();
function runjs_83918() {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj83910").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj83910_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj84176 
playAudio_83920();
function playAudio_83920() {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj84176")[0];
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
		    window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj83910_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90400();
function switchText_90400() {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = obj83910_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj84152_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj84152_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj84152").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj84152_content");
			setTimeout(function () {
				window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj84152 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj83910_droppedInsideTargetActions_runningActionsCount = window.obj83910_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj83910_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj83910_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj83910_droppedInsideTargetActions_runningActionsCount == 0) {
	obj83910_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj83910_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj83910").trigger("obj83910_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83910) {
				console.warn("de-queueing event obj83910." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83910").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83910_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj83892_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83892_onTap_activeActionGroupIndex = -1;
		$("#obj83892").trigger("obj83892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83892) {
				console.warn("de-queueing event obj83892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83892_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj83892 
hide_83895();
function hide_83895() {
	var selector = "#obj83892";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83892_onTap_runningActionsCount = obj83892_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83892_onTap_runningActionsCount = window.obj83892_onTap_runningActionsCount - 1;
if (window.obj83892_onTap_runningActionsCount < 0) {
	window.obj83892_onTap_runningActionsCount = 0;
} else if (window.obj83892_onTap_runningActionsCount == 0) {
	obj83892_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83895(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83892_onTap_runningActionsCount = window.obj83892_onTap_runningActionsCount - 1;
if (window.obj83892_onTap_runningActionsCount < 0) {
	window.obj83892_onTap_runningActionsCount = 0;
} else if (window.obj83892_onTap_runningActionsCount == 0) {
	obj83892_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj83882 
stopMovie_83894();
function stopMovie_83894() {
	window.obj83892_onTap_runningActionsCount = obj83892_onTap_runningActionsCount + 1;
	var myVideo = $("#obj83882")[0];
	myVideo.pause();
	window.obj83892_onTap_runningActionsCount = window.obj83892_onTap_runningActionsCount - 1;
if (window.obj83892_onTap_runningActionsCount < 0) {
	window.obj83892_onTap_runningActionsCount = 0;
} else if (window.obj83892_onTap_runningActionsCount == 0) {
	obj83892_onTap_actionGroup1();
}
}
















};
obj83892_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83892_onTap_activeActionGroupIndex = -1;
		$("#obj83892").trigger("obj83892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83892) {
				console.warn("de-queueing event obj83892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83892_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj83884
(function(){
	window.obj83892_onTap_runningActionsCount = obj83892_onTap_runningActionsCount + 1;

	var selector = "#obj83884";
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
					window.obj83892_onTap_runningActionsCount = window.obj83892_onTap_runningActionsCount - 1;
if (window.obj83892_onTap_runningActionsCount < 0) {
	window.obj83892_onTap_runningActionsCount = 0;
} else if (window.obj83892_onTap_runningActionsCount == 0) {
	obj83892_onTap_actionGroup2();
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
				window.obj83892_onTap_runningActionsCount = window.obj83892_onTap_runningActionsCount - 1;
if (window.obj83892_onTap_runningActionsCount < 0) {
	window.obj83892_onTap_runningActionsCount = 0;
} else if (window.obj83892_onTap_runningActionsCount == 0) {
	obj83892_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83892_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83892_onTap_activeActionGroupIndex = -1;
		$("#obj83892").trigger("obj83892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83892) {
				console.warn("de-queueing event obj83892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83892_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj83882 
move_83897();
function move_83897() {
	window.obj83892_onTap_runningActionsCount = obj83892_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj83882");
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
			window.obj83892_onTap_runningActionsCount = window.obj83892_onTap_runningActionsCount - 1;
if (window.obj83892_onTap_runningActionsCount < 0) {
	window.obj83892_onTap_runningActionsCount = 0;
} else if (window.obj83892_onTap_runningActionsCount == 0) {
	obj83892_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj83892_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83892_onTap_activeActionGroupIndex = -1;
		$("#obj83892").trigger("obj83892_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83892) {
				console.warn("de-queueing event obj83892." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83892").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83892_onTap_activeActionGroupIndex = 3;
	





















};
obj83884_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83884_onTap_activeActionGroupIndex = -1;
		$("#obj83884").trigger("obj83884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83884) {
				console.warn("de-queueing event obj83884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83884_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj83884 
hide_83887();
function hide_83887() {
	var selector = "#obj83884";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj83884_onTap_runningActionsCount = obj83884_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj83884_onTap_runningActionsCount = window.obj83884_onTap_runningActionsCount - 1;
if (window.obj83884_onTap_runningActionsCount < 0) {
	window.obj83884_onTap_runningActionsCount = 0;
} else if (window.obj83884_onTap_runningActionsCount == 0) {
	obj83884_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_83887(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj83884_onTap_runningActionsCount = window.obj83884_onTap_runningActionsCount - 1;
if (window.obj83884_onTap_runningActionsCount < 0) {
	window.obj83884_onTap_runningActionsCount = 0;
} else if (window.obj83884_onTap_runningActionsCount == 0) {
	obj83884_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj83882 
playPauseMovie_83886();
function playPauseMovie_83886() {
	window.obj83884_onTap_runningActionsCount = obj83884_onTap_runningActionsCount + 1;
	var myVideo = $("#obj83882")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj83884_onTap_runningActionsCount = window.obj83884_onTap_runningActionsCount - 1;
if (window.obj83884_onTap_runningActionsCount < 0) {
	window.obj83884_onTap_runningActionsCount = 0;
} else if (window.obj83884_onTap_runningActionsCount == 0) {
	obj83884_onTap_actionGroup1();
}
}

















};
obj83884_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83884_onTap_activeActionGroupIndex = -1;
		$("#obj83884").trigger("obj83884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83884) {
				console.warn("de-queueing event obj83884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83884_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj83892
(function(){
	window.obj83884_onTap_runningActionsCount = obj83884_onTap_runningActionsCount + 1;

	var selector = "#obj83892";
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
					window.obj83884_onTap_runningActionsCount = window.obj83884_onTap_runningActionsCount - 1;
if (window.obj83884_onTap_runningActionsCount < 0) {
	window.obj83884_onTap_runningActionsCount = 0;
} else if (window.obj83884_onTap_runningActionsCount == 0) {
	obj83884_onTap_actionGroup2();
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
				window.obj83884_onTap_runningActionsCount = window.obj83884_onTap_runningActionsCount - 1;
if (window.obj83884_onTap_runningActionsCount < 0) {
	window.obj83884_onTap_runningActionsCount = 0;
} else if (window.obj83884_onTap_runningActionsCount == 0) {
	obj83884_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj83884_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83884_onTap_activeActionGroupIndex = -1;
		$("#obj83884").trigger("obj83884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83884) {
				console.warn("de-queueing event obj83884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83884_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj83882 
move_83889();
function move_83889() {
	window.obj83884_onTap_runningActionsCount = obj83884_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj83882");
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
			window.obj83884_onTap_runningActionsCount = window.obj83884_onTap_runningActionsCount - 1;
if (window.obj83884_onTap_runningActionsCount < 0) {
	window.obj83884_onTap_runningActionsCount = 0;
} else if (window.obj83884_onTap_runningActionsCount == 0) {
	obj83884_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj83884_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83884_onTap_activeActionGroupIndex = -1;
		$("#obj83884").trigger("obj83884_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83884) {
				console.warn("de-queueing event obj83884." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83884").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83884_onTap_activeActionGroupIndex = 3;
	





















};
obj88177_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88177_onTap_activeActionGroupIndex = -1;
		$("#obj88177").trigger("obj88177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88177) {
				console.warn("de-queueing event obj88177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88177_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88182 
stopAudio_88179();
function stopAudio_88179() {
	window.obj88177_onTap_runningActionsCount = obj88177_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88182")[0];
	myAudio.pause();
	window.obj88177_onTap_runningActionsCount = window.obj88177_onTap_runningActionsCount - 1;
if (window.obj88177_onTap_runningActionsCount < 0) {
	window.obj88177_onTap_runningActionsCount = 0;
} else if (window.obj88177_onTap_runningActionsCount == 0) {
	obj88177_onTap_actionGroup1();
}
}








};
obj88177_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88177_onTap_activeActionGroupIndex = -1;
		$("#obj88177").trigger("obj88177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88177) {
				console.warn("de-queueing event obj88177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88177_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88177 
hide_88180();
function hide_88180() {
	var selector = "#obj88177";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88177_onTap_runningActionsCount = obj88177_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88177_onTap_runningActionsCount = window.obj88177_onTap_runningActionsCount - 1;
if (window.obj88177_onTap_runningActionsCount < 0) {
	window.obj88177_onTap_runningActionsCount = 0;
} else if (window.obj88177_onTap_runningActionsCount == 0) {
	obj88177_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88180(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88177_onTap_runningActionsCount = window.obj88177_onTap_runningActionsCount - 1;
if (window.obj88177_onTap_runningActionsCount < 0) {
	window.obj88177_onTap_runningActionsCount = 0;
} else if (window.obj88177_onTap_runningActionsCount == 0) {
	obj88177_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88177_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88177_onTap_activeActionGroupIndex = -1;
		$("#obj88177").trigger("obj88177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88177) {
				console.warn("de-queueing event obj88177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88177_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88172
(function(){
	window.obj88177_onTap_runningActionsCount = obj88177_onTap_runningActionsCount + 1;

	var selector = "#obj88172";
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
					window.obj88177_onTap_runningActionsCount = window.obj88177_onTap_runningActionsCount - 1;
if (window.obj88177_onTap_runningActionsCount < 0) {
	window.obj88177_onTap_runningActionsCount = 0;
} else if (window.obj88177_onTap_runningActionsCount == 0) {
	obj88177_onTap_actionGroup3();
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
				window.obj88177_onTap_runningActionsCount = window.obj88177_onTap_runningActionsCount - 1;
if (window.obj88177_onTap_runningActionsCount < 0) {
	window.obj88177_onTap_runningActionsCount = 0;
} else if (window.obj88177_onTap_runningActionsCount == 0) {
	obj88177_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88177_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88177_onTap_activeActionGroupIndex = -1;
		$("#obj88177").trigger("obj88177_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88177) {
				console.warn("de-queueing event obj88177." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88177").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88177_onTap_activeActionGroupIndex = 3;
	





















};
obj88172_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88172_onTap_activeActionGroupIndex = -1;
		$("#obj88172").trigger("obj88172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88172) {
				console.warn("de-queueing event obj88172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88172_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88172 
hide_88174();
function hide_88174() {
	var selector = "#obj88172";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88172_onTap_runningActionsCount = obj88172_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88172_onTap_runningActionsCount = window.obj88172_onTap_runningActionsCount - 1;
if (window.obj88172_onTap_runningActionsCount < 0) {
	window.obj88172_onTap_runningActionsCount = 0;
} else if (window.obj88172_onTap_runningActionsCount == 0) {
	obj88172_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88174(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88172_onTap_runningActionsCount = window.obj88172_onTap_runningActionsCount - 1;
if (window.obj88172_onTap_runningActionsCount < 0) {
	window.obj88172_onTap_runningActionsCount = 0;
} else if (window.obj88172_onTap_runningActionsCount == 0) {
	obj88172_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88172_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88172_onTap_activeActionGroupIndex = -1;
		$("#obj88172").trigger("obj88172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88172) {
				console.warn("de-queueing event obj88172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88172_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88177
(function(){
	window.obj88172_onTap_runningActionsCount = obj88172_onTap_runningActionsCount + 1;

	var selector = "#obj88177";
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
					window.obj88172_onTap_runningActionsCount = window.obj88172_onTap_runningActionsCount - 1;
if (window.obj88172_onTap_runningActionsCount < 0) {
	window.obj88172_onTap_runningActionsCount = 0;
} else if (window.obj88172_onTap_runningActionsCount == 0) {
	obj88172_onTap_actionGroup2();
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
				window.obj88172_onTap_runningActionsCount = window.obj88172_onTap_runningActionsCount - 1;
if (window.obj88172_onTap_runningActionsCount < 0) {
	window.obj88172_onTap_runningActionsCount = 0;
} else if (window.obj88172_onTap_runningActionsCount == 0) {
	obj88172_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88172_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88172_onTap_activeActionGroupIndex = -1;
		$("#obj88172").trigger("obj88172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88172) {
				console.warn("de-queueing event obj88172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88172_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88182 
playAudio_88176();
function playAudio_88176() {
	window.obj88172_onTap_runningActionsCount = obj88172_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88182")[0];
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
		    window.obj88172_onTap_runningActionsCount = window.obj88172_onTap_runningActionsCount - 1;
if (window.obj88172_onTap_runningActionsCount < 0) {
	window.obj88172_onTap_runningActionsCount = 0;
} else if (window.obj88172_onTap_runningActionsCount == 0) {
	obj88172_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88172_onTap_runningActionsCount = window.obj88172_onTap_runningActionsCount - 1;
if (window.obj88172_onTap_runningActionsCount < 0) {
	window.obj88172_onTap_runningActionsCount = 0;
} else if (window.obj88172_onTap_runningActionsCount == 0) {
	obj88172_onTap_actionGroup3();
}
	}
}









};
obj88172_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88172_onTap_activeActionGroupIndex = -1;
		$("#obj88172").trigger("obj88172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88172) {
				console.warn("de-queueing event obj88172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88172_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

































/*
 *
 *   obj84171: Event Touch Down
 *
 */
$("#obj84171").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84171_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84171_onTap is still running");
	return;
}
var obj84171_onTap_runningActionsCount = 0;
var obj84171_onTap_loopCount = 0;
obj84171_onTap_actionGroup0();
});










/*
 *
 *   obj84168: Event Touch Down
 *
 */
$("#obj84168").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84168_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84168_onTap is still running");
	return;
}
var obj84168_onTap_runningActionsCount = 0;
var obj84168_onTap_loopCount = 0;
obj84168_onTap_actionGroup0();
});










/*
 *
 *   obj84164: Event Touch Down
 *
 */
$("#obj84164").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84164_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84164_onTap is still running");
	return;
}
var obj84164_onTap_runningActionsCount = 0;
var obj84164_onTap_loopCount = 0;
obj84164_onTap_actionGroup0();
});





























































































































































































































/*
 *
 *   obj84069: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj84069");
	var winTarget = document.getElementById("obj84069");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj84069").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj84069_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj84069_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj84069_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84069_onTouchDown is still running");
	return;
}
var obj84069_onTouchDown_runningActionsCount = 0;
var obj84069_onTouchDown_loopCount = 0;
obj84069_onTouchDown_actionGroup0();
});



/*
 *
 *   obj84069: Event SCActionDragDrop84072_droppedOutsideTargetActions
 *
 */
$("#obj84069").bind("SCActionDragDrop84072_droppedOutsideTargetActions", function(event) {
	if (window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84069_SCActionDragDrop84072_droppedOutsideTargetActions is still running");
	return;
}
var obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_loopCount = 0;
obj84069_SCActionDragDrop84072_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj84069: Event droppedInsideTargetActions_4
 *
 */
$("#obj84069").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj84069_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84069_droppedInsideTargetActions_4 is still running");
	return;
}
var obj84069_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_4_loopCount = 0;
obj84069_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj84069: Event droppedInsideTargetActions_3
 *
 */
$("#obj84069").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj84069_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84069_droppedInsideTargetActions_3 is still running");
	return;
}
var obj84069_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_3_loopCount = 0;
obj84069_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj84069: Event droppedInsideTargetActions_2
 *
 */
$("#obj84069").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj84069_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84069_droppedInsideTargetActions_2 is still running");
	return;
}
var obj84069_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_2_loopCount = 0;
obj84069_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj84069: Event droppedInsideTargetActions
 *
 */
$("#obj84069").bind("droppedInsideTargetActions", function(event) {
	if (window.obj84069_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84069_droppedInsideTargetActions is still running");
	return;
}
var obj84069_droppedInsideTargetActions_runningActionsCount = 0;
var obj84069_droppedInsideTargetActions_loopCount = 0;
obj84069_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj84016: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj84016");
	var winTarget = document.getElementById("obj84016");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj84016").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj84016_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj84016_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj84016_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84016_onTouchDown is still running");
	return;
}
var obj84016_onTouchDown_runningActionsCount = 0;
var obj84016_onTouchDown_loopCount = 0;
obj84016_onTouchDown_actionGroup0();
});



/*
 *
 *   obj84016: Event SCActionDragDrop84019_droppedOutsideTargetActions
 *
 */
$("#obj84016").bind("SCActionDragDrop84019_droppedOutsideTargetActions", function(event) {
	if (window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84016_SCActionDragDrop84019_droppedOutsideTargetActions is still running");
	return;
}
var obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_loopCount = 0;
obj84016_SCActionDragDrop84019_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj84016: Event droppedInsideTargetActions_4
 *
 */
$("#obj84016").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj84016_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84016_droppedInsideTargetActions_4 is still running");
	return;
}
var obj84016_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_4_loopCount = 0;
obj84016_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj84016: Event droppedInsideTargetActions_3
 *
 */
$("#obj84016").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj84016_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84016_droppedInsideTargetActions_3 is still running");
	return;
}
var obj84016_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_3_loopCount = 0;
obj84016_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj84016: Event droppedInsideTargetActions_2
 *
 */
$("#obj84016").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj84016_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84016_droppedInsideTargetActions_2 is still running");
	return;
}
var obj84016_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_2_loopCount = 0;
obj84016_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj84016: Event droppedInsideTargetActions
 *
 */
$("#obj84016").bind("droppedInsideTargetActions", function(event) {
	if (window.obj84016_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84016_droppedInsideTargetActions is still running");
	return;
}
var obj84016_droppedInsideTargetActions_runningActionsCount = 0;
var obj84016_droppedInsideTargetActions_loopCount = 0;
obj84016_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj83963: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj83963");
	var winTarget = document.getElementById("obj83963");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj83963").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj83963_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj83963_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj83963_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83963_onTouchDown is still running");
	return;
}
var obj83963_onTouchDown_runningActionsCount = 0;
var obj83963_onTouchDown_loopCount = 0;
obj83963_onTouchDown_actionGroup0();
});



/*
 *
 *   obj83963: Event SCActionDragDrop83966_droppedOutsideTargetActions
 *
 */
$("#obj83963").bind("SCActionDragDrop83966_droppedOutsideTargetActions", function(event) {
	if (window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83963_SCActionDragDrop83966_droppedOutsideTargetActions is still running");
	return;
}
var obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_loopCount = 0;
obj83963_SCActionDragDrop83966_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj83963: Event droppedInsideTargetActions_4
 *
 */
$("#obj83963").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj83963_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83963_droppedInsideTargetActions_4 is still running");
	return;
}
var obj83963_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_4_loopCount = 0;
obj83963_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj83963: Event droppedInsideTargetActions_3
 *
 */
$("#obj83963").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj83963_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83963_droppedInsideTargetActions_3 is still running");
	return;
}
var obj83963_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_3_loopCount = 0;
obj83963_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj83963: Event droppedInsideTargetActions_2
 *
 */
$("#obj83963").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj83963_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83963_droppedInsideTargetActions_2 is still running");
	return;
}
var obj83963_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_2_loopCount = 0;
obj83963_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj83963: Event droppedInsideTargetActions
 *
 */
$("#obj83963").bind("droppedInsideTargetActions", function(event) {
	if (window.obj83963_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83963_droppedInsideTargetActions is still running");
	return;
}
var obj83963_droppedInsideTargetActions_runningActionsCount = 0;
var obj83963_droppedInsideTargetActions_loopCount = 0;
obj83963_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj83910: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj83910");
	var winTarget = document.getElementById("obj83910");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj83910").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj83910_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj83910_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj83910_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83910_onTouchDown is still running");
	return;
}
var obj83910_onTouchDown_runningActionsCount = 0;
var obj83910_onTouchDown_loopCount = 0;
obj83910_onTouchDown_actionGroup0();
});



/*
 *
 *   obj83910: Event SCActionDragDrop83913_droppedOutsideTargetActions
 *
 */
$("#obj83910").bind("SCActionDragDrop83913_droppedOutsideTargetActions", function(event) {
	if (window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83910_SCActionDragDrop83913_droppedOutsideTargetActions is still running");
	return;
}
var obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_runningActionsCount = 0;
var obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_loopCount = 0;
obj83910_SCActionDragDrop83913_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj83910: Event droppedInsideTargetActions_4
 *
 */
$("#obj83910").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj83910_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83910_droppedInsideTargetActions_4 is still running");
	return;
}
var obj83910_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_4_loopCount = 0;
obj83910_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj83910: Event droppedInsideTargetActions_3
 *
 */
$("#obj83910").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj83910_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83910_droppedInsideTargetActions_3 is still running");
	return;
}
var obj83910_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_3_loopCount = 0;
obj83910_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj83910: Event droppedInsideTargetActions_2
 *
 */
$("#obj83910").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj83910_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83910_droppedInsideTargetActions_2 is still running");
	return;
}
var obj83910_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_2_loopCount = 0;
obj83910_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj83910: Event droppedInsideTargetActions
 *
 */
$("#obj83910").bind("droppedInsideTargetActions", function(event) {
	if (window.obj83910_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83910_droppedInsideTargetActions is still running");
	return;
}
var obj83910_droppedInsideTargetActions_runningActionsCount = 0;
var obj83910_droppedInsideTargetActions_loopCount = 0;
obj83910_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj83892: Event Touch Down
 *
 */
$("#obj83892").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83892_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83892_onTap is still running");
	return;
}
var obj83892_onTap_runningActionsCount = 0;
var obj83892_onTap_loopCount = 0;
obj83892_onTap_actionGroup0();
});










/*
 *
 *   obj83884: Event Touch Down
 *
 */
$("#obj83884").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83884_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83884_onTap is still running");
	return;
}
var obj83884_onTap_runningActionsCount = 0;
var obj83884_onTap_loopCount = 0;
obj83884_onTap_actionGroup0();
});










/*
 *
 *   obj88177: Event Touch Down
 *
 */
$("#obj88177").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88177_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88177_onTap is still running");
	return;
}
var obj88177_onTap_runningActionsCount = 0;
var obj88177_onTap_loopCount = 0;
obj88177_onTap_actionGroup0();
});










/*
 *
 *   obj88172: Event Touch Down
 *
 */
$("#obj88172").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88172_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88172_onTap is still running");
	return;
}
var obj88172_onTap_runningActionsCount = 0;
var obj88172_onTap_loopCount = 0;
obj88172_onTap_actionGroup0();
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
	
$("#obj84177").trigger('SCEventShow');
$("#obj84176").trigger('SCEventShow');
$("#obj84174").trigger('SCEventShow');
$("#obj84171").trigger('SCEventShow');
$("#obj84168").trigger('SCEventShow');
$("#obj84164").trigger('SCEventShow');
$("#obj84162").trigger('SCEventShow');
$("#obj84160").trigger('SCEventShow');
$("#obj84158").trigger('SCEventShow');
$("#obj84156").trigger('SCEventShow');
$("#obj84154").trigger('SCEventShow');
$("#obj84152").trigger('SCEventShow');
$("#obj84150").trigger('SCEventShow');
$("#obj84148").trigger('SCEventShow');
$("#obj84146").trigger('SCEventShow');
$("#obj84144").trigger('SCEventShow');
$("#obj84142").trigger('SCEventShow');
$("#obj84140").trigger('SCEventShow');
$("#obj84138").trigger('SCEventShow');
$("#obj84136").trigger('SCEventShow');
$("#obj84134").trigger('SCEventShow');
$("#obj84132").trigger('SCEventShow');
$("#obj84130").trigger('SCEventShow');
$("#obj84128").trigger('SCEventShow');
$("#obj84126").trigger('SCEventShow');
$("#obj84124").trigger('SCEventShow');
$("#obj84122").trigger('SCEventShow');
$("#obj84069").trigger('SCEventShow');
$("#obj84016").trigger('SCEventShow');
$("#obj83963").trigger('SCEventShow');
$("#obj83910").trigger('SCEventShow');
$("#obj83892").trigger('SCEventShow');
$("#obj83884").trigger('SCEventShow');
$("#obj88177").trigger('SCEventShow');
$("#obj88172").trigger('SCEventShow');
$("#obj88182").trigger('SCEventShow');
$("#obj94847").trigger('SCEventShow');
$("#obj83882").trigger('SCEventShow');
	
});