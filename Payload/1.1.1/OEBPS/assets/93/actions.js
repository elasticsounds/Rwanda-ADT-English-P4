pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 24000;
pubcoder.page.title = pubcoder.page.title || "93";
pubcoder.page.number = pubcoder.page.number || 93;
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
var obj79905_onTap_activeActionGroupIndex = -1;
var obj79905_onTap_runningActionsCount = 0;
var obj79905_onTap_loopCount = 0;
var obj79902_onTap_activeActionGroupIndex = -1;
var obj79902_onTap_runningActionsCount = 0;
var obj79902_onTap_loopCount = 0;
var obj79898_onTap_activeActionGroupIndex = -1;
var obj79898_onTap_runningActionsCount = 0;
var obj79898_onTap_loopCount = 0;
var obj79825_onDrag_activeActionGroupIndex = -1;
var obj79825_onDrag_runningActionsCount = 0;
var obj79825_onDrag_loopCount = 0;
var obj79825_onTouchDown_activeActionGroupIndex = -1;
var obj79825_onTouchDown_runningActionsCount = 0;
var obj79825_onTouchDown_loopCount = 0;
var obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_loopCount = 0;
var obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj79825_droppedInsideTargetActions_3_loopCount = 0;
var obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj79825_droppedInsideTargetActions_2_loopCount = 0;
var obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj79825_droppedInsideTargetActions_runningActionsCount = 0;
var obj79825_droppedInsideTargetActions_loopCount = 0;
var obj79786_onDrag_activeActionGroupIndex = -1;
var obj79786_onDrag_runningActionsCount = 0;
var obj79786_onDrag_loopCount = 0;
var obj79786_onTouchDown_activeActionGroupIndex = -1;
var obj79786_onTouchDown_runningActionsCount = 0;
var obj79786_onTouchDown_loopCount = 0;
var obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_loopCount = 0;
var obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj79786_droppedInsideTargetActions_3_loopCount = 0;
var obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj79786_droppedInsideTargetActions_2_loopCount = 0;
var obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj79786_droppedInsideTargetActions_runningActionsCount = 0;
var obj79786_droppedInsideTargetActions_loopCount = 0;
var obj79747_onDrag_activeActionGroupIndex = -1;
var obj79747_onDrag_runningActionsCount = 0;
var obj79747_onDrag_loopCount = 0;
var obj79747_onTouchDown_activeActionGroupIndex = -1;
var obj79747_onTouchDown_runningActionsCount = 0;
var obj79747_onTouchDown_loopCount = 0;
var obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_loopCount = 0;
var obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj79747_droppedInsideTargetActions_3_loopCount = 0;
var obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj79747_droppedInsideTargetActions_2_loopCount = 0;
var obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj79747_droppedInsideTargetActions_runningActionsCount = 0;
var obj79747_droppedInsideTargetActions_loopCount = 0;
var obj79729_onTap_activeActionGroupIndex = -1;
var obj79729_onTap_runningActionsCount = 0;
var obj79729_onTap_loopCount = 0;
var obj79721_onTap_activeActionGroupIndex = -1;
var obj79721_onTap_runningActionsCount = 0;
var obj79721_onTap_loopCount = 0;
var obj87985_onTap_activeActionGroupIndex = -1;
var obj87985_onTap_runningActionsCount = 0;
var obj87985_onTap_loopCount = 0;
var obj87980_onTap_activeActionGroupIndex = -1;
var obj87980_onTap_runningActionsCount = 0;
var obj87980_onTap_loopCount = 0;
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
		
