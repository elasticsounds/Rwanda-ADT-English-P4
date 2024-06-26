pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 33530;
pubcoder.page.title = pubcoder.page.title || "118";
pubcoder.page.number = pubcoder.page.number || 118;
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
var obj86308_onTap_activeActionGroupIndex = -1;
var obj86308_onTap_runningActionsCount = 0;
var obj86308_onTap_loopCount = 0;
var obj86305_onTap_activeActionGroupIndex = -1;
var obj86305_onTap_runningActionsCount = 0;
var obj86305_onTap_loopCount = 0;
var obj86202_onDrag_activeActionGroupIndex = -1;
var obj86202_onDrag_runningActionsCount = 0;
var obj86202_onDrag_loopCount = 0;
var obj86202_onTouchDown_activeActionGroupIndex = -1;
var obj86202_onTouchDown_runningActionsCount = 0;
var obj86202_onTouchDown_loopCount = 0;
var obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_loopCount = 0;
var obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_4_loopCount = 0;
var obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_3_loopCount = 0;
var obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_2_loopCount = 0;
var obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86202_droppedInsideTargetActions_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_loopCount = 0;
var obj86149_onDrag_activeActionGroupIndex = -1;
var obj86149_onDrag_runningActionsCount = 0;
var obj86149_onDrag_loopCount = 0;
var obj86149_onTouchDown_activeActionGroupIndex = -1;
var obj86149_onTouchDown_runningActionsCount = 0;
var obj86149_onTouchDown_loopCount = 0;
var obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_loopCount = 0;
var obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_4_loopCount = 0;
var obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_3_loopCount = 0;
var obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_2_loopCount = 0;
var obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86149_droppedInsideTargetActions_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_loopCount = 0;
var obj86096_onDrag_activeActionGroupIndex = -1;
var obj86096_onDrag_runningActionsCount = 0;
var obj86096_onDrag_loopCount = 0;
var obj86096_onTouchDown_activeActionGroupIndex = -1;
var obj86096_onTouchDown_runningActionsCount = 0;
var obj86096_onTouchDown_loopCount = 0;
var obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_loopCount = 0;
var obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_4_loopCount = 0;
var obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_3_loopCount = 0;
var obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_2_loopCount = 0;
var obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86096_droppedInsideTargetActions_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_loopCount = 0;
var obj86043_onDrag_activeActionGroupIndex = -1;
var obj86043_onDrag_runningActionsCount = 0;
var obj86043_onDrag_loopCount = 0;
var obj86043_onTouchDown_activeActionGroupIndex = -1;
var obj86043_onTouchDown_runningActionsCount = 0;
var obj86043_onTouchDown_loopCount = 0;
var obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_loopCount = 0;
var obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_4_loopCount = 0;
var obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_3_loopCount = 0;
var obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_2_loopCount = 0;
var obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj86043_droppedInsideTargetActions_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_loopCount = 0;
var obj86025_onTap_activeActionGroupIndex = -1;
var obj86025_onTap_runningActionsCount = 0;
var obj86025_onTap_loopCount = 0;
var obj86017_onTap_activeActionGroupIndex = -1;
var obj86017_onTap_runningActionsCount = 0;
var obj86017_onTap_loopCount = 0;
var obj88285_onTap_activeActionGroupIndex = -1;
var obj88285_onTap_runningActionsCount = 0;
var obj88285_onTap_loopCount = 0;
var obj88280_onTap_activeActionGroupIndex = -1;
var obj88280_onTap_runningActionsCount = 0;
var obj88280_onTap_loopCount = 0;
var obj90049_onTap_activeActionGroupIndex = -1;
var obj90049_onTap_runningActionsCount = 0;
var obj90049_onTap_loopCount = 0;
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
		
