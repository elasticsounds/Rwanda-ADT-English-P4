pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 43565;
pubcoder.page.title = pubcoder.page.title || "149";
pubcoder.page.number = pubcoder.page.number || 149;
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
var obj43724_onTap_activeActionGroupIndex = -1;
var obj43724_onTap_runningActionsCount = 0;
var obj43724_onTap_loopCount = 0;
var obj43721_onTap_activeActionGroupIndex = -1;
var obj43721_onTap_runningActionsCount = 0;
var obj43721_onTap_loopCount = 0;
var obj43717_onTap_activeActionGroupIndex = -1;
var obj43717_onTap_runningActionsCount = 0;
var obj43717_onTap_loopCount = 0;
var obj43648_onDrag_activeActionGroupIndex = -1;
var obj43648_onDrag_runningActionsCount = 0;
var obj43648_onDrag_loopCount = 0;
var obj43648_onTouchDown_activeActionGroupIndex = -1;
var obj43648_onTouchDown_runningActionsCount = 0;
var obj43648_onTouchDown_loopCount = 0;
var obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_loopCount = 0;
var obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43648_droppedInsideTargetActions_3_loopCount = 0;
var obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43648_droppedInsideTargetActions_2_loopCount = 0;
var obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43648_droppedInsideTargetActions_runningActionsCount = 0;
var obj43648_droppedInsideTargetActions_loopCount = 0;
var obj43605_onDrag_activeActionGroupIndex = -1;
var obj43605_onDrag_runningActionsCount = 0;
var obj43605_onDrag_loopCount = 0;
var obj43605_onTouchDown_activeActionGroupIndex = -1;
var obj43605_onTouchDown_runningActionsCount = 0;
var obj43605_onTouchDown_loopCount = 0;
var obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_loopCount = 0;
var obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43605_droppedInsideTargetActions_3_loopCount = 0;
var obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43605_droppedInsideTargetActions_2_loopCount = 0;
var obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43605_droppedInsideTargetActions_runningActionsCount = 0;
var obj43605_droppedInsideTargetActions_loopCount = 0;
var obj43566_onDrag_activeActionGroupIndex = -1;
var obj43566_onDrag_runningActionsCount = 0;
var obj43566_onDrag_loopCount = 0;
var obj43566_onTouchDown_activeActionGroupIndex = -1;
var obj43566_onTouchDown_runningActionsCount = 0;
var obj43566_onTouchDown_loopCount = 0;
var obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_loopCount = 0;
var obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43566_droppedInsideTargetActions_3_loopCount = 0;
var obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43566_droppedInsideTargetActions_2_loopCount = 0;
var obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj43566_droppedInsideTargetActions_runningActionsCount = 0;
var obj43566_droppedInsideTargetActions_loopCount = 0;
var obj67390_onTap_activeActionGroupIndex = -1;
var obj67390_onTap_runningActionsCount = 0;
var obj67390_onTap_loopCount = 0;
var obj67382_onTap_activeActionGroupIndex = -1;
var obj67382_onTap_runningActionsCount = 0;
var obj67382_onTap_loopCount = 0;
var obj88657_onTap_activeActionGroupIndex = -1;
var obj88657_onTap_runningActionsCount = 0;
var obj88657_onTap_loopCount = 0;
var obj88652_onTap_activeActionGroupIndex = -1;
var obj88652_onTap_runningActionsCount = 0;
var obj88652_onTap_loopCount = 0;
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
		