obj79905_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79905_onTap_activeActionGroupIndex = -1;
		$("#obj79905").trigger("obj79905_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79905) {
				console.warn("de-queueing event obj79905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79905_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79907();
function goToPage_79907() {
	window.obj79905_onTap_runningActionsCount = obj79905_onTap_runningActionsCount + 1;
	$("#anchor546")[0].click();
	window.obj79905_onTap_runningActionsCount = window.obj79905_onTap_runningActionsCount - 1;
if (window.obj79905_onTap_runningActionsCount < 0) {
	window.obj79905_onTap_runningActionsCount = 0;
} else if (window.obj79905_onTap_runningActionsCount == 0) {
	obj79905_onTap_actionGroup1();
}
}





















};
obj79905_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79905_onTap_activeActionGroupIndex = -1;
		$("#obj79905").trigger("obj79905_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79905) {
				console.warn("de-queueing event obj79905." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79905").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79905_onTap_activeActionGroupIndex = 1;
	





















};
obj79902_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79902_onTap_activeActionGroupIndex = -1;
		$("#obj79902").trigger("obj79902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79902) {
				console.warn("de-queueing event obj79902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79902_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79904();
function goToPage_79904() {
	window.obj79902_onTap_runningActionsCount = obj79902_onTap_runningActionsCount + 1;
	$("#anchor547")[0].click();
	window.obj79902_onTap_runningActionsCount = window.obj79902_onTap_runningActionsCount - 1;
if (window.obj79902_onTap_runningActionsCount < 0) {
	window.obj79902_onTap_runningActionsCount = 0;
} else if (window.obj79902_onTap_runningActionsCount == 0) {
	obj79902_onTap_actionGroup1();
}
}





















};
obj79902_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79902_onTap_activeActionGroupIndex = -1;
		$("#obj79902").trigger("obj79902_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79902) {
				console.warn("de-queueing event obj79902." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79902").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79902_onTap_activeActionGroupIndex = 1;
	





















};
obj79898_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79898_onTap_activeActionGroupIndex = -1;
		$("#obj79898").trigger("obj79898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79898) {
				console.warn("de-queueing event obj79898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79898_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_79900();
function goToPage_79900() {
	window.obj79898_onTap_runningActionsCount = obj79898_onTap_runningActionsCount + 1;
	$("#anchor548")[0].click();
	window.obj79898_onTap_runningActionsCount = window.obj79898_onTap_runningActionsCount - 1;
if (window.obj79898_onTap_runningActionsCount < 0) {
	window.obj79898_onTap_runningActionsCount = 0;
} else if (window.obj79898_onTap_runningActionsCount == 0) {
	obj79898_onTap_actionGroup1();
}
}





















};
obj79898_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79898_onTap_activeActionGroupIndex = -1;
		$("#obj79898").trigger("obj79898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79898) {
				console.warn("de-queueing event obj79898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79898_onTap_activeActionGroupIndex = 1;
	





















};
obj79825_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj79825");
//	action: dragDrop
//	target: obj79825 
dragDrop_79828();
function dragDrop_79828() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj79825_onTouchDown_runningActionsCount = obj79825_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj79825');
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
	  	containerNode = $('#obj79888');
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
    	window.obj79825_onTouchDown_runningActionsCount = window.obj79825_onTouchDown_runningActionsCount - 1;
if (window.obj79825_onTouchDown_runningActionsCount < 0) {
	window.obj79825_onTouchDown_runningActionsCount = 0;
} else if (window.obj79825_onTouchDown_runningActionsCount == 0) {
	obj79825_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79876","#obj79880","#obj79878");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79828 = false;
    	var dropped_id_79828;
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
					dropped_79828 = true;
					dropped_id_79828 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79828) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj79825").trigger('SCActionDragDrop79828_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj79825_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79825_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj79825 
move_92390();
function move_92390() {
	window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount = obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79825");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount = window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj79825_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79851();
function runjs_79851() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79878").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79852();
function runjs_79852() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79878").css("border-color", "#C00000"); $("#obj79878").css("border-width", "2px"); $("#obj79878").css("border-style", "solid"); $("#obj79878").css("border-radius", "10px"); $("#obj79878").css("-webkit-border-radius", "10px"); $("#obj79878").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79872 
hide_79853();
function hide_79853() {
	var selector = "#obj79872";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79853(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79825_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79854();
function runjs_79854() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79825").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79855();
function switchText_79855() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj79825_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79825 
move_79856();
function move_79856() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj79825");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj79825_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79857();
function runjs_79857() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79878").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79858();
function runjs_79858() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79878").css("border-color", "#000000"); $("#obj79878").css("border-width", "1px"); $("#obj79878").css("border-style", "solid"); $("#obj79878").css("border-radius", "10px"); $("#obj79878").css("-webkit-border-radius", "10px"); $("#obj79878").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79872
(function(){
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj79872";
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
					window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79825_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79860();
function runjs_79860() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79825").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79861();
function runjs_79861() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79825").css("border-color", "rgba(0,0,0,0)"); $("#obj79825").css("border-width", "0px"); $("#obj79825").css("border-style", "solid"); $("#obj79825").css("border-radius", "10px"); $("#obj79825").css("-webkit-border-radius", "10px"); $("#obj79825").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79865 
playAudio_79862();
function playAudio_79862() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj79865")[0];
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
		    window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj79825_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79863();
function switchText_79863() {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = obj79825_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79825_droppedInsideTargetActions_3_runningActionsCount = window.obj79825_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj79825_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj79825_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79837();
function runjs_79837() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79838();
function runjs_79838() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("border-color", "#C00000"); $("#obj79880").css("border-width", "2px"); $("#obj79880").css("border-style", "solid"); $("#obj79880").css("border-radius", "10px"); $("#obj79880").css("-webkit-border-radius", "10px"); $("#obj79880").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79874 
hide_79839();
function hide_79839() {
	var selector = "#obj79874";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79839(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79825_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79840();
function runjs_79840() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79825").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79841();
function switchText_79841() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj79825_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79825 
move_79842();
function move_79842() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj79825");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 229;
	var moveY = 617;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj79825_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79843();
function runjs_79843() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79844();
function runjs_79844() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("border-color", "#000000"); $("#obj79880").css("border-width", "1px"); $("#obj79880").css("border-style", "solid"); $("#obj79880").css("border-radius", "10px"); $("#obj79880").css("-webkit-border-radius", "10px"); $("#obj79880").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79874
(function(){
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj79874";
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
					window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79825_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79846();
function runjs_79846() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79825").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79847();
function runjs_79847() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79825").css("border-color", "rgba(0,0,0,0)"); $("#obj79825").css("border-width", "0px"); $("#obj79825").css("border-style", "solid"); $("#obj79825").css("border-radius", "10px"); $("#obj79825").css("-webkit-border-radius", "10px"); $("#obj79825").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79865 
playAudio_79848();
function playAudio_79848() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj79865")[0];
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
		    window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj79825_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79849();
function switchText_79849() {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = obj79825_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79825_droppedInsideTargetActions_2_runningActionsCount = window.obj79825_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj79825_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj79825_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79830();
function runjs_79830() {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79876").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_79834();
function switchText_79834() {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj79825_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_79831();
function runjs_79831() {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79876").css("border-color", "#058E3F"); $("#obj79876").css("border-width", "2px"); $("#obj79876").css("border-style", "solid"); $("#obj79876").css("border-radius", "10px"); $("#obj79876").css("-webkit-border-radius", "10px"); $("#obj79876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj79870 
hide_79832();
function hide_79832() {
	var selector = "#obj79870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79832(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79825_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_79833();
function runjs_79833() {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79825").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj79825_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj79864 
playAudio_79835();
function playAudio_79835() {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79864")[0];
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
		    window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj79825_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90319();
function switchText_90319() {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = obj79825_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79825_droppedInsideTargetActions_runningActionsCount = window.obj79825_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79825_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79825_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79825_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79825_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj79825_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79825").trigger("obj79825_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79825) {
				console.warn("de-queueing event obj79825." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79825").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79825_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj79786_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj79786");
//	action: dragDrop
//	target: obj79786 
dragDrop_79789();
function dragDrop_79789() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj79786_onTouchDown_runningActionsCount = obj79786_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj79786');
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
	  	containerNode = $('#obj79888');
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
    	window.obj79786_onTouchDown_runningActionsCount = window.obj79786_onTouchDown_runningActionsCount - 1;
if (window.obj79786_onTouchDown_runningActionsCount < 0) {
	window.obj79786_onTouchDown_runningActionsCount = 0;
} else if (window.obj79786_onTouchDown_runningActionsCount == 0) {
	obj79786_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79878","#obj79880","#obj79876");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79789 = false;
    	var dropped_id_79789;
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
					dropped_79789 = true;
					dropped_id_79789 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79789) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj79786").trigger('SCActionDragDrop79789_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj79786_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79786_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj79786 
move_92392();
function move_92392() {
	window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount = obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 387;
	var moveY = 616;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount = window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj79786_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79812();
function runjs_79812() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79813();
function runjs_79813() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("border-color", "#C00000"); $("#obj79876").css("border-width", "2px"); $("#obj79876").css("border-style", "solid"); $("#obj79876").css("border-radius", "10px"); $("#obj79876").css("-webkit-border-radius", "10px"); $("#obj79876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79870 
hide_79814();
function hide_79814() {
	var selector = "#obj79870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79814(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79786_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79815();
function runjs_79815() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79786").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79816();
function switchText_79816() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj79786_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79786 
move_79817();
function move_79817() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj79786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 387;
	var moveY = 616;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj79786_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79818();
function runjs_79818() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79819();
function runjs_79819() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("border-color", "#000000"); $("#obj79876").css("border-width", "1px"); $("#obj79876").css("border-style", "solid"); $("#obj79876").css("border-radius", "10px"); $("#obj79876").css("-webkit-border-radius", "10px"); $("#obj79876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79870
(function(){
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj79870";
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
					window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79786_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79821();
function runjs_79821() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79786").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79822();
function runjs_79822() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79786").css("border-color", "rgba(0,0,0,0)"); $("#obj79786").css("border-width", "0px"); $("#obj79786").css("border-style", "solid"); $("#obj79786").css("border-radius", "10px"); $("#obj79786").css("-webkit-border-radius", "10px"); $("#obj79786").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79865 
playAudio_79823();
function playAudio_79823() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj79865")[0];
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
		    window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj79786_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79824();
function switchText_79824() {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = obj79786_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79786_droppedInsideTargetActions_3_runningActionsCount = window.obj79786_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj79786_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj79786_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79798();
function runjs_79798() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79799();
function runjs_79799() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("border-color", "#C00000"); $("#obj79880").css("border-width", "2px"); $("#obj79880").css("border-style", "solid"); $("#obj79880").css("border-radius", "10px"); $("#obj79880").css("-webkit-border-radius", "10px"); $("#obj79880").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79874 
hide_79800();
function hide_79800() {
	var selector = "#obj79874";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79800(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79786_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79801();
function runjs_79801() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79786").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79802();
function switchText_79802() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj79786_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79786 
move_79803();
function move_79803() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj79786");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 387;
	var moveY = 616;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj79786_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79804();
function runjs_79804() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79805();
function runjs_79805() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79880").css("border-color", "#000000"); $("#obj79880").css("border-width", "1px"); $("#obj79880").css("border-style", "solid"); $("#obj79880").css("border-radius", "10px"); $("#obj79880").css("-webkit-border-radius", "10px"); $("#obj79880").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79874
(function(){
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj79874";
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
					window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79786_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79807();
function runjs_79807() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79786").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79808();
function runjs_79808() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79786").css("border-color", "rgba(0,0,0,0)"); $("#obj79786").css("border-width", "0px"); $("#obj79786").css("border-style", "solid"); $("#obj79786").css("border-radius", "10px"); $("#obj79786").css("-webkit-border-radius", "10px"); $("#obj79786").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79865 
playAudio_79809();
function playAudio_79809() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj79865")[0];
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
		    window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj79786_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79810();
function switchText_79810() {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = obj79786_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79786_droppedInsideTargetActions_2_runningActionsCount = window.obj79786_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj79786_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj79786_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79791();
function runjs_79791() {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79878").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_79795();
function switchText_79795() {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj79786_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_79792();
function runjs_79792() {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79878").css("border-color", "#058E3F"); $("#obj79878").css("border-width", "2px"); $("#obj79878").css("border-style", "solid"); $("#obj79878").css("border-radius", "10px"); $("#obj79878").css("-webkit-border-radius", "10px"); $("#obj79878").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj79872 
hide_79793();
function hide_79793() {
	var selector = "#obj79872";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79793(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79786_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_79794();
function runjs_79794() {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79786").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj79786_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj79864 
playAudio_79796();
function playAudio_79796() {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79864")[0];
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
		    window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj79786_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90320();
function switchText_90320() {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = obj79786_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79786_droppedInsideTargetActions_runningActionsCount = window.obj79786_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79786_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79786_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79786_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79786_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj79786_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79786").trigger("obj79786_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79786) {
				console.warn("de-queueing event obj79786." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79786").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79786_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj79747_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj79747");
//	action: dragDrop
//	target: obj79747 
dragDrop_79750();
function dragDrop_79750() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj79747_onTouchDown_runningActionsCount = obj79747_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj79747');
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
	  	containerNode = $('#obj79888');
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
    	window.obj79747_onTouchDown_runningActionsCount = window.obj79747_onTouchDown_runningActionsCount - 1;
if (window.obj79747_onTouchDown_runningActionsCount < 0) {
	window.obj79747_onTouchDown_runningActionsCount = 0;
} else if (window.obj79747_onTouchDown_runningActionsCount == 0) {
	obj79747_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj79880","#obj79878","#obj79876");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_79750 = false;
    	var dropped_id_79750;
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
					dropped_79750 = true;
					dropped_id_79750 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_79750) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj79747").trigger('SCActionDragDrop79750_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj79747_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79747_onTouchDown_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj79747 
move_92388();
function move_92388() {
	window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount = obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj79747");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 64;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount = window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj79747_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79773();
function runjs_79773() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79774();
function runjs_79774() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("border-color", "#C00000"); $("#obj79876").css("border-width", "2px"); $("#obj79876").css("border-style", "solid"); $("#obj79876").css("border-radius", "10px"); $("#obj79876").css("-webkit-border-radius", "10px"); $("#obj79876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79870 
hide_79775();
function hide_79775() {
	var selector = "#obj79870";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79775(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79747_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79776();
function runjs_79776() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79747").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79777();
function switchText_79777() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj79747_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79747 
move_79778();
function move_79778() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj79747");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 64;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj79747_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79779();
function runjs_79779() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79780();
function runjs_79780() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79876").css("border-color", "#000000"); $("#obj79876").css("border-width", "1px"); $("#obj79876").css("border-style", "solid"); $("#obj79876").css("border-radius", "10px"); $("#obj79876").css("-webkit-border-radius", "10px"); $("#obj79876").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79870
(function(){
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj79870";
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
					window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79747_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79782();
function runjs_79782() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79747").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79783();
function runjs_79783() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj79747").css("border-color", "rgba(0,0,0,0)"); $("#obj79747").css("border-width", "0px"); $("#obj79747").css("border-style", "solid"); $("#obj79747").css("border-radius", "10px"); $("#obj79747").css("-webkit-border-radius", "10px"); $("#obj79747").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79865 
playAudio_79784();
function playAudio_79784() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj79865")[0];
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
		    window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj79747_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79785();
function switchText_79785() {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = obj79747_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79747_droppedInsideTargetActions_3_runningActionsCount = window.obj79747_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj79747_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj79747_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79759();
function runjs_79759() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79878").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_79760();
function runjs_79760() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79878").css("border-color", "#C00000"); $("#obj79878").css("border-width", "2px"); $("#obj79878").css("border-style", "solid"); $("#obj79878").css("border-radius", "10px"); $("#obj79878").css("-webkit-border-radius", "10px"); $("#obj79878").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj79872 
hide_79761();
function hide_79761() {
	var selector = "#obj79872";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79761(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79747_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_79762();
function runjs_79762() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79747").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_79763();
function switchText_79763() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj79747_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj79747 
move_79764();
function move_79764() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj79747");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 64;
	var moveY = 618;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj79747_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_79765();
function runjs_79765() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79878").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_79766();
function runjs_79766() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79878").css("border-color", "#000000"); $("#obj79878").css("border-width", "1px"); $("#obj79878").css("border-style", "solid"); $("#obj79878").css("border-radius", "10px"); $("#obj79878").css("-webkit-border-radius", "10px"); $("#obj79878").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj79872
(function(){
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj79872";
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
					window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79747_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_79768();
function runjs_79768() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79747").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_79769();
function runjs_79769() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj79747").css("border-color", "rgba(0,0,0,0)"); $("#obj79747").css("border-width", "0px"); $("#obj79747").css("border-style", "solid"); $("#obj79747").css("border-radius", "10px"); $("#obj79747").css("-webkit-border-radius", "10px"); $("#obj79747").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj79865 
playAudio_79770();
function playAudio_79770() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj79865")[0];
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
		    window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj79747_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_79771();
function switchText_79771() {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = obj79747_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79747_droppedInsideTargetActions_2_runningActionsCount = window.obj79747_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj79747_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj79747_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_79752();
function runjs_79752() {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79880").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_79756();
function switchText_79756() {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj79747_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_79753();
function runjs_79753() {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79880").css("border-color", "#058E3F"); $("#obj79880").css("border-width", "2px"); $("#obj79880").css("border-style", "solid"); $("#obj79880").css("border-radius", "10px"); $("#obj79880").css("-webkit-border-radius", "10px"); $("#obj79880").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj79874 
hide_79754();
function hide_79754() {
	var selector = "#obj79874";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79754(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj79747_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_79755();
function runjs_79755() {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj79747").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj79747_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj79864 
playAudio_79757();
function playAudio_79757() {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj79864")[0];
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
		    window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj79747_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90318();
function switchText_90318() {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = obj79747_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj79866_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj79866_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj79866").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj79866_content");
			setTimeout(function () {
				window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj79866 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj79747_droppedInsideTargetActions_runningActionsCount = window.obj79747_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj79747_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj79747_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj79747_droppedInsideTargetActions_runningActionsCount == 0) {
	obj79747_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj79747_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj79747").trigger("obj79747_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79747) {
				console.warn("de-queueing event obj79747." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79747").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79747_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj79729_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79729_onTap_activeActionGroupIndex = -1;
		$("#obj79729").trigger("obj79729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79729) {
				console.warn("de-queueing event obj79729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79729_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79729 
hide_79732();
function hide_79732() {
	var selector = "#obj79729";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79729_onTap_runningActionsCount = obj79729_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79729_onTap_runningActionsCount = window.obj79729_onTap_runningActionsCount - 1;
if (window.obj79729_onTap_runningActionsCount < 0) {
	window.obj79729_onTap_runningActionsCount = 0;
} else if (window.obj79729_onTap_runningActionsCount == 0) {
	obj79729_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79732(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79729_onTap_runningActionsCount = window.obj79729_onTap_runningActionsCount - 1;
if (window.obj79729_onTap_runningActionsCount < 0) {
	window.obj79729_onTap_runningActionsCount = 0;
} else if (window.obj79729_onTap_runningActionsCount == 0) {
	obj79729_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj79719 
stopMovie_79731();
function stopMovie_79731() {
	window.obj79729_onTap_runningActionsCount = obj79729_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79719")[0];
	myVideo.pause();
	window.obj79729_onTap_runningActionsCount = window.obj79729_onTap_runningActionsCount - 1;
if (window.obj79729_onTap_runningActionsCount < 0) {
	window.obj79729_onTap_runningActionsCount = 0;
} else if (window.obj79729_onTap_runningActionsCount == 0) {
	obj79729_onTap_actionGroup1();
}
}
















};
obj79729_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79729_onTap_activeActionGroupIndex = -1;
		$("#obj79729").trigger("obj79729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79729) {
				console.warn("de-queueing event obj79729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79729_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79721
(function(){
	window.obj79729_onTap_runningActionsCount = obj79729_onTap_runningActionsCount + 1;

	var selector = "#obj79721";
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
					window.obj79729_onTap_runningActionsCount = window.obj79729_onTap_runningActionsCount - 1;
if (window.obj79729_onTap_runningActionsCount < 0) {
	window.obj79729_onTap_runningActionsCount = 0;
} else if (window.obj79729_onTap_runningActionsCount == 0) {
	obj79729_onTap_actionGroup2();
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
				window.obj79729_onTap_runningActionsCount = window.obj79729_onTap_runningActionsCount - 1;
if (window.obj79729_onTap_runningActionsCount < 0) {
	window.obj79729_onTap_runningActionsCount = 0;
} else if (window.obj79729_onTap_runningActionsCount == 0) {
	obj79729_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79729_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79729_onTap_activeActionGroupIndex = -1;
		$("#obj79729").trigger("obj79729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79729) {
				console.warn("de-queueing event obj79729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79729_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79719 
move_79734();
function move_79734() {
	window.obj79729_onTap_runningActionsCount = obj79729_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79719");
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
			window.obj79729_onTap_runningActionsCount = window.obj79729_onTap_runningActionsCount - 1;
if (window.obj79729_onTap_runningActionsCount < 0) {
	window.obj79729_onTap_runningActionsCount = 0;
} else if (window.obj79729_onTap_runningActionsCount == 0) {
	obj79729_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79729_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79729_onTap_activeActionGroupIndex = -1;
		$("#obj79729").trigger("obj79729_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79729) {
				console.warn("de-queueing event obj79729." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79729").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79729_onTap_activeActionGroupIndex = 3;
	





















};
obj79721_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79721_onTap_activeActionGroupIndex = -1;
		$("#obj79721").trigger("obj79721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79721) {
				console.warn("de-queueing event obj79721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79721_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj79721 
hide_79724();
function hide_79724() {
	var selector = "#obj79721";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj79721_onTap_runningActionsCount = obj79721_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj79721_onTap_runningActionsCount = window.obj79721_onTap_runningActionsCount - 1;
if (window.obj79721_onTap_runningActionsCount < 0) {
	window.obj79721_onTap_runningActionsCount = 0;
} else if (window.obj79721_onTap_runningActionsCount == 0) {
	obj79721_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_79724(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj79721_onTap_runningActionsCount = window.obj79721_onTap_runningActionsCount - 1;
if (window.obj79721_onTap_runningActionsCount < 0) {
	window.obj79721_onTap_runningActionsCount = 0;
} else if (window.obj79721_onTap_runningActionsCount == 0) {
	obj79721_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj79719 
playPauseMovie_79723();
function playPauseMovie_79723() {
	window.obj79721_onTap_runningActionsCount = obj79721_onTap_runningActionsCount + 1;
	var myVideo = $("#obj79719")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj79721_onTap_runningActionsCount = window.obj79721_onTap_runningActionsCount - 1;
if (window.obj79721_onTap_runningActionsCount < 0) {
	window.obj79721_onTap_runningActionsCount = 0;
} else if (window.obj79721_onTap_runningActionsCount == 0) {
	obj79721_onTap_actionGroup1();
}
}

















};
obj79721_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79721_onTap_activeActionGroupIndex = -1;
		$("#obj79721").trigger("obj79721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79721) {
				console.warn("de-queueing event obj79721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79721_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj79729
(function(){
	window.obj79721_onTap_runningActionsCount = obj79721_onTap_runningActionsCount + 1;

	var selector = "#obj79729";
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
					window.obj79721_onTap_runningActionsCount = window.obj79721_onTap_runningActionsCount - 1;
if (window.obj79721_onTap_runningActionsCount < 0) {
	window.obj79721_onTap_runningActionsCount = 0;
} else if (window.obj79721_onTap_runningActionsCount == 0) {
	obj79721_onTap_actionGroup2();
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
				window.obj79721_onTap_runningActionsCount = window.obj79721_onTap_runningActionsCount - 1;
if (window.obj79721_onTap_runningActionsCount < 0) {
	window.obj79721_onTap_runningActionsCount = 0;
} else if (window.obj79721_onTap_runningActionsCount == 0) {
	obj79721_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj79721_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj79721_onTap_activeActionGroupIndex = -1;
		$("#obj79721").trigger("obj79721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79721) {
				console.warn("de-queueing event obj79721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79721_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj79719 
move_79726();
function move_79726() {
	window.obj79721_onTap_runningActionsCount = obj79721_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj79719");
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
			window.obj79721_onTap_runningActionsCount = window.obj79721_onTap_runningActionsCount - 1;
if (window.obj79721_onTap_runningActionsCount < 0) {
	window.obj79721_onTap_runningActionsCount = 0;
} else if (window.obj79721_onTap_runningActionsCount == 0) {
	obj79721_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj79721_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj79721_onTap_activeActionGroupIndex = -1;
		$("#obj79721").trigger("obj79721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 79721) {
				console.warn("de-queueing event obj79721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj79721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj79721_onTap_activeActionGroupIndex = 3;
	





















};
obj87985_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87985_onTap_activeActionGroupIndex = -1;
		$("#obj87985").trigger("obj87985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87985) {
				console.warn("de-queueing event obj87985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87985_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87990 
stopAudio_87987();
function stopAudio_87987() {
	window.obj87985_onTap_runningActionsCount = obj87985_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87990")[0];
	myAudio.pause();
	window.obj87985_onTap_runningActionsCount = window.obj87985_onTap_runningActionsCount - 1;
if (window.obj87985_onTap_runningActionsCount < 0) {
	window.obj87985_onTap_runningActionsCount = 0;
} else if (window.obj87985_onTap_runningActionsCount == 0) {
	obj87985_onTap_actionGroup1();
}
}








};
obj87985_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87985_onTap_activeActionGroupIndex = -1;
		$("#obj87985").trigger("obj87985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87985) {
				console.warn("de-queueing event obj87985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87985_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87985 
hide_87988();
function hide_87988() {
	var selector = "#obj87985";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87985_onTap_runningActionsCount = obj87985_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87985_onTap_runningActionsCount = window.obj87985_onTap_runningActionsCount - 1;
if (window.obj87985_onTap_runningActionsCount < 0) {
	window.obj87985_onTap_runningActionsCount = 0;
} else if (window.obj87985_onTap_runningActionsCount == 0) {
	obj87985_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87988(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87985_onTap_runningActionsCount = window.obj87985_onTap_runningActionsCount - 1;
if (window.obj87985_onTap_runningActionsCount < 0) {
	window.obj87985_onTap_runningActionsCount = 0;
} else if (window.obj87985_onTap_runningActionsCount == 0) {
	obj87985_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87985_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87985_onTap_activeActionGroupIndex = -1;
		$("#obj87985").trigger("obj87985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87985) {
				console.warn("de-queueing event obj87985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87985_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87980
(function(){
	window.obj87985_onTap_runningActionsCount = obj87985_onTap_runningActionsCount + 1;

	var selector = "#obj87980";
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
					window.obj87985_onTap_runningActionsCount = window.obj87985_onTap_runningActionsCount - 1;
if (window.obj87985_onTap_runningActionsCount < 0) {
	window.obj87985_onTap_runningActionsCount = 0;
} else if (window.obj87985_onTap_runningActionsCount == 0) {
	obj87985_onTap_actionGroup3();
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
				window.obj87985_onTap_runningActionsCount = window.obj87985_onTap_runningActionsCount - 1;
if (window.obj87985_onTap_runningActionsCount < 0) {
	window.obj87985_onTap_runningActionsCount = 0;
} else if (window.obj87985_onTap_runningActionsCount == 0) {
	obj87985_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87985_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87985_onTap_activeActionGroupIndex = -1;
		$("#obj87985").trigger("obj87985_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87985) {
				console.warn("de-queueing event obj87985." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87985").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87985_onTap_activeActionGroupIndex = 3;
	





















};
obj87980_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87980_onTap_activeActionGroupIndex = -1;
		$("#obj87980").trigger("obj87980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87980) {
				console.warn("de-queueing event obj87980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87980_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87980 
hide_87982();
function hide_87982() {
	var selector = "#obj87980";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87980_onTap_runningActionsCount = obj87980_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87980_onTap_runningActionsCount = window.obj87980_onTap_runningActionsCount - 1;
if (window.obj87980_onTap_runningActionsCount < 0) {
	window.obj87980_onTap_runningActionsCount = 0;
} else if (window.obj87980_onTap_runningActionsCount == 0) {
	obj87980_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87982(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87980_onTap_runningActionsCount = window.obj87980_onTap_runningActionsCount - 1;
if (window.obj87980_onTap_runningActionsCount < 0) {
	window.obj87980_onTap_runningActionsCount = 0;
} else if (window.obj87980_onTap_runningActionsCount == 0) {
	obj87980_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87980_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87980_onTap_activeActionGroupIndex = -1;
		$("#obj87980").trigger("obj87980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87980) {
				console.warn("de-queueing event obj87980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87980_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87985
(function(){
	window.obj87980_onTap_runningActionsCount = obj87980_onTap_runningActionsCount + 1;

	var selector = "#obj87985";
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
					window.obj87980_onTap_runningActionsCount = window.obj87980_onTap_runningActionsCount - 1;
if (window.obj87980_onTap_runningActionsCount < 0) {
	window.obj87980_onTap_runningActionsCount = 0;
} else if (window.obj87980_onTap_runningActionsCount == 0) {
	obj87980_onTap_actionGroup2();
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
				window.obj87980_onTap_runningActionsCount = window.obj87980_onTap_runningActionsCount - 1;
if (window.obj87980_onTap_runningActionsCount < 0) {
	window.obj87980_onTap_runningActionsCount = 0;
} else if (window.obj87980_onTap_runningActionsCount == 0) {
	obj87980_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87980_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87980_onTap_activeActionGroupIndex = -1;
		$("#obj87980").trigger("obj87980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87980) {
				console.warn("de-queueing event obj87980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87980_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87990 
playAudio_87984();
function playAudio_87984() {
	window.obj87980_onTap_runningActionsCount = obj87980_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87990")[0];
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
		    window.obj87980_onTap_runningActionsCount = window.obj87980_onTap_runningActionsCount - 1;
if (window.obj87980_onTap_runningActionsCount < 0) {
	window.obj87980_onTap_runningActionsCount = 0;
} else if (window.obj87980_onTap_runningActionsCount == 0) {
	obj87980_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87980_onTap_runningActionsCount = window.obj87980_onTap_runningActionsCount - 1;
if (window.obj87980_onTap_runningActionsCount < 0) {
	window.obj87980_onTap_runningActionsCount = 0;
} else if (window.obj87980_onTap_runningActionsCount == 0) {
	obj87980_onTap_actionGroup3();
}
	}
}









};
obj87980_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87980_onTap_activeActionGroupIndex = -1;
		$("#obj87980").trigger("obj87980_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87980) {
				console.warn("de-queueing event obj87980." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87980").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87980_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj79905: Event Touch Down
 *
 */
$("#obj79905").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79905_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79905_onTap is still running");
	return;
}
var obj79905_onTap_runningActionsCount = 0;
var obj79905_onTap_loopCount = 0;
obj79905_onTap_actionGroup0();
});










/*
 *
 *   obj79902: Event Touch Down
 *
 */
$("#obj79902").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79902_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79902_onTap is still running");
	return;
}
var obj79902_onTap_runningActionsCount = 0;
var obj79902_onTap_loopCount = 0;
obj79902_onTap_actionGroup0();
});










/*
 *
 *   obj79898: Event Touch Down
 *
 */
$("#obj79898").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79898_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79898_onTap is still running");
	return;
}
var obj79898_onTap_runningActionsCount = 0;
var obj79898_onTap_loopCount = 0;
obj79898_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj79825: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj79825");
	var winTarget = document.getElementById("obj79825");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj79825").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj79825_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj79825_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj79825_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79825_onTouchDown is still running");
	return;
}
var obj79825_onTouchDown_runningActionsCount = 0;
var obj79825_onTouchDown_loopCount = 0;
obj79825_onTouchDown_actionGroup0();
});



/*
 *
 *   obj79825: Event SCActionDragDrop79828_droppedOutsideTargetActions
 *
 */
$("#obj79825").bind("SCActionDragDrop79828_droppedOutsideTargetActions", function(event) {
	if (window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79825_SCActionDragDrop79828_droppedOutsideTargetActions is still running");
	return;
}
var obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_loopCount = 0;
obj79825_SCActionDragDrop79828_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj79825: Event droppedInsideTargetActions_3
 *
 */
$("#obj79825").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj79825_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79825_droppedInsideTargetActions_3 is still running");
	return;
}
var obj79825_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj79825_droppedInsideTargetActions_3_loopCount = 0;
obj79825_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj79825: Event droppedInsideTargetActions_2
 *
 */
$("#obj79825").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj79825_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79825_droppedInsideTargetActions_2 is still running");
	return;
}
var obj79825_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj79825_droppedInsideTargetActions_2_loopCount = 0;
obj79825_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj79825: Event droppedInsideTargetActions
 *
 */
$("#obj79825").bind("droppedInsideTargetActions", function(event) {
	if (window.obj79825_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79825_droppedInsideTargetActions is still running");
	return;
}
var obj79825_droppedInsideTargetActions_runningActionsCount = 0;
var obj79825_droppedInsideTargetActions_loopCount = 0;
obj79825_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj79786: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj79786");
	var winTarget = document.getElementById("obj79786");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj79786").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj79786_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj79786_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj79786_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79786_onTouchDown is still running");
	return;
}
var obj79786_onTouchDown_runningActionsCount = 0;
var obj79786_onTouchDown_loopCount = 0;
obj79786_onTouchDown_actionGroup0();
});



/*
 *
 *   obj79786: Event SCActionDragDrop79789_droppedOutsideTargetActions
 *
 */
$("#obj79786").bind("SCActionDragDrop79789_droppedOutsideTargetActions", function(event) {
	if (window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79786_SCActionDragDrop79789_droppedOutsideTargetActions is still running");
	return;
}
var obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_loopCount = 0;
obj79786_SCActionDragDrop79789_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj79786: Event droppedInsideTargetActions_3
 *
 */
$("#obj79786").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj79786_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79786_droppedInsideTargetActions_3 is still running");
	return;
}
var obj79786_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj79786_droppedInsideTargetActions_3_loopCount = 0;
obj79786_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj79786: Event droppedInsideTargetActions_2
 *
 */
$("#obj79786").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj79786_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79786_droppedInsideTargetActions_2 is still running");
	return;
}
var obj79786_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj79786_droppedInsideTargetActions_2_loopCount = 0;
obj79786_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj79786: Event droppedInsideTargetActions
 *
 */
$("#obj79786").bind("droppedInsideTargetActions", function(event) {
	if (window.obj79786_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79786_droppedInsideTargetActions is still running");
	return;
}
var obj79786_droppedInsideTargetActions_runningActionsCount = 0;
var obj79786_droppedInsideTargetActions_loopCount = 0;
obj79786_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj79747: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj79747");
	var winTarget = document.getElementById("obj79747");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj79747").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj79747_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj79747_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj79747_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79747_onTouchDown is still running");
	return;
}
var obj79747_onTouchDown_runningActionsCount = 0;
var obj79747_onTouchDown_loopCount = 0;
obj79747_onTouchDown_actionGroup0();
});



/*
 *
 *   obj79747: Event SCActionDragDrop79750_droppedOutsideTargetActions
 *
 */
$("#obj79747").bind("SCActionDragDrop79750_droppedOutsideTargetActions", function(event) {
	if (window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79747_SCActionDragDrop79750_droppedOutsideTargetActions is still running");
	return;
}
var obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_runningActionsCount = 0;
var obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_loopCount = 0;
obj79747_SCActionDragDrop79750_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj79747: Event droppedInsideTargetActions_3
 *
 */
$("#obj79747").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj79747_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79747_droppedInsideTargetActions_3 is still running");
	return;
}
var obj79747_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj79747_droppedInsideTargetActions_3_loopCount = 0;
obj79747_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj79747: Event droppedInsideTargetActions_2
 *
 */
$("#obj79747").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj79747_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79747_droppedInsideTargetActions_2 is still running");
	return;
}
var obj79747_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj79747_droppedInsideTargetActions_2_loopCount = 0;
obj79747_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj79747: Event droppedInsideTargetActions
 *
 */
$("#obj79747").bind("droppedInsideTargetActions", function(event) {
	if (window.obj79747_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79747_droppedInsideTargetActions is still running");
	return;
}
var obj79747_droppedInsideTargetActions_runningActionsCount = 0;
var obj79747_droppedInsideTargetActions_loopCount = 0;
obj79747_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj79729: Event Touch Down
 *
 */
$("#obj79729").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79729_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79729_onTap is still running");
	return;
}
var obj79729_onTap_runningActionsCount = 0;
var obj79729_onTap_loopCount = 0;
obj79729_onTap_actionGroup0();
});










/*
 *
 *   obj79721: Event Touch Down
 *
 */
$("#obj79721").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj79721_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj79721_onTap is still running");
	return;
}
var obj79721_onTap_runningActionsCount = 0;
var obj79721_onTap_loopCount = 0;
obj79721_onTap_actionGroup0();
});










/*
 *
 *   obj87985: Event Touch Down
 *
 */
$("#obj87985").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87985_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87985_onTap is still running");
	return;
}
var obj87985_onTap_runningActionsCount = 0;
var obj87985_onTap_loopCount = 0;
obj87985_onTap_actionGroup0();
});










/*
 *
 *   obj87980: Event Touch Down
 *
 */
$("#obj87980").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87980_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87980_onTap is still running");
	return;
}
var obj87980_onTap_runningActionsCount = 0;
var obj87980_onTap_loopCount = 0;
obj87980_onTap_actionGroup0();
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
	
$("#obj79908").trigger('SCEventShow');
$("#obj79905").trigger('SCEventShow');
$("#obj79902").trigger('SCEventShow');
$("#obj79898").trigger('SCEventShow');
$("#obj79896").trigger('SCEventShow');
$("#obj79894").trigger('SCEventShow');
$("#obj79892").trigger('SCEventShow');
$("#obj79890").trigger('SCEventShow');
$("#obj79888").trigger('SCEventShow');
$("#obj79886").trigger('SCEventShow');
$("#obj79884").trigger('SCEventShow');
$("#obj79882").trigger('SCEventShow');
$("#obj79880").trigger('SCEventShow');
$("#obj79878").trigger('SCEventShow');
$("#obj79876").trigger('SCEventShow');
$("#obj79874").trigger('SCEventShow');
$("#obj79872").trigger('SCEventShow');
$("#obj79870").trigger('SCEventShow');
$("#obj79868").trigger('SCEventShow');
$("#obj79866").trigger('SCEventShow');
$("#obj79865").trigger('SCEventShow');
$("#obj79864").trigger('SCEventShow');
$("#obj79825").trigger('SCEventShow');
$("#obj79786").trigger('SCEventShow');
$("#obj79747").trigger('SCEventShow');
$("#obj79729").trigger('SCEventShow');
$("#obj79721").trigger('SCEventShow');
$("#obj87985").trigger('SCEventShow');
$("#obj87980").trigger('SCEventShow');
$("#obj87990").trigger('SCEventShow');
$("#obj94815").trigger('SCEventShow');
$("#obj79719").trigger('SCEventShow');
	
});