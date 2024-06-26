pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 47652;
pubcoder.page.title = pubcoder.page.title || "170";
pubcoder.page.number = pubcoder.page.number || 170;
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
var obj47818_onTap_activeActionGroupIndex = -1;
var obj47818_onTap_runningActionsCount = 0;
var obj47818_onTap_loopCount = 0;
var obj47815_onTap_activeActionGroupIndex = -1;
var obj47815_onTap_runningActionsCount = 0;
var obj47815_onTap_loopCount = 0;
var obj47811_onTap_activeActionGroupIndex = -1;
var obj47811_onTap_runningActionsCount = 0;
var obj47811_onTap_loopCount = 0;
var obj47743_onDrag_activeActionGroupIndex = -1;
var obj47743_onDrag_runningActionsCount = 0;
var obj47743_onDrag_loopCount = 0;
var obj47743_onTouchDown_activeActionGroupIndex = -1;
var obj47743_onTouchDown_runningActionsCount = 0;
var obj47743_onTouchDown_loopCount = 0;
var obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_loopCount = 0;
var obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47743_droppedInsideTargetActions_3_loopCount = 0;
var obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47743_droppedInsideTargetActions_2_loopCount = 0;
var obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47743_droppedInsideTargetActions_runningActionsCount = 0;
var obj47743_droppedInsideTargetActions_loopCount = 0;
var obj47697_onDrag_activeActionGroupIndex = -1;
var obj47697_onDrag_runningActionsCount = 0;
var obj47697_onDrag_loopCount = 0;
var obj47697_onTouchDown_activeActionGroupIndex = -1;
var obj47697_onTouchDown_runningActionsCount = 0;
var obj47697_onTouchDown_loopCount = 0;
var obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_loopCount = 0;
var obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47697_droppedInsideTargetActions_3_loopCount = 0;
var obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47697_droppedInsideTargetActions_2_loopCount = 0;
var obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47697_droppedInsideTargetActions_runningActionsCount = 0;
var obj47697_droppedInsideTargetActions_loopCount = 0;
var obj47657_onDrag_activeActionGroupIndex = -1;
var obj47657_onDrag_runningActionsCount = 0;
var obj47657_onDrag_loopCount = 0;
var obj47657_onTouchDown_activeActionGroupIndex = -1;
var obj47657_onTouchDown_runningActionsCount = 0;
var obj47657_onTouchDown_loopCount = 0;
var obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_loopCount = 0;
var obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47657_droppedInsideTargetActions_3_loopCount = 0;
var obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47657_droppedInsideTargetActions_2_loopCount = 0;
var obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj47657_droppedInsideTargetActions_runningActionsCount = 0;
var obj47657_droppedInsideTargetActions_loopCount = 0;
var obj67726_onTap_activeActionGroupIndex = -1;
var obj67726_onTap_runningActionsCount = 0;
var obj67726_onTap_loopCount = 0;
var obj67718_onTap_activeActionGroupIndex = -1;
var obj67718_onTap_runningActionsCount = 0;
var obj67718_onTap_loopCount = 0;
var obj88921_onTap_activeActionGroupIndex = -1;
var obj88921_onTap_runningActionsCount = 0;
var obj88921_onTap_loopCount = 0;
var obj88916_onTap_activeActionGroupIndex = -1;
var obj88916_onTap_runningActionsCount = 0;
var obj88916_onTap_loopCount = 0;
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
		