obj43724_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43724_onTap_activeActionGroupIndex = -1;
		$("#obj43724").trigger("obj43724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43724) {
				console.warn("de-queueing event obj43724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43724_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43726();
function goToPage_43726() {
	window.obj43724_onTap_runningActionsCount = obj43724_onTap_runningActionsCount + 1;
	$("#anchor879")[0].click();
	window.obj43724_onTap_runningActionsCount = window.obj43724_onTap_runningActionsCount - 1;
if (window.obj43724_onTap_runningActionsCount < 0) {
	window.obj43724_onTap_runningActionsCount = 0;
} else if (window.obj43724_onTap_runningActionsCount == 0) {
	obj43724_onTap_actionGroup1();
}
}





















};
obj43724_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43724_onTap_activeActionGroupIndex = -1;
		$("#obj43724").trigger("obj43724_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43724) {
				console.warn("de-queueing event obj43724." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43724").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43724_onTap_activeActionGroupIndex = 1;
	





















};
obj43721_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43721_onTap_activeActionGroupIndex = -1;
		$("#obj43721").trigger("obj43721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43721) {
				console.warn("de-queueing event obj43721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43721_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43723();
function goToPage_43723() {
	window.obj43721_onTap_runningActionsCount = obj43721_onTap_runningActionsCount + 1;
	$("#anchor880")[0].click();
	window.obj43721_onTap_runningActionsCount = window.obj43721_onTap_runningActionsCount - 1;
if (window.obj43721_onTap_runningActionsCount < 0) {
	window.obj43721_onTap_runningActionsCount = 0;
} else if (window.obj43721_onTap_runningActionsCount == 0) {
	obj43721_onTap_actionGroup1();
}
}





















};
obj43721_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43721_onTap_activeActionGroupIndex = -1;
		$("#obj43721").trigger("obj43721_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43721) {
				console.warn("de-queueing event obj43721." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43721").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43721_onTap_activeActionGroupIndex = 1;
	





















};
obj43717_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43717_onTap_activeActionGroupIndex = -1;
		$("#obj43717").trigger("obj43717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43717) {
				console.warn("de-queueing event obj43717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43717_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_43719();
function goToPage_43719() {
	window.obj43717_onTap_runningActionsCount = obj43717_onTap_runningActionsCount + 1;
	$("#anchor881")[0].click();
	window.obj43717_onTap_runningActionsCount = window.obj43717_onTap_runningActionsCount - 1;
if (window.obj43717_onTap_runningActionsCount < 0) {
	window.obj43717_onTap_runningActionsCount = 0;
} else if (window.obj43717_onTap_runningActionsCount == 0) {
	obj43717_onTap_actionGroup1();
}
}





















};
obj43717_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43717_onTap_activeActionGroupIndex = -1;
		$("#obj43717").trigger("obj43717_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43717) {
				console.warn("de-queueing event obj43717." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43717").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43717_onTap_activeActionGroupIndex = 1;
	





















};
obj43648_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43648");
//	action: dragDrop
//	target: obj43648 
dragDrop_43651();
function dragDrop_43651() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43648_onTouchDown_runningActionsCount = obj43648_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43648');
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
	  	containerNode = $('#obj43707');
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
    	window.obj43648_onTouchDown_runningActionsCount = window.obj43648_onTouchDown_runningActionsCount - 1;
if (window.obj43648_onTouchDown_runningActionsCount < 0) {
	window.obj43648_onTouchDown_runningActionsCount = 0;
} else if (window.obj43648_onTouchDown_runningActionsCount == 0) {
	obj43648_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43695","#obj43699","#obj43697");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43651 = false;
    	var dropped_id_43651;
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
					dropped_43651 = true;
					dropped_id_43651 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43651) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43648").trigger('SCActionDragDrop43651_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43648_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43648_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43648 
move_92643();
function move_92643() {
	window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount = obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43648");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount = window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43648_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43674();
function runjs_43674() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43697").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43675();
function runjs_43675() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43697").css("border-color", "#C00000"); $("#obj43697").css("border-width", "2px"); $("#obj43697").css("border-style", "solid"); $("#obj43697").css("border-radius", "10px"); $("#obj43697").css("-webkit-border-radius", "10px"); $("#obj43697").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43691 
hide_43676();
function hide_43676() {
	var selector = "#obj43691";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43676(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43648_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43677();
function runjs_43677() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43648").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43678();
function switchText_43678() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43648_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43648 
move_43679();
function move_43679() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43648");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43648_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43680();
function runjs_43680() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43697").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43681();
function runjs_43681() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43697").css("border-color", "#000000"); $("#obj43697").css("border-width", "1px"); $("#obj43697").css("border-style", "solid"); $("#obj43697").css("border-radius", "10px"); $("#obj43697").css("-webkit-border-radius", "10px"); $("#obj43697").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43691
(function(){
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj43691";
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
					window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43648_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43683();
function runjs_43683() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43648").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43684();
function runjs_43684() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43648").css("border-color", "rgba(0,0,0,0)"); $("#obj43648").css("border-width", "0px"); $("#obj43648").css("border-style", "solid"); $("#obj43648").css("border-radius", "10px"); $("#obj43648").css("-webkit-border-radius", "10px"); $("#obj43648").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43645 
playAudio_43685();
function playAudio_43685() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43645")[0];
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
		    window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43648_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43686();
function switchText_43686() {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = obj43648_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43648_droppedInsideTargetActions_3_runningActionsCount = window.obj43648_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43648_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43648_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43660();
function runjs_43660() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43661();
function runjs_43661() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("border-color", "#C00000"); $("#obj43699").css("border-width", "2px"); $("#obj43699").css("border-style", "solid"); $("#obj43699").css("border-radius", "10px"); $("#obj43699").css("-webkit-border-radius", "10px"); $("#obj43699").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43693 
hide_43662();
function hide_43662() {
	var selector = "#obj43693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43662(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43648_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43663();
function runjs_43663() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43648").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43664();
function switchText_43664() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43648_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43648 
move_43665();
function move_43665() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43648");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 94;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43648_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43666();
function runjs_43666() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43667();
function runjs_43667() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("border-color", "#000000"); $("#obj43699").css("border-width", "1px"); $("#obj43699").css("border-style", "solid"); $("#obj43699").css("border-radius", "10px"); $("#obj43699").css("-webkit-border-radius", "10px"); $("#obj43699").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43693
(function(){
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj43693";
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
					window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43648_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43669();
function runjs_43669() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43648").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43670();
function runjs_43670() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43648").css("border-color", "rgba(0,0,0,0)"); $("#obj43648").css("border-width", "0px"); $("#obj43648").css("border-style", "solid"); $("#obj43648").css("border-radius", "10px"); $("#obj43648").css("-webkit-border-radius", "10px"); $("#obj43648").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43645 
playAudio_43671();
function playAudio_43671() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43645")[0];
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
		    window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43648_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43672();
function switchText_43672() {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = obj43648_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43648_droppedInsideTargetActions_2_runningActionsCount = window.obj43648_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43648_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43648_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43653();
function runjs_43653() {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43695").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43657();
function switchText_43657() {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43648_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43654();
function runjs_43654() {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43695").css("border-color", "#058E3F"); $("#obj43695").css("border-width", "2px"); $("#obj43695").css("border-style", "solid"); $("#obj43695").css("border-radius", "10px"); $("#obj43695").css("-webkit-border-radius", "10px"); $("#obj43695").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43689 
hide_43655();
function hide_43655() {
	var selector = "#obj43689";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43655(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43648_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43656();
function runjs_43656() {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43648").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43648_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43644 
playAudio_43658();
function playAudio_43658() {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43644")[0];
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
		    window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43648_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90545();
function switchText_90545() {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = obj43648_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43648_droppedInsideTargetActions_runningActionsCount = window.obj43648_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43648_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43648_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43648_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43648_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43648_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43648").trigger("obj43648_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43648) {
				console.warn("de-queueing event obj43648." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43648").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43648_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43605_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43605");
//	action: dragDrop
//	target: obj43605 
dragDrop_43608();
function dragDrop_43608() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43605_onTouchDown_runningActionsCount = obj43605_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43605');
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
	  	containerNode = $('#obj43707');
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
    	window.obj43605_onTouchDown_runningActionsCount = window.obj43605_onTouchDown_runningActionsCount - 1;
if (window.obj43605_onTouchDown_runningActionsCount < 0) {
	window.obj43605_onTouchDown_runningActionsCount = 0;
} else if (window.obj43605_onTouchDown_runningActionsCount == 0) {
	obj43605_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43697","#obj43699","#obj43695");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43608 = false;
    	var dropped_id_43608;
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
					dropped_43608 = true;
					dropped_id_43608 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43608) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43605").trigger('SCActionDragDrop43608_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43605_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43605_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43605 
move_92647();
function move_92647() {
	window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount = obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43605");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount = window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43605_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43631();
function runjs_43631() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43632();
function runjs_43632() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("border-color", "#C00000"); $("#obj43695").css("border-width", "2px"); $("#obj43695").css("border-style", "solid"); $("#obj43695").css("border-radius", "10px"); $("#obj43695").css("-webkit-border-radius", "10px"); $("#obj43695").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43689 
hide_43633();
function hide_43633() {
	var selector = "#obj43689";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43633(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43605_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43634();
function runjs_43634() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43605").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43635();
function switchText_43635() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43605_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43605 
move_43636();
function move_43636() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43605");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43605_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43637();
function runjs_43637() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43638();
function runjs_43638() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("border-color", "#000000"); $("#obj43695").css("border-width", "1px"); $("#obj43695").css("border-style", "solid"); $("#obj43695").css("border-radius", "10px"); $("#obj43695").css("-webkit-border-radius", "10px"); $("#obj43695").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43689
(function(){
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj43689";
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
					window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43605_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43640();
function runjs_43640() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43605").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43641();
function runjs_43641() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43605").css("border-color", "rgba(0,0,0,0)"); $("#obj43605").css("border-width", "0px"); $("#obj43605").css("border-style", "solid"); $("#obj43605").css("border-radius", "10px"); $("#obj43605").css("-webkit-border-radius", "10px"); $("#obj43605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43645 
playAudio_43642();
function playAudio_43642() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43645")[0];
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
		    window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43605_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43643();
function switchText_43643() {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = obj43605_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43605_droppedInsideTargetActions_3_runningActionsCount = window.obj43605_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43605_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43605_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43617();
function runjs_43617() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43618();
function runjs_43618() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("border-color", "#C00000"); $("#obj43699").css("border-width", "2px"); $("#obj43699").css("border-style", "solid"); $("#obj43699").css("border-radius", "10px"); $("#obj43699").css("-webkit-border-radius", "10px"); $("#obj43699").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43693 
hide_43619();
function hide_43619() {
	var selector = "#obj43693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43619(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43605_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43620();
function runjs_43620() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43605").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43621();
function switchText_43621() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43605_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43605 
move_43622();
function move_43622() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43605");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 395;
	var moveY = 563;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43605_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43623();
function runjs_43623() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43624();
function runjs_43624() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43699").css("border-color", "#000000"); $("#obj43699").css("border-width", "1px"); $("#obj43699").css("border-style", "solid"); $("#obj43699").css("border-radius", "10px"); $("#obj43699").css("-webkit-border-radius", "10px"); $("#obj43699").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43693
(function(){
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj43693";
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
					window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43605_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43626();
function runjs_43626() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43605").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43627();
function runjs_43627() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43605").css("border-color", "rgba(0,0,0,0)"); $("#obj43605").css("border-width", "0px"); $("#obj43605").css("border-style", "solid"); $("#obj43605").css("border-radius", "10px"); $("#obj43605").css("-webkit-border-radius", "10px"); $("#obj43605").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43645 
playAudio_43628();
function playAudio_43628() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43645")[0];
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
		    window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43605_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43629();
function switchText_43629() {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = obj43605_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43605_droppedInsideTargetActions_2_runningActionsCount = window.obj43605_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43605_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43605_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43610();
function runjs_43610() {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43697").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43614();
function switchText_43614() {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43605_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43611();
function runjs_43611() {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43697").css("border-color", "#058E3F"); $("#obj43697").css("border-width", "2px"); $("#obj43697").css("border-style", "solid"); $("#obj43697").css("border-radius", "10px"); $("#obj43697").css("-webkit-border-radius", "10px"); $("#obj43697").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43691 
hide_43612();
function hide_43612() {
	var selector = "#obj43691";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43612(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43605_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43613();
function runjs_43613() {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43605").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43605_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43644 
playAudio_43615();
function playAudio_43615() {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43644")[0];
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
		    window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43605_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90547();
function switchText_90547() {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = obj43605_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43605_droppedInsideTargetActions_runningActionsCount = window.obj43605_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43605_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43605_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43605_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43605_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43605_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43605").trigger("obj43605_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43605) {
				console.warn("de-queueing event obj43605." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43605").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43605_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj43566_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj43566");
//	action: dragDrop
//	target: obj43566 
dragDrop_43569();
function dragDrop_43569() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj43566_onTouchDown_runningActionsCount = obj43566_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj43566');
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
	  	containerNode = $('#obj43707');
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
    	window.obj43566_onTouchDown_runningActionsCount = window.obj43566_onTouchDown_runningActionsCount - 1;
if (window.obj43566_onTouchDown_runningActionsCount < 0) {
	window.obj43566_onTouchDown_runningActionsCount = 0;
} else if (window.obj43566_onTouchDown_runningActionsCount == 0) {
	obj43566_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj43699","#obj43697","#obj43695");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_43569 = false;
    	var dropped_id_43569;
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
					dropped_43569 = true;
					dropped_id_43569 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_43569) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj43566").trigger('SCActionDragDrop43569_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj43566_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43566_onTouchDown_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj43566 
move_92645();
function move_92645() {
	window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount = obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj43566");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount = window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj43566_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43592();
function runjs_43592() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43593();
function runjs_43593() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("border-color", "#C00000"); $("#obj43695").css("border-width", "2px"); $("#obj43695").css("border-style", "solid"); $("#obj43695").css("border-radius", "10px"); $("#obj43695").css("-webkit-border-radius", "10px"); $("#obj43695").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43689 
hide_43594();
function hide_43594() {
	var selector = "#obj43689";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43594(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43566_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43595();
function runjs_43595() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43566").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43596();
function switchText_43596() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj43566_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43566 
move_43597();
function move_43597() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj43566");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj43566_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43598();
function runjs_43598() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43599();
function runjs_43599() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43695").css("border-color", "#000000"); $("#obj43695").css("border-width", "1px"); $("#obj43695").css("border-style", "solid"); $("#obj43695").css("border-radius", "10px"); $("#obj43695").css("-webkit-border-radius", "10px"); $("#obj43695").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43689
(function(){
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj43689";
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
					window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43566_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43601();
function runjs_43601() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43566").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43602();
function runjs_43602() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj43566").css("border-color", "rgba(0,0,0,0)"); $("#obj43566").css("border-width", "0px"); $("#obj43566").css("border-style", "solid"); $("#obj43566").css("border-radius", "10px"); $("#obj43566").css("-webkit-border-radius", "10px"); $("#obj43566").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43645 
playAudio_43603();
function playAudio_43603() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj43645")[0];
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
		    window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj43566_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43604();
function switchText_43604() {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = obj43566_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43566_droppedInsideTargetActions_3_runningActionsCount = window.obj43566_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj43566_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj43566_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43578();
function runjs_43578() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43697").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_43579();
function runjs_43579() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43697").css("border-color", "#C00000"); $("#obj43697").css("border-width", "2px"); $("#obj43697").css("border-style", "solid"); $("#obj43697").css("border-radius", "10px"); $("#obj43697").css("-webkit-border-radius", "10px"); $("#obj43697").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj43691 
hide_43580();
function hide_43580() {
	var selector = "#obj43691";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43580(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43566_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_43581();
function runjs_43581() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43566").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_43582();
function switchText_43582() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj43566_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj43566 
move_43583();
function move_43583() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj43566");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 240;
	var moveY = 635;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj43566_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_43584();
function runjs_43584() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43697").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_43585();
function runjs_43585() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43697").css("border-color", "#000000"); $("#obj43697").css("border-width", "1px"); $("#obj43697").css("border-style", "solid"); $("#obj43697").css("border-radius", "10px"); $("#obj43697").css("-webkit-border-radius", "10px"); $("#obj43697").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj43691
(function(){
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj43691";
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
					window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj43566_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_43587();
function runjs_43587() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43566").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_43588();
function runjs_43588() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj43566").css("border-color", "rgba(0,0,0,0)"); $("#obj43566").css("border-width", "0px"); $("#obj43566").css("border-style", "solid"); $("#obj43566").css("border-radius", "10px"); $("#obj43566").css("-webkit-border-radius", "10px"); $("#obj43566").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj43645 
playAudio_43589();
function playAudio_43589() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj43645")[0];
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
		    window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj43566_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_43590();
function switchText_43590() {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = obj43566_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43566_droppedInsideTargetActions_2_runningActionsCount = window.obj43566_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj43566_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj43566_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_43571();
function runjs_43571() {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43699").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_43575();
function switchText_43575() {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj43566_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_43572();
function runjs_43572() {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43699").css("border-color", "#058E3F"); $("#obj43699").css("border-width", "2px"); $("#obj43699").css("border-style", "solid"); $("#obj43699").css("border-radius", "10px"); $("#obj43699").css("-webkit-border-radius", "10px"); $("#obj43699").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj43693 
hide_43573();
function hide_43573() {
	var selector = "#obj43693";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_43573(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj43566_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_43574();
function runjs_43574() {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj43566").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj43566_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj43644 
playAudio_43576();
function playAudio_43576() {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj43644")[0];
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
		    window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj43566_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90546();
function switchText_90546() {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = obj43566_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj43646_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj43646_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj43646").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj43646_content");
			setTimeout(function () {
				window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj43646 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj43566_droppedInsideTargetActions_runningActionsCount = window.obj43566_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj43566_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj43566_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj43566_droppedInsideTargetActions_runningActionsCount == 0) {
	obj43566_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj43566_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj43566").trigger("obj43566_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 43566) {
				console.warn("de-queueing event obj43566." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj43566").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj43566_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj67390_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67390_onTap_activeActionGroupIndex = -1;
		$("#obj67390").trigger("obj67390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67390) {
				console.warn("de-queueing event obj67390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67390_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67390 
hide_67393();
function hide_67393() {
	var selector = "#obj67390";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67390_onTap_runningActionsCount = obj67390_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67390_onTap_runningActionsCount = window.obj67390_onTap_runningActionsCount - 1;
if (window.obj67390_onTap_runningActionsCount < 0) {
	window.obj67390_onTap_runningActionsCount = 0;
} else if (window.obj67390_onTap_runningActionsCount == 0) {
	obj67390_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67393(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67390_onTap_runningActionsCount = window.obj67390_onTap_runningActionsCount - 1;
if (window.obj67390_onTap_runningActionsCount < 0) {
	window.obj67390_onTap_runningActionsCount = 0;
} else if (window.obj67390_onTap_runningActionsCount == 0) {
	obj67390_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67396 
stopMovie_67392();
function stopMovie_67392() {
	window.obj67390_onTap_runningActionsCount = obj67390_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67396")[0];
	myVideo.pause();
	window.obj67390_onTap_runningActionsCount = window.obj67390_onTap_runningActionsCount - 1;
if (window.obj67390_onTap_runningActionsCount < 0) {
	window.obj67390_onTap_runningActionsCount = 0;
} else if (window.obj67390_onTap_runningActionsCount == 0) {
	obj67390_onTap_actionGroup1();
}
}
















};
obj67390_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67390_onTap_activeActionGroupIndex = -1;
		$("#obj67390").trigger("obj67390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67390) {
				console.warn("de-queueing event obj67390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67390_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67382
(function(){
	window.obj67390_onTap_runningActionsCount = obj67390_onTap_runningActionsCount + 1;

	var selector = "#obj67382";
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
					window.obj67390_onTap_runningActionsCount = window.obj67390_onTap_runningActionsCount - 1;
if (window.obj67390_onTap_runningActionsCount < 0) {
	window.obj67390_onTap_runningActionsCount = 0;
} else if (window.obj67390_onTap_runningActionsCount == 0) {
	obj67390_onTap_actionGroup2();
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
				window.obj67390_onTap_runningActionsCount = window.obj67390_onTap_runningActionsCount - 1;
if (window.obj67390_onTap_runningActionsCount < 0) {
	window.obj67390_onTap_runningActionsCount = 0;
} else if (window.obj67390_onTap_runningActionsCount == 0) {
	obj67390_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67390_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67390_onTap_activeActionGroupIndex = -1;
		$("#obj67390").trigger("obj67390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67390) {
				console.warn("de-queueing event obj67390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67390_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67396 
move_67395();
function move_67395() {
	window.obj67390_onTap_runningActionsCount = obj67390_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67396");
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
			window.obj67390_onTap_runningActionsCount = window.obj67390_onTap_runningActionsCount - 1;
if (window.obj67390_onTap_runningActionsCount < 0) {
	window.obj67390_onTap_runningActionsCount = 0;
} else if (window.obj67390_onTap_runningActionsCount == 0) {
	obj67390_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67390_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67390_onTap_activeActionGroupIndex = -1;
		$("#obj67390").trigger("obj67390_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67390) {
				console.warn("de-queueing event obj67390." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67390").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67390_onTap_activeActionGroupIndex = 3;
	





















};
obj67382_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67382_onTap_activeActionGroupIndex = -1;
		$("#obj67382").trigger("obj67382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67382) {
				console.warn("de-queueing event obj67382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67382_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67382 
hide_67385();
function hide_67385() {
	var selector = "#obj67382";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67382_onTap_runningActionsCount = obj67382_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67382_onTap_runningActionsCount = window.obj67382_onTap_runningActionsCount - 1;
if (window.obj67382_onTap_runningActionsCount < 0) {
	window.obj67382_onTap_runningActionsCount = 0;
} else if (window.obj67382_onTap_runningActionsCount == 0) {
	obj67382_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67385(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67382_onTap_runningActionsCount = window.obj67382_onTap_runningActionsCount - 1;
if (window.obj67382_onTap_runningActionsCount < 0) {
	window.obj67382_onTap_runningActionsCount = 0;
} else if (window.obj67382_onTap_runningActionsCount == 0) {
	obj67382_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67396 
playPauseMovie_67384();
function playPauseMovie_67384() {
	window.obj67382_onTap_runningActionsCount = obj67382_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67396")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67382_onTap_runningActionsCount = window.obj67382_onTap_runningActionsCount - 1;
if (window.obj67382_onTap_runningActionsCount < 0) {
	window.obj67382_onTap_runningActionsCount = 0;
} else if (window.obj67382_onTap_runningActionsCount == 0) {
	obj67382_onTap_actionGroup1();
}
}

















};
obj67382_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67382_onTap_activeActionGroupIndex = -1;
		$("#obj67382").trigger("obj67382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67382) {
				console.warn("de-queueing event obj67382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67382_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67390
(function(){
	window.obj67382_onTap_runningActionsCount = obj67382_onTap_runningActionsCount + 1;

	var selector = "#obj67390";
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
					window.obj67382_onTap_runningActionsCount = window.obj67382_onTap_runningActionsCount - 1;
if (window.obj67382_onTap_runningActionsCount < 0) {
	window.obj67382_onTap_runningActionsCount = 0;
} else if (window.obj67382_onTap_runningActionsCount == 0) {
	obj67382_onTap_actionGroup2();
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
				window.obj67382_onTap_runningActionsCount = window.obj67382_onTap_runningActionsCount - 1;
if (window.obj67382_onTap_runningActionsCount < 0) {
	window.obj67382_onTap_runningActionsCount = 0;
} else if (window.obj67382_onTap_runningActionsCount == 0) {
	obj67382_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67382_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67382_onTap_activeActionGroupIndex = -1;
		$("#obj67382").trigger("obj67382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67382) {
				console.warn("de-queueing event obj67382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67382_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67396 
move_67387();
function move_67387() {
	window.obj67382_onTap_runningActionsCount = obj67382_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67396");
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
			window.obj67382_onTap_runningActionsCount = window.obj67382_onTap_runningActionsCount - 1;
if (window.obj67382_onTap_runningActionsCount < 0) {
	window.obj67382_onTap_runningActionsCount = 0;
} else if (window.obj67382_onTap_runningActionsCount == 0) {
	obj67382_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67382_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67382_onTap_activeActionGroupIndex = -1;
		$("#obj67382").trigger("obj67382_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67382) {
				console.warn("de-queueing event obj67382." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67382").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67382_onTap_activeActionGroupIndex = 3;
	





















};
obj88657_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88657_onTap_activeActionGroupIndex = -1;
		$("#obj88657").trigger("obj88657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88657) {
				console.warn("de-queueing event obj88657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88657_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88662 
stopAudio_88659();
function stopAudio_88659() {
	window.obj88657_onTap_runningActionsCount = obj88657_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88662")[0];
	myAudio.pause();
	window.obj88657_onTap_runningActionsCount = window.obj88657_onTap_runningActionsCount - 1;
if (window.obj88657_onTap_runningActionsCount < 0) {
	window.obj88657_onTap_runningActionsCount = 0;
} else if (window.obj88657_onTap_runningActionsCount == 0) {
	obj88657_onTap_actionGroup1();
}
}








};
obj88657_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88657_onTap_activeActionGroupIndex = -1;
		$("#obj88657").trigger("obj88657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88657) {
				console.warn("de-queueing event obj88657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88657_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88657 
hide_88660();
function hide_88660() {
	var selector = "#obj88657";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88657_onTap_runningActionsCount = obj88657_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88657_onTap_runningActionsCount = window.obj88657_onTap_runningActionsCount - 1;
if (window.obj88657_onTap_runningActionsCount < 0) {
	window.obj88657_onTap_runningActionsCount = 0;
} else if (window.obj88657_onTap_runningActionsCount == 0) {
	obj88657_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88660(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88657_onTap_runningActionsCount = window.obj88657_onTap_runningActionsCount - 1;
if (window.obj88657_onTap_runningActionsCount < 0) {
	window.obj88657_onTap_runningActionsCount = 0;
} else if (window.obj88657_onTap_runningActionsCount == 0) {
	obj88657_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88657_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88657_onTap_activeActionGroupIndex = -1;
		$("#obj88657").trigger("obj88657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88657) {
				console.warn("de-queueing event obj88657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88657_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88652
(function(){
	window.obj88657_onTap_runningActionsCount = obj88657_onTap_runningActionsCount + 1;

	var selector = "#obj88652";
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
					window.obj88657_onTap_runningActionsCount = window.obj88657_onTap_runningActionsCount - 1;
if (window.obj88657_onTap_runningActionsCount < 0) {
	window.obj88657_onTap_runningActionsCount = 0;
} else if (window.obj88657_onTap_runningActionsCount == 0) {
	obj88657_onTap_actionGroup3();
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
				window.obj88657_onTap_runningActionsCount = window.obj88657_onTap_runningActionsCount - 1;
if (window.obj88657_onTap_runningActionsCount < 0) {
	window.obj88657_onTap_runningActionsCount = 0;
} else if (window.obj88657_onTap_runningActionsCount == 0) {
	obj88657_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88657_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88657_onTap_activeActionGroupIndex = -1;
		$("#obj88657").trigger("obj88657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88657) {
				console.warn("de-queueing event obj88657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88657_onTap_activeActionGroupIndex = 3;
	





















};
obj88652_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88652_onTap_activeActionGroupIndex = -1;
		$("#obj88652").trigger("obj88652_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88652) {
				console.warn("de-queueing event obj88652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88652_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88652 
hide_88654();
function hide_88654() {
	var selector = "#obj88652";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88652_onTap_runningActionsCount = obj88652_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88652_onTap_runningActionsCount = window.obj88652_onTap_runningActionsCount - 1;
if (window.obj88652_onTap_runningActionsCount < 0) {
	window.obj88652_onTap_runningActionsCount = 0;
} else if (window.obj88652_onTap_runningActionsCount == 0) {
	obj88652_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88654(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88652_onTap_runningActionsCount = window.obj88652_onTap_runningActionsCount - 1;
if (window.obj88652_onTap_runningActionsCount < 0) {
	window.obj88652_onTap_runningActionsCount = 0;
} else if (window.obj88652_onTap_runningActionsCount == 0) {
	obj88652_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88652_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88652_onTap_activeActionGroupIndex = -1;
		$("#obj88652").trigger("obj88652_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88652) {
				console.warn("de-queueing event obj88652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88652_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88657
(function(){
	window.obj88652_onTap_runningActionsCount = obj88652_onTap_runningActionsCount + 1;

	var selector = "#obj88657";
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
					window.obj88652_onTap_runningActionsCount = window.obj88652_onTap_runningActionsCount - 1;
if (window.obj88652_onTap_runningActionsCount < 0) {
	window.obj88652_onTap_runningActionsCount = 0;
} else if (window.obj88652_onTap_runningActionsCount == 0) {
	obj88652_onTap_actionGroup2();
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
				window.obj88652_onTap_runningActionsCount = window.obj88652_onTap_runningActionsCount - 1;
if (window.obj88652_onTap_runningActionsCount < 0) {
	window.obj88652_onTap_runningActionsCount = 0;
} else if (window.obj88652_onTap_runningActionsCount == 0) {
	obj88652_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88652_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88652_onTap_activeActionGroupIndex = -1;
		$("#obj88652").trigger("obj88652_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88652) {
				console.warn("de-queueing event obj88652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88652_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88662 
playAudio_88656();
function playAudio_88656() {
	window.obj88652_onTap_runningActionsCount = obj88652_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88662")[0];
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
		    window.obj88652_onTap_runningActionsCount = window.obj88652_onTap_runningActionsCount - 1;
if (window.obj88652_onTap_runningActionsCount < 0) {
	window.obj88652_onTap_runningActionsCount = 0;
} else if (window.obj88652_onTap_runningActionsCount == 0) {
	obj88652_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88652_onTap_runningActionsCount = window.obj88652_onTap_runningActionsCount - 1;
if (window.obj88652_onTap_runningActionsCount < 0) {
	window.obj88652_onTap_runningActionsCount = 0;
} else if (window.obj88652_onTap_runningActionsCount == 0) {
	obj88652_onTap_actionGroup3();
}
	}
}









};
obj88652_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88652_onTap_activeActionGroupIndex = -1;
		$("#obj88652").trigger("obj88652_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88652) {
				console.warn("de-queueing event obj88652." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88652").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88652_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj43724: Event Touch Down
 *
 */
$("#obj43724").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43724_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43724_onTap is still running");
	return;
}
var obj43724_onTap_runningActionsCount = 0;
var obj43724_onTap_loopCount = 0;
obj43724_onTap_actionGroup0();
});










/*
 *
 *   obj43721: Event Touch Down
 *
 */
$("#obj43721").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43721_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43721_onTap is still running");
	return;
}
var obj43721_onTap_runningActionsCount = 0;
var obj43721_onTap_loopCount = 0;
obj43721_onTap_actionGroup0();
});










/*
 *
 *   obj43717: Event Touch Down
 *
 */
$("#obj43717").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj43717_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43717_onTap is still running");
	return;
}
var obj43717_onTap_runningActionsCount = 0;
var obj43717_onTap_loopCount = 0;
obj43717_onTap_actionGroup0();
});

































































































































































/*
 *
 *   obj43648: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43648");
	var winTarget = document.getElementById("obj43648");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43648").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43648_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43648_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43648_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43648_onTouchDown is still running");
	return;
}
var obj43648_onTouchDown_runningActionsCount = 0;
var obj43648_onTouchDown_loopCount = 0;
obj43648_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43648: Event SCActionDragDrop43651_droppedOutsideTargetActions
 *
 */
$("#obj43648").bind("SCActionDragDrop43651_droppedOutsideTargetActions", function(event) {
	if (window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43648_SCActionDragDrop43651_droppedOutsideTargetActions is still running");
	return;
}
var obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_loopCount = 0;
obj43648_SCActionDragDrop43651_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43648: Event droppedInsideTargetActions_3
 *
 */
$("#obj43648").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43648_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43648_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43648_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43648_droppedInsideTargetActions_3_loopCount = 0;
obj43648_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43648: Event droppedInsideTargetActions_2
 *
 */
$("#obj43648").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43648_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43648_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43648_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43648_droppedInsideTargetActions_2_loopCount = 0;
obj43648_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43648: Event droppedInsideTargetActions
 *
 */
$("#obj43648").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43648_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43648_droppedInsideTargetActions is still running");
	return;
}
var obj43648_droppedInsideTargetActions_runningActionsCount = 0;
var obj43648_droppedInsideTargetActions_loopCount = 0;
obj43648_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj43605: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43605");
	var winTarget = document.getElementById("obj43605");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43605").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43605_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43605_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43605_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43605_onTouchDown is still running");
	return;
}
var obj43605_onTouchDown_runningActionsCount = 0;
var obj43605_onTouchDown_loopCount = 0;
obj43605_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43605: Event SCActionDragDrop43608_droppedOutsideTargetActions
 *
 */
$("#obj43605").bind("SCActionDragDrop43608_droppedOutsideTargetActions", function(event) {
	if (window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43605_SCActionDragDrop43608_droppedOutsideTargetActions is still running");
	return;
}
var obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_loopCount = 0;
obj43605_SCActionDragDrop43608_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43605: Event droppedInsideTargetActions_3
 *
 */
$("#obj43605").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43605_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43605_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43605_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43605_droppedInsideTargetActions_3_loopCount = 0;
obj43605_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43605: Event droppedInsideTargetActions_2
 *
 */
$("#obj43605").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43605_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43605_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43605_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43605_droppedInsideTargetActions_2_loopCount = 0;
obj43605_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43605: Event droppedInsideTargetActions
 *
 */
$("#obj43605").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43605_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43605_droppedInsideTargetActions is still running");
	return;
}
var obj43605_droppedInsideTargetActions_runningActionsCount = 0;
var obj43605_droppedInsideTargetActions_loopCount = 0;
obj43605_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj43566: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj43566");
	var winTarget = document.getElementById("obj43566");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj43566").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj43566_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj43566_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj43566_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43566_onTouchDown is still running");
	return;
}
var obj43566_onTouchDown_runningActionsCount = 0;
var obj43566_onTouchDown_loopCount = 0;
obj43566_onTouchDown_actionGroup0();
});



/*
 *
 *   obj43566: Event SCActionDragDrop43569_droppedOutsideTargetActions
 *
 */
$("#obj43566").bind("SCActionDragDrop43569_droppedOutsideTargetActions", function(event) {
	if (window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43566_SCActionDragDrop43569_droppedOutsideTargetActions is still running");
	return;
}
var obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_runningActionsCount = 0;
var obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_loopCount = 0;
obj43566_SCActionDragDrop43569_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj43566: Event droppedInsideTargetActions_3
 *
 */
$("#obj43566").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj43566_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43566_droppedInsideTargetActions_3 is still running");
	return;
}
var obj43566_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj43566_droppedInsideTargetActions_3_loopCount = 0;
obj43566_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj43566: Event droppedInsideTargetActions_2
 *
 */
$("#obj43566").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj43566_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43566_droppedInsideTargetActions_2 is still running");
	return;
}
var obj43566_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj43566_droppedInsideTargetActions_2_loopCount = 0;
obj43566_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj43566: Event droppedInsideTargetActions
 *
 */
$("#obj43566").bind("droppedInsideTargetActions", function(event) {
	if (window.obj43566_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj43566_droppedInsideTargetActions is still running");
	return;
}
var obj43566_droppedInsideTargetActions_runningActionsCount = 0;
var obj43566_droppedInsideTargetActions_loopCount = 0;
obj43566_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67390: Event Touch Down
 *
 */
$("#obj67390").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67390_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67390_onTap is still running");
	return;
}
var obj67390_onTap_runningActionsCount = 0;
var obj67390_onTap_loopCount = 0;
obj67390_onTap_actionGroup0();
});










/*
 *
 *   obj67382: Event Touch Down
 *
 */
$("#obj67382").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67382_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67382_onTap is still running");
	return;
}
var obj67382_onTap_runningActionsCount = 0;
var obj67382_onTap_loopCount = 0;
obj67382_onTap_actionGroup0();
});










/*
 *
 *   obj88657: Event Touch Down
 *
 */
$("#obj88657").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88657_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88657_onTap is still running");
	return;
}
var obj88657_onTap_runningActionsCount = 0;
var obj88657_onTap_loopCount = 0;
obj88657_onTap_actionGroup0();
});










/*
 *
 *   obj88652: Event Touch Down
 *
 */
$("#obj88652").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88652_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88652_onTap is still running");
	return;
}
var obj88652_onTap_runningActionsCount = 0;
var obj88652_onTap_loopCount = 0;
obj88652_onTap_actionGroup0();
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
	
$("#obj43740").trigger('SCEventShow');
$("#obj43724").trigger('SCEventShow');
$("#obj43721").trigger('SCEventShow');
$("#obj43717").trigger('SCEventShow');
$("#obj43715").trigger('SCEventShow');
$("#obj43713").trigger('SCEventShow');
$("#obj43711").trigger('SCEventShow');
$("#obj43709").trigger('SCEventShow');
$("#obj43707").trigger('SCEventShow');
$("#obj43705").trigger('SCEventShow');
$("#obj43703").trigger('SCEventShow');
$("#obj43701").trigger('SCEventShow');
$("#obj43699").trigger('SCEventShow');
$("#obj43697").trigger('SCEventShow');
$("#obj43695").trigger('SCEventShow');
$("#obj43693").trigger('SCEventShow');
$("#obj43691").trigger('SCEventShow');
$("#obj43689").trigger('SCEventShow');
$("#obj43687").trigger('SCEventShow');
$("#obj43648").trigger('SCEventShow');
$("#obj43646").trigger('SCEventShow');
$("#obj43645").trigger('SCEventShow');
$("#obj43644").trigger('SCEventShow');
$("#obj43605").trigger('SCEventShow');
$("#obj43566").trigger('SCEventShow');
$("#obj67390").trigger('SCEventShow');
$("#obj67382").trigger('SCEventShow');
$("#obj88657").trigger('SCEventShow');
$("#obj88652").trigger('SCEventShow');
$("#obj88662").trigger('SCEventShow');
$("#obj94927").trigger('SCEventShow');
$("#obj67396").trigger('SCEventShow');
	
});