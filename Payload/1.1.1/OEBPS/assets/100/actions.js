pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 25423;
pubcoder.page.title = pubcoder.page.title || "100";
pubcoder.page.number = pubcoder.page.number || 100;
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
var obj80732_onTap_activeActionGroupIndex = -1;
var obj80732_onTap_runningActionsCount = 0;
var obj80732_onTap_loopCount = 0;
var obj80729_onTap_activeActionGroupIndex = -1;
var obj80729_onTap_runningActionsCount = 0;
var obj80729_onTap_loopCount = 0;
var obj80725_onTap_activeActionGroupIndex = -1;
var obj80725_onTap_runningActionsCount = 0;
var obj80725_onTap_loopCount = 0;
var obj80683_onDrag_activeActionGroupIndex = -1;
var obj80683_onDrag_runningActionsCount = 0;
var obj80683_onDrag_loopCount = 0;
var obj80683_onTouchDown_activeActionGroupIndex = -1;
var obj80683_onTouchDown_runningActionsCount = 0;
var obj80683_onTouchDown_loopCount = 0;
var obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_loopCount = 0;
var obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80683_droppedInsideTargetActions_runningActionsCount = 0;
var obj80683_droppedInsideTargetActions_loopCount = 0;
var obj80672_onDrag_activeActionGroupIndex = -1;
var obj80672_onDrag_runningActionsCount = 0;
var obj80672_onDrag_loopCount = 0;
var obj80672_onTouchDown_activeActionGroupIndex = -1;
var obj80672_onTouchDown_runningActionsCount = 0;
var obj80672_onTouchDown_loopCount = 0;
var obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_loopCount = 0;
var obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj80672_droppedInsideTargetActions_runningActionsCount = 0;
var obj80672_droppedInsideTargetActions_loopCount = 0;
var obj80654_onTap_activeActionGroupIndex = -1;
var obj80654_onTap_runningActionsCount = 0;
var obj80654_onTap_loopCount = 0;
var obj80646_onTap_activeActionGroupIndex = -1;
var obj80646_onTap_runningActionsCount = 0;
var obj80646_onTap_loopCount = 0;
var obj88069_onTap_activeActionGroupIndex = -1;
var obj88069_onTap_runningActionsCount = 0;
var obj88069_onTap_loopCount = 0;
var obj88064_onTap_activeActionGroupIndex = -1;
var obj88064_onTap_runningActionsCount = 0;
var obj88064_onTap_loopCount = 0;
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
		
