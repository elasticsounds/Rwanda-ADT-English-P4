pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 54015;
pubcoder.page.title = pubcoder.page.title || "195";
pubcoder.page.number = pubcoder.page.number || 195;
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
var obj54341_onTap_activeActionGroupIndex = -1;
var obj54341_onTap_runningActionsCount = 0;
var obj54341_onTap_loopCount = 0;
var obj54338_onTap_activeActionGroupIndex = -1;
var obj54338_onTap_runningActionsCount = 0;
var obj54338_onTap_loopCount = 0;
var obj54334_onTap_activeActionGroupIndex = -1;
var obj54334_onTap_runningActionsCount = 0;
var obj54334_onTap_loopCount = 0;
var obj54150_onDrag_activeActionGroupIndex = -1;
var obj54150_onDrag_runningActionsCount = 0;
var obj54150_onDrag_loopCount = 0;
var obj54150_onTouchDown_activeActionGroupIndex = -1;
var obj54150_onTouchDown_runningActionsCount = 0;
var obj54150_onTouchDown_loopCount = 0;
var obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_loopCount = 0;
var obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54150_droppedInsideTargetActions_3_loopCount = 0;
var obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54150_droppedInsideTargetActions_2_loopCount = 0;
var obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54150_droppedInsideTargetActions_runningActionsCount = 0;
var obj54150_droppedInsideTargetActions_loopCount = 0;
var obj54083_onDrag_activeActionGroupIndex = -1;
var obj54083_onDrag_runningActionsCount = 0;
var obj54083_onDrag_loopCount = 0;
var obj54083_onTouchDown_activeActionGroupIndex = -1;
var obj54083_onTouchDown_runningActionsCount = 0;
var obj54083_onTouchDown_loopCount = 0;
var obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_loopCount = 0;
var obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54083_droppedInsideTargetActions_3_loopCount = 0;
var obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54083_droppedInsideTargetActions_2_loopCount = 0;
var obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54083_droppedInsideTargetActions_runningActionsCount = 0;
var obj54083_droppedInsideTargetActions_loopCount = 0;
var obj54016_onDrag_activeActionGroupIndex = -1;
var obj54016_onDrag_runningActionsCount = 0;
var obj54016_onDrag_loopCount = 0;
var obj54016_onTouchDown_activeActionGroupIndex = -1;
var obj54016_onTouchDown_runningActionsCount = 0;
var obj54016_onTouchDown_loopCount = 0;
var obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_loopCount = 0;
var obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54016_droppedInsideTargetActions_3_loopCount = 0;
var obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54016_droppedInsideTargetActions_2_loopCount = 0;
var obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj54016_droppedInsideTargetActions_runningActionsCount = 0;
var obj54016_droppedInsideTargetActions_loopCount = 0;
var obj68142_onTap_activeActionGroupIndex = -1;
var obj68142_onTap_runningActionsCount = 0;
var obj68142_onTap_loopCount = 0;
var obj68134_onTap_activeActionGroupIndex = -1;
var obj68134_onTap_runningActionsCount = 0;
var obj68134_onTap_loopCount = 0;
var obj86785_onTap_activeActionGroupIndex = -1;
var obj86785_onTap_runningActionsCount = 0;
var obj86785_onTap_loopCount = 0;
var obj89221_onTap_activeActionGroupIndex = -1;
var obj89221_onTap_runningActionsCount = 0;
var obj89221_onTap_loopCount = 0;
var obj89216_onTap_activeActionGroupIndex = -1;
var obj89216_onTap_runningActionsCount = 0;
var obj89216_onTap_loopCount = 0;
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
		