obj47818_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47818_onTap_activeActionGroupIndex = -1;
		$("#obj47818").trigger("obj47818_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47818) {
				console.warn("de-queueing event obj47818." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47818").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47818_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47820();
function goToPage_47820() {
	window.obj47818_onTap_runningActionsCount = obj47818_onTap_runningActionsCount + 1;
	$("#anchor999")[0].click();
	window.obj47818_onTap_runningActionsCount = window.obj47818_onTap_runningActionsCount - 1;
if (window.obj47818_onTap_runningActionsCount < 0) {
	window.obj47818_onTap_runningActionsCount = 0;
} else if (window.obj47818_onTap_runningActionsCount == 0) {
	obj47818_onTap_actionGroup1();
}
}





















};
obj47818_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47818_onTap_activeActionGroupIndex = -1;
		$("#obj47818").trigger("obj47818_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47818) {
				console.warn("de-queueing event obj47818." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47818").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47818_onTap_activeActionGroupIndex = 1;
	





















};
obj47815_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47815_onTap_activeActionGroupIndex = -1;
		$("#obj47815").trigger("obj47815_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47815) {
				console.warn("de-queueing event obj47815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47815_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47817();
function goToPage_47817() {
	window.obj47815_onTap_runningActionsCount = obj47815_onTap_runningActionsCount + 1;
	$("#anchor1000")[0].click();
	window.obj47815_onTap_runningActionsCount = window.obj47815_onTap_runningActionsCount - 1;
if (window.obj47815_onTap_runningActionsCount < 0) {
	window.obj47815_onTap_runningActionsCount = 0;
} else if (window.obj47815_onTap_runningActionsCount == 0) {
	obj47815_onTap_actionGroup1();
}
}





















};
obj47815_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47815_onTap_activeActionGroupIndex = -1;
		$("#obj47815").trigger("obj47815_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47815) {
				console.warn("de-queueing event obj47815." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47815").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47815_onTap_activeActionGroupIndex = 1;
	





















};
obj47811_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47811_onTap_activeActionGroupIndex = -1;
		$("#obj47811").trigger("obj47811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47811) {
				console.warn("de-queueing event obj47811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47811_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_47813();
function goToPage_47813() {
	window.obj47811_onTap_runningActionsCount = obj47811_onTap_runningActionsCount + 1;
	$("#anchor1001")[0].click();
	window.obj47811_onTap_runningActionsCount = window.obj47811_onTap_runningActionsCount - 1;
if (window.obj47811_onTap_runningActionsCount < 0) {
	window.obj47811_onTap_runningActionsCount = 0;
} else if (window.obj47811_onTap_runningActionsCount == 0) {
	obj47811_onTap_actionGroup1();
}
}





















};
obj47811_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47811_onTap_activeActionGroupIndex = -1;
		$("#obj47811").trigger("obj47811_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47811) {
				console.warn("de-queueing event obj47811." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47811").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47811_onTap_activeActionGroupIndex = 1;
	





















};
obj47743_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47743");
//	action: dragDrop
//	target: obj47743 
dragDrop_47746();
function dragDrop_47746() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47743_onTouchDown_runningActionsCount = obj47743_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47743');
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
	  	containerNode = $('#obj47801');
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
    	window.obj47743_onTouchDown_runningActionsCount = window.obj47743_onTouchDown_runningActionsCount - 1;
if (window.obj47743_onTouchDown_runningActionsCount < 0) {
	window.obj47743_onTouchDown_runningActionsCount = 0;
} else if (window.obj47743_onTouchDown_runningActionsCount == 0) {
	obj47743_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj47795","#obj47799","#obj47797");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47746 = false;
    	var dropped_id_47746;
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
					dropped_47746 = true;
					dropped_id_47746 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47746) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47743").trigger('SCActionDragDrop47746_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47743_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47743_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47743 
move_92723();
function move_92723() {
	window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount = obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47743");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 117;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount = window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47743_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47764();
function runjs_47764() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47765();
function runjs_47765() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("border-color", "#C00000"); $("#obj47797").css("border-width", "2px"); $("#obj47797").css("border-style", "solid"); $("#obj47797").css("border-radius", "10px"); $("#obj47797").css("-webkit-border-radius", "10px"); $("#obj47797").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47766();
function switchText_47766() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj47743_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47743 
move_47767();
function move_47767() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj47743");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 117;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj47743_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47768();
function runjs_47768() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_47769();
function runjs_47769() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("border-color", "#000000"); $("#obj47797").css("border-width", "1px"); $("#obj47797").css("border-style", "solid"); $("#obj47797").css("border-radius", "15px"); $("#obj47797").css("-webkit-border-radius", "15px"); $("#obj47797").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47770();
function runjs_47770() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47743").css("border-color", "rgba(0,0,0,0)"); $("#obj47743").css("border-width", "0px"); $("#obj47743").css("border-style", "solid"); $("#obj47743").css("border-radius", "20px"); $("#obj47743").css("-webkit-border-radius", "20px"); $("#obj47743").css("-moz-border-radius", "20px"); $("#obj47743_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47771();
function switchText_47771() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj47743_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj47740 
playAudio_47772();
function playAudio_47772() {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = obj47743_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj47740")[0];
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
		    window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47743_droppedInsideTargetActions_3_runningActionsCount = window.obj47743_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj47743_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj47743_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47754();
function runjs_47754() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47755();
function runjs_47755() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("border-color", "#C00000"); $("#obj47799").css("border-width", "2px"); $("#obj47799").css("border-style", "solid"); $("#obj47799").css("border-radius", "10px"); $("#obj47799").css("-webkit-border-radius", "10px"); $("#obj47799").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47756();
function switchText_47756() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj47743_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47743 
move_47757();
function move_47757() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj47743");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 117;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj47743_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47758();
function runjs_47758() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_47759();
function runjs_47759() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("border-color", "#000000"); $("#obj47799").css("border-width", "1px"); $("#obj47799").css("border-style", "solid"); $("#obj47799").css("border-radius", "15px"); $("#obj47799").css("-webkit-border-radius", "15px"); $("#obj47799").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47760();
function runjs_47760() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47743").css("border-color", "rgba(0,0,0,0)"); $("#obj47743").css("border-width", "0px"); $("#obj47743").css("border-style", "solid"); $("#obj47743").css("border-radius", "20px"); $("#obj47743").css("-webkit-border-radius", "20px"); $("#obj47743").css("-moz-border-radius", "20px"); $("#obj47743_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47761();
function switchText_47761() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj47743_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj47740 
playAudio_47762();
function playAudio_47762() {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = obj47743_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj47740")[0];
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
		    window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47743_droppedInsideTargetActions_2_runningActionsCount = window.obj47743_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj47743_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj47743_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47748();
function runjs_47748() {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = obj47743_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47795").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47749();
function runjs_47749() {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = obj47743_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47795").css("border-color", "#058E3F"); $("#obj47795").css("border-width", "2px"); $("#obj47795").css("border-style", "solid"); $("#obj47795").css("border-radius", "10px"); $("#obj47795").css("-webkit-border-radius", "10px"); $("#obj47795").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47743_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47783 
hide_47750();
function hide_47750() {
	var selector = "#obj47783";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47743_droppedInsideTargetActions_runningActionsCount = obj47743_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47750(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47743_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_47751();
function switchText_47751() {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = obj47743_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj47743_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj47739 
playAudio_47752();
function playAudio_47752() {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = obj47743_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj47739")[0];
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
		    window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47743_droppedInsideTargetActions_runningActionsCount = window.obj47743_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47743_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47743_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47743_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47743_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj47743_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47743").trigger("obj47743_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47743) {
				console.warn("de-queueing event obj47743." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47743").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47743_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj47697_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47697");
//	action: dragDrop
//	target: obj47697 
dragDrop_47700();
function dragDrop_47700() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47697_onTouchDown_runningActionsCount = obj47697_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47697');
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
	  	containerNode = $('#obj47801');
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
    	window.obj47697_onTouchDown_runningActionsCount = window.obj47697_onTouchDown_runningActionsCount - 1;
if (window.obj47697_onTouchDown_runningActionsCount < 0) {
	window.obj47697_onTouchDown_runningActionsCount = 0;
} else if (window.obj47697_onTouchDown_runningActionsCount == 0) {
	obj47697_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj47797","#obj47799","#obj47795");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47700 = false;
    	var dropped_id_47700;
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
					dropped_47700 = true;
					dropped_id_47700 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47700) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47697").trigger('SCActionDragDrop47700_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47697_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47697_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47697 
move_92727();
function move_92727() {
	window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount = obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47697");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 385;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount = window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47697_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47718();
function runjs_47718() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47795").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47719();
function runjs_47719() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47795").css("border-color", "#C00000"); $("#obj47795").css("border-width", "2px"); $("#obj47795").css("border-style", "solid"); $("#obj47795").css("border-radius", "10px"); $("#obj47795").css("-webkit-border-radius", "10px"); $("#obj47795").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47720();
function switchText_47720() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj47697_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47697 
move_47721();
function move_47721() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj47697");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 385;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj47697_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47722();
function runjs_47722() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47795").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_47723();
function runjs_47723() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47795").css("border-color", "#000000"); $("#obj47795").css("border-width", "1px"); $("#obj47795").css("border-style", "solid"); $("#obj47795").css("border-radius", "15px"); $("#obj47795").css("-webkit-border-radius", "15px"); $("#obj47795").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47724();
function runjs_47724() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47697").css("border-color", "rgba(0,0,0,0)"); $("#obj47697").css("border-width", "0px"); $("#obj47697").css("border-style", "solid"); $("#obj47697").css("border-radius", "20px"); $("#obj47697").css("-webkit-border-radius", "20px"); $("#obj47697").css("-moz-border-radius", "20px"); $("#obj47697_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47725();
function switchText_47725() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj47697_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj47740 
playAudio_47726();
function playAudio_47726() {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = obj47697_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj47740")[0];
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
		    window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47697_droppedInsideTargetActions_3_runningActionsCount = window.obj47697_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj47697_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj47697_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47708();
function runjs_47708() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47709();
function runjs_47709() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("border-color", "#C00000"); $("#obj47799").css("border-width", "2px"); $("#obj47799").css("border-style", "solid"); $("#obj47799").css("border-radius", "10px"); $("#obj47799").css("-webkit-border-radius", "10px"); $("#obj47799").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47710();
function switchText_47710() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj47697_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47697 
move_47711();
function move_47711() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj47697");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 385;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj47697_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47712();
function runjs_47712() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_47713();
function runjs_47713() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47799").css("border-color", "#000000"); $("#obj47799").css("border-width", "1px"); $("#obj47799").css("border-style", "solid"); $("#obj47799").css("border-radius", "15px"); $("#obj47799").css("-webkit-border-radius", "15px"); $("#obj47799").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47714();
function runjs_47714() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47697").css("border-color", "rgba(0,0,0,0)"); $("#obj47697").css("border-width", "0px"); $("#obj47697").css("border-style", "solid"); $("#obj47697").css("border-radius", "20px"); $("#obj47697").css("-webkit-border-radius", "20px"); $("#obj47697").css("-moz-border-radius", "20px"); $("#obj47697_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47715();
function switchText_47715() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj47697_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj47740 
playAudio_47716();
function playAudio_47716() {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = obj47697_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj47740")[0];
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
		    window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47697_droppedInsideTargetActions_2_runningActionsCount = window.obj47697_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj47697_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj47697_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47702();
function runjs_47702() {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = obj47697_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47797").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47703();
function runjs_47703() {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = obj47697_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47797").css("border-color", "#058E3F"); $("#obj47797").css("border-width", "2px"); $("#obj47797").css("border-style", "solid"); $("#obj47797").css("border-radius", "10px"); $("#obj47797").css("-webkit-border-radius", "10px"); $("#obj47797").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47697_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47785 
hide_47704();
function hide_47704() {
	var selector = "#obj47785";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47697_droppedInsideTargetActions_runningActionsCount = obj47697_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47704(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47697_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_47705();
function switchText_47705() {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = obj47697_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj47697_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj47739 
playAudio_47706();
function playAudio_47706() {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = obj47697_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj47739")[0];
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
		    window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47697_droppedInsideTargetActions_runningActionsCount = window.obj47697_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47697_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47697_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47697_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47697_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj47697_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47697").trigger("obj47697_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47697) {
				console.warn("de-queueing event obj47697." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47697").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47697_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj47657_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj47657");
//	action: dragDrop
//	target: obj47657 
dragDrop_47660();
function dragDrop_47660() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj47657_onTouchDown_runningActionsCount = obj47657_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj47657');
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
	  	containerNode = $('#obj47801');
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
    	window.obj47657_onTouchDown_runningActionsCount = window.obj47657_onTouchDown_runningActionsCount - 1;
if (window.obj47657_onTouchDown_runningActionsCount < 0) {
	window.obj47657_onTouchDown_runningActionsCount = 0;
} else if (window.obj47657_onTouchDown_runningActionsCount == 0) {
	obj47657_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj47799","#obj47795","#obj47797");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_47660 = false;
    	var dropped_id_47660;
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
					dropped_47660 = true;
					dropped_id_47660 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_47660) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj47657").trigger('SCActionDragDrop47660_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj47657_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47657_onTouchDown_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj47657 
move_92725();
function move_92725() {
	window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount = obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj47657");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 251;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount = window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj47657_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47678();
function runjs_47678() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47679();
function runjs_47679() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("border-color", "#C00000"); $("#obj47797").css("border-width", "2px"); $("#obj47797").css("border-style", "solid"); $("#obj47797").css("border-radius", "10px"); $("#obj47797").css("-webkit-border-radius", "10px"); $("#obj47797").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47680();
function switchText_47680() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj47657_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47657 
move_47681();
function move_47681() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj47657");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 251;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj47657_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47682();
function runjs_47682() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_47683();
function runjs_47683() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47797").css("border-color", "#000000"); $("#obj47797").css("border-width", "1px"); $("#obj47797").css("border-style", "solid"); $("#obj47797").css("border-radius", "15px"); $("#obj47797").css("-webkit-border-radius", "15px"); $("#obj47797").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47684();
function runjs_47684() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj47657").css("border-color", "rgba(0,0,0,0)"); $("#obj47657").css("border-width", "0px"); $("#obj47657").css("border-style", "solid"); $("#obj47657").css("border-radius", "20px"); $("#obj47657").css("-webkit-border-radius", "20px"); $("#obj47657").css("-moz-border-radius", "20px"); $("#obj47657_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47685();
function switchText_47685() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj47657_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj47740 
playAudio_47686();
function playAudio_47686() {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = obj47657_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj47740")[0];
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
		    window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47657_droppedInsideTargetActions_3_runningActionsCount = window.obj47657_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj47657_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj47657_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47668();
function runjs_47668() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47795").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47669();
function runjs_47669() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47795").css("border-color", "#C00000"); $("#obj47795").css("border-width", "2px"); $("#obj47795").css("border-style", "solid"); $("#obj47795").css("border-radius", "10px"); $("#obj47795").css("-webkit-border-radius", "10px"); $("#obj47795").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_47670();
function switchText_47670() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj47657_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj47657 
move_47671();
function move_47671() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj47657");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 251;
	var moveY = 612;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj47657_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_47672();
function runjs_47672() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47795").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_47673();
function runjs_47673() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47795").css("border-color", "#000000"); $("#obj47795").css("border-width", "1px"); $("#obj47795").css("border-style", "solid"); $("#obj47795").css("border-radius", "15px"); $("#obj47795").css("-webkit-border-radius", "15px"); $("#obj47795").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_47674();
function runjs_47674() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj47657").css("border-color", "rgba(0,0,0,0)"); $("#obj47657").css("border-width", "0px"); $("#obj47657").css("border-style", "solid"); $("#obj47657").css("border-radius", "20px"); $("#obj47657").css("-webkit-border-radius", "20px"); $("#obj47657").css("-moz-border-radius", "20px"); $("#obj47657_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_47675();
function switchText_47675() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj47657_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj47740 
playAudio_47676();
function playAudio_47676() {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = obj47657_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj47740")[0];
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
		    window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47657_droppedInsideTargetActions_2_runningActionsCount = window.obj47657_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj47657_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj47657_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_47662();
function runjs_47662() {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = obj47657_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_47663();
function runjs_47663() {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = obj47657_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj47799").css("border-color", "#058E3F"); $("#obj47799").css("border-width", "2px"); $("#obj47799").css("border-style", "solid"); $("#obj47799").css("border-radius", "10px"); $("#obj47799").css("-webkit-border-radius", "10px"); $("#obj47799").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj47657_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj47787 
hide_47664();
function hide_47664() {
	var selector = "#obj47787";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj47657_droppedInsideTargetActions_runningActionsCount = obj47657_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_47664(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj47657_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Switch Text
switchText_47665();
function switchText_47665() {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = obj47657_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj47741_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj47741_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj47741").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj47741_content");
			setTimeout(function () {
				window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup4();
}
			}, 1);
		});
	} else {
		$("#obj47741 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
	}
}






};
obj47657_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj47739 
playAudio_47666();
function playAudio_47666() {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = obj47657_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj47739")[0];
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
		    window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj47657_droppedInsideTargetActions_runningActionsCount = window.obj47657_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj47657_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj47657_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj47657_droppedInsideTargetActions_runningActionsCount == 0) {
	obj47657_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj47657_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj47657").trigger("obj47657_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 47657) {
				console.warn("de-queueing event obj47657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj47657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj47657_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj67726_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67726_onTap_activeActionGroupIndex = -1;
		$("#obj67726").trigger("obj67726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67726) {
				console.warn("de-queueing event obj67726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67726_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67726 
hide_67729();
function hide_67729() {
	var selector = "#obj67726";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67726_onTap_runningActionsCount = obj67726_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67726_onTap_runningActionsCount = window.obj67726_onTap_runningActionsCount - 1;
if (window.obj67726_onTap_runningActionsCount < 0) {
	window.obj67726_onTap_runningActionsCount = 0;
} else if (window.obj67726_onTap_runningActionsCount == 0) {
	obj67726_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67729(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67726_onTap_runningActionsCount = window.obj67726_onTap_runningActionsCount - 1;
if (window.obj67726_onTap_runningActionsCount < 0) {
	window.obj67726_onTap_runningActionsCount = 0;
} else if (window.obj67726_onTap_runningActionsCount == 0) {
	obj67726_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67732 
stopMovie_67728();
function stopMovie_67728() {
	window.obj67726_onTap_runningActionsCount = obj67726_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67732")[0];
	myVideo.pause();
	window.obj67726_onTap_runningActionsCount = window.obj67726_onTap_runningActionsCount - 1;
if (window.obj67726_onTap_runningActionsCount < 0) {
	window.obj67726_onTap_runningActionsCount = 0;
} else if (window.obj67726_onTap_runningActionsCount == 0) {
	obj67726_onTap_actionGroup1();
}
}
















};
obj67726_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67726_onTap_activeActionGroupIndex = -1;
		$("#obj67726").trigger("obj67726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67726) {
				console.warn("de-queueing event obj67726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67726_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67718
(function(){
	window.obj67726_onTap_runningActionsCount = obj67726_onTap_runningActionsCount + 1;

	var selector = "#obj67718";
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
					window.obj67726_onTap_runningActionsCount = window.obj67726_onTap_runningActionsCount - 1;
if (window.obj67726_onTap_runningActionsCount < 0) {
	window.obj67726_onTap_runningActionsCount = 0;
} else if (window.obj67726_onTap_runningActionsCount == 0) {
	obj67726_onTap_actionGroup2();
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
				window.obj67726_onTap_runningActionsCount = window.obj67726_onTap_runningActionsCount - 1;
if (window.obj67726_onTap_runningActionsCount < 0) {
	window.obj67726_onTap_runningActionsCount = 0;
} else if (window.obj67726_onTap_runningActionsCount == 0) {
	obj67726_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67726_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67726_onTap_activeActionGroupIndex = -1;
		$("#obj67726").trigger("obj67726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67726) {
				console.warn("de-queueing event obj67726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67726_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67732 
move_67731();
function move_67731() {
	window.obj67726_onTap_runningActionsCount = obj67726_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67732");
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
			window.obj67726_onTap_runningActionsCount = window.obj67726_onTap_runningActionsCount - 1;
if (window.obj67726_onTap_runningActionsCount < 0) {
	window.obj67726_onTap_runningActionsCount = 0;
} else if (window.obj67726_onTap_runningActionsCount == 0) {
	obj67726_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67726_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67726_onTap_activeActionGroupIndex = -1;
		$("#obj67726").trigger("obj67726_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67726) {
				console.warn("de-queueing event obj67726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67726_onTap_activeActionGroupIndex = 3;
	





















};
obj67718_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67718_onTap_activeActionGroupIndex = -1;
		$("#obj67718").trigger("obj67718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67718) {
				console.warn("de-queueing event obj67718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67718_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67718 
hide_67721();
function hide_67721() {
	var selector = "#obj67718";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67718_onTap_runningActionsCount = obj67718_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67718_onTap_runningActionsCount = window.obj67718_onTap_runningActionsCount - 1;
if (window.obj67718_onTap_runningActionsCount < 0) {
	window.obj67718_onTap_runningActionsCount = 0;
} else if (window.obj67718_onTap_runningActionsCount == 0) {
	obj67718_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67721(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67718_onTap_runningActionsCount = window.obj67718_onTap_runningActionsCount - 1;
if (window.obj67718_onTap_runningActionsCount < 0) {
	window.obj67718_onTap_runningActionsCount = 0;
} else if (window.obj67718_onTap_runningActionsCount == 0) {
	obj67718_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67732 
playPauseMovie_67720();
function playPauseMovie_67720() {
	window.obj67718_onTap_runningActionsCount = obj67718_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67732")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67718_onTap_runningActionsCount = window.obj67718_onTap_runningActionsCount - 1;
if (window.obj67718_onTap_runningActionsCount < 0) {
	window.obj67718_onTap_runningActionsCount = 0;
} else if (window.obj67718_onTap_runningActionsCount == 0) {
	obj67718_onTap_actionGroup1();
}
}

















};
obj67718_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67718_onTap_activeActionGroupIndex = -1;
		$("#obj67718").trigger("obj67718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67718) {
				console.warn("de-queueing event obj67718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67718_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67726
(function(){
	window.obj67718_onTap_runningActionsCount = obj67718_onTap_runningActionsCount + 1;

	var selector = "#obj67726";
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
					window.obj67718_onTap_runningActionsCount = window.obj67718_onTap_runningActionsCount - 1;
if (window.obj67718_onTap_runningActionsCount < 0) {
	window.obj67718_onTap_runningActionsCount = 0;
} else if (window.obj67718_onTap_runningActionsCount == 0) {
	obj67718_onTap_actionGroup2();
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
				window.obj67718_onTap_runningActionsCount = window.obj67718_onTap_runningActionsCount - 1;
if (window.obj67718_onTap_runningActionsCount < 0) {
	window.obj67718_onTap_runningActionsCount = 0;
} else if (window.obj67718_onTap_runningActionsCount == 0) {
	obj67718_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67718_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67718_onTap_activeActionGroupIndex = -1;
		$("#obj67718").trigger("obj67718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67718) {
				console.warn("de-queueing event obj67718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67718_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67732 
move_67723();
function move_67723() {
	window.obj67718_onTap_runningActionsCount = obj67718_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67732");
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
			window.obj67718_onTap_runningActionsCount = window.obj67718_onTap_runningActionsCount - 1;
if (window.obj67718_onTap_runningActionsCount < 0) {
	window.obj67718_onTap_runningActionsCount = 0;
} else if (window.obj67718_onTap_runningActionsCount == 0) {
	obj67718_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67718_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67718_onTap_activeActionGroupIndex = -1;
		$("#obj67718").trigger("obj67718_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67718) {
				console.warn("de-queueing event obj67718." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67718").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67718_onTap_activeActionGroupIndex = 3;
	





















};
obj88921_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88921_onTap_activeActionGroupIndex = -1;
		$("#obj88921").trigger("obj88921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88921) {
				console.warn("de-queueing event obj88921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88921_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88926 
stopAudio_88923();
function stopAudio_88923() {
	window.obj88921_onTap_runningActionsCount = obj88921_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88926")[0];
	myAudio.pause();
	window.obj88921_onTap_runningActionsCount = window.obj88921_onTap_runningActionsCount - 1;
if (window.obj88921_onTap_runningActionsCount < 0) {
	window.obj88921_onTap_runningActionsCount = 0;
} else if (window.obj88921_onTap_runningActionsCount == 0) {
	obj88921_onTap_actionGroup1();
}
}








};
obj88921_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88921_onTap_activeActionGroupIndex = -1;
		$("#obj88921").trigger("obj88921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88921) {
				console.warn("de-queueing event obj88921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88921_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88921 
hide_88924();
function hide_88924() {
	var selector = "#obj88921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88921_onTap_runningActionsCount = obj88921_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88921_onTap_runningActionsCount = window.obj88921_onTap_runningActionsCount - 1;
if (window.obj88921_onTap_runningActionsCount < 0) {
	window.obj88921_onTap_runningActionsCount = 0;
} else if (window.obj88921_onTap_runningActionsCount == 0) {
	obj88921_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88924(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88921_onTap_runningActionsCount = window.obj88921_onTap_runningActionsCount - 1;
if (window.obj88921_onTap_runningActionsCount < 0) {
	window.obj88921_onTap_runningActionsCount = 0;
} else if (window.obj88921_onTap_runningActionsCount == 0) {
	obj88921_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88921_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88921_onTap_activeActionGroupIndex = -1;
		$("#obj88921").trigger("obj88921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88921) {
				console.warn("de-queueing event obj88921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88921_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88916
(function(){
	window.obj88921_onTap_runningActionsCount = obj88921_onTap_runningActionsCount + 1;

	var selector = "#obj88916";
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
					window.obj88921_onTap_runningActionsCount = window.obj88921_onTap_runningActionsCount - 1;
if (window.obj88921_onTap_runningActionsCount < 0) {
	window.obj88921_onTap_runningActionsCount = 0;
} else if (window.obj88921_onTap_runningActionsCount == 0) {
	obj88921_onTap_actionGroup3();
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
				window.obj88921_onTap_runningActionsCount = window.obj88921_onTap_runningActionsCount - 1;
if (window.obj88921_onTap_runningActionsCount < 0) {
	window.obj88921_onTap_runningActionsCount = 0;
} else if (window.obj88921_onTap_runningActionsCount == 0) {
	obj88921_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88921_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88921_onTap_activeActionGroupIndex = -1;
		$("#obj88921").trigger("obj88921_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88921) {
				console.warn("de-queueing event obj88921." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88921").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88921_onTap_activeActionGroupIndex = 3;
	





















};
obj88916_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88916_onTap_activeActionGroupIndex = -1;
		$("#obj88916").trigger("obj88916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88916) {
				console.warn("de-queueing event obj88916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88916_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88916 
hide_88918();
function hide_88918() {
	var selector = "#obj88916";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88916_onTap_runningActionsCount = obj88916_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88916_onTap_runningActionsCount = window.obj88916_onTap_runningActionsCount - 1;
if (window.obj88916_onTap_runningActionsCount < 0) {
	window.obj88916_onTap_runningActionsCount = 0;
} else if (window.obj88916_onTap_runningActionsCount == 0) {
	obj88916_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88918(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88916_onTap_runningActionsCount = window.obj88916_onTap_runningActionsCount - 1;
if (window.obj88916_onTap_runningActionsCount < 0) {
	window.obj88916_onTap_runningActionsCount = 0;
} else if (window.obj88916_onTap_runningActionsCount == 0) {
	obj88916_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88916_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88916_onTap_activeActionGroupIndex = -1;
		$("#obj88916").trigger("obj88916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88916) {
				console.warn("de-queueing event obj88916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88916_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88921
(function(){
	window.obj88916_onTap_runningActionsCount = obj88916_onTap_runningActionsCount + 1;

	var selector = "#obj88921";
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
					window.obj88916_onTap_runningActionsCount = window.obj88916_onTap_runningActionsCount - 1;
if (window.obj88916_onTap_runningActionsCount < 0) {
	window.obj88916_onTap_runningActionsCount = 0;
} else if (window.obj88916_onTap_runningActionsCount == 0) {
	obj88916_onTap_actionGroup2();
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
				window.obj88916_onTap_runningActionsCount = window.obj88916_onTap_runningActionsCount - 1;
if (window.obj88916_onTap_runningActionsCount < 0) {
	window.obj88916_onTap_runningActionsCount = 0;
} else if (window.obj88916_onTap_runningActionsCount == 0) {
	obj88916_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88916_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88916_onTap_activeActionGroupIndex = -1;
		$("#obj88916").trigger("obj88916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88916) {
				console.warn("de-queueing event obj88916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88916_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88926 
playAudio_88920();
function playAudio_88920() {
	window.obj88916_onTap_runningActionsCount = obj88916_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88926")[0];
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
		    window.obj88916_onTap_runningActionsCount = window.obj88916_onTap_runningActionsCount - 1;
if (window.obj88916_onTap_runningActionsCount < 0) {
	window.obj88916_onTap_runningActionsCount = 0;
} else if (window.obj88916_onTap_runningActionsCount == 0) {
	obj88916_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88916_onTap_runningActionsCount = window.obj88916_onTap_runningActionsCount - 1;
if (window.obj88916_onTap_runningActionsCount < 0) {
	window.obj88916_onTap_runningActionsCount = 0;
} else if (window.obj88916_onTap_runningActionsCount == 0) {
	obj88916_onTap_actionGroup3();
}
	}
}









};
obj88916_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88916_onTap_activeActionGroupIndex = -1;
		$("#obj88916").trigger("obj88916_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88916) {
				console.warn("de-queueing event obj88916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88916_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj47818: Event Touch Down
 *
 */
$("#obj47818").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47818_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47818_onTap is still running");
	return;
}
var obj47818_onTap_runningActionsCount = 0;
var obj47818_onTap_loopCount = 0;
obj47818_onTap_actionGroup0();
});










/*
 *
 *   obj47815: Event Touch Down
 *
 */
$("#obj47815").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47815_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47815_onTap is still running");
	return;
}
var obj47815_onTap_runningActionsCount = 0;
var obj47815_onTap_loopCount = 0;
obj47815_onTap_actionGroup0();
});










/*
 *
 *   obj47811: Event Touch Down
 *
 */
$("#obj47811").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj47811_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47811_onTap is still running");
	return;
}
var obj47811_onTap_runningActionsCount = 0;
var obj47811_onTap_loopCount = 0;
obj47811_onTap_actionGroup0();
});























































































































































/*
 *
 *   obj47743: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47743");
	var winTarget = document.getElementById("obj47743");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47743").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47743_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47743_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47743_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47743_onTouchDown is still running");
	return;
}
var obj47743_onTouchDown_runningActionsCount = 0;
var obj47743_onTouchDown_loopCount = 0;
obj47743_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47743: Event SCActionDragDrop47746_droppedOutsideTargetActions
 *
 */
$("#obj47743").bind("SCActionDragDrop47746_droppedOutsideTargetActions", function(event) {
	if (window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47743_SCActionDragDrop47746_droppedOutsideTargetActions is still running");
	return;
}
var obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_loopCount = 0;
obj47743_SCActionDragDrop47746_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47743: Event droppedInsideTargetActions_3
 *
 */
$("#obj47743").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47743_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47743_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47743_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47743_droppedInsideTargetActions_3_loopCount = 0;
obj47743_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47743: Event droppedInsideTargetActions_2
 *
 */
$("#obj47743").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47743_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47743_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47743_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47743_droppedInsideTargetActions_2_loopCount = 0;
obj47743_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47743: Event droppedInsideTargetActions
 *
 */
$("#obj47743").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47743_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47743_droppedInsideTargetActions is still running");
	return;
}
var obj47743_droppedInsideTargetActions_runningActionsCount = 0;
var obj47743_droppedInsideTargetActions_loopCount = 0;
obj47743_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47697: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47697");
	var winTarget = document.getElementById("obj47697");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47697").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47697_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47697_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47697_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47697_onTouchDown is still running");
	return;
}
var obj47697_onTouchDown_runningActionsCount = 0;
var obj47697_onTouchDown_loopCount = 0;
obj47697_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47697: Event SCActionDragDrop47700_droppedOutsideTargetActions
 *
 */
$("#obj47697").bind("SCActionDragDrop47700_droppedOutsideTargetActions", function(event) {
	if (window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47697_SCActionDragDrop47700_droppedOutsideTargetActions is still running");
	return;
}
var obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_loopCount = 0;
obj47697_SCActionDragDrop47700_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47697: Event droppedInsideTargetActions_3
 *
 */
$("#obj47697").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47697_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47697_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47697_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47697_droppedInsideTargetActions_3_loopCount = 0;
obj47697_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47697: Event droppedInsideTargetActions_2
 *
 */
$("#obj47697").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47697_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47697_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47697_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47697_droppedInsideTargetActions_2_loopCount = 0;
obj47697_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47697: Event droppedInsideTargetActions
 *
 */
$("#obj47697").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47697_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47697_droppedInsideTargetActions is still running");
	return;
}
var obj47697_droppedInsideTargetActions_runningActionsCount = 0;
var obj47697_droppedInsideTargetActions_loopCount = 0;
obj47697_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj47657: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj47657");
	var winTarget = document.getElementById("obj47657");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj47657").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj47657_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj47657_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj47657_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47657_onTouchDown is still running");
	return;
}
var obj47657_onTouchDown_runningActionsCount = 0;
var obj47657_onTouchDown_loopCount = 0;
obj47657_onTouchDown_actionGroup0();
});



/*
 *
 *   obj47657: Event SCActionDragDrop47660_droppedOutsideTargetActions
 *
 */
$("#obj47657").bind("SCActionDragDrop47660_droppedOutsideTargetActions", function(event) {
	if (window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47657_SCActionDragDrop47660_droppedOutsideTargetActions is still running");
	return;
}
var obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_runningActionsCount = 0;
var obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_loopCount = 0;
obj47657_SCActionDragDrop47660_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj47657: Event droppedInsideTargetActions_3
 *
 */
$("#obj47657").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj47657_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47657_droppedInsideTargetActions_3 is still running");
	return;
}
var obj47657_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj47657_droppedInsideTargetActions_3_loopCount = 0;
obj47657_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj47657: Event droppedInsideTargetActions_2
 *
 */
$("#obj47657").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj47657_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47657_droppedInsideTargetActions_2 is still running");
	return;
}
var obj47657_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj47657_droppedInsideTargetActions_2_loopCount = 0;
obj47657_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj47657: Event droppedInsideTargetActions
 *
 */
$("#obj47657").bind("droppedInsideTargetActions", function(event) {
	if (window.obj47657_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj47657_droppedInsideTargetActions is still running");
	return;
}
var obj47657_droppedInsideTargetActions_runningActionsCount = 0;
var obj47657_droppedInsideTargetActions_loopCount = 0;
obj47657_droppedInsideTargetActions_actionGroup0();
});























































/*
 *
 *   obj67726: Event Touch Down
 *
 */
$("#obj67726").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67726_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67726_onTap is still running");
	return;
}
var obj67726_onTap_runningActionsCount = 0;
var obj67726_onTap_loopCount = 0;
obj67726_onTap_actionGroup0();
});










/*
 *
 *   obj67718: Event Touch Down
 *
 */
$("#obj67718").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67718_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67718_onTap is still running");
	return;
}
var obj67718_onTap_runningActionsCount = 0;
var obj67718_onTap_loopCount = 0;
obj67718_onTap_actionGroup0();
});










/*
 *
 *   obj88921: Event Touch Down
 *
 */
$("#obj88921").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88921_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88921_onTap is still running");
	return;
}
var obj88921_onTap_runningActionsCount = 0;
var obj88921_onTap_loopCount = 0;
obj88921_onTap_actionGroup0();
});










/*
 *
 *   obj88916: Event Touch Down
 *
 */
$("#obj88916").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88916_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88916_onTap is still running");
	return;
}
var obj88916_onTap_runningActionsCount = 0;
var obj88916_onTap_loopCount = 0;
obj88916_onTap_actionGroup0();
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
	
$("#obj47834").trigger('SCEventShow');
$("#obj47818").trigger('SCEventShow');
$("#obj47815").trigger('SCEventShow');
$("#obj47811").trigger('SCEventShow');
$("#obj47807").trigger('SCEventShow');
$("#obj47805").trigger('SCEventShow');
$("#obj47803").trigger('SCEventShow');
$("#obj47801").trigger('SCEventShow');
$("#obj47799").trigger('SCEventShow');
$("#obj47797").trigger('SCEventShow');
$("#obj47795").trigger('SCEventShow');
$("#obj47787").trigger('SCEventShow');
$("#obj47785").trigger('SCEventShow');
$("#obj47783").trigger('SCEventShow');
$("#obj47741").trigger('SCEventShow');
$("#obj47740").trigger('SCEventShow');
$("#obj47739").trigger('SCEventShow');
$("#obj47737").trigger('SCEventShow');
$("#obj47743").trigger('SCEventShow');
$("#obj47697").trigger('SCEventShow');
$("#obj47657").trigger('SCEventShow');
$("#obj47655").trigger('SCEventShow');
$("#obj47653").trigger('SCEventShow');
$("#obj47836").trigger('SCEventShow');
$("#obj47838").trigger('SCEventShow');
$("#obj47840").trigger('SCEventShow');
$("#obj67726").trigger('SCEventShow');
$("#obj67718").trigger('SCEventShow');
$("#obj88921").trigger('SCEventShow');
$("#obj88916").trigger('SCEventShow');
$("#obj88926").trigger('SCEventShow');
$("#obj94969").trigger('SCEventShow');
$("#obj67732").trigger('SCEventShow');
	
});