obj86308_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86308_onTap_activeActionGroupIndex = -1;
		$("#obj86308").trigger("obj86308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86308) {
				console.warn("de-queueing event obj86308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86308_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86310();
function goToPage_86310() {
	window.obj86308_onTap_runningActionsCount = obj86308_onTap_runningActionsCount + 1;
	$("#anchor707")[0].click();
	window.obj86308_onTap_runningActionsCount = window.obj86308_onTap_runningActionsCount - 1;
if (window.obj86308_onTap_runningActionsCount < 0) {
	window.obj86308_onTap_runningActionsCount = 0;
} else if (window.obj86308_onTap_runningActionsCount == 0) {
	obj86308_onTap_actionGroup1();
}
}





















};
obj86308_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86308_onTap_activeActionGroupIndex = -1;
		$("#obj86308").trigger("obj86308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86308) {
				console.warn("de-queueing event obj86308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86308_onTap_activeActionGroupIndex = 1;
	





















};
obj86305_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86305_onTap_activeActionGroupIndex = -1;
		$("#obj86305").trigger("obj86305_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86305) {
				console.warn("de-queueing event obj86305." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86305").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86305_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86307();
function goToPage_86307() {
	window.obj86305_onTap_runningActionsCount = obj86305_onTap_runningActionsCount + 1;
	$("#anchor708")[0].click();
	window.obj86305_onTap_runningActionsCount = window.obj86305_onTap_runningActionsCount - 1;
if (window.obj86305_onTap_runningActionsCount < 0) {
	window.obj86305_onTap_runningActionsCount = 0;
} else if (window.obj86305_onTap_runningActionsCount == 0) {
	obj86305_onTap_actionGroup1();
}
}





















};
obj86305_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86305_onTap_activeActionGroupIndex = -1;
		$("#obj86305").trigger("obj86305_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86305) {
				console.warn("de-queueing event obj86305." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86305").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86305_onTap_activeActionGroupIndex = 1;
	





















};
obj86202_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86202");
//	action: dragDrop
//	target: obj86202 
dragDrop_86205();
function dragDrop_86205() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86202_onTouchDown_runningActionsCount = obj86202_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86202');
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
	  	containerNode = $('#obj86287');
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
    	window.obj86202_onTouchDown_runningActionsCount = window.obj86202_onTouchDown_runningActionsCount - 1;
if (window.obj86202_onTouchDown_runningActionsCount < 0) {
	window.obj86202_onTouchDown_runningActionsCount = 0;
} else if (window.obj86202_onTouchDown_runningActionsCount == 0) {
	obj86202_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86263","#obj86279","#obj86267","#obj86273");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86205 = false;
    	var dropped_id_86205;
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
					dropped_86205 = true;
					dropped_id_86205 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86205) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86202").trigger('SCActionDragDrop86205_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86202_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86202_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86202 
move_92525();
function move_92525() {
	window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount = obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 119;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount = window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86202_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86242();
function runjs_86242() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86243();
function runjs_86243() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#C00000"); $("#obj86273").css("border-width", "2px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86271 
hide_86244();
function hide_86244() {
	var selector = "#obj86271";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86244(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86202_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86245();
function runjs_86245() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86202").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86246();
function switchText_86246() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86202 
move_86247();
function move_86247() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 119;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86202_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86248();
function runjs_86248() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86249();
function runjs_86249() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#000000"); $("#obj86273").css("border-width", "1px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86271
(function(){
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86271";
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
					window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86202_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86251();
function runjs_86251() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86202").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86252();
function runjs_86252() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86202").css("border-color", "rgba(0,0,0,0)"); $("#obj86202").css("border-width", "0px"); $("#obj86202").css("border-style", "solid"); $("#obj86202").css("border-radius", "10px"); $("#obj86202").css("-webkit-border-radius", "10px"); $("#obj86202").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86253();
function playAudio_86253() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86202_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86254();
function switchText_86254() {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = obj86202_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_4_runningActionsCount = window.obj86202_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86202_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86228();
function runjs_86228() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86229();
function runjs_86229() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#C00000"); $("#obj86267").css("border-width", "2px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86265 
hide_86230();
function hide_86230() {
	var selector = "#obj86265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86230(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86202_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86231();
function runjs_86231() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86202").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86232();
function switchText_86232() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86202 
move_86233();
function move_86233() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 119;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86202_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86234();
function runjs_86234() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86235();
function runjs_86235() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#000000"); $("#obj86267").css("border-width", "1px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86265
(function(){
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86265";
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
					window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86202_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86237();
function runjs_86237() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86202").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86238();
function runjs_86238() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86202").css("border-color", "rgba(0,0,0,0)"); $("#obj86202").css("border-width", "0px"); $("#obj86202").css("border-style", "solid"); $("#obj86202").css("border-radius", "10px"); $("#obj86202").css("-webkit-border-radius", "10px"); $("#obj86202").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86239();
function playAudio_86239() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86202_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86240();
function switchText_86240() {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = obj86202_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_3_runningActionsCount = window.obj86202_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86202_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86214();
function runjs_86214() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86215();
function runjs_86215() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#C00000"); $("#obj86279").css("border-width", "2px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86277 
hide_86216();
function hide_86216() {
	var selector = "#obj86277";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86216(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86202_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86217();
function runjs_86217() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86202").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86218();
function switchText_86218() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86202 
move_86219();
function move_86219() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86202");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 119;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86202_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86220();
function runjs_86220() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86221();
function runjs_86221() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#000000"); $("#obj86279").css("border-width", "1px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86277
(function(){
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86277";
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
					window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86202_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86223();
function runjs_86223() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86202").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86224();
function runjs_86224() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86202").css("border-color", "rgba(0,0,0,0)"); $("#obj86202").css("border-width", "0px"); $("#obj86202").css("border-style", "solid"); $("#obj86202").css("border-radius", "10px"); $("#obj86202").css("-webkit-border-radius", "10px"); $("#obj86202").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86225();
function playAudio_86225() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86202_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86226();
function switchText_86226() {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = obj86202_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_2_runningActionsCount = window.obj86202_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86202_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86207();
function runjs_86207() {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86211();
function switchText_86211() {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86208();
function runjs_86208() {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#058E3F"); $("#obj86263").css("border-width", "2px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86261 
hide_86209();
function hide_86209() {
	var selector = "#obj86261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86209(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86202_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86210();
function runjs_86210() {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86202").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86202_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86255 
playAudio_86212();
function playAudio_86212() {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86255")[0];
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
		    window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86202_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90420();
function switchText_90420() {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = obj86202_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86202_droppedInsideTargetActions_runningActionsCount = window.obj86202_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86202_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86202_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86202_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86202_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86202_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86202").trigger("obj86202_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86202) {
				console.warn("de-queueing event obj86202." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86202").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86202_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86149_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86149");
//	action: dragDrop
//	target: obj86149 
dragDrop_86152();
function dragDrop_86152() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86149_onTouchDown_runningActionsCount = obj86149_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86149');
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
	  	containerNode = $('#obj86287');
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
    	window.obj86149_onTouchDown_runningActionsCount = window.obj86149_onTouchDown_runningActionsCount - 1;
if (window.obj86149_onTouchDown_runningActionsCount < 0) {
	window.obj86149_onTouchDown_runningActionsCount = 0;
} else if (window.obj86149_onTouchDown_runningActionsCount == 0) {
	obj86149_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86279","#obj86273","#obj86267","#obj86263");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86152 = false;
    	var dropped_id_86152;
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
					dropped_86152 = true;
					dropped_id_86152 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86152) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86149").trigger('SCActionDragDrop86152_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86149_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86149_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86149 
move_92527();
function move_92527() {
	window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount = obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86149");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount = window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86149_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86189();
function runjs_86189() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86190();
function runjs_86190() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#C00000"); $("#obj86263").css("border-width", "2px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86261 
hide_86191();
function hide_86191() {
	var selector = "#obj86261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86191(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86149_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86192();
function runjs_86192() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86149").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86193();
function switchText_86193() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86149 
move_86194();
function move_86194() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86149");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86149_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86195();
function runjs_86195() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86196();
function runjs_86196() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#000000"); $("#obj86263").css("border-width", "1px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86261
(function(){
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86261";
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
					window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86149_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86198();
function runjs_86198() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86149").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86199();
function runjs_86199() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86149").css("border-color", "rgba(0,0,0,0)"); $("#obj86149").css("border-width", "0px"); $("#obj86149").css("border-style", "solid"); $("#obj86149").css("border-radius", "10px"); $("#obj86149").css("-webkit-border-radius", "10px"); $("#obj86149").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86200();
function playAudio_86200() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86149_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86201();
function switchText_86201() {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = obj86149_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_4_runningActionsCount = window.obj86149_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86149_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86175();
function runjs_86175() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86176();
function runjs_86176() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#C00000"); $("#obj86267").css("border-width", "2px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86265 
hide_86177();
function hide_86177() {
	var selector = "#obj86265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86177(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86149_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86178();
function runjs_86178() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86149").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86179();
function switchText_86179() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86149 
move_86180();
function move_86180() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86149");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86149_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86181();
function runjs_86181() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86182();
function runjs_86182() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#000000"); $("#obj86267").css("border-width", "1px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86265
(function(){
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86265";
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
					window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86149_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86184();
function runjs_86184() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86149").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86185();
function runjs_86185() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86149").css("border-color", "rgba(0,0,0,0)"); $("#obj86149").css("border-width", "0px"); $("#obj86149").css("border-style", "solid"); $("#obj86149").css("border-radius", "10px"); $("#obj86149").css("-webkit-border-radius", "10px"); $("#obj86149").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86186();
function playAudio_86186() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86149_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86187();
function switchText_86187() {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = obj86149_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_3_runningActionsCount = window.obj86149_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86149_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86161();
function runjs_86161() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86162();
function runjs_86162() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#C00000"); $("#obj86273").css("border-width", "2px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86271 
hide_86163();
function hide_86163() {
	var selector = "#obj86271";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86163(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86149_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86164();
function runjs_86164() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86149").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86165();
function switchText_86165() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86149 
move_86166();
function move_86166() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86149");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 207;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86149_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86167();
function runjs_86167() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86168();
function runjs_86168() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#000000"); $("#obj86273").css("border-width", "1px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86271
(function(){
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86271";
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
					window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86149_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86170();
function runjs_86170() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86149").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86171();
function runjs_86171() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86149").css("border-color", "rgba(0,0,0,0)"); $("#obj86149").css("border-width", "0px"); $("#obj86149").css("border-style", "solid"); $("#obj86149").css("border-radius", "10px"); $("#obj86149").css("-webkit-border-radius", "10px"); $("#obj86149").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86172();
function playAudio_86172() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86149_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86173();
function switchText_86173() {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = obj86149_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_2_runningActionsCount = window.obj86149_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86149_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86154();
function runjs_86154() {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86158();
function switchText_86158() {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86155();
function runjs_86155() {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#058E3F"); $("#obj86279").css("border-width", "2px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86277 
hide_86156();
function hide_86156() {
	var selector = "#obj86277";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86156(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86149_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86157();
function runjs_86157() {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86149").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86149_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86255 
playAudio_86159();
function playAudio_86159() {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86255")[0];
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
		    window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86149_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90421();
function switchText_90421() {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = obj86149_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86149_droppedInsideTargetActions_runningActionsCount = window.obj86149_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86149_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86149_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86149_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86149_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86149_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86149").trigger("obj86149_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86149) {
				console.warn("de-queueing event obj86149." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86149").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86149_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86096_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86096");
//	action: dragDrop
//	target: obj86096 
dragDrop_86099();
function dragDrop_86099() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86096_onTouchDown_runningActionsCount = obj86096_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86096');
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
	  	containerNode = $('#obj86287');
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
    	window.obj86096_onTouchDown_runningActionsCount = window.obj86096_onTouchDown_runningActionsCount - 1;
if (window.obj86096_onTouchDown_runningActionsCount < 0) {
	window.obj86096_onTouchDown_runningActionsCount = 0;
} else if (window.obj86096_onTouchDown_runningActionsCount == 0) {
	obj86096_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86273","#obj86279","#obj86267","#obj86263");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86099 = false;
    	var dropped_id_86099;
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
					dropped_86099 = true;
					dropped_id_86099 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86099) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86096").trigger('SCActionDragDrop86099_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86096_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86096_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86096 
move_92529();
function move_92529() {
	window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount = obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86096");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 293;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount = window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86096_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86136();
function runjs_86136() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86137();
function runjs_86137() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#C00000"); $("#obj86263").css("border-width", "2px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86261 
hide_86138();
function hide_86138() {
	var selector = "#obj86261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86138(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86096_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86139();
function runjs_86139() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86096").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86140();
function switchText_86140() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86096 
move_86141();
function move_86141() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86096");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 293;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86096_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86142();
function runjs_86142() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86143();
function runjs_86143() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#000000"); $("#obj86263").css("border-width", "1px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86261
(function(){
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86261";
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
					window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86096_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86145();
function runjs_86145() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86096").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86146();
function runjs_86146() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86096").css("border-color", "rgba(0,0,0,0)"); $("#obj86096").css("border-width", "0px"); $("#obj86096").css("border-style", "solid"); $("#obj86096").css("border-radius", "10px"); $("#obj86096").css("-webkit-border-radius", "10px"); $("#obj86096").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86147();
function playAudio_86147() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86096_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86148();
function switchText_86148() {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = obj86096_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_4_runningActionsCount = window.obj86096_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86096_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86122();
function runjs_86122() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86123();
function runjs_86123() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#C00000"); $("#obj86267").css("border-width", "2px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86265 
hide_86124();
function hide_86124() {
	var selector = "#obj86265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86124(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86096_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86125();
function runjs_86125() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86096").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86126();
function switchText_86126() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86096 
move_86127();
function move_86127() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86096");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 293;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86096_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86128();
function runjs_86128() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86129();
function runjs_86129() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#000000"); $("#obj86267").css("border-width", "1px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86265
(function(){
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86265";
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
					window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86096_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86131();
function runjs_86131() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86096").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86132();
function runjs_86132() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86096").css("border-color", "rgba(0,0,0,0)"); $("#obj86096").css("border-width", "0px"); $("#obj86096").css("border-style", "solid"); $("#obj86096").css("border-radius", "10px"); $("#obj86096").css("-webkit-border-radius", "10px"); $("#obj86096").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86133();
function playAudio_86133() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86096_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86134();
function switchText_86134() {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = obj86096_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_3_runningActionsCount = window.obj86096_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86096_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86108();
function runjs_86108() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86109();
function runjs_86109() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#C00000"); $("#obj86279").css("border-width", "2px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86277 
hide_86110();
function hide_86110() {
	var selector = "#obj86277";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86110(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86096_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86111();
function runjs_86111() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86096").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86112();
function switchText_86112() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86096 
move_86113();
function move_86113() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86096");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 293;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86096_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86114();
function runjs_86114() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86115();
function runjs_86115() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#000000"); $("#obj86279").css("border-width", "1px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86277
(function(){
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86277";
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
					window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86096_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86117();
function runjs_86117() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86096").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86118();
function runjs_86118() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86096").css("border-color", "rgba(0,0,0,0)"); $("#obj86096").css("border-width", "0px"); $("#obj86096").css("border-style", "solid"); $("#obj86096").css("border-radius", "10px"); $("#obj86096").css("-webkit-border-radius", "10px"); $("#obj86096").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86119();
function playAudio_86119() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86096_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86120();
function switchText_86120() {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = obj86096_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_2_runningActionsCount = window.obj86096_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86096_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86101();
function runjs_86101() {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86105();
function switchText_86105() {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86102();
function runjs_86102() {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#058E3F"); $("#obj86273").css("border-width", "2px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86271 
hide_86103();
function hide_86103() {
	var selector = "#obj86271";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86103(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86096_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86104();
function runjs_86104() {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86096").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86096_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86255 
playAudio_86106();
function playAudio_86106() {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86255")[0];
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
		    window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86096_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90422();
function switchText_90422() {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = obj86096_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86096_droppedInsideTargetActions_runningActionsCount = window.obj86096_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86096_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86096_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86096_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86096_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86096_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86096").trigger("obj86096_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86096) {
				console.warn("de-queueing event obj86096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86096_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86043_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj86043");
//	action: dragDrop
//	target: obj86043 
dragDrop_86046();
function dragDrop_86046() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj86043_onTouchDown_runningActionsCount = obj86043_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj86043');
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
	  	containerNode = $('#obj86287');
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
    	window.obj86043_onTouchDown_runningActionsCount = window.obj86043_onTouchDown_runningActionsCount - 1;
if (window.obj86043_onTouchDown_runningActionsCount < 0) {
	window.obj86043_onTouchDown_runningActionsCount = 0;
} else if (window.obj86043_onTouchDown_runningActionsCount == 0) {
	obj86043_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj86267","#obj86279","#obj86273","#obj86263");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_86046 = false;
    	var dropped_id_86046;
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
					dropped_86046 = true;
					dropped_id_86046 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_86046) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj86043").trigger('SCActionDragDrop86046_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj86043_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86043_onTouchDown_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj86043 
move_92531();
function move_92531() {
	window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount = obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj86043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 384;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount = window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj86043_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86083();
function runjs_86083() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86084();
function runjs_86084() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#C00000"); $("#obj86263").css("border-width", "2px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86261 
hide_86085();
function hide_86085() {
	var selector = "#obj86261";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86085(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86043_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86086();
function runjs_86086() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86087();
function switchText_86087() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86043 
move_86088();
function move_86088() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj86043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 384;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj86043_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86089();
function runjs_86089() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86090();
function runjs_86090() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86263").css("border-color", "#000000"); $("#obj86263").css("border-width", "1px"); $("#obj86263").css("border-style", "solid"); $("#obj86263").css("border-radius", "10px"); $("#obj86263").css("-webkit-border-radius", "10px"); $("#obj86263").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86261
(function(){
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj86261";
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
					window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86043_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86092();
function runjs_86092() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86043").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86093();
function runjs_86093() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj86043").css("border-color", "rgba(0,0,0,0)"); $("#obj86043").css("border-width", "0px"); $("#obj86043").css("border-style", "solid"); $("#obj86043").css("border-radius", "10px"); $("#obj86043").css("-webkit-border-radius", "10px"); $("#obj86043").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86094();
function playAudio_86094() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj86043_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86095();
function switchText_86095() {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = obj86043_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_4_runningActionsCount = window.obj86043_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj86043_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86069();
function runjs_86069() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86070();
function runjs_86070() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#C00000"); $("#obj86273").css("border-width", "2px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86271 
hide_86071();
function hide_86071() {
	var selector = "#obj86271";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86071(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86043_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86072();
function runjs_86072() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86073();
function switchText_86073() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86043 
move_86074();
function move_86074() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj86043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 384;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj86043_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86075();
function runjs_86075() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86273").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86076();
function runjs_86076() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86273").css("border-color", "#000000"); $("#obj86273").css("border-width", "1px"); $("#obj86273").css("border-style", "solid"); $("#obj86273").css("border-radius", "10px"); $("#obj86273").css("-webkit-border-radius", "10px"); $("#obj86273").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86271
(function(){
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj86271";
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
					window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86043_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86078();
function runjs_86078() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86043").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86079();
function runjs_86079() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj86043").css("border-color", "rgba(0,0,0,0)"); $("#obj86043").css("border-width", "0px"); $("#obj86043").css("border-style", "solid"); $("#obj86043").css("border-radius", "10px"); $("#obj86043").css("-webkit-border-radius", "10px"); $("#obj86043").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86080();
function playAudio_86080() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj86043_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86081();
function switchText_86081() {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = obj86043_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_3_runningActionsCount = window.obj86043_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj86043_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86055();
function runjs_86055() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_86056();
function runjs_86056() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#C00000"); $("#obj86279").css("border-width", "2px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj86277 
hide_86057();
function hide_86057() {
	var selector = "#obj86277";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86057(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86043_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_86058();
function runjs_86058() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_86059();
function switchText_86059() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj86043 
move_86060();
function move_86060() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj86043");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 384;
	var moveY = 675;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj86043_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_86061();
function runjs_86061() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_86062();
function runjs_86062() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86279").css("border-color", "#000000"); $("#obj86279").css("border-width", "1px"); $("#obj86279").css("border-style", "solid"); $("#obj86279").css("border-radius", "10px"); $("#obj86279").css("-webkit-border-radius", "10px"); $("#obj86279").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj86277
(function(){
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj86277";
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
					window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86043_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_86064();
function runjs_86064() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86043").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_86065();
function runjs_86065() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj86043").css("border-color", "rgba(0,0,0,0)"); $("#obj86043").css("border-width", "0px"); $("#obj86043").css("border-style", "solid"); $("#obj86043").css("border-radius", "10px"); $("#obj86043").css("-webkit-border-radius", "10px"); $("#obj86043").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj86256 
playAudio_86066();
function playAudio_86066() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj86256")[0];
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
		    window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj86043_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_86067();
function switchText_86067() {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = obj86043_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_2_runningActionsCount = window.obj86043_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj86043_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_86048();
function runjs_86048() {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86267").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_86052();
function switchText_86052() {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_86049();
function runjs_86049() {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86267").css("border-color", "#058E3F"); $("#obj86267").css("border-width", "2px"); $("#obj86267").css("border-style", "solid"); $("#obj86267").css("border-radius", "10px"); $("#obj86267").css("-webkit-border-radius", "10px"); $("#obj86267").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj86265 
hide_86050();
function hide_86050() {
	var selector = "#obj86265";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86050(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86043_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_86051();
function runjs_86051() {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj86043").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj86043_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj86255 
playAudio_86053();
function playAudio_86053() {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj86255")[0];
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
		    window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj86043_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90423();
function switchText_90423() {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = obj86043_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj86259_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj86259_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj86259").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj86259_content");
			setTimeout(function () {
				window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj86259 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj86043_droppedInsideTargetActions_runningActionsCount = window.obj86043_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj86043_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj86043_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj86043_droppedInsideTargetActions_runningActionsCount == 0) {
	obj86043_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj86043_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj86043").trigger("obj86043_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86043) {
				console.warn("de-queueing event obj86043." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86043").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86043_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj86025_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86025_onTap_activeActionGroupIndex = -1;
		$("#obj86025").trigger("obj86025_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86025) {
				console.warn("de-queueing event obj86025." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86025").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86025_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86025 
hide_86028();
function hide_86028() {
	var selector = "#obj86025";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86025_onTap_runningActionsCount = obj86025_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86025_onTap_runningActionsCount = window.obj86025_onTap_runningActionsCount - 1;
if (window.obj86025_onTap_runningActionsCount < 0) {
	window.obj86025_onTap_runningActionsCount = 0;
} else if (window.obj86025_onTap_runningActionsCount == 0) {
	obj86025_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86028(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86025_onTap_runningActionsCount = window.obj86025_onTap_runningActionsCount - 1;
if (window.obj86025_onTap_runningActionsCount < 0) {
	window.obj86025_onTap_runningActionsCount = 0;
} else if (window.obj86025_onTap_runningActionsCount == 0) {
	obj86025_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj86015 
stopMovie_86027();
function stopMovie_86027() {
	window.obj86025_onTap_runningActionsCount = obj86025_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86015")[0];
	myVideo.pause();
	window.obj86025_onTap_runningActionsCount = window.obj86025_onTap_runningActionsCount - 1;
if (window.obj86025_onTap_runningActionsCount < 0) {
	window.obj86025_onTap_runningActionsCount = 0;
} else if (window.obj86025_onTap_runningActionsCount == 0) {
	obj86025_onTap_actionGroup1();
}
}
















};
obj86025_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86025_onTap_activeActionGroupIndex = -1;
		$("#obj86025").trigger("obj86025_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86025) {
				console.warn("de-queueing event obj86025." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86025").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86025_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86017
(function(){
	window.obj86025_onTap_runningActionsCount = obj86025_onTap_runningActionsCount + 1;

	var selector = "#obj86017";
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
					window.obj86025_onTap_runningActionsCount = window.obj86025_onTap_runningActionsCount - 1;
if (window.obj86025_onTap_runningActionsCount < 0) {
	window.obj86025_onTap_runningActionsCount = 0;
} else if (window.obj86025_onTap_runningActionsCount == 0) {
	obj86025_onTap_actionGroup2();
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
				window.obj86025_onTap_runningActionsCount = window.obj86025_onTap_runningActionsCount - 1;
if (window.obj86025_onTap_runningActionsCount < 0) {
	window.obj86025_onTap_runningActionsCount = 0;
} else if (window.obj86025_onTap_runningActionsCount == 0) {
	obj86025_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86025_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86025_onTap_activeActionGroupIndex = -1;
		$("#obj86025").trigger("obj86025_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86025) {
				console.warn("de-queueing event obj86025." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86025").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86025_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86015 
move_86030();
function move_86030() {
	window.obj86025_onTap_runningActionsCount = obj86025_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86015");
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
			window.obj86025_onTap_runningActionsCount = window.obj86025_onTap_runningActionsCount - 1;
if (window.obj86025_onTap_runningActionsCount < 0) {
	window.obj86025_onTap_runningActionsCount = 0;
} else if (window.obj86025_onTap_runningActionsCount == 0) {
	obj86025_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86025_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86025_onTap_activeActionGroupIndex = -1;
		$("#obj86025").trigger("obj86025_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86025) {
				console.warn("de-queueing event obj86025." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86025").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86025_onTap_activeActionGroupIndex = 3;
	





















};
obj86017_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86017_onTap_activeActionGroupIndex = -1;
		$("#obj86017").trigger("obj86017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86017) {
				console.warn("de-queueing event obj86017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86017_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86017 
hide_86020();
function hide_86020() {
	var selector = "#obj86017";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86017_onTap_runningActionsCount = obj86017_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86017_onTap_runningActionsCount = window.obj86017_onTap_runningActionsCount - 1;
if (window.obj86017_onTap_runningActionsCount < 0) {
	window.obj86017_onTap_runningActionsCount = 0;
} else if (window.obj86017_onTap_runningActionsCount == 0) {
	obj86017_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86020(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86017_onTap_runningActionsCount = window.obj86017_onTap_runningActionsCount - 1;
if (window.obj86017_onTap_runningActionsCount < 0) {
	window.obj86017_onTap_runningActionsCount = 0;
} else if (window.obj86017_onTap_runningActionsCount == 0) {
	obj86017_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj86015 
playPauseMovie_86019();
function playPauseMovie_86019() {
	window.obj86017_onTap_runningActionsCount = obj86017_onTap_runningActionsCount + 1;
	var myVideo = $("#obj86015")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj86017_onTap_runningActionsCount = window.obj86017_onTap_runningActionsCount - 1;
if (window.obj86017_onTap_runningActionsCount < 0) {
	window.obj86017_onTap_runningActionsCount = 0;
} else if (window.obj86017_onTap_runningActionsCount == 0) {
	obj86017_onTap_actionGroup1();
}
}

















};
obj86017_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86017_onTap_activeActionGroupIndex = -1;
		$("#obj86017").trigger("obj86017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86017) {
				console.warn("de-queueing event obj86017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86017_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86025
(function(){
	window.obj86017_onTap_runningActionsCount = obj86017_onTap_runningActionsCount + 1;

	var selector = "#obj86025";
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
					window.obj86017_onTap_runningActionsCount = window.obj86017_onTap_runningActionsCount - 1;
if (window.obj86017_onTap_runningActionsCount < 0) {
	window.obj86017_onTap_runningActionsCount = 0;
} else if (window.obj86017_onTap_runningActionsCount == 0) {
	obj86017_onTap_actionGroup2();
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
				window.obj86017_onTap_runningActionsCount = window.obj86017_onTap_runningActionsCount - 1;
if (window.obj86017_onTap_runningActionsCount < 0) {
	window.obj86017_onTap_runningActionsCount = 0;
} else if (window.obj86017_onTap_runningActionsCount == 0) {
	obj86017_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86017_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86017_onTap_activeActionGroupIndex = -1;
		$("#obj86017").trigger("obj86017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86017) {
				console.warn("de-queueing event obj86017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86017_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj86015 
move_86022();
function move_86022() {
	window.obj86017_onTap_runningActionsCount = obj86017_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj86015");
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
			window.obj86017_onTap_runningActionsCount = window.obj86017_onTap_runningActionsCount - 1;
if (window.obj86017_onTap_runningActionsCount < 0) {
	window.obj86017_onTap_runningActionsCount = 0;
} else if (window.obj86017_onTap_runningActionsCount == 0) {
	obj86017_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj86017_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86017_onTap_activeActionGroupIndex = -1;
		$("#obj86017").trigger("obj86017_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86017) {
				console.warn("de-queueing event obj86017." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86017").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86017_onTap_activeActionGroupIndex = 3;
	





















};
obj88285_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88285_onTap_activeActionGroupIndex = -1;
		$("#obj88285").trigger("obj88285_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88285) {
				console.warn("de-queueing event obj88285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88285_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88290 
stopAudio_88287();
function stopAudio_88287() {
	window.obj88285_onTap_runningActionsCount = obj88285_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88290")[0];
	myAudio.pause();
	window.obj88285_onTap_runningActionsCount = window.obj88285_onTap_runningActionsCount - 1;
if (window.obj88285_onTap_runningActionsCount < 0) {
	window.obj88285_onTap_runningActionsCount = 0;
} else if (window.obj88285_onTap_runningActionsCount == 0) {
	obj88285_onTap_actionGroup1();
}
}








};
obj88285_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88285_onTap_activeActionGroupIndex = -1;
		$("#obj88285").trigger("obj88285_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88285) {
				console.warn("de-queueing event obj88285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88285_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88285 
hide_88288();
function hide_88288() {
	var selector = "#obj88285";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88285_onTap_runningActionsCount = obj88285_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88285_onTap_runningActionsCount = window.obj88285_onTap_runningActionsCount - 1;
if (window.obj88285_onTap_runningActionsCount < 0) {
	window.obj88285_onTap_runningActionsCount = 0;
} else if (window.obj88285_onTap_runningActionsCount == 0) {
	obj88285_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88288(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88285_onTap_runningActionsCount = window.obj88285_onTap_runningActionsCount - 1;
if (window.obj88285_onTap_runningActionsCount < 0) {
	window.obj88285_onTap_runningActionsCount = 0;
} else if (window.obj88285_onTap_runningActionsCount == 0) {
	obj88285_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88285_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88285_onTap_activeActionGroupIndex = -1;
		$("#obj88285").trigger("obj88285_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88285) {
				console.warn("de-queueing event obj88285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88285_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88280
(function(){
	window.obj88285_onTap_runningActionsCount = obj88285_onTap_runningActionsCount + 1;

	var selector = "#obj88280";
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
					window.obj88285_onTap_runningActionsCount = window.obj88285_onTap_runningActionsCount - 1;
if (window.obj88285_onTap_runningActionsCount < 0) {
	window.obj88285_onTap_runningActionsCount = 0;
} else if (window.obj88285_onTap_runningActionsCount == 0) {
	obj88285_onTap_actionGroup3();
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
				window.obj88285_onTap_runningActionsCount = window.obj88285_onTap_runningActionsCount - 1;
if (window.obj88285_onTap_runningActionsCount < 0) {
	window.obj88285_onTap_runningActionsCount = 0;
} else if (window.obj88285_onTap_runningActionsCount == 0) {
	obj88285_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88285_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88285_onTap_activeActionGroupIndex = -1;
		$("#obj88285").trigger("obj88285_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88285) {
				console.warn("de-queueing event obj88285." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88285").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88285_onTap_activeActionGroupIndex = 3;
	





















};
obj88280_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88280_onTap_activeActionGroupIndex = -1;
		$("#obj88280").trigger("obj88280_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88280) {
				console.warn("de-queueing event obj88280." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88280").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88280_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88280 
hide_88282();
function hide_88282() {
	var selector = "#obj88280";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88280_onTap_runningActionsCount = obj88280_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88280_onTap_runningActionsCount = window.obj88280_onTap_runningActionsCount - 1;
if (window.obj88280_onTap_runningActionsCount < 0) {
	window.obj88280_onTap_runningActionsCount = 0;
} else if (window.obj88280_onTap_runningActionsCount == 0) {
	obj88280_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88282(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88280_onTap_runningActionsCount = window.obj88280_onTap_runningActionsCount - 1;
if (window.obj88280_onTap_runningActionsCount < 0) {
	window.obj88280_onTap_runningActionsCount = 0;
} else if (window.obj88280_onTap_runningActionsCount == 0) {
	obj88280_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88280_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88280_onTap_activeActionGroupIndex = -1;
		$("#obj88280").trigger("obj88280_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88280) {
				console.warn("de-queueing event obj88280." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88280").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88280_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88285
(function(){
	window.obj88280_onTap_runningActionsCount = obj88280_onTap_runningActionsCount + 1;

	var selector = "#obj88285";
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
					window.obj88280_onTap_runningActionsCount = window.obj88280_onTap_runningActionsCount - 1;
if (window.obj88280_onTap_runningActionsCount < 0) {
	window.obj88280_onTap_runningActionsCount = 0;
} else if (window.obj88280_onTap_runningActionsCount == 0) {
	obj88280_onTap_actionGroup2();
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
				window.obj88280_onTap_runningActionsCount = window.obj88280_onTap_runningActionsCount - 1;
if (window.obj88280_onTap_runningActionsCount < 0) {
	window.obj88280_onTap_runningActionsCount = 0;
} else if (window.obj88280_onTap_runningActionsCount == 0) {
	obj88280_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88280_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88280_onTap_activeActionGroupIndex = -1;
		$("#obj88280").trigger("obj88280_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88280) {
				console.warn("de-queueing event obj88280." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88280").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88280_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88290 
playAudio_88284();
function playAudio_88284() {
	window.obj88280_onTap_runningActionsCount = obj88280_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88290")[0];
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
		    window.obj88280_onTap_runningActionsCount = window.obj88280_onTap_runningActionsCount - 1;
if (window.obj88280_onTap_runningActionsCount < 0) {
	window.obj88280_onTap_runningActionsCount = 0;
} else if (window.obj88280_onTap_runningActionsCount == 0) {
	obj88280_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88280_onTap_runningActionsCount = window.obj88280_onTap_runningActionsCount - 1;
if (window.obj88280_onTap_runningActionsCount < 0) {
	window.obj88280_onTap_runningActionsCount = 0;
} else if (window.obj88280_onTap_runningActionsCount == 0) {
	obj88280_onTap_actionGroup3();
}
	}
}









};
obj88280_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88280_onTap_activeActionGroupIndex = -1;
		$("#obj88280").trigger("obj88280_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88280) {
				console.warn("de-queueing event obj88280." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88280").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88280_onTap_activeActionGroupIndex = 3;
	





















};
obj90049_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj90049_onTap_activeActionGroupIndex = -1;
		$("#obj90049").trigger("obj90049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90049) {
				console.warn("de-queueing event obj90049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90049_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_90051();
function goToPage_90051() {
	window.obj90049_onTap_runningActionsCount = obj90049_onTap_runningActionsCount + 1;
	$("#anchor712")[0].click();
	window.obj90049_onTap_runningActionsCount = window.obj90049_onTap_runningActionsCount - 1;
if (window.obj90049_onTap_runningActionsCount < 0) {
	window.obj90049_onTap_runningActionsCount = 0;
} else if (window.obj90049_onTap_runningActionsCount == 0) {
	obj90049_onTap_actionGroup1();
}
}





















};
obj90049_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj90049_onTap_activeActionGroupIndex = -1;
		$("#obj90049").trigger("obj90049_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 90049) {
				console.warn("de-queueing event obj90049." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj90049").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj90049_onTap_activeActionGroupIndex = 1;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj86308: Event Touch Down
 *
 */
$("#obj86308").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86308_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86308_onTap is still running");
	return;
}
var obj86308_onTap_runningActionsCount = 0;
var obj86308_onTap_loopCount = 0;
obj86308_onTap_actionGroup0();
});










/*
 *
 *   obj86305: Event Touch Down
 *
 */
$("#obj86305").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86305_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86305_onTap is still running");
	return;
}
var obj86305_onTap_runningActionsCount = 0;
var obj86305_onTap_loopCount = 0;
obj86305_onTap_actionGroup0();
});















































































































































































































































































/*
 *
 *   obj86202: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86202");
	var winTarget = document.getElementById("obj86202");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86202").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86202_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86202_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86202_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86202_onTouchDown is still running");
	return;
}
var obj86202_onTouchDown_runningActionsCount = 0;
var obj86202_onTouchDown_loopCount = 0;
obj86202_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86202: Event SCActionDragDrop86205_droppedOutsideTargetActions
 *
 */
$("#obj86202").bind("SCActionDragDrop86205_droppedOutsideTargetActions", function(event) {
	if (window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86202_SCActionDragDrop86205_droppedOutsideTargetActions is still running");
	return;
}
var obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_loopCount = 0;
obj86202_SCActionDragDrop86205_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86202: Event droppedInsideTargetActions_4
 *
 */
$("#obj86202").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86202_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86202_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86202_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_4_loopCount = 0;
obj86202_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86202: Event droppedInsideTargetActions_3
 *
 */
$("#obj86202").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86202_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86202_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86202_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_3_loopCount = 0;
obj86202_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86202: Event droppedInsideTargetActions_2
 *
 */
$("#obj86202").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86202_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86202_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86202_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_2_loopCount = 0;
obj86202_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86202: Event droppedInsideTargetActions
 *
 */
$("#obj86202").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86202_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86202_droppedInsideTargetActions is still running");
	return;
}
var obj86202_droppedInsideTargetActions_runningActionsCount = 0;
var obj86202_droppedInsideTargetActions_loopCount = 0;
obj86202_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj86149: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86149");
	var winTarget = document.getElementById("obj86149");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86149").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86149_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86149_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86149_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86149_onTouchDown is still running");
	return;
}
var obj86149_onTouchDown_runningActionsCount = 0;
var obj86149_onTouchDown_loopCount = 0;
obj86149_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86149: Event SCActionDragDrop86152_droppedOutsideTargetActions
 *
 */
$("#obj86149").bind("SCActionDragDrop86152_droppedOutsideTargetActions", function(event) {
	if (window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86149_SCActionDragDrop86152_droppedOutsideTargetActions is still running");
	return;
}
var obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_loopCount = 0;
obj86149_SCActionDragDrop86152_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86149: Event droppedInsideTargetActions_4
 *
 */
$("#obj86149").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86149_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86149_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86149_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_4_loopCount = 0;
obj86149_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86149: Event droppedInsideTargetActions_3
 *
 */
$("#obj86149").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86149_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86149_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86149_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_3_loopCount = 0;
obj86149_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86149: Event droppedInsideTargetActions_2
 *
 */
$("#obj86149").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86149_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86149_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86149_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_2_loopCount = 0;
obj86149_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86149: Event droppedInsideTargetActions
 *
 */
$("#obj86149").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86149_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86149_droppedInsideTargetActions is still running");
	return;
}
var obj86149_droppedInsideTargetActions_runningActionsCount = 0;
var obj86149_droppedInsideTargetActions_loopCount = 0;
obj86149_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj86096: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86096");
	var winTarget = document.getElementById("obj86096");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86096").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86096_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86096_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86096_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86096_onTouchDown is still running");
	return;
}
var obj86096_onTouchDown_runningActionsCount = 0;
var obj86096_onTouchDown_loopCount = 0;
obj86096_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86096: Event SCActionDragDrop86099_droppedOutsideTargetActions
 *
 */
$("#obj86096").bind("SCActionDragDrop86099_droppedOutsideTargetActions", function(event) {
	if (window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86096_SCActionDragDrop86099_droppedOutsideTargetActions is still running");
	return;
}
var obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_loopCount = 0;
obj86096_SCActionDragDrop86099_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86096: Event droppedInsideTargetActions_4
 *
 */
$("#obj86096").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86096_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86096_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86096_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_4_loopCount = 0;
obj86096_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86096: Event droppedInsideTargetActions_3
 *
 */
$("#obj86096").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86096_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86096_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86096_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_3_loopCount = 0;
obj86096_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86096: Event droppedInsideTargetActions_2
 *
 */
$("#obj86096").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86096_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86096_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86096_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_2_loopCount = 0;
obj86096_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86096: Event droppedInsideTargetActions
 *
 */
$("#obj86096").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86096_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86096_droppedInsideTargetActions is still running");
	return;
}
var obj86096_droppedInsideTargetActions_runningActionsCount = 0;
var obj86096_droppedInsideTargetActions_loopCount = 0;
obj86096_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj86043: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj86043");
	var winTarget = document.getElementById("obj86043");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj86043").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj86043_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj86043_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj86043_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86043_onTouchDown is still running");
	return;
}
var obj86043_onTouchDown_runningActionsCount = 0;
var obj86043_onTouchDown_loopCount = 0;
obj86043_onTouchDown_actionGroup0();
});



/*
 *
 *   obj86043: Event SCActionDragDrop86046_droppedOutsideTargetActions
 *
 */
$("#obj86043").bind("SCActionDragDrop86046_droppedOutsideTargetActions", function(event) {
	if (window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86043_SCActionDragDrop86046_droppedOutsideTargetActions is still running");
	return;
}
var obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_runningActionsCount = 0;
var obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_loopCount = 0;
obj86043_SCActionDragDrop86046_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj86043: Event droppedInsideTargetActions_4
 *
 */
$("#obj86043").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj86043_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86043_droppedInsideTargetActions_4 is still running");
	return;
}
var obj86043_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_4_loopCount = 0;
obj86043_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj86043: Event droppedInsideTargetActions_3
 *
 */
$("#obj86043").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj86043_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86043_droppedInsideTargetActions_3 is still running");
	return;
}
var obj86043_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_3_loopCount = 0;
obj86043_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj86043: Event droppedInsideTargetActions_2
 *
 */
$("#obj86043").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj86043_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86043_droppedInsideTargetActions_2 is still running");
	return;
}
var obj86043_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_2_loopCount = 0;
obj86043_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj86043: Event droppedInsideTargetActions
 *
 */
$("#obj86043").bind("droppedInsideTargetActions", function(event) {
	if (window.obj86043_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86043_droppedInsideTargetActions is still running");
	return;
}
var obj86043_droppedInsideTargetActions_runningActionsCount = 0;
var obj86043_droppedInsideTargetActions_loopCount = 0;
obj86043_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj86025: Event Touch Down
 *
 */
$("#obj86025").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86025_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86025_onTap is still running");
	return;
}
var obj86025_onTap_runningActionsCount = 0;
var obj86025_onTap_loopCount = 0;
obj86025_onTap_actionGroup0();
});










/*
 *
 *   obj86017: Event Touch Down
 *
 */
$("#obj86017").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86017_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86017_onTap is still running");
	return;
}
var obj86017_onTap_runningActionsCount = 0;
var obj86017_onTap_loopCount = 0;
obj86017_onTap_actionGroup0();
});










/*
 *
 *   obj88285: Event Touch Down
 *
 */
$("#obj88285").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88285_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88285_onTap is still running");
	return;
}
var obj88285_onTap_runningActionsCount = 0;
var obj88285_onTap_loopCount = 0;
obj88285_onTap_actionGroup0();
});










/*
 *
 *   obj88280: Event Touch Down
 *
 */
$("#obj88280").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88280_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88280_onTap is still running");
	return;
}
var obj88280_onTap_runningActionsCount = 0;
var obj88280_onTap_loopCount = 0;
obj88280_onTap_actionGroup0();
});




















/*
 *
 *   obj90049: Event Touch Down
 *
 */
$("#obj90049").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj90049_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj90049_onTap is still running");
	return;
}
var obj90049_onTap_runningActionsCount = 0;
var obj90049_onTap_loopCount = 0;
obj90049_onTap_actionGroup0();
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
	
$("#obj86311").trigger('SCEventShow');
$("#obj86308").trigger('SCEventShow');
$("#obj86305").trigger('SCEventShow');
$("#obj86303").trigger('SCEventShow');
$("#obj86301").trigger('SCEventShow');
$("#obj86299").trigger('SCEventShow');
$("#obj86297").trigger('SCEventShow');
$("#obj86295").trigger('SCEventShow');
$("#obj86293").trigger('SCEventShow');
$("#obj86291").trigger('SCEventShow');
$("#obj86289").trigger('SCEventShow');
$("#obj86287").trigger('SCEventShow');
$("#obj86285").trigger('SCEventShow');
$("#obj86283").trigger('SCEventShow');
$("#obj86281").trigger('SCEventShow');
$("#obj86279").trigger('SCEventShow');
$("#obj86277").trigger('SCEventShow');
$("#obj86275").trigger('SCEventShow');
$("#obj86273").trigger('SCEventShow');
$("#obj86271").trigger('SCEventShow');
$("#obj86269").trigger('SCEventShow');
$("#obj86267").trigger('SCEventShow');
$("#obj86265").trigger('SCEventShow');
$("#obj86263").trigger('SCEventShow');
$("#obj86261").trigger('SCEventShow');
$("#obj86259").trigger('SCEventShow');
$("#obj86257").trigger('SCEventShow');
$("#obj86256").trigger('SCEventShow');
$("#obj86255").trigger('SCEventShow');
$("#obj86202").trigger('SCEventShow');
$("#obj86149").trigger('SCEventShow');
$("#obj86096").trigger('SCEventShow');
$("#obj86043").trigger('SCEventShow');
$("#obj86025").trigger('SCEventShow');
$("#obj86017").trigger('SCEventShow');
$("#obj88285").trigger('SCEventShow');
$("#obj88280").trigger('SCEventShow');
$("#obj88290").trigger('SCEventShow');
$("#obj90049").trigger('SCEventShow');
$("#obj94865").trigger('SCEventShow');
$("#obj86015").trigger('SCEventShow');
	
});