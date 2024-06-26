pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 46209;
pubcoder.page.title = pubcoder.page.title || "162";
pubcoder.page.number = pubcoder.page.number || 162;
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
var obj46454_onTap_activeActionGroupIndex = -1;
var obj46454_onTap_runningActionsCount = 0;
var obj46454_onTap_loopCount = 0;
var obj46451_onTap_activeActionGroupIndex = -1;
var obj46451_onTap_runningActionsCount = 0;
var obj46451_onTap_loopCount = 0;
var obj46447_onTap_activeActionGroupIndex = -1;
var obj46447_onTap_runningActionsCount = 0;
var obj46447_onTap_loopCount = 0;
var obj46344_onDrag_activeActionGroupIndex = -1;
var obj46344_onDrag_runningActionsCount = 0;
var obj46344_onDrag_loopCount = 0;
var obj46344_onTouchDown_activeActionGroupIndex = -1;
var obj46344_onTouchDown_runningActionsCount = 0;
var obj46344_onTouchDown_loopCount = 0;
var obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_loopCount = 0;
var obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46344_droppedInsideTargetActions_3_loopCount = 0;
var obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46344_droppedInsideTargetActions_2_loopCount = 0;
var obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46344_droppedInsideTargetActions_runningActionsCount = 0;
var obj46344_droppedInsideTargetActions_loopCount = 0;
var obj46277_onDrag_activeActionGroupIndex = -1;
var obj46277_onDrag_runningActionsCount = 0;
var obj46277_onDrag_loopCount = 0;
var obj46277_onTouchDown_activeActionGroupIndex = -1;
var obj46277_onTouchDown_runningActionsCount = 0;
var obj46277_onTouchDown_loopCount = 0;
var obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_loopCount = 0;
var obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46277_droppedInsideTargetActions_3_loopCount = 0;
var obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46277_droppedInsideTargetActions_2_loopCount = 0;
var obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46277_droppedInsideTargetActions_runningActionsCount = 0;
var obj46277_droppedInsideTargetActions_loopCount = 0;
var obj46210_onDrag_activeActionGroupIndex = -1;
var obj46210_onDrag_runningActionsCount = 0;
var obj46210_onDrag_loopCount = 0;
var obj46210_onTouchDown_activeActionGroupIndex = -1;
var obj46210_onTouchDown_runningActionsCount = 0;
var obj46210_onTouchDown_loopCount = 0;
var obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_loopCount = 0;
var obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46210_droppedInsideTargetActions_3_loopCount = 0;
var obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46210_droppedInsideTargetActions_2_loopCount = 0;
var obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj46210_droppedInsideTargetActions_runningActionsCount = 0;
var obj46210_droppedInsideTargetActions_loopCount = 0;
var obj67598_onTap_activeActionGroupIndex = -1;
var obj67598_onTap_runningActionsCount = 0;
var obj67598_onTap_loopCount = 0;
var obj67590_onTap_activeActionGroupIndex = -1;
var obj67590_onTap_runningActionsCount = 0;
var obj67590_onTap_loopCount = 0;
var obj88825_onTap_activeActionGroupIndex = -1;
var obj88825_onTap_runningActionsCount = 0;
var obj88825_onTap_loopCount = 0;
var obj88820_onTap_activeActionGroupIndex = -1;
var obj88820_onTap_runningActionsCount = 0;
var obj88820_onTap_loopCount = 0;
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
		