obj80732_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80732_onTap_activeActionGroupIndex = -1;
		$("#obj80732").trigger("obj80732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80732) {
				console.warn("de-queueing event obj80732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80732_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80734();
function goToPage_80734() {
	window.obj80732_onTap_runningActionsCount = obj80732_onTap_runningActionsCount + 1;
	$("#anchor592")[0].click();
	window.obj80732_onTap_runningActionsCount = window.obj80732_onTap_runningActionsCount - 1;
if (window.obj80732_onTap_runningActionsCount < 0) {
	window.obj80732_onTap_runningActionsCount = 0;
} else if (window.obj80732_onTap_runningActionsCount == 0) {
	obj80732_onTap_actionGroup1();
}
}





















};
obj80732_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80732_onTap_activeActionGroupIndex = -1;
		$("#obj80732").trigger("obj80732_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80732) {
				console.warn("de-queueing event obj80732." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80732").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80732_onTap_activeActionGroupIndex = 1;
	





















};
obj80729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80729_onTap_activeActionGroupIndex = -1;
		$("#obj80729").trigger("obj80729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80729) {
				console.warn("de-queueing event obj80729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80729_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80731();
function goToPage_80731() {
	window.obj80729_onTap_runningActionsCount = obj80729_onTap_runningActionsCount + 1;
	$("#anchor593")[0].click();
	window.obj80729_onTap_runningActionsCount = window.obj80729_onTap_runningActionsCount - 1;
if (window.obj80729_onTap_runningActionsCount < 0) {
	window.obj80729_onTap_runningActionsCount = 0;
} else if (window.obj80729_onTap_runningActionsCount == 0) {
	obj80729_onTap_actionGroup1();
}
}





















};
obj80729_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80729_onTap_activeActionGroupIndex = -1;
		$("#obj80729").trigger("obj80729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80729) {
				console.warn("de-queueing event obj80729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80729_onTap_activeActionGroupIndex = 1;
	





















};
obj80725_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80725_onTap_activeActionGroupIndex = -1;
		$("#obj80725").trigger("obj80725_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80725) {
				console.warn("de-queueing event obj80725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80725_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_80727();
function goToPage_80727() {
	window.obj80725_onTap_runningActionsCount = obj80725_onTap_runningActionsCount + 1;
	$("#anchor594")[0].click();
	window.obj80725_onTap_runningActionsCount = window.obj80725_onTap_runningActionsCount - 1;
if (window.obj80725_onTap_runningActionsCount < 0) {
	window.obj80725_onTap_runningActionsCount = 0;
} else if (window.obj80725_onTap_runningActionsCount == 0) {
	obj80725_onTap_actionGroup1();
}
}





















};
obj80725_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80725_onTap_activeActionGroupIndex = -1;
		$("#obj80725").trigger("obj80725_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80725) {
				console.warn("de-queueing event obj80725." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80725").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80725_onTap_activeActionGroupIndex = 1;
	





















};
obj80683_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80683");
//	action: dragDrop
//	target: obj80683 
dragDrop_80686();
function dragDrop_80686() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80683_onTouchDown_runningActionsCount = obj80683_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80683');
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
	  	containerNode = $('#obj80717');
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
    	window.obj80683_onTouchDown_runningActionsCount = window.obj80683_onTouchDown_runningActionsCount - 1;
if (window.obj80683_onTouchDown_runningActionsCount < 0) {
	window.obj80683_onTouchDown_runningActionsCount = 0;
} else if (window.obj80683_onTouchDown_runningActionsCount == 0) {
	obj80683_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80713");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80686 = false;
    	var dropped_id_80686;
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
					dropped_80686 = true;
					dropped_id_80686 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80686) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80683").trigger('SCActionDragDrop80686_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80683_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80683_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80683 
move_92417();
function move_92417() {
	window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount = obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80683");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 547;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount = window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80683_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80688();
function runjs_80688() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80713").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_80689();
function runjs_80689() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80713").css("border-color", "#C00000"); $("#obj80713").css("border-width", "2px"); $("#obj80713").css("border-style", "solid"); $("#obj80713").css("border-radius", "10px"); $("#obj80713").css("-webkit-border-radius", "10px"); $("#obj80713").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj80711 
hide_80690();
function hide_80690() {
	var selector = "#obj80711";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80690(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80683_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_80691();
function runjs_80691() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80683").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_80692();
function switchText_80692() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80705_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80705_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80705").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80705_content");
			setTimeout(function () {
				window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj80705 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj80683_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj80683 
move_80693();
function move_80693() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80683");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 98;
	var moveY = 547;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj80683_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_80694();
function runjs_80694() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80713").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_80695();
function runjs_80695() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80713").css("border-color", "#000000"); $("#obj80713").css("border-width", "1px"); $("#obj80713").css("border-style", "solid"); $("#obj80713").css("border-radius", "10px"); $("#obj80713").css("-webkit-border-radius", "10px"); $("#obj80713").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj80711
(function(){
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj80711";
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
					window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup9();
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
				window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80683_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_80697();
function runjs_80697() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80683").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_80698();
function runjs_80698() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80683").css("border-color", "rgba(0,0,0,0)"); $("#obj80683").css("border-width", "0px"); $("#obj80683").css("border-style", "solid"); $("#obj80683").css("border-radius", "10px"); $("#obj80683").css("-webkit-border-radius", "10px"); $("#obj80683").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj80683_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj80701 
playAudio_80699();
function playAudio_80699() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80701")[0];
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
		    window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj80683_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_80700();
function switchText_80700() {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = obj80683_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80705_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80705_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80705").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80705_content");
			setTimeout(function () {
				window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj80705 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80683_droppedInsideTargetActions_runningActionsCount = window.obj80683_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80683_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80683_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80683_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80683_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj80683_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80683").trigger("obj80683_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80683) {
				console.warn("de-queueing event obj80683." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80683").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80683_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj80672_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj80672");
//	action: dragDrop
//	target: obj80672 
dragDrop_80675();
function dragDrop_80675() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj80672_onTouchDown_runningActionsCount = obj80672_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj80672');
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
	  	containerNode = $('#obj80717');
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
    	window.obj80672_onTouchDown_runningActionsCount = window.obj80672_onTouchDown_runningActionsCount - 1;
if (window.obj80672_onTouchDown_runningActionsCount < 0) {
	window.obj80672_onTouchDown_runningActionsCount = 0;
} else if (window.obj80672_onTouchDown_runningActionsCount == 0) {
	obj80672_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj80713");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_80675 = false;
    	var dropped_id_80675;
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
					dropped_80675 = true;
					dropped_id_80675 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_80675) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj80672").trigger('SCActionDragDrop80675_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj80672_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80672_onTouchDown_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj80672 
move_92419();
function move_92419() {
	window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount = obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj80672");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 337;
	var moveY = 547;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount = window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj80672_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_80677();
function runjs_80677() {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80713").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj80672_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_80681();
function switchText_80681() {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80705_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80705_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80705").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80705_content");
			setTimeout(function () {
				window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj80705 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj80672_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_80678();
function runjs_80678() {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80713").css("border-color", "#058E3F"); $("#obj80713").css("border-width", "2px"); $("#obj80713").css("border-style", "solid"); $("#obj80713").css("border-radius", "10px"); $("#obj80713").css("-webkit-border-radius", "10px"); $("#obj80713").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj80672_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj80711 
hide_80679();
function hide_80679() {
	var selector = "#obj80711";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80679(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj80672_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_80680();
function runjs_80680() {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj80672").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj80672_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj80709 
playAudio_80682();
function playAudio_80682() {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj80709")[0];
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
		    window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj80672_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90333();
function switchText_90333() {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = obj80672_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj80705_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj80705_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj80705").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj80705_content");
			setTimeout(function () {
				window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj80705 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj80672_droppedInsideTargetActions_runningActionsCount = window.obj80672_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj80672_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj80672_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj80672_droppedInsideTargetActions_runningActionsCount == 0) {
	obj80672_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj80672_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj80672").trigger("obj80672_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80672) {
				console.warn("de-queueing event obj80672." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80672").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80672_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj80654_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80654_onTap_activeActionGroupIndex = -1;
		$("#obj80654").trigger("obj80654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80654) {
				console.warn("de-queueing event obj80654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80654_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80654 
hide_80657();
function hide_80657() {
	var selector = "#obj80654";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80654_onTap_runningActionsCount = obj80654_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80654_onTap_runningActionsCount = window.obj80654_onTap_runningActionsCount - 1;
if (window.obj80654_onTap_runningActionsCount < 0) {
	window.obj80654_onTap_runningActionsCount = 0;
} else if (window.obj80654_onTap_runningActionsCount == 0) {
	obj80654_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80657(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80654_onTap_runningActionsCount = window.obj80654_onTap_runningActionsCount - 1;
if (window.obj80654_onTap_runningActionsCount < 0) {
	window.obj80654_onTap_runningActionsCount = 0;
} else if (window.obj80654_onTap_runningActionsCount == 0) {
	obj80654_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj80644 
stopMovie_80656();
function stopMovie_80656() {
	window.obj80654_onTap_runningActionsCount = obj80654_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80644")[0];
	myVideo.pause();
	window.obj80654_onTap_runningActionsCount = window.obj80654_onTap_runningActionsCount - 1;
if (window.obj80654_onTap_runningActionsCount < 0) {
	window.obj80654_onTap_runningActionsCount = 0;
} else if (window.obj80654_onTap_runningActionsCount == 0) {
	obj80654_onTap_actionGroup1();
}
}
















};
obj80654_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80654_onTap_activeActionGroupIndex = -1;
		$("#obj80654").trigger("obj80654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80654) {
				console.warn("de-queueing event obj80654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80654_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80646
(function(){
	window.obj80654_onTap_runningActionsCount = obj80654_onTap_runningActionsCount + 1;

	var selector = "#obj80646";
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
					window.obj80654_onTap_runningActionsCount = window.obj80654_onTap_runningActionsCount - 1;
if (window.obj80654_onTap_runningActionsCount < 0) {
	window.obj80654_onTap_runningActionsCount = 0;
} else if (window.obj80654_onTap_runningActionsCount == 0) {
	obj80654_onTap_actionGroup2();
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
				window.obj80654_onTap_runningActionsCount = window.obj80654_onTap_runningActionsCount - 1;
if (window.obj80654_onTap_runningActionsCount < 0) {
	window.obj80654_onTap_runningActionsCount = 0;
} else if (window.obj80654_onTap_runningActionsCount == 0) {
	obj80654_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80654_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80654_onTap_activeActionGroupIndex = -1;
		$("#obj80654").trigger("obj80654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80654) {
				console.warn("de-queueing event obj80654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80654_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80644 
move_80659();
function move_80659() {
	window.obj80654_onTap_runningActionsCount = obj80654_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80644");
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
			window.obj80654_onTap_runningActionsCount = window.obj80654_onTap_runningActionsCount - 1;
if (window.obj80654_onTap_runningActionsCount < 0) {
	window.obj80654_onTap_runningActionsCount = 0;
} else if (window.obj80654_onTap_runningActionsCount == 0) {
	obj80654_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80654_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80654_onTap_activeActionGroupIndex = -1;
		$("#obj80654").trigger("obj80654_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80654) {
				console.warn("de-queueing event obj80654." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80654").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80654_onTap_activeActionGroupIndex = 3;
	





















};
obj80646_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80646_onTap_activeActionGroupIndex = -1;
		$("#obj80646").trigger("obj80646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80646) {
				console.warn("de-queueing event obj80646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80646_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj80646 
hide_80649();
function hide_80649() {
	var selector = "#obj80646";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj80646_onTap_runningActionsCount = obj80646_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj80646_onTap_runningActionsCount = window.obj80646_onTap_runningActionsCount - 1;
if (window.obj80646_onTap_runningActionsCount < 0) {
	window.obj80646_onTap_runningActionsCount = 0;
} else if (window.obj80646_onTap_runningActionsCount == 0) {
	obj80646_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_80649(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj80646_onTap_runningActionsCount = window.obj80646_onTap_runningActionsCount - 1;
if (window.obj80646_onTap_runningActionsCount < 0) {
	window.obj80646_onTap_runningActionsCount = 0;
} else if (window.obj80646_onTap_runningActionsCount == 0) {
	obj80646_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj80644 
playPauseMovie_80648();
function playPauseMovie_80648() {
	window.obj80646_onTap_runningActionsCount = obj80646_onTap_runningActionsCount + 1;
	var myVideo = $("#obj80644")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj80646_onTap_runningActionsCount = window.obj80646_onTap_runningActionsCount - 1;
if (window.obj80646_onTap_runningActionsCount < 0) {
	window.obj80646_onTap_runningActionsCount = 0;
} else if (window.obj80646_onTap_runningActionsCount == 0) {
	obj80646_onTap_actionGroup1();
}
}

















};
obj80646_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80646_onTap_activeActionGroupIndex = -1;
		$("#obj80646").trigger("obj80646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80646) {
				console.warn("de-queueing event obj80646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80646_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj80654
(function(){
	window.obj80646_onTap_runningActionsCount = obj80646_onTap_runningActionsCount + 1;

	var selector = "#obj80654";
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
					window.obj80646_onTap_runningActionsCount = window.obj80646_onTap_runningActionsCount - 1;
if (window.obj80646_onTap_runningActionsCount < 0) {
	window.obj80646_onTap_runningActionsCount = 0;
} else if (window.obj80646_onTap_runningActionsCount == 0) {
	obj80646_onTap_actionGroup2();
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
				window.obj80646_onTap_runningActionsCount = window.obj80646_onTap_runningActionsCount - 1;
if (window.obj80646_onTap_runningActionsCount < 0) {
	window.obj80646_onTap_runningActionsCount = 0;
} else if (window.obj80646_onTap_runningActionsCount == 0) {
	obj80646_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj80646_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj80646_onTap_activeActionGroupIndex = -1;
		$("#obj80646").trigger("obj80646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80646) {
				console.warn("de-queueing event obj80646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80646_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj80644 
move_80651();
function move_80651() {
	window.obj80646_onTap_runningActionsCount = obj80646_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj80644");
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
			window.obj80646_onTap_runningActionsCount = window.obj80646_onTap_runningActionsCount - 1;
if (window.obj80646_onTap_runningActionsCount < 0) {
	window.obj80646_onTap_runningActionsCount = 0;
} else if (window.obj80646_onTap_runningActionsCount == 0) {
	obj80646_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj80646_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj80646_onTap_activeActionGroupIndex = -1;
		$("#obj80646").trigger("obj80646_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 80646) {
				console.warn("de-queueing event obj80646." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj80646").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj80646_onTap_activeActionGroupIndex = 3;
	





















};
obj88069_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88069_onTap_activeActionGroupIndex = -1;
		$("#obj88069").trigger("obj88069_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88069) {
				console.warn("de-queueing event obj88069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88069_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88074 
stopAudio_88071();
function stopAudio_88071() {
	window.obj88069_onTap_runningActionsCount = obj88069_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88074")[0];
	myAudio.pause();
	window.obj88069_onTap_runningActionsCount = window.obj88069_onTap_runningActionsCount - 1;
if (window.obj88069_onTap_runningActionsCount < 0) {
	window.obj88069_onTap_runningActionsCount = 0;
} else if (window.obj88069_onTap_runningActionsCount == 0) {
	obj88069_onTap_actionGroup1();
}
}








};
obj88069_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88069_onTap_activeActionGroupIndex = -1;
		$("#obj88069").trigger("obj88069_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88069) {
				console.warn("de-queueing event obj88069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88069_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88069 
hide_88072();
function hide_88072() {
	var selector = "#obj88069";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88069_onTap_runningActionsCount = obj88069_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88069_onTap_runningActionsCount = window.obj88069_onTap_runningActionsCount - 1;
if (window.obj88069_onTap_runningActionsCount < 0) {
	window.obj88069_onTap_runningActionsCount = 0;
} else if (window.obj88069_onTap_runningActionsCount == 0) {
	obj88069_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88072(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88069_onTap_runningActionsCount = window.obj88069_onTap_runningActionsCount - 1;
if (window.obj88069_onTap_runningActionsCount < 0) {
	window.obj88069_onTap_runningActionsCount = 0;
} else if (window.obj88069_onTap_runningActionsCount == 0) {
	obj88069_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88069_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88069_onTap_activeActionGroupIndex = -1;
		$("#obj88069").trigger("obj88069_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88069) {
				console.warn("de-queueing event obj88069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88069_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88064
(function(){
	window.obj88069_onTap_runningActionsCount = obj88069_onTap_runningActionsCount + 1;

	var selector = "#obj88064";
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
					window.obj88069_onTap_runningActionsCount = window.obj88069_onTap_runningActionsCount - 1;
if (window.obj88069_onTap_runningActionsCount < 0) {
	window.obj88069_onTap_runningActionsCount = 0;
} else if (window.obj88069_onTap_runningActionsCount == 0) {
	obj88069_onTap_actionGroup3();
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
				window.obj88069_onTap_runningActionsCount = window.obj88069_onTap_runningActionsCount - 1;
if (window.obj88069_onTap_runningActionsCount < 0) {
	window.obj88069_onTap_runningActionsCount = 0;
} else if (window.obj88069_onTap_runningActionsCount == 0) {
	obj88069_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88069_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88069_onTap_activeActionGroupIndex = -1;
		$("#obj88069").trigger("obj88069_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88069) {
				console.warn("de-queueing event obj88069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88069_onTap_activeActionGroupIndex = 3;
	





















};
obj88064_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88064_onTap_activeActionGroupIndex = -1;
		$("#obj88064").trigger("obj88064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88064) {
				console.warn("de-queueing event obj88064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88064_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88064 
hide_88066();
function hide_88066() {
	var selector = "#obj88064";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88064_onTap_runningActionsCount = obj88064_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88064_onTap_runningActionsCount = window.obj88064_onTap_runningActionsCount - 1;
if (window.obj88064_onTap_runningActionsCount < 0) {
	window.obj88064_onTap_runningActionsCount = 0;
} else if (window.obj88064_onTap_runningActionsCount == 0) {
	obj88064_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88066(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88064_onTap_runningActionsCount = window.obj88064_onTap_runningActionsCount - 1;
if (window.obj88064_onTap_runningActionsCount < 0) {
	window.obj88064_onTap_runningActionsCount = 0;
} else if (window.obj88064_onTap_runningActionsCount == 0) {
	obj88064_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88064_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88064_onTap_activeActionGroupIndex = -1;
		$("#obj88064").trigger("obj88064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88064) {
				console.warn("de-queueing event obj88064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88064_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88069
(function(){
	window.obj88064_onTap_runningActionsCount = obj88064_onTap_runningActionsCount + 1;

	var selector = "#obj88069";
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
					window.obj88064_onTap_runningActionsCount = window.obj88064_onTap_runningActionsCount - 1;
if (window.obj88064_onTap_runningActionsCount < 0) {
	window.obj88064_onTap_runningActionsCount = 0;
} else if (window.obj88064_onTap_runningActionsCount == 0) {
	obj88064_onTap_actionGroup2();
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
				window.obj88064_onTap_runningActionsCount = window.obj88064_onTap_runningActionsCount - 1;
if (window.obj88064_onTap_runningActionsCount < 0) {
	window.obj88064_onTap_runningActionsCount = 0;
} else if (window.obj88064_onTap_runningActionsCount == 0) {
	obj88064_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88064_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88064_onTap_activeActionGroupIndex = -1;
		$("#obj88064").trigger("obj88064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88064) {
				console.warn("de-queueing event obj88064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88064_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88074 
playAudio_88068();
function playAudio_88068() {
	window.obj88064_onTap_runningActionsCount = obj88064_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88074")[0];
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
		    window.obj88064_onTap_runningActionsCount = window.obj88064_onTap_runningActionsCount - 1;
if (window.obj88064_onTap_runningActionsCount < 0) {
	window.obj88064_onTap_runningActionsCount = 0;
} else if (window.obj88064_onTap_runningActionsCount == 0) {
	obj88064_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88064_onTap_runningActionsCount = window.obj88064_onTap_runningActionsCount - 1;
if (window.obj88064_onTap_runningActionsCount < 0) {
	window.obj88064_onTap_runningActionsCount = 0;
} else if (window.obj88064_onTap_runningActionsCount == 0) {
	obj88064_onTap_actionGroup3();
}
	}
}









};
obj88064_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88064_onTap_activeActionGroupIndex = -1;
		$("#obj88064").trigger("obj88064_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88064) {
				console.warn("de-queueing event obj88064." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88064").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88064_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj80732: Event Touch Down
 *
 */
$("#obj80732").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80732_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80732_onTap is still running");
	return;
}
var obj80732_onTap_runningActionsCount = 0;
var obj80732_onTap_loopCount = 0;
obj80732_onTap_actionGroup0();
});










/*
 *
 *   obj80729: Event Touch Down
 *
 */
$("#obj80729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80729_onTap is still running");
	return;
}
var obj80729_onTap_runningActionsCount = 0;
var obj80729_onTap_loopCount = 0;
obj80729_onTap_actionGroup0();
});










/*
 *
 *   obj80725: Event Touch Down
 *
 */
$("#obj80725").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80725_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80725_onTap is still running");
	return;
}
var obj80725_onTap_runningActionsCount = 0;
var obj80725_onTap_loopCount = 0;
obj80725_onTap_actionGroup0();
});



































































































































/*
 *
 *   obj80683: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80683");
	var winTarget = document.getElementById("obj80683");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80683").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80683_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80683_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80683_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80683_onTouchDown is still running");
	return;
}
var obj80683_onTouchDown_runningActionsCount = 0;
var obj80683_onTouchDown_loopCount = 0;
obj80683_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80683: Event SCActionDragDrop80686_droppedOutsideTargetActions
 *
 */
$("#obj80683").bind("SCActionDragDrop80686_droppedOutsideTargetActions", function(event) {
	if (window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80683_SCActionDragDrop80686_droppedOutsideTargetActions is still running");
	return;
}
var obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_loopCount = 0;
obj80683_SCActionDragDrop80686_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80683: Event droppedInsideTargetActions
 *
 */
$("#obj80683").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80683_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80683_droppedInsideTargetActions is still running");
	return;
}
var obj80683_droppedInsideTargetActions_runningActionsCount = 0;
var obj80683_droppedInsideTargetActions_loopCount = 0;
obj80683_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj80672: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj80672");
	var winTarget = document.getElementById("obj80672");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj80672").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj80672_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj80672_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj80672_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80672_onTouchDown is still running");
	return;
}
var obj80672_onTouchDown_runningActionsCount = 0;
var obj80672_onTouchDown_loopCount = 0;
obj80672_onTouchDown_actionGroup0();
});



/*
 *
 *   obj80672: Event SCActionDragDrop80675_droppedOutsideTargetActions
 *
 */
$("#obj80672").bind("SCActionDragDrop80675_droppedOutsideTargetActions", function(event) {
	if (window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80672_SCActionDragDrop80675_droppedOutsideTargetActions is still running");
	return;
}
var obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_runningActionsCount = 0;
var obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_loopCount = 0;
obj80672_SCActionDragDrop80675_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj80672: Event droppedInsideTargetActions
 *
 */
$("#obj80672").bind("droppedInsideTargetActions", function(event) {
	if (window.obj80672_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80672_droppedInsideTargetActions is still running");
	return;
}
var obj80672_droppedInsideTargetActions_runningActionsCount = 0;
var obj80672_droppedInsideTargetActions_loopCount = 0;
obj80672_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj80654: Event Touch Down
 *
 */
$("#obj80654").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80654_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80654_onTap is still running");
	return;
}
var obj80654_onTap_runningActionsCount = 0;
var obj80654_onTap_loopCount = 0;
obj80654_onTap_actionGroup0();
});










/*
 *
 *   obj80646: Event Touch Down
 *
 */
$("#obj80646").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj80646_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj80646_onTap is still running");
	return;
}
var obj80646_onTap_runningActionsCount = 0;
var obj80646_onTap_loopCount = 0;
obj80646_onTap_actionGroup0();
});










/*
 *
 *   obj88069: Event Touch Down
 *
 */
$("#obj88069").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88069_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88069_onTap is still running");
	return;
}
var obj88069_onTap_runningActionsCount = 0;
var obj88069_onTap_loopCount = 0;
obj88069_onTap_actionGroup0();
});










/*
 *
 *   obj88064: Event Touch Down
 *
 */
$("#obj88064").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88064_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88064_onTap is still running");
	return;
}
var obj88064_onTap_runningActionsCount = 0;
var obj88064_onTap_loopCount = 0;
obj88064_onTap_actionGroup0();
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
	
$("#obj80735").trigger('SCEventShow');
$("#obj80732").trigger('SCEventShow');
$("#obj80729").trigger('SCEventShow');
$("#obj80725").trigger('SCEventShow');
$("#obj80723").trigger('SCEventShow');
$("#obj80721").trigger('SCEventShow');
$("#obj80719").trigger('SCEventShow');
$("#obj80717").trigger('SCEventShow');
$("#obj80715").trigger('SCEventShow');
$("#obj80713").trigger('SCEventShow');
$("#obj80711").trigger('SCEventShow');
$("#obj80709").trigger('SCEventShow');
$("#obj80707").trigger('SCEventShow');
$("#obj80705").trigger('SCEventShow');
$("#obj80703").trigger('SCEventShow');
$("#obj80701").trigger('SCEventShow');
$("#obj80683").trigger('SCEventShow');
$("#obj80672").trigger('SCEventShow');
$("#obj80654").trigger('SCEventShow');
$("#obj80646").trigger('SCEventShow');
$("#obj88069").trigger('SCEventShow');
$("#obj88064").trigger('SCEventShow');
$("#obj88074").trigger('SCEventShow');
$("#obj94829").trigger('SCEventShow');
$("#obj80644").trigger('SCEventShow');
	
});