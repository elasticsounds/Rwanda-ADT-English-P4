pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 9497;
pubcoder.page.title = pubcoder.page.title || "45";
pubcoder.page.number = pubcoder.page.number || 45;
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
var obj70681_onTap_activeActionGroupIndex = -1;
var obj70681_onTap_runningActionsCount = 0;
var obj70681_onTap_loopCount = 0;
var obj70678_onTap_activeActionGroupIndex = -1;
var obj70678_onTap_runningActionsCount = 0;
var obj70678_onTap_loopCount = 0;
var obj70674_onTap_activeActionGroupIndex = -1;
var obj70674_onTap_runningActionsCount = 0;
var obj70674_onTap_loopCount = 0;
var obj70642_onDrag_activeActionGroupIndex = -1;
var obj70642_onDrag_runningActionsCount = 0;
var obj70642_onDrag_loopCount = 0;
var obj70642_onTouchDown_activeActionGroupIndex = -1;
var obj70642_onTouchDown_runningActionsCount = 0;
var obj70642_onTouchDown_loopCount = 0;
var obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_loopCount = 0;
var obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70642_droppedInsideTargetActions_runningActionsCount = 0;
var obj70642_droppedInsideTargetActions_loopCount = 0;
var obj70626_onDrag_activeActionGroupIndex = -1;
var obj70626_onDrag_runningActionsCount = 0;
var obj70626_onDrag_loopCount = 0;
var obj70626_onTouchDown_activeActionGroupIndex = -1;
var obj70626_onTouchDown_runningActionsCount = 0;
var obj70626_onTouchDown_loopCount = 0;
var obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_loopCount = 0;
var obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70626_droppedInsideTargetActions_runningActionsCount = 0;
var obj70626_droppedInsideTargetActions_loopCount = 0;
var obj70604_onTap_activeActionGroupIndex = -1;
var obj70604_onTap_runningActionsCount = 0;
var obj70604_onTap_loopCount = 0;
var obj70596_onTap_activeActionGroupIndex = -1;
var obj70596_onTap_runningActionsCount = 0;
var obj70596_onTap_loopCount = 0;
var obj87278_onTap_activeActionGroupIndex = -1;
var obj87278_onTap_runningActionsCount = 0;
var obj87278_onTap_loopCount = 0;
var obj87273_onTap_activeActionGroupIndex = -1;
var obj87273_onTap_runningActionsCount = 0;
var obj87273_onTap_loopCount = 0;
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
		