obj54341_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54341_onTap_activeActionGroupIndex = -1;
		$("#obj54341").trigger("obj54341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54341) {
				console.warn("de-queueing event obj54341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54341_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54343();
function goToPage_54343() {
	window.obj54341_onTap_runningActionsCount = obj54341_onTap_runningActionsCount + 1;
	$("#anchor1145")[0].click();
	window.obj54341_onTap_runningActionsCount = window.obj54341_onTap_runningActionsCount - 1;
if (window.obj54341_onTap_runningActionsCount < 0) {
	window.obj54341_onTap_runningActionsCount = 0;
} else if (window.obj54341_onTap_runningActionsCount == 0) {
	obj54341_onTap_actionGroup1();
}
}





















};
obj54341_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54341_onTap_activeActionGroupIndex = -1;
		$("#obj54341").trigger("obj54341_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54341) {
				console.warn("de-queueing event obj54341." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54341").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54341_onTap_activeActionGroupIndex = 1;
	





















};
obj54338_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54338_onTap_activeActionGroupIndex = -1;
		$("#obj54338").trigger("obj54338_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54338) {
				console.warn("de-queueing event obj54338." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54338").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54338_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86790();
function goToPage_86790() {
	window.obj54338_onTap_runningActionsCount = obj54338_onTap_runningActionsCount + 1;
	$("#anchor1146")[0].click();
	window.obj54338_onTap_runningActionsCount = window.obj54338_onTap_runningActionsCount - 1;
if (window.obj54338_onTap_runningActionsCount < 0) {
	window.obj54338_onTap_runningActionsCount = 0;
} else if (window.obj54338_onTap_runningActionsCount == 0) {
	obj54338_onTap_actionGroup1();
}
}





















};
obj54338_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54338_onTap_activeActionGroupIndex = -1;
		$("#obj54338").trigger("obj54338_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54338) {
				console.warn("de-queueing event obj54338." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54338").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54338_onTap_activeActionGroupIndex = 1;
	





















};
obj54334_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54334_onTap_activeActionGroupIndex = -1;
		$("#obj54334").trigger("obj54334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54334) {
				console.warn("de-queueing event obj54334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54334_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_54336();
function goToPage_54336() {
	window.obj54334_onTap_runningActionsCount = obj54334_onTap_runningActionsCount + 1;
	$("#anchor1147")[0].click();
	window.obj54334_onTap_runningActionsCount = window.obj54334_onTap_runningActionsCount - 1;
if (window.obj54334_onTap_runningActionsCount < 0) {
	window.obj54334_onTap_runningActionsCount = 0;
} else if (window.obj54334_onTap_runningActionsCount == 0) {
	obj54334_onTap_actionGroup1();
}
}





















};
obj54334_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54334_onTap_activeActionGroupIndex = -1;
		$("#obj54334").trigger("obj54334_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54334) {
				console.warn("de-queueing event obj54334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54334_onTap_activeActionGroupIndex = 1;
	





















};
obj54150_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54150");
//	action: dragDrop
//	target: obj54150 
dragDrop_54153();
function dragDrop_54153() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54150_onTouchDown_runningActionsCount = obj54150_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54150');
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
	  	containerNode = $('#obj54326');
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
    	window.obj54150_onTouchDown_runningActionsCount = window.obj54150_onTouchDown_runningActionsCount - 1;
if (window.obj54150_onTouchDown_runningActionsCount < 0) {
	window.obj54150_onTouchDown_runningActionsCount = 0;
} else if (window.obj54150_onTouchDown_runningActionsCount == 0) {
	obj54150_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj54304","#obj54310","#obj54316");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54153 = false;
    	var dropped_id_54153;
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
					dropped_54153 = true;
					dropped_id_54153 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54153) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54150").trigger('SCActionDragDrop54153_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54150_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54150_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54150 
move_92809();
function move_92809() {
	window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount = obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54150");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 107;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount = window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54150_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54176();
function runjs_54176() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54316").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54177();
function runjs_54177() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54316").css("border-color", "#C00000"); $("#obj54316").css("border-width", "2px"); $("#obj54316").css("border-style", "solid"); $("#obj54316").css("border-radius", "10px"); $("#obj54316").css("-webkit-border-radius", "10px"); $("#obj54316").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54314 
hide_54178();
function hide_54178() {
	var selector = "#obj54314";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54178(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54150_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54179();
function runjs_54179() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54150").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54180();
function switchText_54180() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj54150_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54150 
move_54181();
function move_54181() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54150");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 107;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj54150_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54182();
function runjs_54182() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54316").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54183();
function runjs_54183() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54316").css("border-color", "#000000"); $("#obj54316").css("border-width", "1px"); $("#obj54316").css("border-style", "solid"); $("#obj54316").css("border-radius", "10px"); $("#obj54316").css("-webkit-border-radius", "10px"); $("#obj54316").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj54314
(function(){
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj54314";
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
					window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54150_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54185();
function runjs_54185() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54150").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54186();
function runjs_54186() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54150").css("border-color", "rgba(0,0,0,0)"); $("#obj54150").css("border-width", "0px"); $("#obj54150").css("border-style", "solid"); $("#obj54150").css("border-radius", "10px"); $("#obj54150").css("-webkit-border-radius", "10px"); $("#obj54150").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj54284 
playAudio_54187();
function playAudio_54187() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj54284")[0];
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
		    window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj54150_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_54188();
function switchText_54188() {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = obj54150_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54150_droppedInsideTargetActions_3_runningActionsCount = window.obj54150_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj54150_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj54150_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54162();
function runjs_54162() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54163();
function runjs_54163() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("border-color", "#C00000"); $("#obj54310").css("border-width", "2px"); $("#obj54310").css("border-style", "solid"); $("#obj54310").css("border-radius", "10px"); $("#obj54310").css("-webkit-border-radius", "10px"); $("#obj54310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54308 
hide_54164();
function hide_54164() {
	var selector = "#obj54308";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54164(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54150_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54165();
function runjs_54165() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54150").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54166();
function switchText_54166() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj54150_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54150 
move_54167();
function move_54167() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54150");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 107;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj54150_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54168();
function runjs_54168() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54169();
function runjs_54169() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("border-color", "#000000"); $("#obj54310").css("border-width", "1px"); $("#obj54310").css("border-style", "solid"); $("#obj54310").css("border-radius", "10px"); $("#obj54310").css("-webkit-border-radius", "10px"); $("#obj54310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj54308
(function(){
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj54308";
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
					window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54150_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54171();
function runjs_54171() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54150").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54172();
function runjs_54172() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54150").css("border-color", "rgba(0,0,0,0)"); $("#obj54150").css("border-width", "0px"); $("#obj54150").css("border-style", "solid"); $("#obj54150").css("border-radius", "10px"); $("#obj54150").css("-webkit-border-radius", "10px"); $("#obj54150").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj54284 
playAudio_54173();
function playAudio_54173() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj54284")[0];
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
		    window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj54150_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_54174();
function switchText_54174() {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = obj54150_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54150_droppedInsideTargetActions_2_runningActionsCount = window.obj54150_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj54150_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj54150_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54155();
function runjs_54155() {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = obj54150_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54304").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54156();
function runjs_54156() {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = obj54150_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54304").css("border-color", "#058E3F"); $("#obj54304").css("border-width", "2px"); $("#obj54304").css("border-style", "solid"); $("#obj54304").css("border-radius", "10px"); $("#obj54304").css("-webkit-border-radius", "10px"); $("#obj54304").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54302 
hide_54157();
function hide_54157() {
	var selector = "#obj54302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54150_droppedInsideTargetActions_runningActionsCount = obj54150_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54157(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54150_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54158();
function runjs_54158() {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = obj54150_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54150").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj54150_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54159();
function switchText_54159() {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = obj54150_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj54150_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54286 
playAudio_54160();
function playAudio_54160() {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = obj54150_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj54286")[0];
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
		    window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54150_droppedInsideTargetActions_runningActionsCount = window.obj54150_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54150_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54150_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54150_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54150_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj54150_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54150").trigger("obj54150_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54150) {
				console.warn("de-queueing event obj54150." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54150").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54150_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj54083_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54083");
//	action: dragDrop
//	target: obj54083 
dragDrop_54086();
function dragDrop_54086() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54083_onTouchDown_runningActionsCount = obj54083_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54083');
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
	  	containerNode = $('#obj54326');
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
    	window.obj54083_onTouchDown_runningActionsCount = window.obj54083_onTouchDown_runningActionsCount - 1;
if (window.obj54083_onTouchDown_runningActionsCount < 0) {
	window.obj54083_onTouchDown_runningActionsCount = 0;
} else if (window.obj54083_onTouchDown_runningActionsCount == 0) {
	obj54083_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj54316","#obj54310","#obj54304");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54086 = false;
    	var dropped_id_54086;
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
					dropped_54086 = true;
					dropped_id_54086 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54086) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54083").trigger('SCActionDragDrop54086_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54083_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54083_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54083 
move_92813();
function move_92813() {
	window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount = obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54083");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount = window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54083_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54109();
function runjs_54109() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54110();
function runjs_54110() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("border-color", "#C00000"); $("#obj54304").css("border-width", "2px"); $("#obj54304").css("border-style", "solid"); $("#obj54304").css("border-radius", "10px"); $("#obj54304").css("-webkit-border-radius", "10px"); $("#obj54304").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54302 
hide_54111();
function hide_54111() {
	var selector = "#obj54302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54111(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54083_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54112();
function runjs_54112() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54083").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54113();
function switchText_54113() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj54083_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54083 
move_54114();
function move_54114() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54083");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj54083_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54115();
function runjs_54115() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54116();
function runjs_54116() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("border-color", "#000000"); $("#obj54304").css("border-width", "1px"); $("#obj54304").css("border-style", "solid"); $("#obj54304").css("border-radius", "10px"); $("#obj54304").css("-webkit-border-radius", "10px"); $("#obj54304").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj54302
(function(){
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj54302";
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
					window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54083_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54118();
function runjs_54118() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54083").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54119();
function runjs_54119() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54083").css("border-color", "rgba(0,0,0,0)"); $("#obj54083").css("border-width", "0px"); $("#obj54083").css("border-style", "solid"); $("#obj54083").css("border-radius", "10px"); $("#obj54083").css("-webkit-border-radius", "10px"); $("#obj54083").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj54284 
playAudio_54120();
function playAudio_54120() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj54284")[0];
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
		    window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj54083_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_54121();
function switchText_54121() {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = obj54083_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54083_droppedInsideTargetActions_3_runningActionsCount = window.obj54083_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj54083_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj54083_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54095();
function runjs_54095() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54096();
function runjs_54096() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("border-color", "#C00000"); $("#obj54310").css("border-width", "2px"); $("#obj54310").css("border-style", "solid"); $("#obj54310").css("border-radius", "10px"); $("#obj54310").css("-webkit-border-radius", "10px"); $("#obj54310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54308 
hide_54097();
function hide_54097() {
	var selector = "#obj54308";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54083_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54098();
function runjs_54098() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54083").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54099();
function switchText_54099() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj54083_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54083 
move_54100();
function move_54100() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54083");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 388;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj54083_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54101();
function runjs_54101() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54102();
function runjs_54102() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54310").css("border-color", "#000000"); $("#obj54310").css("border-width", "1px"); $("#obj54310").css("border-style", "solid"); $("#obj54310").css("border-radius", "10px"); $("#obj54310").css("-webkit-border-radius", "10px"); $("#obj54310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj54308
(function(){
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj54308";
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
					window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54083_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54104();
function runjs_54104() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54083").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54105();
function runjs_54105() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54083").css("border-color", "rgba(0,0,0,0)"); $("#obj54083").css("border-width", "0px"); $("#obj54083").css("border-style", "solid"); $("#obj54083").css("border-radius", "10px"); $("#obj54083").css("-webkit-border-radius", "10px"); $("#obj54083").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj54284 
playAudio_54106();
function playAudio_54106() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj54284")[0];
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
		    window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj54083_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_54107();
function switchText_54107() {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = obj54083_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54083_droppedInsideTargetActions_2_runningActionsCount = window.obj54083_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj54083_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj54083_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54088();
function runjs_54088() {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = obj54083_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54316").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54089();
function runjs_54089() {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = obj54083_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54316").css("border-color", "#058E3F"); $("#obj54316").css("border-width", "2px"); $("#obj54316").css("border-style", "solid"); $("#obj54316").css("border-radius", "10px"); $("#obj54316").css("-webkit-border-radius", "10px"); $("#obj54316").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54314 
hide_54090();
function hide_54090() {
	var selector = "#obj54314";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54083_droppedInsideTargetActions_runningActionsCount = obj54083_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54090(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54083_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54091();
function runjs_54091() {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = obj54083_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54083").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj54083_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54092();
function switchText_54092() {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = obj54083_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj54083_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54286 
playAudio_54093();
function playAudio_54093() {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = obj54083_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj54286")[0];
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
		    window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54083_droppedInsideTargetActions_runningActionsCount = window.obj54083_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54083_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54083_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54083_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54083_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj54083_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54083").trigger("obj54083_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54083) {
				console.warn("de-queueing event obj54083." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54083").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54083_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj54016_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj54016");
//	action: dragDrop
//	target: obj54016 
dragDrop_54019();
function dragDrop_54019() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj54016_onTouchDown_runningActionsCount = obj54016_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj54016');
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
	  	containerNode = $('#obj54326');
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
    	window.obj54016_onTouchDown_runningActionsCount = window.obj54016_onTouchDown_runningActionsCount - 1;
if (window.obj54016_onTouchDown_runningActionsCount < 0) {
	window.obj54016_onTouchDown_runningActionsCount = 0;
} else if (window.obj54016_onTouchDown_runningActionsCount == 0) {
	obj54016_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj54310","#obj54316","#obj54304");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_54019 = false;
    	var dropped_id_54019;
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
					dropped_54019 = true;
					dropped_id_54019 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_54019) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj54016").trigger('SCActionDragDrop54019_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj54016_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54016_onTouchDown_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj54016 
move_92811();
function move_92811() {
	window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount = obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj54016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount = window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj54016_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54042();
function runjs_54042() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54043();
function runjs_54043() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("border-color", "#C00000"); $("#obj54304").css("border-width", "2px"); $("#obj54304").css("border-style", "solid"); $("#obj54304").css("border-radius", "10px"); $("#obj54304").css("-webkit-border-radius", "10px"); $("#obj54304").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54302 
hide_54044();
function hide_54044() {
	var selector = "#obj54302";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54044(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54016_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54045();
function runjs_54045() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54046();
function switchText_54046() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj54016_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54016 
move_54047();
function move_54047() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj54016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj54016_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54048();
function runjs_54048() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54049();
function runjs_54049() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54304").css("border-color", "#000000"); $("#obj54304").css("border-width", "1px"); $("#obj54304").css("border-style", "solid"); $("#obj54304").css("border-radius", "10px"); $("#obj54304").css("-webkit-border-radius", "10px"); $("#obj54304").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj54302
(function(){
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj54302";
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
					window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54016_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54051();
function runjs_54051() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54016").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54052();
function runjs_54052() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj54016").css("border-color", "rgba(0,0,0,0)"); $("#obj54016").css("border-width", "0px"); $("#obj54016").css("border-style", "solid"); $("#obj54016").css("border-radius", "10px"); $("#obj54016").css("-webkit-border-radius", "10px"); $("#obj54016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj54284 
playAudio_54053();
function playAudio_54053() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj54284")[0];
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
		    window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj54016_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_54054();
function switchText_54054() {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = obj54016_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54016_droppedInsideTargetActions_3_runningActionsCount = window.obj54016_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj54016_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj54016_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54028();
function runjs_54028() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54316").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54029();
function runjs_54029() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54316").css("border-color", "#C00000"); $("#obj54316").css("border-width", "2px"); $("#obj54316").css("border-style", "solid"); $("#obj54316").css("border-radius", "10px"); $("#obj54316").css("-webkit-border-radius", "10px"); $("#obj54316").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54314 
hide_54030();
function hide_54030() {
	var selector = "#obj54314";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54030(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54016_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54031();
function runjs_54031() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54032();
function switchText_54032() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj54016_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj54016 
move_54033();
function move_54033() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj54016");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 242;
	var moveY = 657;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj54016_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_54034();
function runjs_54034() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54316").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_54035();
function runjs_54035() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54316").css("border-color", "#000000"); $("#obj54316").css("border-width", "1px"); $("#obj54316").css("border-style", "solid"); $("#obj54316").css("border-radius", "10px"); $("#obj54316").css("-webkit-border-radius", "10px"); $("#obj54316").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj54314
(function(){
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj54314";
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
					window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj54016_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_54037();
function runjs_54037() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54016").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_54038();
function runjs_54038() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj54016").css("border-color", "rgba(0,0,0,0)"); $("#obj54016").css("border-width", "0px"); $("#obj54016").css("border-style", "solid"); $("#obj54016").css("border-radius", "10px"); $("#obj54016").css("-webkit-border-radius", "10px"); $("#obj54016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj54284 
playAudio_54039();
function playAudio_54039() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj54284")[0];
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
		    window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj54016_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_54040();
function switchText_54040() {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = obj54016_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54016_droppedInsideTargetActions_2_runningActionsCount = window.obj54016_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj54016_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj54016_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_54021();
function runjs_54021() {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = obj54016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54310").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_54022();
function runjs_54022() {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = obj54016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54310").css("border-color", "#058E3F"); $("#obj54310").css("border-width", "2px"); $("#obj54310").css("border-style", "solid"); $("#obj54310").css("border-radius", "10px"); $("#obj54310").css("-webkit-border-radius", "10px"); $("#obj54310").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj54308 
hide_54023();
function hide_54023() {
	var selector = "#obj54308";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj54016_droppedInsideTargetActions_runningActionsCount = obj54016_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_54023(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj54016_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_54024();
function runjs_54024() {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = obj54016_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj54016").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj54016_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_54025();
function switchText_54025() {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = obj54016_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj54300_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj54300_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj54300").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj54300_content");
			setTimeout(function () {
				window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj54300 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj54016_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj54286 
playAudio_54026();
function playAudio_54026() {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = obj54016_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj54286")[0];
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
		    window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj54016_droppedInsideTargetActions_runningActionsCount = window.obj54016_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj54016_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj54016_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj54016_droppedInsideTargetActions_runningActionsCount == 0) {
	obj54016_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj54016_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj54016").trigger("obj54016_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 54016) {
				console.warn("de-queueing event obj54016." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj54016").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj54016_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68142_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68142_onTap_activeActionGroupIndex = -1;
		$("#obj68142").trigger("obj68142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68142) {
				console.warn("de-queueing event obj68142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68142_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68142 
hide_68145();
function hide_68145() {
	var selector = "#obj68142";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68142_onTap_runningActionsCount = obj68142_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68142_onTap_runningActionsCount = window.obj68142_onTap_runningActionsCount - 1;
if (window.obj68142_onTap_runningActionsCount < 0) {
	window.obj68142_onTap_runningActionsCount = 0;
} else if (window.obj68142_onTap_runningActionsCount == 0) {
	obj68142_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68145(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68142_onTap_runningActionsCount = window.obj68142_onTap_runningActionsCount - 1;
if (window.obj68142_onTap_runningActionsCount < 0) {
	window.obj68142_onTap_runningActionsCount = 0;
} else if (window.obj68142_onTap_runningActionsCount == 0) {
	obj68142_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68148 
stopMovie_68144();
function stopMovie_68144() {
	window.obj68142_onTap_runningActionsCount = obj68142_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68148")[0];
	myVideo.pause();
	window.obj68142_onTap_runningActionsCount = window.obj68142_onTap_runningActionsCount - 1;
if (window.obj68142_onTap_runningActionsCount < 0) {
	window.obj68142_onTap_runningActionsCount = 0;
} else if (window.obj68142_onTap_runningActionsCount == 0) {
	obj68142_onTap_actionGroup1();
}
}
















};
obj68142_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68142_onTap_activeActionGroupIndex = -1;
		$("#obj68142").trigger("obj68142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68142) {
				console.warn("de-queueing event obj68142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68142_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68134
(function(){
	window.obj68142_onTap_runningActionsCount = obj68142_onTap_runningActionsCount + 1;

	var selector = "#obj68134";
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
					window.obj68142_onTap_runningActionsCount = window.obj68142_onTap_runningActionsCount - 1;
if (window.obj68142_onTap_runningActionsCount < 0) {
	window.obj68142_onTap_runningActionsCount = 0;
} else if (window.obj68142_onTap_runningActionsCount == 0) {
	obj68142_onTap_actionGroup2();
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
				window.obj68142_onTap_runningActionsCount = window.obj68142_onTap_runningActionsCount - 1;
if (window.obj68142_onTap_runningActionsCount < 0) {
	window.obj68142_onTap_runningActionsCount = 0;
} else if (window.obj68142_onTap_runningActionsCount == 0) {
	obj68142_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68142_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68142_onTap_activeActionGroupIndex = -1;
		$("#obj68142").trigger("obj68142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68142) {
				console.warn("de-queueing event obj68142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68142_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68148 
move_68147();
function move_68147() {
	window.obj68142_onTap_runningActionsCount = obj68142_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68148");
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
			window.obj68142_onTap_runningActionsCount = window.obj68142_onTap_runningActionsCount - 1;
if (window.obj68142_onTap_runningActionsCount < 0) {
	window.obj68142_onTap_runningActionsCount = 0;
} else if (window.obj68142_onTap_runningActionsCount == 0) {
	obj68142_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68142_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68142_onTap_activeActionGroupIndex = -1;
		$("#obj68142").trigger("obj68142_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68142) {
				console.warn("de-queueing event obj68142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68142_onTap_activeActionGroupIndex = 3;
	





















};
obj68134_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68134_onTap_activeActionGroupIndex = -1;
		$("#obj68134").trigger("obj68134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68134) {
				console.warn("de-queueing event obj68134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68134_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68134 
hide_68137();
function hide_68137() {
	var selector = "#obj68134";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68134_onTap_runningActionsCount = obj68134_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68134_onTap_runningActionsCount = window.obj68134_onTap_runningActionsCount - 1;
if (window.obj68134_onTap_runningActionsCount < 0) {
	window.obj68134_onTap_runningActionsCount = 0;
} else if (window.obj68134_onTap_runningActionsCount == 0) {
	obj68134_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68137(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68134_onTap_runningActionsCount = window.obj68134_onTap_runningActionsCount - 1;
if (window.obj68134_onTap_runningActionsCount < 0) {
	window.obj68134_onTap_runningActionsCount = 0;
} else if (window.obj68134_onTap_runningActionsCount == 0) {
	obj68134_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68148 
playPauseMovie_68136();
function playPauseMovie_68136() {
	window.obj68134_onTap_runningActionsCount = obj68134_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68148")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68134_onTap_runningActionsCount = window.obj68134_onTap_runningActionsCount - 1;
if (window.obj68134_onTap_runningActionsCount < 0) {
	window.obj68134_onTap_runningActionsCount = 0;
} else if (window.obj68134_onTap_runningActionsCount == 0) {
	obj68134_onTap_actionGroup1();
}
}

















};
obj68134_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68134_onTap_activeActionGroupIndex = -1;
		$("#obj68134").trigger("obj68134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68134) {
				console.warn("de-queueing event obj68134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68134_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68142
(function(){
	window.obj68134_onTap_runningActionsCount = obj68134_onTap_runningActionsCount + 1;

	var selector = "#obj68142";
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
					window.obj68134_onTap_runningActionsCount = window.obj68134_onTap_runningActionsCount - 1;
if (window.obj68134_onTap_runningActionsCount < 0) {
	window.obj68134_onTap_runningActionsCount = 0;
} else if (window.obj68134_onTap_runningActionsCount == 0) {
	obj68134_onTap_actionGroup2();
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
				window.obj68134_onTap_runningActionsCount = window.obj68134_onTap_runningActionsCount - 1;
if (window.obj68134_onTap_runningActionsCount < 0) {
	window.obj68134_onTap_runningActionsCount = 0;
} else if (window.obj68134_onTap_runningActionsCount == 0) {
	obj68134_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68134_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68134_onTap_activeActionGroupIndex = -1;
		$("#obj68134").trigger("obj68134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68134) {
				console.warn("de-queueing event obj68134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68134_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68148 
move_68139();
function move_68139() {
	window.obj68134_onTap_runningActionsCount = obj68134_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68148");
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
			window.obj68134_onTap_runningActionsCount = window.obj68134_onTap_runningActionsCount - 1;
if (window.obj68134_onTap_runningActionsCount < 0) {
	window.obj68134_onTap_runningActionsCount = 0;
} else if (window.obj68134_onTap_runningActionsCount == 0) {
	obj68134_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68134_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68134_onTap_activeActionGroupIndex = -1;
		$("#obj68134").trigger("obj68134_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68134) {
				console.warn("de-queueing event obj68134." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68134").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68134_onTap_activeActionGroupIndex = 3;
	





















};
obj86785_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86785_onTap_activeActionGroupIndex = -1;
		$("#obj86785").trigger("obj86785_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86785) {
				console.warn("de-queueing event obj86785." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86785").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86785_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_86787();
function goToPage_86787() {
	window.obj86785_onTap_runningActionsCount = obj86785_onTap_runningActionsCount + 1;
	$("#anchor1150")[0].click();
	window.obj86785_onTap_runningActionsCount = window.obj86785_onTap_runningActionsCount - 1;
if (window.obj86785_onTap_runningActionsCount < 0) {
	window.obj86785_onTap_runningActionsCount = 0;
} else if (window.obj86785_onTap_runningActionsCount == 0) {
	obj86785_onTap_actionGroup1();
}
}





















};
obj86785_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86785_onTap_activeActionGroupIndex = -1;
		$("#obj86785").trigger("obj86785_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86785) {
				console.warn("de-queueing event obj86785." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86785").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86785_onTap_activeActionGroupIndex = 1;
	





















};
obj89221_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89221_onTap_activeActionGroupIndex = -1;
		$("#obj89221").trigger("obj89221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89221) {
				console.warn("de-queueing event obj89221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89221_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89226 
stopAudio_89223();
function stopAudio_89223() {
	window.obj89221_onTap_runningActionsCount = obj89221_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89226")[0];
	myAudio.pause();
	window.obj89221_onTap_runningActionsCount = window.obj89221_onTap_runningActionsCount - 1;
if (window.obj89221_onTap_runningActionsCount < 0) {
	window.obj89221_onTap_runningActionsCount = 0;
} else if (window.obj89221_onTap_runningActionsCount == 0) {
	obj89221_onTap_actionGroup1();
}
}








};
obj89221_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89221_onTap_activeActionGroupIndex = -1;
		$("#obj89221").trigger("obj89221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89221) {
				console.warn("de-queueing event obj89221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89221_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89221 
hide_89224();
function hide_89224() {
	var selector = "#obj89221";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89221_onTap_runningActionsCount = obj89221_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89221_onTap_runningActionsCount = window.obj89221_onTap_runningActionsCount - 1;
if (window.obj89221_onTap_runningActionsCount < 0) {
	window.obj89221_onTap_runningActionsCount = 0;
} else if (window.obj89221_onTap_runningActionsCount == 0) {
	obj89221_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89224(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89221_onTap_runningActionsCount = window.obj89221_onTap_runningActionsCount - 1;
if (window.obj89221_onTap_runningActionsCount < 0) {
	window.obj89221_onTap_runningActionsCount = 0;
} else if (window.obj89221_onTap_runningActionsCount == 0) {
	obj89221_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89221_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89221_onTap_activeActionGroupIndex = -1;
		$("#obj89221").trigger("obj89221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89221) {
				console.warn("de-queueing event obj89221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89221_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89216
(function(){
	window.obj89221_onTap_runningActionsCount = obj89221_onTap_runningActionsCount + 1;

	var selector = "#obj89216";
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
					window.obj89221_onTap_runningActionsCount = window.obj89221_onTap_runningActionsCount - 1;
if (window.obj89221_onTap_runningActionsCount < 0) {
	window.obj89221_onTap_runningActionsCount = 0;
} else if (window.obj89221_onTap_runningActionsCount == 0) {
	obj89221_onTap_actionGroup3();
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
				window.obj89221_onTap_runningActionsCount = window.obj89221_onTap_runningActionsCount - 1;
if (window.obj89221_onTap_runningActionsCount < 0) {
	window.obj89221_onTap_runningActionsCount = 0;
} else if (window.obj89221_onTap_runningActionsCount == 0) {
	obj89221_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89221_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89221_onTap_activeActionGroupIndex = -1;
		$("#obj89221").trigger("obj89221_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89221) {
				console.warn("de-queueing event obj89221." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89221").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89221_onTap_activeActionGroupIndex = 3;
	





















};
obj89216_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89216_onTap_activeActionGroupIndex = -1;
		$("#obj89216").trigger("obj89216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89216) {
				console.warn("de-queueing event obj89216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89216_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89216 
hide_89218();
function hide_89218() {
	var selector = "#obj89216";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89216_onTap_runningActionsCount = obj89216_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89216_onTap_runningActionsCount = window.obj89216_onTap_runningActionsCount - 1;
if (window.obj89216_onTap_runningActionsCount < 0) {
	window.obj89216_onTap_runningActionsCount = 0;
} else if (window.obj89216_onTap_runningActionsCount == 0) {
	obj89216_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89218(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89216_onTap_runningActionsCount = window.obj89216_onTap_runningActionsCount - 1;
if (window.obj89216_onTap_runningActionsCount < 0) {
	window.obj89216_onTap_runningActionsCount = 0;
} else if (window.obj89216_onTap_runningActionsCount == 0) {
	obj89216_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89216_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89216_onTap_activeActionGroupIndex = -1;
		$("#obj89216").trigger("obj89216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89216) {
				console.warn("de-queueing event obj89216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89216_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89221
(function(){
	window.obj89216_onTap_runningActionsCount = obj89216_onTap_runningActionsCount + 1;

	var selector = "#obj89221";
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
					window.obj89216_onTap_runningActionsCount = window.obj89216_onTap_runningActionsCount - 1;
if (window.obj89216_onTap_runningActionsCount < 0) {
	window.obj89216_onTap_runningActionsCount = 0;
} else if (window.obj89216_onTap_runningActionsCount == 0) {
	obj89216_onTap_actionGroup2();
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
				window.obj89216_onTap_runningActionsCount = window.obj89216_onTap_runningActionsCount - 1;
if (window.obj89216_onTap_runningActionsCount < 0) {
	window.obj89216_onTap_runningActionsCount = 0;
} else if (window.obj89216_onTap_runningActionsCount == 0) {
	obj89216_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89216_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89216_onTap_activeActionGroupIndex = -1;
		$("#obj89216").trigger("obj89216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89216) {
				console.warn("de-queueing event obj89216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89216_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89226 
playAudio_89220();
function playAudio_89220() {
	window.obj89216_onTap_runningActionsCount = obj89216_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89226")[0];
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
		    window.obj89216_onTap_runningActionsCount = window.obj89216_onTap_runningActionsCount - 1;
if (window.obj89216_onTap_runningActionsCount < 0) {
	window.obj89216_onTap_runningActionsCount = 0;
} else if (window.obj89216_onTap_runningActionsCount == 0) {
	obj89216_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89216_onTap_runningActionsCount = window.obj89216_onTap_runningActionsCount - 1;
if (window.obj89216_onTap_runningActionsCount < 0) {
	window.obj89216_onTap_runningActionsCount = 0;
} else if (window.obj89216_onTap_runningActionsCount == 0) {
	obj89216_onTap_actionGroup3();
}
	}
}









};
obj89216_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89216_onTap_activeActionGroupIndex = -1;
		$("#obj89216").trigger("obj89216_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89216) {
				console.warn("de-queueing event obj89216." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89216").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89216_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj54341: Event Touch Down
 *
 */
$("#obj54341").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54341_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54341_onTap is still running");
	return;
}
var obj54341_onTap_runningActionsCount = 0;
var obj54341_onTap_loopCount = 0;
obj54341_onTap_actionGroup0();
});










/*
 *
 *   obj54338: Event Touch Down
 *
 */
$("#obj54338").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54338_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54338_onTap is still running");
	return;
}
var obj54338_onTap_runningActionsCount = 0;
var obj54338_onTap_loopCount = 0;
obj54338_onTap_actionGroup0();
});










/*
 *
 *   obj54334: Event Touch Down
 *
 */
$("#obj54334").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj54334_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54334_onTap is still running");
	return;
}
var obj54334_onTap_runningActionsCount = 0;
var obj54334_onTap_loopCount = 0;
obj54334_onTap_actionGroup0();
});



















































































































































































































/*
 *
 *   obj54150: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54150");
	var winTarget = document.getElementById("obj54150");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54150").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54150_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54150_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54150_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54150_onTouchDown is still running");
	return;
}
var obj54150_onTouchDown_runningActionsCount = 0;
var obj54150_onTouchDown_loopCount = 0;
obj54150_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54150: Event SCActionDragDrop54153_droppedOutsideTargetActions
 *
 */
$("#obj54150").bind("SCActionDragDrop54153_droppedOutsideTargetActions", function(event) {
	if (window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54150_SCActionDragDrop54153_droppedOutsideTargetActions is still running");
	return;
}
var obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_loopCount = 0;
obj54150_SCActionDragDrop54153_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54150: Event droppedInsideTargetActions_3
 *
 */
$("#obj54150").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54150_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54150_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54150_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54150_droppedInsideTargetActions_3_loopCount = 0;
obj54150_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54150: Event droppedInsideTargetActions_2
 *
 */
$("#obj54150").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54150_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54150_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54150_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54150_droppedInsideTargetActions_2_loopCount = 0;
obj54150_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54150: Event droppedInsideTargetActions
 *
 */
$("#obj54150").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54150_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54150_droppedInsideTargetActions is still running");
	return;
}
var obj54150_droppedInsideTargetActions_runningActionsCount = 0;
var obj54150_droppedInsideTargetActions_loopCount = 0;
obj54150_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj54083: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54083");
	var winTarget = document.getElementById("obj54083");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54083").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54083_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54083_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54083_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54083_onTouchDown is still running");
	return;
}
var obj54083_onTouchDown_runningActionsCount = 0;
var obj54083_onTouchDown_loopCount = 0;
obj54083_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54083: Event SCActionDragDrop54086_droppedOutsideTargetActions
 *
 */
$("#obj54083").bind("SCActionDragDrop54086_droppedOutsideTargetActions", function(event) {
	if (window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54083_SCActionDragDrop54086_droppedOutsideTargetActions is still running");
	return;
}
var obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_loopCount = 0;
obj54083_SCActionDragDrop54086_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54083: Event droppedInsideTargetActions_3
 *
 */
$("#obj54083").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54083_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54083_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54083_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54083_droppedInsideTargetActions_3_loopCount = 0;
obj54083_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54083: Event droppedInsideTargetActions_2
 *
 */
$("#obj54083").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54083_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54083_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54083_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54083_droppedInsideTargetActions_2_loopCount = 0;
obj54083_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54083: Event droppedInsideTargetActions
 *
 */
$("#obj54083").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54083_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54083_droppedInsideTargetActions is still running");
	return;
}
var obj54083_droppedInsideTargetActions_runningActionsCount = 0;
var obj54083_droppedInsideTargetActions_loopCount = 0;
obj54083_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj54016: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj54016");
	var winTarget = document.getElementById("obj54016");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj54016").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj54016_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj54016_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj54016_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54016_onTouchDown is still running");
	return;
}
var obj54016_onTouchDown_runningActionsCount = 0;
var obj54016_onTouchDown_loopCount = 0;
obj54016_onTouchDown_actionGroup0();
});



/*
 *
 *   obj54016: Event SCActionDragDrop54019_droppedOutsideTargetActions
 *
 */
$("#obj54016").bind("SCActionDragDrop54019_droppedOutsideTargetActions", function(event) {
	if (window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54016_SCActionDragDrop54019_droppedOutsideTargetActions is still running");
	return;
}
var obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_runningActionsCount = 0;
var obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_loopCount = 0;
obj54016_SCActionDragDrop54019_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj54016: Event droppedInsideTargetActions_3
 *
 */
$("#obj54016").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj54016_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54016_droppedInsideTargetActions_3 is still running");
	return;
}
var obj54016_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj54016_droppedInsideTargetActions_3_loopCount = 0;
obj54016_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj54016: Event droppedInsideTargetActions_2
 *
 */
$("#obj54016").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj54016_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54016_droppedInsideTargetActions_2 is still running");
	return;
}
var obj54016_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj54016_droppedInsideTargetActions_2_loopCount = 0;
obj54016_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj54016: Event droppedInsideTargetActions
 *
 */
$("#obj54016").bind("droppedInsideTargetActions", function(event) {
	if (window.obj54016_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj54016_droppedInsideTargetActions is still running");
	return;
}
var obj54016_droppedInsideTargetActions_runningActionsCount = 0;
var obj54016_droppedInsideTargetActions_loopCount = 0;
obj54016_droppedInsideTargetActions_actionGroup0();
});















/*
 *
 *   obj68142: Event Touch Down
 *
 */
$("#obj68142").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68142_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68142_onTap is still running");
	return;
}
var obj68142_onTap_runningActionsCount = 0;
var obj68142_onTap_loopCount = 0;
obj68142_onTap_actionGroup0();
});










/*
 *
 *   obj68134: Event Touch Down
 *
 */
$("#obj68134").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68134_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68134_onTap is still running");
	return;
}
var obj68134_onTap_runningActionsCount = 0;
var obj68134_onTap_loopCount = 0;
obj68134_onTap_actionGroup0();
});










/*
 *
 *   obj86785: Event Touch Down
 *
 */
$("#obj86785").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86785_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86785_onTap is still running");
	return;
}
var obj86785_onTap_runningActionsCount = 0;
var obj86785_onTap_loopCount = 0;
obj86785_onTap_actionGroup0();
});










/*
 *
 *   obj89221: Event Touch Down
 *
 */
$("#obj89221").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89221_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89221_onTap is still running");
	return;
}
var obj89221_onTap_runningActionsCount = 0;
var obj89221_onTap_loopCount = 0;
obj89221_onTap_actionGroup0();
});










/*
 *
 *   obj89216: Event Touch Down
 *
 */
$("#obj89216").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89216_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89216_onTap is still running");
	return;
}
var obj89216_onTap_runningActionsCount = 0;
var obj89216_onTap_loopCount = 0;
obj89216_onTap_actionGroup0();
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
	
$("#obj54357").trigger('SCEventShow');
$("#obj54341").trigger('SCEventShow');
$("#obj54338").trigger('SCEventShow');
$("#obj54334").trigger('SCEventShow');
$("#obj54332").trigger('SCEventShow');
$("#obj54330").trigger('SCEventShow');
$("#obj54328").trigger('SCEventShow');
$("#obj54326").trigger('SCEventShow');
$("#obj54324").trigger('SCEventShow');
$("#obj54322").trigger('SCEventShow');
$("#obj54320").trigger('SCEventShow');
$("#obj54318").trigger('SCEventShow');
$("#obj54316").trigger('SCEventShow');
$("#obj54314").trigger('SCEventShow');
$("#obj54312").trigger('SCEventShow');
$("#obj54310").trigger('SCEventShow');
$("#obj54308").trigger('SCEventShow');
$("#obj54306").trigger('SCEventShow');
$("#obj54304").trigger('SCEventShow');
$("#obj54302").trigger('SCEventShow');
$("#obj54300").trigger('SCEventShow');
$("#obj54288").trigger('SCEventShow');
$("#obj54286").trigger('SCEventShow');
$("#obj54284").trigger('SCEventShow');
$("#obj54150").trigger('SCEventShow');
$("#obj54083").trigger('SCEventShow');
$("#obj54016").trigger('SCEventShow');
$("#obj54360").trigger('SCEventShow');
$("#obj68142").trigger('SCEventShow');
$("#obj68134").trigger('SCEventShow');
$("#obj86785").trigger('SCEventShow');
$("#obj89221").trigger('SCEventShow');
$("#obj89216").trigger('SCEventShow');
$("#obj89226").trigger('SCEventShow');
$("#obj95019").trigger('SCEventShow');
$("#obj68148").trigger('SCEventShow');
	
});