obj46454_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46454_onTap_activeActionGroupIndex = -1;
		$("#obj46454").trigger("obj46454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46454) {
				console.warn("de-queueing event obj46454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46454_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46456();
function goToPage_46456() {
	window.obj46454_onTap_runningActionsCount = obj46454_onTap_runningActionsCount + 1;
	$("#anchor952")[0].click();
	window.obj46454_onTap_runningActionsCount = window.obj46454_onTap_runningActionsCount - 1;
if (window.obj46454_onTap_runningActionsCount < 0) {
	window.obj46454_onTap_runningActionsCount = 0;
} else if (window.obj46454_onTap_runningActionsCount == 0) {
	obj46454_onTap_actionGroup1();
}
}





















};
obj46454_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46454_onTap_activeActionGroupIndex = -1;
		$("#obj46454").trigger("obj46454_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46454) {
				console.warn("de-queueing event obj46454." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46454").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46454_onTap_activeActionGroupIndex = 1;
	





















};
obj46451_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46451_onTap_activeActionGroupIndex = -1;
		$("#obj46451").trigger("obj46451_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46451) {
				console.warn("de-queueing event obj46451." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46451").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46451_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46453();
function goToPage_46453() {
	window.obj46451_onTap_runningActionsCount = obj46451_onTap_runningActionsCount + 1;
	$("#anchor953")[0].click();
	window.obj46451_onTap_runningActionsCount = window.obj46451_onTap_runningActionsCount - 1;
if (window.obj46451_onTap_runningActionsCount < 0) {
	window.obj46451_onTap_runningActionsCount = 0;
} else if (window.obj46451_onTap_runningActionsCount == 0) {
	obj46451_onTap_actionGroup1();
}
}





















};
obj46451_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46451_onTap_activeActionGroupIndex = -1;
		$("#obj46451").trigger("obj46451_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46451) {
				console.warn("de-queueing event obj46451." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46451").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46451_onTap_activeActionGroupIndex = 1;
	





















};
obj46447_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46447_onTap_activeActionGroupIndex = -1;
		$("#obj46447").trigger("obj46447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46447) {
				console.warn("de-queueing event obj46447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46447_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_46449();
function goToPage_46449() {
	window.obj46447_onTap_runningActionsCount = obj46447_onTap_runningActionsCount + 1;
	$("#anchor954")[0].click();
	window.obj46447_onTap_runningActionsCount = window.obj46447_onTap_runningActionsCount - 1;
if (window.obj46447_onTap_runningActionsCount < 0) {
	window.obj46447_onTap_runningActionsCount = 0;
} else if (window.obj46447_onTap_runningActionsCount == 0) {
	obj46447_onTap_actionGroup1();
}
}





















};
obj46447_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46447_onTap_activeActionGroupIndex = -1;
		$("#obj46447").trigger("obj46447_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46447) {
				console.warn("de-queueing event obj46447." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46447").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46447_onTap_activeActionGroupIndex = 1;
	





















};
obj46344_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46344");
//	action: dragDrop
//	target: obj46344 
dragDrop_46347();
function dragDrop_46347() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46344_onTouchDown_runningActionsCount = obj46344_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46344');
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
	  	containerNode = $('#obj46437');
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
    	window.obj46344_onTouchDown_runningActionsCount = window.obj46344_onTouchDown_runningActionsCount - 1;
if (window.obj46344_onTouchDown_runningActionsCount < 0) {
	window.obj46344_onTouchDown_runningActionsCount = 0;
} else if (window.obj46344_onTouchDown_runningActionsCount == 0) {
	obj46344_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46433","#obj46431","#obj46429");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46347 = false;
    	var dropped_id_46347;
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
					dropped_46347 = true;
					dropped_id_46347 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46347) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46344").trigger('SCActionDragDrop46347_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46344_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46344_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46344 
move_92699();
function move_92699() {
	window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount = obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46344");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 335;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount = window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46344_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46370();
function runjs_46370() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46371();
function runjs_46371() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("border-color", "#C00000"); $("#obj46429").css("border-width", "2px"); $("#obj46429").css("border-style", "solid"); $("#obj46429").css("border-radius", "10px"); $("#obj46429").css("-webkit-border-radius", "10px"); $("#obj46429").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46423 
hide_46372();
function hide_46372() {
	var selector = "#obj46423";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46372(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46344_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46373();
function runjs_46373() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46374();
function switchText_46374() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj46344_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46344 
move_46375();
function move_46375() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj46344");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 335;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj46344_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46376();
function runjs_46376() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46377();
function runjs_46377() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("border-color", "#000000"); $("#obj46429").css("border-width", "1px"); $("#obj46429").css("border-style", "solid"); $("#obj46429").css("border-radius", "10px"); $("#obj46429").css("-webkit-border-radius", "10px"); $("#obj46429").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46423
(function(){
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj46423";
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
					window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46344_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46379();
function runjs_46379() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46344").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46380();
function runjs_46380() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46344").css("border-color", "rgba(0,0,0,0)"); $("#obj46344").css("border-width", "0px"); $("#obj46344").css("border-style", "solid"); $("#obj46344").css("border-radius", "10px"); $("#obj46344").css("-webkit-border-radius", "10px"); $("#obj46344").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46415 
playAudio_46381();
function playAudio_46381() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46415")[0];
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
		    window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj46344_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46382();
function switchText_46382() {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = obj46344_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46344_droppedInsideTargetActions_3_runningActionsCount = window.obj46344_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj46344_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj46344_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46356();
function runjs_46356() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46431").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46357();
function runjs_46357() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46431").css("border-color", "#C00000"); $("#obj46431").css("border-width", "2px"); $("#obj46431").css("border-style", "solid"); $("#obj46431").css("border-radius", "10px"); $("#obj46431").css("-webkit-border-radius", "10px"); $("#obj46431").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46425 
hide_46358();
function hide_46358() {
	var selector = "#obj46425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46358(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46344_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46359();
function runjs_46359() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46360();
function switchText_46360() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj46344_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46344 
move_46361();
function move_46361() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj46344");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 335;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj46344_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46362();
function runjs_46362() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46431").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46363();
function runjs_46363() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46431").css("border-color", "#000000"); $("#obj46431").css("border-width", "1px"); $("#obj46431").css("border-style", "solid"); $("#obj46431").css("border-radius", "10px"); $("#obj46431").css("-webkit-border-radius", "10px"); $("#obj46431").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46425
(function(){
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj46425";
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
					window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46344_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46365();
function runjs_46365() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46344").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46366();
function runjs_46366() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46344").css("border-color", "rgba(0,0,0,0)"); $("#obj46344").css("border-width", "0px"); $("#obj46344").css("border-style", "solid"); $("#obj46344").css("border-radius", "10px"); $("#obj46344").css("-webkit-border-radius", "10px"); $("#obj46344").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46415 
playAudio_46367();
function playAudio_46367() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46415")[0];
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
		    window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj46344_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46368();
function switchText_46368() {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = obj46344_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46344_droppedInsideTargetActions_2_runningActionsCount = window.obj46344_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj46344_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj46344_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46349();
function runjs_46349() {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46433").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_46353();
function switchText_46353() {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj46344_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_46350();
function runjs_46350() {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46433").css("border-color", "#058E3F"); $("#obj46433").css("border-width", "2px"); $("#obj46433").css("border-style", "solid"); $("#obj46433").css("border-radius", "10px"); $("#obj46433").css("-webkit-border-radius", "10px"); $("#obj46433").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj46427 
hide_46351();
function hide_46351() {
	var selector = "#obj46427";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46351(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46344_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_46352();
function runjs_46352() {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46344").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj46344_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj46419 
playAudio_46354();
function playAudio_46354() {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46419")[0];
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
		    window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj46344_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90583();
function switchText_90583() {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = obj46344_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46344_droppedInsideTargetActions_runningActionsCount = window.obj46344_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46344_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46344_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46344_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46344_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj46344_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46344").trigger("obj46344_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46344) {
				console.warn("de-queueing event obj46344." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46344").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46344_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj46277_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46277");
//	action: dragDrop
//	target: obj46277 
dragDrop_46280();
function dragDrop_46280() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46277_onTouchDown_runningActionsCount = obj46277_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46277');
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
	  	containerNode = $('#obj46437');
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
    	window.obj46277_onTouchDown_runningActionsCount = window.obj46277_onTouchDown_runningActionsCount - 1;
if (window.obj46277_onTouchDown_runningActionsCount < 0) {
	window.obj46277_onTouchDown_runningActionsCount = 0;
} else if (window.obj46277_onTouchDown_runningActionsCount == 0) {
	obj46277_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46431","#obj46433","#obj46429");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46280 = false;
    	var dropped_id_46280;
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
					dropped_46280 = true;
					dropped_id_46280 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46280) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46277").trigger('SCActionDragDrop46280_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46277_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46277_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46277 
move_92697();
function move_92697() {
	window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount = obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 81;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount = window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46277_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46303();
function runjs_46303() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46304();
function runjs_46304() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("border-color", "#C00000"); $("#obj46429").css("border-width", "2px"); $("#obj46429").css("border-style", "solid"); $("#obj46429").css("border-radius", "10px"); $("#obj46429").css("-webkit-border-radius", "10px"); $("#obj46429").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46423 
hide_46305();
function hide_46305() {
	var selector = "#obj46423";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46305(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46277_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46306();
function runjs_46306() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46277").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46307();
function switchText_46307() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj46277_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46277 
move_46308();
function move_46308() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj46277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 81;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj46277_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46309();
function runjs_46309() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46310();
function runjs_46310() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46429").css("border-color", "#000000"); $("#obj46429").css("border-width", "1px"); $("#obj46429").css("border-style", "solid"); $("#obj46429").css("border-radius", "10px"); $("#obj46429").css("-webkit-border-radius", "10px"); $("#obj46429").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46423
(function(){
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj46423";
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
					window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46277_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46312();
function runjs_46312() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46277").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46313();
function runjs_46313() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46277").css("border-color", "rgba(0,0,0,0)"); $("#obj46277").css("border-width", "0px"); $("#obj46277").css("border-style", "solid"); $("#obj46277").css("border-radius", "10px"); $("#obj46277").css("-webkit-border-radius", "10px"); $("#obj46277").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46415 
playAudio_46314();
function playAudio_46314() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46415")[0];
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
		    window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj46277_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46315();
function switchText_46315() {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = obj46277_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46277_droppedInsideTargetActions_3_runningActionsCount = window.obj46277_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj46277_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj46277_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46289();
function runjs_46289() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46290();
function runjs_46290() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("border-color", "#C00000"); $("#obj46433").css("border-width", "2px"); $("#obj46433").css("border-style", "solid"); $("#obj46433").css("border-radius", "10px"); $("#obj46433").css("-webkit-border-radius", "10px"); $("#obj46433").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46427 
hide_46291();
function hide_46291() {
	var selector = "#obj46427";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46291(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46277_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46292();
function runjs_46292() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46277").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46293();
function switchText_46293() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj46277_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46277 
move_46294();
function move_46294() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj46277");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 81;
	var moveY = 609;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj46277_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46295();
function runjs_46295() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46296();
function runjs_46296() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("border-color", "#000000"); $("#obj46433").css("border-width", "1px"); $("#obj46433").css("border-style", "solid"); $("#obj46433").css("border-radius", "10px"); $("#obj46433").css("-webkit-border-radius", "10px"); $("#obj46433").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46427
(function(){
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj46427";
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
					window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46277_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46298();
function runjs_46298() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46277").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46299();
function runjs_46299() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46277").css("border-color", "rgba(0,0,0,0)"); $("#obj46277").css("border-width", "0px"); $("#obj46277").css("border-style", "solid"); $("#obj46277").css("border-radius", "10px"); $("#obj46277").css("-webkit-border-radius", "10px"); $("#obj46277").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46415 
playAudio_46300();
function playAudio_46300() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46415")[0];
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
		    window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj46277_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46301();
function switchText_46301() {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = obj46277_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46277_droppedInsideTargetActions_2_runningActionsCount = window.obj46277_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj46277_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj46277_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46282();
function runjs_46282() {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46431").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_46286();
function switchText_46286() {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj46277_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_46283();
function runjs_46283() {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46431").css("border-color", "#058E3F"); $("#obj46431").css("border-width", "2px"); $("#obj46431").css("border-style", "solid"); $("#obj46431").css("border-radius", "10px"); $("#obj46431").css("-webkit-border-radius", "10px"); $("#obj46431").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj46425 
hide_46284();
function hide_46284() {
	var selector = "#obj46425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46284(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46277_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_46285();
function runjs_46285() {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46277").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj46277_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj46419 
playAudio_46287();
function playAudio_46287() {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46419")[0];
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
		    window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj46277_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90581();
function switchText_90581() {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = obj46277_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46277_droppedInsideTargetActions_runningActionsCount = window.obj46277_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46277_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46277_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46277_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46277_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj46277_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46277").trigger("obj46277_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46277) {
				console.warn("de-queueing event obj46277." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46277").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46277_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj46210_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj46210");
//	action: dragDrop
//	target: obj46210 
dragDrop_46213();
function dragDrop_46213() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj46210_onTouchDown_runningActionsCount = obj46210_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj46210');
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
	  	containerNode = $('#obj46437');
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
    	window.obj46210_onTouchDown_runningActionsCount = window.obj46210_onTouchDown_runningActionsCount - 1;
if (window.obj46210_onTouchDown_runningActionsCount < 0) {
	window.obj46210_onTouchDown_runningActionsCount = 0;
} else if (window.obj46210_onTouchDown_runningActionsCount == 0) {
	obj46210_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj46429","#obj46433","#obj46431");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_46213 = false;
    	var dropped_id_46213;
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
					dropped_46213 = true;
					dropped_id_46213 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_46213) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj46210").trigger('SCActionDragDrop46213_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj46210_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46210_onTouchDown_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj46210 
move_92695();
function move_92695() {
	window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount = obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj46210");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 223;
	var moveY = 544;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount = window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj46210_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46236();
function runjs_46236() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46431").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46237();
function runjs_46237() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46431").css("border-color", "#C00000"); $("#obj46431").css("border-width", "2px"); $("#obj46431").css("border-style", "solid"); $("#obj46431").css("border-radius", "10px"); $("#obj46431").css("-webkit-border-radius", "10px"); $("#obj46431").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46425 
hide_46238();
function hide_46238() {
	var selector = "#obj46425";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46238(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46210_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46239();
function runjs_46239() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46210").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46240();
function switchText_46240() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj46210_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46210 
move_46241();
function move_46241() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj46210");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 223;
	var moveY = 544;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj46210_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46242();
function runjs_46242() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46431").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46243();
function runjs_46243() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46431").css("border-color", "#000000"); $("#obj46431").css("border-width", "1px"); $("#obj46431").css("border-style", "solid"); $("#obj46431").css("border-radius", "10px"); $("#obj46431").css("-webkit-border-radius", "10px"); $("#obj46431").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46425
(function(){
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj46425";
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
					window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46210_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46245();
function runjs_46245() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46210").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46246();
function runjs_46246() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj46210").css("border-color", "rgba(0,0,0,0)"); $("#obj46210").css("border-width", "0px"); $("#obj46210").css("border-style", "solid"); $("#obj46210").css("border-radius", "10px"); $("#obj46210").css("-webkit-border-radius", "10px"); $("#obj46210").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46415 
playAudio_46247();
function playAudio_46247() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj46415")[0];
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
		    window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj46210_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46248();
function switchText_46248() {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = obj46210_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46210_droppedInsideTargetActions_3_runningActionsCount = window.obj46210_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj46210_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj46210_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46222();
function runjs_46222() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_46223();
function runjs_46223() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("border-color", "#C00000"); $("#obj46433").css("border-width", "2px"); $("#obj46433").css("border-style", "solid"); $("#obj46433").css("border-radius", "10px"); $("#obj46433").css("-webkit-border-radius", "10px"); $("#obj46433").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj46427 
hide_46224();
function hide_46224() {
	var selector = "#obj46427";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46224(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46210_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_46225();
function runjs_46225() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46210").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_46226();
function switchText_46226() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj46210_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj46210 
move_46227();
function move_46227() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj46210");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 223;
	var moveY = 544;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj46210_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_46228();
function runjs_46228() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_46229();
function runjs_46229() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46433").css("border-color", "#000000"); $("#obj46433").css("border-width", "1px"); $("#obj46433").css("border-style", "solid"); $("#obj46433").css("border-radius", "10px"); $("#obj46433").css("-webkit-border-radius", "10px"); $("#obj46433").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj46427
(function(){
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj46427";
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
					window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj46210_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_46231();
function runjs_46231() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46210").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_46232();
function runjs_46232() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj46210").css("border-color", "rgba(0,0,0,0)"); $("#obj46210").css("border-width", "0px"); $("#obj46210").css("border-style", "solid"); $("#obj46210").css("border-radius", "10px"); $("#obj46210").css("-webkit-border-radius", "10px"); $("#obj46210").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj46415 
playAudio_46233();
function playAudio_46233() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj46415")[0];
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
		    window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj46210_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_46234();
function switchText_46234() {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = obj46210_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46210_droppedInsideTargetActions_2_runningActionsCount = window.obj46210_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj46210_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj46210_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_46215();
function runjs_46215() {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46429").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_46219();
function switchText_46219() {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj46210_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_46216();
function runjs_46216() {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46429").css("border-color", "#058E3F"); $("#obj46429").css("border-width", "2px"); $("#obj46429").css("border-style", "solid"); $("#obj46429").css("border-radius", "10px"); $("#obj46429").css("-webkit-border-radius", "10px"); $("#obj46429").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj46423 
hide_46217();
function hide_46217() {
	var selector = "#obj46423";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_46217(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj46210_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_46218();
function runjs_46218() {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj46210").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj46210_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj46419 
playAudio_46220();
function playAudio_46220() {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj46419")[0];
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
		    window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj46210_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90582();
function switchText_90582() {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = obj46210_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj46417_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj46417_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj46417").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj46417_content");
			setTimeout(function () {
				window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj46417 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj46210_droppedInsideTargetActions_runningActionsCount = window.obj46210_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj46210_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj46210_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj46210_droppedInsideTargetActions_runningActionsCount == 0) {
	obj46210_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj46210_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj46210").trigger("obj46210_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 46210) {
				console.warn("de-queueing event obj46210." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj46210").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj46210_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67598_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67598_onTap_activeActionGroupIndex = -1;
		$("#obj67598").trigger("obj67598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67598) {
				console.warn("de-queueing event obj67598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67598_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67598 
hide_67601();
function hide_67601() {
	var selector = "#obj67598";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67598_onTap_runningActionsCount = obj67598_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67598_onTap_runningActionsCount = window.obj67598_onTap_runningActionsCount - 1;
if (window.obj67598_onTap_runningActionsCount < 0) {
	window.obj67598_onTap_runningActionsCount = 0;
} else if (window.obj67598_onTap_runningActionsCount == 0) {
	obj67598_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67601(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67598_onTap_runningActionsCount = window.obj67598_onTap_runningActionsCount - 1;
if (window.obj67598_onTap_runningActionsCount < 0) {
	window.obj67598_onTap_runningActionsCount = 0;
} else if (window.obj67598_onTap_runningActionsCount == 0) {
	obj67598_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67604 
stopMovie_67600();
function stopMovie_67600() {
	window.obj67598_onTap_runningActionsCount = obj67598_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67604")[0];
	myVideo.pause();
	window.obj67598_onTap_runningActionsCount = window.obj67598_onTap_runningActionsCount - 1;
if (window.obj67598_onTap_runningActionsCount < 0) {
	window.obj67598_onTap_runningActionsCount = 0;
} else if (window.obj67598_onTap_runningActionsCount == 0) {
	obj67598_onTap_actionGroup1();
}
}
















};
obj67598_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67598_onTap_activeActionGroupIndex = -1;
		$("#obj67598").trigger("obj67598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67598) {
				console.warn("de-queueing event obj67598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67598_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67590
(function(){
	window.obj67598_onTap_runningActionsCount = obj67598_onTap_runningActionsCount + 1;

	var selector = "#obj67590";
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
					window.obj67598_onTap_runningActionsCount = window.obj67598_onTap_runningActionsCount - 1;
if (window.obj67598_onTap_runningActionsCount < 0) {
	window.obj67598_onTap_runningActionsCount = 0;
} else if (window.obj67598_onTap_runningActionsCount == 0) {
	obj67598_onTap_actionGroup2();
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
				window.obj67598_onTap_runningActionsCount = window.obj67598_onTap_runningActionsCount - 1;
if (window.obj67598_onTap_runningActionsCount < 0) {
	window.obj67598_onTap_runningActionsCount = 0;
} else if (window.obj67598_onTap_runningActionsCount == 0) {
	obj67598_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67598_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67598_onTap_activeActionGroupIndex = -1;
		$("#obj67598").trigger("obj67598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67598) {
				console.warn("de-queueing event obj67598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67598_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67604 
move_67603();
function move_67603() {
	window.obj67598_onTap_runningActionsCount = obj67598_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67604");
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
			window.obj67598_onTap_runningActionsCount = window.obj67598_onTap_runningActionsCount - 1;
if (window.obj67598_onTap_runningActionsCount < 0) {
	window.obj67598_onTap_runningActionsCount = 0;
} else if (window.obj67598_onTap_runningActionsCount == 0) {
	obj67598_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67598_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67598_onTap_activeActionGroupIndex = -1;
		$("#obj67598").trigger("obj67598_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67598) {
				console.warn("de-queueing event obj67598." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67598").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67598_onTap_activeActionGroupIndex = 3;
	





















};
obj67590_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67590_onTap_activeActionGroupIndex = -1;
		$("#obj67590").trigger("obj67590_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67590) {
				console.warn("de-queueing event obj67590." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67590").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67590_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67590 
hide_67593();
function hide_67593() {
	var selector = "#obj67590";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67590_onTap_runningActionsCount = obj67590_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67590_onTap_runningActionsCount = window.obj67590_onTap_runningActionsCount - 1;
if (window.obj67590_onTap_runningActionsCount < 0) {
	window.obj67590_onTap_runningActionsCount = 0;
} else if (window.obj67590_onTap_runningActionsCount == 0) {
	obj67590_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67593(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67590_onTap_runningActionsCount = window.obj67590_onTap_runningActionsCount - 1;
if (window.obj67590_onTap_runningActionsCount < 0) {
	window.obj67590_onTap_runningActionsCount = 0;
} else if (window.obj67590_onTap_runningActionsCount == 0) {
	obj67590_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67604 
playPauseMovie_67592();
function playPauseMovie_67592() {
	window.obj67590_onTap_runningActionsCount = obj67590_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67604")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67590_onTap_runningActionsCount = window.obj67590_onTap_runningActionsCount - 1;
if (window.obj67590_onTap_runningActionsCount < 0) {
	window.obj67590_onTap_runningActionsCount = 0;
} else if (window.obj67590_onTap_runningActionsCount == 0) {
	obj67590_onTap_actionGroup1();
}
}

















};
obj67590_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67590_onTap_activeActionGroupIndex = -1;
		$("#obj67590").trigger("obj67590_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67590) {
				console.warn("de-queueing event obj67590." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67590").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67590_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67598
(function(){
	window.obj67590_onTap_runningActionsCount = obj67590_onTap_runningActionsCount + 1;

	var selector = "#obj67598";
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
					window.obj67590_onTap_runningActionsCount = window.obj67590_onTap_runningActionsCount - 1;
if (window.obj67590_onTap_runningActionsCount < 0) {
	window.obj67590_onTap_runningActionsCount = 0;
} else if (window.obj67590_onTap_runningActionsCount == 0) {
	obj67590_onTap_actionGroup2();
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
				window.obj67590_onTap_runningActionsCount = window.obj67590_onTap_runningActionsCount - 1;
if (window.obj67590_onTap_runningActionsCount < 0) {
	window.obj67590_onTap_runningActionsCount = 0;
} else if (window.obj67590_onTap_runningActionsCount == 0) {
	obj67590_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67590_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67590_onTap_activeActionGroupIndex = -1;
		$("#obj67590").trigger("obj67590_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67590) {
				console.warn("de-queueing event obj67590." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67590").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67590_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67604 
move_67595();
function move_67595() {
	window.obj67590_onTap_runningActionsCount = obj67590_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67604");
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
			window.obj67590_onTap_runningActionsCount = window.obj67590_onTap_runningActionsCount - 1;
if (window.obj67590_onTap_runningActionsCount < 0) {
	window.obj67590_onTap_runningActionsCount = 0;
} else if (window.obj67590_onTap_runningActionsCount == 0) {
	obj67590_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67590_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67590_onTap_activeActionGroupIndex = -1;
		$("#obj67590").trigger("obj67590_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67590) {
				console.warn("de-queueing event obj67590." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67590").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67590_onTap_activeActionGroupIndex = 3;
	





















};
obj88825_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88825_onTap_activeActionGroupIndex = -1;
		$("#obj88825").trigger("obj88825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88825) {
				console.warn("de-queueing event obj88825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88825_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88830 
stopAudio_88827();
function stopAudio_88827() {
	window.obj88825_onTap_runningActionsCount = obj88825_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88830")[0];
	myAudio.pause();
	window.obj88825_onTap_runningActionsCount = window.obj88825_onTap_runningActionsCount - 1;
if (window.obj88825_onTap_runningActionsCount < 0) {
	window.obj88825_onTap_runningActionsCount = 0;
} else if (window.obj88825_onTap_runningActionsCount == 0) {
	obj88825_onTap_actionGroup1();
}
}








};
obj88825_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88825_onTap_activeActionGroupIndex = -1;
		$("#obj88825").trigger("obj88825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88825) {
				console.warn("de-queueing event obj88825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88825_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88825 
hide_88828();
function hide_88828() {
	var selector = "#obj88825";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88825_onTap_runningActionsCount = obj88825_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88825_onTap_runningActionsCount = window.obj88825_onTap_runningActionsCount - 1;
if (window.obj88825_onTap_runningActionsCount < 0) {
	window.obj88825_onTap_runningActionsCount = 0;
} else if (window.obj88825_onTap_runningActionsCount == 0) {
	obj88825_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88828(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88825_onTap_runningActionsCount = window.obj88825_onTap_runningActionsCount - 1;
if (window.obj88825_onTap_runningActionsCount < 0) {
	window.obj88825_onTap_runningActionsCount = 0;
} else if (window.obj88825_onTap_runningActionsCount == 0) {
	obj88825_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88825_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88825_onTap_activeActionGroupIndex = -1;
		$("#obj88825").trigger("obj88825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88825) {
				console.warn("de-queueing event obj88825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88825_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88820
(function(){
	window.obj88825_onTap_runningActionsCount = obj88825_onTap_runningActionsCount + 1;

	var selector = "#obj88820";
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
					window.obj88825_onTap_runningActionsCount = window.obj88825_onTap_runningActionsCount - 1;
if (window.obj88825_onTap_runningActionsCount < 0) {
	window.obj88825_onTap_runningActionsCount = 0;
} else if (window.obj88825_onTap_runningActionsCount == 0) {
	obj88825_onTap_actionGroup3();
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
				window.obj88825_onTap_runningActionsCount = window.obj88825_onTap_runningActionsCount - 1;
if (window.obj88825_onTap_runningActionsCount < 0) {
	window.obj88825_onTap_runningActionsCount = 0;
} else if (window.obj88825_onTap_runningActionsCount == 0) {
	obj88825_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88825_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88825_onTap_activeActionGroupIndex = -1;
		$("#obj88825").trigger("obj88825_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88825) {
				console.warn("de-queueing event obj88825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88825_onTap_activeActionGroupIndex = 3;
	





















};
obj88820_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88820_onTap_activeActionGroupIndex = -1;
		$("#obj88820").trigger("obj88820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88820) {
				console.warn("de-queueing event obj88820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88820_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88820 
hide_88822();
function hide_88822() {
	var selector = "#obj88820";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88820_onTap_runningActionsCount = obj88820_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88820_onTap_runningActionsCount = window.obj88820_onTap_runningActionsCount - 1;
if (window.obj88820_onTap_runningActionsCount < 0) {
	window.obj88820_onTap_runningActionsCount = 0;
} else if (window.obj88820_onTap_runningActionsCount == 0) {
	obj88820_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88822(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88820_onTap_runningActionsCount = window.obj88820_onTap_runningActionsCount - 1;
if (window.obj88820_onTap_runningActionsCount < 0) {
	window.obj88820_onTap_runningActionsCount = 0;
} else if (window.obj88820_onTap_runningActionsCount == 0) {
	obj88820_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88820_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88820_onTap_activeActionGroupIndex = -1;
		$("#obj88820").trigger("obj88820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88820) {
				console.warn("de-queueing event obj88820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88820_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88825
(function(){
	window.obj88820_onTap_runningActionsCount = obj88820_onTap_runningActionsCount + 1;

	var selector = "#obj88825";
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
					window.obj88820_onTap_runningActionsCount = window.obj88820_onTap_runningActionsCount - 1;
if (window.obj88820_onTap_runningActionsCount < 0) {
	window.obj88820_onTap_runningActionsCount = 0;
} else if (window.obj88820_onTap_runningActionsCount == 0) {
	obj88820_onTap_actionGroup2();
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
				window.obj88820_onTap_runningActionsCount = window.obj88820_onTap_runningActionsCount - 1;
if (window.obj88820_onTap_runningActionsCount < 0) {
	window.obj88820_onTap_runningActionsCount = 0;
} else if (window.obj88820_onTap_runningActionsCount == 0) {
	obj88820_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88820_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88820_onTap_activeActionGroupIndex = -1;
		$("#obj88820").trigger("obj88820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88820) {
				console.warn("de-queueing event obj88820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88820_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88830 
playAudio_88824();
function playAudio_88824() {
	window.obj88820_onTap_runningActionsCount = obj88820_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88830")[0];
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
		    window.obj88820_onTap_runningActionsCount = window.obj88820_onTap_runningActionsCount - 1;
if (window.obj88820_onTap_runningActionsCount < 0) {
	window.obj88820_onTap_runningActionsCount = 0;
} else if (window.obj88820_onTap_runningActionsCount == 0) {
	obj88820_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88820_onTap_runningActionsCount = window.obj88820_onTap_runningActionsCount - 1;
if (window.obj88820_onTap_runningActionsCount < 0) {
	window.obj88820_onTap_runningActionsCount = 0;
} else if (window.obj88820_onTap_runningActionsCount == 0) {
	obj88820_onTap_actionGroup3();
}
	}
}









};
obj88820_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88820_onTap_activeActionGroupIndex = -1;
		$("#obj88820").trigger("obj88820_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88820) {
				console.warn("de-queueing event obj88820." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88820").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88820_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj46454: Event Touch Down
 *
 */
$("#obj46454").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46454_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46454_onTap is still running");
	return;
}
var obj46454_onTap_runningActionsCount = 0;
var obj46454_onTap_loopCount = 0;
obj46454_onTap_actionGroup0();
});










/*
 *
 *   obj46451: Event Touch Down
 *
 */
$("#obj46451").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46451_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46451_onTap is still running");
	return;
}
var obj46451_onTap_runningActionsCount = 0;
var obj46451_onTap_loopCount = 0;
obj46451_onTap_actionGroup0();
});










/*
 *
 *   obj46447: Event Touch Down
 *
 */
$("#obj46447").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj46447_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46447_onTap is still running");
	return;
}
var obj46447_onTap_runningActionsCount = 0;
var obj46447_onTap_loopCount = 0;
obj46447_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj46344: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46344");
	var winTarget = document.getElementById("obj46344");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46344").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46344_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46344_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46344_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46344_onTouchDown is still running");
	return;
}
var obj46344_onTouchDown_runningActionsCount = 0;
var obj46344_onTouchDown_loopCount = 0;
obj46344_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46344: Event SCActionDragDrop46347_droppedOutsideTargetActions
 *
 */
$("#obj46344").bind("SCActionDragDrop46347_droppedOutsideTargetActions", function(event) {
	if (window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46344_SCActionDragDrop46347_droppedOutsideTargetActions is still running");
	return;
}
var obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_loopCount = 0;
obj46344_SCActionDragDrop46347_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46344: Event droppedInsideTargetActions_3
 *
 */
$("#obj46344").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj46344_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46344_droppedInsideTargetActions_3 is still running");
	return;
}
var obj46344_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46344_droppedInsideTargetActions_3_loopCount = 0;
obj46344_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj46344: Event droppedInsideTargetActions_2
 *
 */
$("#obj46344").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj46344_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46344_droppedInsideTargetActions_2 is still running");
	return;
}
var obj46344_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46344_droppedInsideTargetActions_2_loopCount = 0;
obj46344_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj46344: Event droppedInsideTargetActions
 *
 */
$("#obj46344").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46344_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46344_droppedInsideTargetActions is still running");
	return;
}
var obj46344_droppedInsideTargetActions_runningActionsCount = 0;
var obj46344_droppedInsideTargetActions_loopCount = 0;
obj46344_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj46277: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46277");
	var winTarget = document.getElementById("obj46277");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46277").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46277_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46277_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46277_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46277_onTouchDown is still running");
	return;
}
var obj46277_onTouchDown_runningActionsCount = 0;
var obj46277_onTouchDown_loopCount = 0;
obj46277_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46277: Event SCActionDragDrop46280_droppedOutsideTargetActions
 *
 */
$("#obj46277").bind("SCActionDragDrop46280_droppedOutsideTargetActions", function(event) {
	if (window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46277_SCActionDragDrop46280_droppedOutsideTargetActions is still running");
	return;
}
var obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_loopCount = 0;
obj46277_SCActionDragDrop46280_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46277: Event droppedInsideTargetActions_3
 *
 */
$("#obj46277").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj46277_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46277_droppedInsideTargetActions_3 is still running");
	return;
}
var obj46277_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46277_droppedInsideTargetActions_3_loopCount = 0;
obj46277_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj46277: Event droppedInsideTargetActions_2
 *
 */
$("#obj46277").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj46277_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46277_droppedInsideTargetActions_2 is still running");
	return;
}
var obj46277_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46277_droppedInsideTargetActions_2_loopCount = 0;
obj46277_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj46277: Event droppedInsideTargetActions
 *
 */
$("#obj46277").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46277_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46277_droppedInsideTargetActions is still running");
	return;
}
var obj46277_droppedInsideTargetActions_runningActionsCount = 0;
var obj46277_droppedInsideTargetActions_loopCount = 0;
obj46277_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj46210: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj46210");
	var winTarget = document.getElementById("obj46210");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj46210").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj46210_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj46210_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj46210_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46210_onTouchDown is still running");
	return;
}
var obj46210_onTouchDown_runningActionsCount = 0;
var obj46210_onTouchDown_loopCount = 0;
obj46210_onTouchDown_actionGroup0();
});



/*
 *
 *   obj46210: Event SCActionDragDrop46213_droppedOutsideTargetActions
 *
 */
$("#obj46210").bind("SCActionDragDrop46213_droppedOutsideTargetActions", function(event) {
	if (window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46210_SCActionDragDrop46213_droppedOutsideTargetActions is still running");
	return;
}
var obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_runningActionsCount = 0;
var obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_loopCount = 0;
obj46210_SCActionDragDrop46213_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj46210: Event droppedInsideTargetActions_3
 *
 */
$("#obj46210").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj46210_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46210_droppedInsideTargetActions_3 is still running");
	return;
}
var obj46210_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj46210_droppedInsideTargetActions_3_loopCount = 0;
obj46210_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj46210: Event droppedInsideTargetActions_2
 *
 */
$("#obj46210").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj46210_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46210_droppedInsideTargetActions_2 is still running");
	return;
}
var obj46210_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj46210_droppedInsideTargetActions_2_loopCount = 0;
obj46210_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj46210: Event droppedInsideTargetActions
 *
 */
$("#obj46210").bind("droppedInsideTargetActions", function(event) {
	if (window.obj46210_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj46210_droppedInsideTargetActions is still running");
	return;
}
var obj46210_droppedInsideTargetActions_runningActionsCount = 0;
var obj46210_droppedInsideTargetActions_loopCount = 0;
obj46210_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67598: Event Touch Down
 *
 */
$("#obj67598").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67598_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67598_onTap is still running");
	return;
}
var obj67598_onTap_runningActionsCount = 0;
var obj67598_onTap_loopCount = 0;
obj67598_onTap_actionGroup0();
});










/*
 *
 *   obj67590: Event Touch Down
 *
 */
$("#obj67590").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67590_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67590_onTap is still running");
	return;
}
var obj67590_onTap_runningActionsCount = 0;
var obj67590_onTap_loopCount = 0;
obj67590_onTap_actionGroup0();
});










/*
 *
 *   obj88825: Event Touch Down
 *
 */
$("#obj88825").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88825_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88825_onTap is still running");
	return;
}
var obj88825_onTap_runningActionsCount = 0;
var obj88825_onTap_loopCount = 0;
obj88825_onTap_actionGroup0();
});










/*
 *
 *   obj88820: Event Touch Down
 *
 */
$("#obj88820").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88820_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88820_onTap is still running");
	return;
}
var obj88820_onTap_runningActionsCount = 0;
var obj88820_onTap_loopCount = 0;
obj88820_onTap_actionGroup0();
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
	
$("#obj46470").trigger('SCEventShow');
$("#obj46454").trigger('SCEventShow');
$("#obj46451").trigger('SCEventShow');
$("#obj46447").trigger('SCEventShow');
$("#obj46445").trigger('SCEventShow');
$("#obj46443").trigger('SCEventShow');
$("#obj46441").trigger('SCEventShow');
$("#obj46439").trigger('SCEventShow');
$("#obj46437").trigger('SCEventShow');
$("#obj46435").trigger('SCEventShow');
$("#obj46433").trigger('SCEventShow');
$("#obj46431").trigger('SCEventShow');
$("#obj46429").trigger('SCEventShow');
$("#obj46427").trigger('SCEventShow');
$("#obj46425").trigger('SCEventShow');
$("#obj46423").trigger('SCEventShow');
$("#obj46421").trigger('SCEventShow');
$("#obj46419").trigger('SCEventShow');
$("#obj46417").trigger('SCEventShow');
$("#obj46415").trigger('SCEventShow');
$("#obj46413").trigger('SCEventShow');
$("#obj46411").trigger('SCEventShow');
$("#obj46344").trigger('SCEventShow');
$("#obj46277").trigger('SCEventShow');
$("#obj46210").trigger('SCEventShow');
$("#obj67598").trigger('SCEventShow');
$("#obj67590").trigger('SCEventShow');
$("#obj88825").trigger('SCEventShow');
$("#obj88820").trigger('SCEventShow');
$("#obj88830").trigger('SCEventShow');
$("#obj94953").trigger('SCEventShow');
$("#obj67604").trigger('SCEventShow');
	
});