obj70681_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70681_onTap_activeActionGroupIndex = -1;
		$("#obj70681").trigger("obj70681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70681) {
				console.warn("de-queueing event obj70681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70681_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70683();
function goToPage_70683() {
	window.obj70681_onTap_runningActionsCount = obj70681_onTap_runningActionsCount + 1;
	$("#anchor272")[0].click();
	window.obj70681_onTap_runningActionsCount = window.obj70681_onTap_runningActionsCount - 1;
if (window.obj70681_onTap_runningActionsCount < 0) {
	window.obj70681_onTap_runningActionsCount = 0;
} else if (window.obj70681_onTap_runningActionsCount == 0) {
	obj70681_onTap_actionGroup1();
}
}





















};
obj70681_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70681_onTap_activeActionGroupIndex = -1;
		$("#obj70681").trigger("obj70681_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70681) {
				console.warn("de-queueing event obj70681." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70681").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70681_onTap_activeActionGroupIndex = 1;
	





















};
obj70678_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70678_onTap_activeActionGroupIndex = -1;
		$("#obj70678").trigger("obj70678_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70678) {
				console.warn("de-queueing event obj70678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70678_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70680();
function goToPage_70680() {
	window.obj70678_onTap_runningActionsCount = obj70678_onTap_runningActionsCount + 1;
	$("#anchor273")[0].click();
	window.obj70678_onTap_runningActionsCount = window.obj70678_onTap_runningActionsCount - 1;
if (window.obj70678_onTap_runningActionsCount < 0) {
	window.obj70678_onTap_runningActionsCount = 0;
} else if (window.obj70678_onTap_runningActionsCount == 0) {
	obj70678_onTap_actionGroup1();
}
}





















};
obj70678_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70678_onTap_activeActionGroupIndex = -1;
		$("#obj70678").trigger("obj70678_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70678) {
				console.warn("de-queueing event obj70678." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70678").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70678_onTap_activeActionGroupIndex = 1;
	





















};
obj70674_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70674_onTap_activeActionGroupIndex = -1;
		$("#obj70674").trigger("obj70674_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70674) {
				console.warn("de-queueing event obj70674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70674_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70676();
function goToPage_70676() {
	window.obj70674_onTap_runningActionsCount = obj70674_onTap_runningActionsCount + 1;
	$("#anchor274")[0].click();
	window.obj70674_onTap_runningActionsCount = window.obj70674_onTap_runningActionsCount - 1;
if (window.obj70674_onTap_runningActionsCount < 0) {
	window.obj70674_onTap_runningActionsCount = 0;
} else if (window.obj70674_onTap_runningActionsCount == 0) {
	obj70674_onTap_actionGroup1();
}
}





















};
obj70674_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70674_onTap_activeActionGroupIndex = -1;
		$("#obj70674").trigger("obj70674_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70674) {
				console.warn("de-queueing event obj70674." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70674").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70674_onTap_activeActionGroupIndex = 1;
	





















};
obj70642_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70642");
//	action: dragDrop
//	target: obj70642 
dragDrop_70645();
function dragDrop_70645() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70642_onTouchDown_runningActionsCount = obj70642_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70642');
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
	  	containerNode = $('#obj70666');
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
    	window.obj70642_onTouchDown_runningActionsCount = window.obj70642_onTouchDown_runningActionsCount - 1;
if (window.obj70642_onTouchDown_runningActionsCount < 0) {
	window.obj70642_onTouchDown_runningActionsCount = 0;
} else if (window.obj70642_onTouchDown_runningActionsCount == 0) {
	obj70642_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj70662");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70645 = false;
    	var dropped_id_70645;
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
					dropped_70645 = true;
					dropped_id_70645 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70645) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70642").trigger('SCActionDragDrop70645_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70642_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70642_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70642 
move_92230();
function move_92230() {
	window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount = obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70642");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 138;
	var moveY = 510;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount = window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70642_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70647();
function runjs_70647() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70662").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70648();
function runjs_70648() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70662").css("border-color", "#C00000"); $("#obj70662").css("border-width", "2px"); $("#obj70662").css("border-style", "solid"); $("#obj70662").css("border-radius", "10px"); $("#obj70662").css("-webkit-border-radius", "10px"); $("#obj70662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70660 
hide_70649();
function hide_70649() {
	var selector = "#obj70660";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70649(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70642_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70650();
function runjs_70650() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70642").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70651();
function switchText_70651() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70637_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70637_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70637").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70637_content");
			setTimeout(function () {
				window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70637 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj70642_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70642 
move_70652();
function move_70652() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70642");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 138;
	var moveY = 510;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj70642_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70653();
function runjs_70653() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70662").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70654();
function runjs_70654() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70662").css("border-color", "#000000"); $("#obj70662").css("border-width", "1px"); $("#obj70662").css("border-style", "solid"); $("#obj70662").css("border-radius", "10px"); $("#obj70662").css("-webkit-border-radius", "10px"); $("#obj70662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70660
(function(){
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj70660";
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
					window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup9();
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
				window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70642_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70656();
function runjs_70656() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70642").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70657();
function runjs_70657() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70642").css("border-color", "rgba(0,0,0,0)"); $("#obj70642").css("border-width", "0px"); $("#obj70642").css("border-style", "solid"); $("#obj70642").css("border-radius", "10px"); $("#obj70642").css("-webkit-border-radius", "10px"); $("#obj70642").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj70642_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70622 
playAudio_70658();
function playAudio_70658() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj70622")[0];
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
		    window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj70642_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70659();
function switchText_70659() {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = obj70642_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70637_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70637_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70637").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70637_content");
			setTimeout(function () {
				window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70637 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70642_droppedInsideTargetActions_runningActionsCount = window.obj70642_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70642_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70642_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70642_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70642_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj70642_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70642").trigger("obj70642_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70642) {
				console.warn("de-queueing event obj70642." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70642").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70642_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj70626_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70626");
//	action: dragDrop
//	target: obj70626 
dragDrop_70629();
function dragDrop_70629() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70626_onTouchDown_runningActionsCount = obj70626_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70626');
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
	  	containerNode = $('#obj70666');
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
    	window.obj70626_onTouchDown_runningActionsCount = window.obj70626_onTouchDown_runningActionsCount - 1;
if (window.obj70626_onTouchDown_runningActionsCount < 0) {
	window.obj70626_onTouchDown_runningActionsCount = 0;
} else if (window.obj70626_onTouchDown_runningActionsCount == 0) {
	obj70626_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj70662");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70629 = false;
    	var dropped_id_70629;
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
					dropped_70629 = true;
					dropped_id_70629 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70629) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70626").trigger('SCActionDragDrop70629_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70626_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70626_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70626 
move_92232();
function move_92232() {
	window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount = obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70626");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 329;
	var moveY = 509;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount = window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70626_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70631();
function runjs_70631() {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70662").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70626_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70635();
function switchText_70635() {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70637_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70637_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70637").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70637_content");
			setTimeout(function () {
				window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70637 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70626_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70632();
function runjs_70632() {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70662").css("border-color", "#058E3F"); $("#obj70662").css("border-width", "2px"); $("#obj70662").css("border-style", "solid"); $("#obj70662").css("border-radius", "10px"); $("#obj70662").css("-webkit-border-radius", "10px"); $("#obj70662").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70626_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj70660 
hide_70633();
function hide_70633() {
	var selector = "#obj70660";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70633(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70626_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70634();
function runjs_70634() {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70626").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70626_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj70641 
playAudio_70636();
function playAudio_70636() {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj70641")[0];
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
		    window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70626_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90157();
function switchText_90157() {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = obj70626_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70637_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70637_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70637").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70637_content");
			setTimeout(function () {
				window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70637 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70626_droppedInsideTargetActions_runningActionsCount = window.obj70626_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70626_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70626_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70626_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70626_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70626_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70626").trigger("obj70626_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70626) {
				console.warn("de-queueing event obj70626." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70626").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70626_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70604_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70604_onTap_activeActionGroupIndex = -1;
		$("#obj70604").trigger("obj70604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70604) {
				console.warn("de-queueing event obj70604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70604_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70604 
hide_70607();
function hide_70607() {
	var selector = "#obj70604";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70604_onTap_runningActionsCount = obj70604_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70604_onTap_runningActionsCount = window.obj70604_onTap_runningActionsCount - 1;
if (window.obj70604_onTap_runningActionsCount < 0) {
	window.obj70604_onTap_runningActionsCount = 0;
} else if (window.obj70604_onTap_runningActionsCount == 0) {
	obj70604_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70607(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70604_onTap_runningActionsCount = window.obj70604_onTap_runningActionsCount - 1;
if (window.obj70604_onTap_runningActionsCount < 0) {
	window.obj70604_onTap_runningActionsCount = 0;
} else if (window.obj70604_onTap_runningActionsCount == 0) {
	obj70604_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj70594 
stopMovie_70606();
function stopMovie_70606() {
	window.obj70604_onTap_runningActionsCount = obj70604_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70594")[0];
	myVideo.pause();
	window.obj70604_onTap_runningActionsCount = window.obj70604_onTap_runningActionsCount - 1;
if (window.obj70604_onTap_runningActionsCount < 0) {
	window.obj70604_onTap_runningActionsCount = 0;
} else if (window.obj70604_onTap_runningActionsCount == 0) {
	obj70604_onTap_actionGroup1();
}
}
















};
obj70604_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70604_onTap_activeActionGroupIndex = -1;
		$("#obj70604").trigger("obj70604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70604) {
				console.warn("de-queueing event obj70604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70604_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70596
(function(){
	window.obj70604_onTap_runningActionsCount = obj70604_onTap_runningActionsCount + 1;

	var selector = "#obj70596";
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
					window.obj70604_onTap_runningActionsCount = window.obj70604_onTap_runningActionsCount - 1;
if (window.obj70604_onTap_runningActionsCount < 0) {
	window.obj70604_onTap_runningActionsCount = 0;
} else if (window.obj70604_onTap_runningActionsCount == 0) {
	obj70604_onTap_actionGroup2();
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
				window.obj70604_onTap_runningActionsCount = window.obj70604_onTap_runningActionsCount - 1;
if (window.obj70604_onTap_runningActionsCount < 0) {
	window.obj70604_onTap_runningActionsCount = 0;
} else if (window.obj70604_onTap_runningActionsCount == 0) {
	obj70604_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70604_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70604_onTap_activeActionGroupIndex = -1;
		$("#obj70604").trigger("obj70604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70604) {
				console.warn("de-queueing event obj70604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70604_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70594 
move_70609();
function move_70609() {
	window.obj70604_onTap_runningActionsCount = obj70604_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70594");
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
			window.obj70604_onTap_runningActionsCount = window.obj70604_onTap_runningActionsCount - 1;
if (window.obj70604_onTap_runningActionsCount < 0) {
	window.obj70604_onTap_runningActionsCount = 0;
} else if (window.obj70604_onTap_runningActionsCount == 0) {
	obj70604_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70604_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70604_onTap_activeActionGroupIndex = -1;
		$("#obj70604").trigger("obj70604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70604) {
				console.warn("de-queueing event obj70604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70604_onTap_activeActionGroupIndex = 3;
	





















};
obj70596_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70596_onTap_activeActionGroupIndex = -1;
		$("#obj70596").trigger("obj70596_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70596) {
				console.warn("de-queueing event obj70596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70596_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70596 
hide_70599();
function hide_70599() {
	var selector = "#obj70596";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70596_onTap_runningActionsCount = obj70596_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70596_onTap_runningActionsCount = window.obj70596_onTap_runningActionsCount - 1;
if (window.obj70596_onTap_runningActionsCount < 0) {
	window.obj70596_onTap_runningActionsCount = 0;
} else if (window.obj70596_onTap_runningActionsCount == 0) {
	obj70596_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70599(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70596_onTap_runningActionsCount = window.obj70596_onTap_runningActionsCount - 1;
if (window.obj70596_onTap_runningActionsCount < 0) {
	window.obj70596_onTap_runningActionsCount = 0;
} else if (window.obj70596_onTap_runningActionsCount == 0) {
	obj70596_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj70594 
playPauseMovie_70598();
function playPauseMovie_70598() {
	window.obj70596_onTap_runningActionsCount = obj70596_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70594")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj70596_onTap_runningActionsCount = window.obj70596_onTap_runningActionsCount - 1;
if (window.obj70596_onTap_runningActionsCount < 0) {
	window.obj70596_onTap_runningActionsCount = 0;
} else if (window.obj70596_onTap_runningActionsCount == 0) {
	obj70596_onTap_actionGroup1();
}
}

















};
obj70596_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70596_onTap_activeActionGroupIndex = -1;
		$("#obj70596").trigger("obj70596_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70596) {
				console.warn("de-queueing event obj70596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70596_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70604
(function(){
	window.obj70596_onTap_runningActionsCount = obj70596_onTap_runningActionsCount + 1;

	var selector = "#obj70604";
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
					window.obj70596_onTap_runningActionsCount = window.obj70596_onTap_runningActionsCount - 1;
if (window.obj70596_onTap_runningActionsCount < 0) {
	window.obj70596_onTap_runningActionsCount = 0;
} else if (window.obj70596_onTap_runningActionsCount == 0) {
	obj70596_onTap_actionGroup2();
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
				window.obj70596_onTap_runningActionsCount = window.obj70596_onTap_runningActionsCount - 1;
if (window.obj70596_onTap_runningActionsCount < 0) {
	window.obj70596_onTap_runningActionsCount = 0;
} else if (window.obj70596_onTap_runningActionsCount == 0) {
	obj70596_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70596_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70596_onTap_activeActionGroupIndex = -1;
		$("#obj70596").trigger("obj70596_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70596) {
				console.warn("de-queueing event obj70596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70596_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70594 
move_70601();
function move_70601() {
	window.obj70596_onTap_runningActionsCount = obj70596_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70594");
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
			window.obj70596_onTap_runningActionsCount = window.obj70596_onTap_runningActionsCount - 1;
if (window.obj70596_onTap_runningActionsCount < 0) {
	window.obj70596_onTap_runningActionsCount = 0;
} else if (window.obj70596_onTap_runningActionsCount == 0) {
	obj70596_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70596_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70596_onTap_activeActionGroupIndex = -1;
		$("#obj70596").trigger("obj70596_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70596) {
				console.warn("de-queueing event obj70596." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70596").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70596_onTap_activeActionGroupIndex = 3;
	





















};
obj87278_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87278_onTap_activeActionGroupIndex = -1;
		$("#obj87278").trigger("obj87278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87278) {
				console.warn("de-queueing event obj87278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87278_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87283 
stopAudio_87280();
function stopAudio_87280() {
	window.obj87278_onTap_runningActionsCount = obj87278_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87283")[0];
	myAudio.pause();
	window.obj87278_onTap_runningActionsCount = window.obj87278_onTap_runningActionsCount - 1;
if (window.obj87278_onTap_runningActionsCount < 0) {
	window.obj87278_onTap_runningActionsCount = 0;
} else if (window.obj87278_onTap_runningActionsCount == 0) {
	obj87278_onTap_actionGroup1();
}
}








};
obj87278_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87278_onTap_activeActionGroupIndex = -1;
		$("#obj87278").trigger("obj87278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87278) {
				console.warn("de-queueing event obj87278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87278_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87278 
hide_87281();
function hide_87281() {
	var selector = "#obj87278";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87278_onTap_runningActionsCount = obj87278_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87278_onTap_runningActionsCount = window.obj87278_onTap_runningActionsCount - 1;
if (window.obj87278_onTap_runningActionsCount < 0) {
	window.obj87278_onTap_runningActionsCount = 0;
} else if (window.obj87278_onTap_runningActionsCount == 0) {
	obj87278_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87281(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87278_onTap_runningActionsCount = window.obj87278_onTap_runningActionsCount - 1;
if (window.obj87278_onTap_runningActionsCount < 0) {
	window.obj87278_onTap_runningActionsCount = 0;
} else if (window.obj87278_onTap_runningActionsCount == 0) {
	obj87278_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87278_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87278_onTap_activeActionGroupIndex = -1;
		$("#obj87278").trigger("obj87278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87278) {
				console.warn("de-queueing event obj87278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87278_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87273
(function(){
	window.obj87278_onTap_runningActionsCount = obj87278_onTap_runningActionsCount + 1;

	var selector = "#obj87273";
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
					window.obj87278_onTap_runningActionsCount = window.obj87278_onTap_runningActionsCount - 1;
if (window.obj87278_onTap_runningActionsCount < 0) {
	window.obj87278_onTap_runningActionsCount = 0;
} else if (window.obj87278_onTap_runningActionsCount == 0) {
	obj87278_onTap_actionGroup3();
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
				window.obj87278_onTap_runningActionsCount = window.obj87278_onTap_runningActionsCount - 1;
if (window.obj87278_onTap_runningActionsCount < 0) {
	window.obj87278_onTap_runningActionsCount = 0;
} else if (window.obj87278_onTap_runningActionsCount == 0) {
	obj87278_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87278_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87278_onTap_activeActionGroupIndex = -1;
		$("#obj87278").trigger("obj87278_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87278) {
				console.warn("de-queueing event obj87278." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87278").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87278_onTap_activeActionGroupIndex = 3;
	





















};
obj87273_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87273_onTap_activeActionGroupIndex = -1;
		$("#obj87273").trigger("obj87273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87273) {
				console.warn("de-queueing event obj87273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87273_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87273 
hide_87275();
function hide_87275() {
	var selector = "#obj87273";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87273_onTap_runningActionsCount = obj87273_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87273_onTap_runningActionsCount = window.obj87273_onTap_runningActionsCount - 1;
if (window.obj87273_onTap_runningActionsCount < 0) {
	window.obj87273_onTap_runningActionsCount = 0;
} else if (window.obj87273_onTap_runningActionsCount == 0) {
	obj87273_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87275(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87273_onTap_runningActionsCount = window.obj87273_onTap_runningActionsCount - 1;
if (window.obj87273_onTap_runningActionsCount < 0) {
	window.obj87273_onTap_runningActionsCount = 0;
} else if (window.obj87273_onTap_runningActionsCount == 0) {
	obj87273_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87273_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87273_onTap_activeActionGroupIndex = -1;
		$("#obj87273").trigger("obj87273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87273) {
				console.warn("de-queueing event obj87273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87273_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87278
(function(){
	window.obj87273_onTap_runningActionsCount = obj87273_onTap_runningActionsCount + 1;

	var selector = "#obj87278";
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
					window.obj87273_onTap_runningActionsCount = window.obj87273_onTap_runningActionsCount - 1;
if (window.obj87273_onTap_runningActionsCount < 0) {
	window.obj87273_onTap_runningActionsCount = 0;
} else if (window.obj87273_onTap_runningActionsCount == 0) {
	obj87273_onTap_actionGroup2();
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
				window.obj87273_onTap_runningActionsCount = window.obj87273_onTap_runningActionsCount - 1;
if (window.obj87273_onTap_runningActionsCount < 0) {
	window.obj87273_onTap_runningActionsCount = 0;
} else if (window.obj87273_onTap_runningActionsCount == 0) {
	obj87273_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87273_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87273_onTap_activeActionGroupIndex = -1;
		$("#obj87273").trigger("obj87273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87273) {
				console.warn("de-queueing event obj87273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87273_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87283 
playAudio_87277();
function playAudio_87277() {
	window.obj87273_onTap_runningActionsCount = obj87273_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87283")[0];
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
		    window.obj87273_onTap_runningActionsCount = window.obj87273_onTap_runningActionsCount - 1;
if (window.obj87273_onTap_runningActionsCount < 0) {
	window.obj87273_onTap_runningActionsCount = 0;
} else if (window.obj87273_onTap_runningActionsCount == 0) {
	obj87273_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87273_onTap_runningActionsCount = window.obj87273_onTap_runningActionsCount - 1;
if (window.obj87273_onTap_runningActionsCount < 0) {
	window.obj87273_onTap_runningActionsCount = 0;
} else if (window.obj87273_onTap_runningActionsCount == 0) {
	obj87273_onTap_actionGroup3();
}
	}
}









};
obj87273_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87273_onTap_activeActionGroupIndex = -1;
		$("#obj87273").trigger("obj87273_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87273) {
				console.warn("de-queueing event obj87273." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87273").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87273_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj70681: Event Touch Down
 *
 */
$("#obj70681").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70681_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70681_onTap is still running");
	return;
}
var obj70681_onTap_runningActionsCount = 0;
var obj70681_onTap_loopCount = 0;
obj70681_onTap_actionGroup0();
});










/*
 *
 *   obj70678: Event Touch Down
 *
 */
$("#obj70678").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70678_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70678_onTap is still running");
	return;
}
var obj70678_onTap_runningActionsCount = 0;
var obj70678_onTap_loopCount = 0;
obj70678_onTap_actionGroup0();
});










/*
 *
 *   obj70674: Event Touch Down
 *
 */
$("#obj70674").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70674_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70674_onTap is still running");
	return;
}
var obj70674_onTap_runningActionsCount = 0;
var obj70674_onTap_loopCount = 0;
obj70674_onTap_actionGroup0();
});

















































































/*
 *
 *   obj70642: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70642");
	var winTarget = document.getElementById("obj70642");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70642").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70642_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70642_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70642_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70642_onTouchDown is still running");
	return;
}
var obj70642_onTouchDown_runningActionsCount = 0;
var obj70642_onTouchDown_loopCount = 0;
obj70642_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70642: Event SCActionDragDrop70645_droppedOutsideTargetActions
 *
 */
$("#obj70642").bind("SCActionDragDrop70645_droppedOutsideTargetActions", function(event) {
	if (window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70642_SCActionDragDrop70645_droppedOutsideTargetActions is still running");
	return;
}
var obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_loopCount = 0;
obj70642_SCActionDragDrop70645_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70642: Event droppedInsideTargetActions
 *
 */
$("#obj70642").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70642_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70642_droppedInsideTargetActions is still running");
	return;
}
var obj70642_droppedInsideTargetActions_runningActionsCount = 0;
var obj70642_droppedInsideTargetActions_loopCount = 0;
obj70642_droppedInsideTargetActions_actionGroup0();
});




































/*
 *
 *   obj70626: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70626");
	var winTarget = document.getElementById("obj70626");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70626").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70626_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70626_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70626_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70626_onTouchDown is still running");
	return;
}
var obj70626_onTouchDown_runningActionsCount = 0;
var obj70626_onTouchDown_loopCount = 0;
obj70626_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70626: Event SCActionDragDrop70629_droppedOutsideTargetActions
 *
 */
$("#obj70626").bind("SCActionDragDrop70629_droppedOutsideTargetActions", function(event) {
	if (window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70626_SCActionDragDrop70629_droppedOutsideTargetActions is still running");
	return;
}
var obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_loopCount = 0;
obj70626_SCActionDragDrop70629_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70626: Event droppedInsideTargetActions
 *
 */
$("#obj70626").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70626_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70626_droppedInsideTargetActions is still running");
	return;
}
var obj70626_droppedInsideTargetActions_runningActionsCount = 0;
var obj70626_droppedInsideTargetActions_loopCount = 0;
obj70626_droppedInsideTargetActions_actionGroup0();
});

























/*
 *
 *   obj70604: Event Touch Down
 *
 */
$("#obj70604").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70604_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70604_onTap is still running");
	return;
}
var obj70604_onTap_runningActionsCount = 0;
var obj70604_onTap_loopCount = 0;
obj70604_onTap_actionGroup0();
});










/*
 *
 *   obj70596: Event Touch Down
 *
 */
$("#obj70596").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70596_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70596_onTap is still running");
	return;
}
var obj70596_onTap_runningActionsCount = 0;
var obj70596_onTap_loopCount = 0;
obj70596_onTap_actionGroup0();
});










/*
 *
 *   obj87278: Event Touch Down
 *
 */
$("#obj87278").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87278_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87278_onTap is still running");
	return;
}
var obj87278_onTap_runningActionsCount = 0;
var obj87278_onTap_loopCount = 0;
obj87278_onTap_actionGroup0();
});










/*
 *
 *   obj87273: Event Touch Down
 *
 */
$("#obj87273").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87273_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87273_onTap is still running");
	return;
}
var obj87273_onTap_runningActionsCount = 0;
var obj87273_onTap_loopCount = 0;
obj87273_onTap_actionGroup0();
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
	
$("#obj70684").trigger('SCEventShow');
$("#obj70681").trigger('SCEventShow');
$("#obj70678").trigger('SCEventShow');
$("#obj70674").trigger('SCEventShow');
$("#obj70672").trigger('SCEventShow');
$("#obj70670").trigger('SCEventShow');
$("#obj70668").trigger('SCEventShow');
$("#obj70666").trigger('SCEventShow');
$("#obj70664").trigger('SCEventShow');
$("#obj70662").trigger('SCEventShow');
$("#obj70660").trigger('SCEventShow');
$("#obj70642").trigger('SCEventShow');
$("#obj70641").trigger('SCEventShow');
$("#obj70639").trigger('SCEventShow');
$("#obj70637").trigger('SCEventShow');
$("#obj70626").trigger('SCEventShow');
$("#obj70624").trigger('SCEventShow');
$("#obj70622").trigger('SCEventShow');
$("#obj70604").trigger('SCEventShow');
$("#obj70596").trigger('SCEventShow');
$("#obj87278").trigger('SCEventShow');
$("#obj87273").trigger('SCEventShow');
$("#obj87283").trigger('SCEventShow');
$("#obj94719").trigger('SCEventShow');
$("#obj70594").trigger('SCEventShow');
	
});