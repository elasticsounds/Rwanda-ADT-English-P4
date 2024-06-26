pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 52215;
pubcoder.page.title = pubcoder.page.title || "187";
pubcoder.page.number = pubcoder.page.number || 187;
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
var obj52664_onTap_activeActionGroupIndex = -1;
var obj52664_onTap_runningActionsCount = 0;
var obj52664_onTap_loopCount = 0;
var obj52661_onTap_activeActionGroupIndex = -1;
var obj52661_onTap_runningActionsCount = 0;
var obj52661_onTap_loopCount = 0;
var obj52657_onTap_activeActionGroupIndex = -1;
var obj52657_onTap_runningActionsCount = 0;
var obj52657_onTap_loopCount = 0;
var obj52807_onDrag_activeActionGroupIndex = -1;
var obj52807_onDrag_runningActionsCount = 0;
var obj52807_onDrag_loopCount = 0;
var obj52807_onTouchDown_activeActionGroupIndex = -1;
var obj52807_onTouchDown_runningActionsCount = 0;
var obj52807_onTouchDown_loopCount = 0;
var obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_loopCount = 0;
var obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj52807_droppedInsideTargetActions_3_loopCount = 0;
var obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52807_droppedInsideTargetActions_2_loopCount = 0;
var obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj52807_droppedInsideTargetActions_runningActionsCount = 0;
var obj52807_droppedInsideTargetActions_loopCount = 0;
var obj52969_onDrag_activeActionGroupIndex = -1;
var obj52969_onDrag_runningActionsCount = 0;
var obj52969_onDrag_loopCount = 0;
var obj52969_onTouchDown_activeActionGroupIndex = -1;
var obj52969_onTouchDown_runningActionsCount = 0;
var obj52969_onTouchDown_loopCount = 0;
var obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_loopCount = 0;
var obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj52969_droppedInsideTargetActions_3_loopCount = 0;
var obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52969_droppedInsideTargetActions_2_loopCount = 0;
var obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj52969_droppedInsideTargetActions_runningActionsCount = 0;
var obj52969_droppedInsideTargetActions_loopCount = 0;
var obj52726_onDrag_activeActionGroupIndex = -1;
var obj52726_onDrag_runningActionsCount = 0;
var obj52726_onDrag_loopCount = 0;
var obj52726_onTouchDown_activeActionGroupIndex = -1;
var obj52726_onTouchDown_runningActionsCount = 0;
var obj52726_onTouchDown_loopCount = 0;
var obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_loopCount = 0;
var obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj52726_droppedInsideTargetActions_3_loopCount = 0;
var obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52726_droppedInsideTargetActions_2_loopCount = 0;
var obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj52726_droppedInsideTargetActions_runningActionsCount = 0;
var obj52726_droppedInsideTargetActions_loopCount = 0;
var obj68014_onTap_activeActionGroupIndex = -1;
var obj68014_onTap_runningActionsCount = 0;
var obj68014_onTap_loopCount = 0;
var obj68006_onTap_activeActionGroupIndex = -1;
var obj68006_onTap_runningActionsCount = 0;
var obj68006_onTap_loopCount = 0;
var obj89125_onTap_activeActionGroupIndex = -1;
var obj89125_onTap_runningActionsCount = 0;
var obj89125_onTap_loopCount = 0;
var obj89120_onTap_activeActionGroupIndex = -1;
var obj89120_onTap_runningActionsCount = 0;
var obj89120_onTap_loopCount = 0;
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
		
obj52664_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52664_onTap_activeActionGroupIndex = -1;
		$("#obj52664").trigger("obj52664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52664) {
				console.warn("de-queueing event obj52664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52664_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52666();
function goToPage_52666() {
	window.obj52664_onTap_runningActionsCount = obj52664_onTap_runningActionsCount + 1;
	$("#anchor1100")[0].click();
	window.obj52664_onTap_runningActionsCount = window.obj52664_onTap_runningActionsCount - 1;
if (window.obj52664_onTap_runningActionsCount < 0) {
	window.obj52664_onTap_runningActionsCount = 0;
} else if (window.obj52664_onTap_runningActionsCount == 0) {
	obj52664_onTap_actionGroup1();
}
}





















};
obj52664_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52664_onTap_activeActionGroupIndex = -1;
		$("#obj52664").trigger("obj52664_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52664) {
				console.warn("de-queueing event obj52664." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52664").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52664_onTap_activeActionGroupIndex = 1;
	





















};
obj52661_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52661_onTap_activeActionGroupIndex = -1;
		$("#obj52661").trigger("obj52661_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52661) {
				console.warn("de-queueing event obj52661." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52661").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52661_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52663();
function goToPage_52663() {
	window.obj52661_onTap_runningActionsCount = obj52661_onTap_runningActionsCount + 1;
	$("#anchor1101")[0].click();
	window.obj52661_onTap_runningActionsCount = window.obj52661_onTap_runningActionsCount - 1;
if (window.obj52661_onTap_runningActionsCount < 0) {
	window.obj52661_onTap_runningActionsCount = 0;
} else if (window.obj52661_onTap_runningActionsCount == 0) {
	obj52661_onTap_actionGroup1();
}
}





















};
obj52661_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52661_onTap_activeActionGroupIndex = -1;
		$("#obj52661").trigger("obj52661_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52661) {
				console.warn("de-queueing event obj52661." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52661").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52661_onTap_activeActionGroupIndex = 1;
	





















};
obj52657_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52657_onTap_activeActionGroupIndex = -1;
		$("#obj52657").trigger("obj52657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52657) {
				console.warn("de-queueing event obj52657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52657_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52659();
function goToPage_52659() {
	window.obj52657_onTap_runningActionsCount = obj52657_onTap_runningActionsCount + 1;
	$("#anchor1102")[0].click();
	window.obj52657_onTap_runningActionsCount = window.obj52657_onTap_runningActionsCount - 1;
if (window.obj52657_onTap_runningActionsCount < 0) {
	window.obj52657_onTap_runningActionsCount = 0;
} else if (window.obj52657_onTap_runningActionsCount == 0) {
	obj52657_onTap_actionGroup1();
}
}





















};
obj52657_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52657_onTap_activeActionGroupIndex = -1;
		$("#obj52657").trigger("obj52657_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52657) {
				console.warn("de-queueing event obj52657." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52657").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52657_onTap_activeActionGroupIndex = 1;
	





















};
obj52807_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj52807");
//	action: dragDrop
//	target: obj52807 
dragDrop_52810();
function dragDrop_52810() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj52807_onTouchDown_runningActionsCount = obj52807_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj52807');
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
	  	containerNode = $('#obj52649');
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
    	window.obj52807_onTouchDown_runningActionsCount = window.obj52807_onTouchDown_runningActionsCount - 1;
if (window.obj52807_onTouchDown_runningActionsCount < 0) {
	window.obj52807_onTouchDown_runningActionsCount = 0;
} else if (window.obj52807_onTouchDown_runningActionsCount == 0) {
	obj52807_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52631","#obj52635","#obj52639");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_52810 = false;
    	var dropped_id_52810;
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
					dropped_52810 = true;
					dropped_id_52810 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_52810) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj52807").trigger('SCActionDragDrop52810_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj52807_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52807_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj52807 
move_92789();
function move_92789() {
	window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount = obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj52807");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 107;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount = window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj52807_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_53050();
function runjs_53050() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_53051();
function runjs_53051() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52639").css("border-color", "#C00000"); $("#obj52639").css("border-width", "2px"); $("#obj52639").css("border-style", "solid"); $("#obj52639").css("border-radius", "10px"); $("#obj52639").css("-webkit-border-radius", "10px"); $("#obj52639").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52692 
hide_53052();
function hide_53052() {
	var selector = "#obj52692";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_53052(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52807_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_53053();
function runjs_53053() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52807").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_53054();
function switchText_53054() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj52807_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52807 
move_53055();
function move_53055() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj52807");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 107;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj52807_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53056();
function runjs_53056() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53057();
function runjs_53057() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52639").css("border-color", "#000000"); $("#obj52639").css("border-width", "1px"); $("#obj52639").css("border-style", "solid"); $("#obj52639").css("border-radius", "0px"); $("#obj52639").css("-webkit-border-radius", "0px"); $("#obj52639").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52692
(function(){
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52692";
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
					window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52807_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53059();
function runjs_53059() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52807").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53060();
function runjs_53060() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52807").css("border-color", "rgba(0,0,0,0)"); $("#obj52807").css("border-width", "0px"); $("#obj52807").css("border-style", "solid"); $("#obj52807").css("border-radius", "10px"); $("#obj52807").css("-webkit-border-radius", "10px"); $("#obj52807").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52619 
playAudio_53061();
function playAudio_53061() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52619")[0];
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
		    window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj52807_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53062();
function switchText_53062() {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = obj52807_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52807_droppedInsideTargetActions_3_runningActionsCount = window.obj52807_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj52807_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj52807_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52819();
function runjs_52819() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52820();
function runjs_52820() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("border-color", "#C00000"); $("#obj52635").css("border-width", "2px"); $("#obj52635").css("border-style", "solid"); $("#obj52635").css("border-radius", "10px"); $("#obj52635").css("-webkit-border-radius", "10px"); $("#obj52635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52694 
hide_52821();
function hide_52821() {
	var selector = "#obj52694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52821(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52807_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52822();
function runjs_52822() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52807").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52823();
function switchText_52823() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj52807_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52807 
move_52824();
function move_52824() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj52807");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 107;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj52807_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_52825();
function runjs_52825() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_52826();
function runjs_52826() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("border-color", "#000000"); $("#obj52635").css("border-width", "1px"); $("#obj52635").css("border-style", "solid"); $("#obj52635").css("border-radius", "0px"); $("#obj52635").css("-webkit-border-radius", "0px"); $("#obj52635").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52694
(function(){
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52694";
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
					window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52807_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_52828();
function runjs_52828() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52807").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_52829();
function runjs_52829() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52807").css("border-color", "rgba(0,0,0,0)"); $("#obj52807").css("border-width", "0px"); $("#obj52807").css("border-style", "solid"); $("#obj52807").css("border-radius", "10px"); $("#obj52807").css("-webkit-border-radius", "10px"); $("#obj52807").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52619 
playAudio_52830();
function playAudio_52830() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52619")[0];
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
		    window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj52807_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_52831();
function switchText_52831() {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = obj52807_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52807_droppedInsideTargetActions_2_runningActionsCount = window.obj52807_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj52807_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj52807_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52812();
function runjs_52812() {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = obj52807_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52631").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52813();
function runjs_52813() {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = obj52807_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52631").css("border-color", "#058E3F"); $("#obj52631").css("border-width", "2px"); $("#obj52631").css("border-style", "solid"); $("#obj52631").css("border-radius", "10px"); $("#obj52631").css("-webkit-border-radius", "10px"); $("#obj52631").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52696 
hide_52814();
function hide_52814() {
	var selector = "#obj52696";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52807_droppedInsideTargetActions_runningActionsCount = obj52807_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52814(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52807_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52815();
function runjs_52815() {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = obj52807_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52807").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj52807_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52816();
function switchText_52816() {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = obj52807_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj52807_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52621 
playAudio_52817();
function playAudio_52817() {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = obj52807_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52621")[0];
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
		    window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52807_droppedInsideTargetActions_runningActionsCount = window.obj52807_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52807_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52807_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52807_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52807_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj52807_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52807").trigger("obj52807_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52807) {
				console.warn("de-queueing event obj52807." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52807").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52807_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj52969_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj52969");
//	action: dragDrop
//	target: obj52969 
dragDrop_52972();
function dragDrop_52972() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj52969_onTouchDown_runningActionsCount = obj52969_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj52969');
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
	  	containerNode = $('#obj52649');
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
    	window.obj52969_onTouchDown_runningActionsCount = window.obj52969_onTouchDown_runningActionsCount - 1;
if (window.obj52969_onTouchDown_runningActionsCount < 0) {
	window.obj52969_onTouchDown_runningActionsCount = 0;
} else if (window.obj52969_onTouchDown_runningActionsCount == 0) {
	obj52969_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52639","#obj52635","#obj52631");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_52972 = false;
    	var dropped_id_52972;
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
					dropped_52972 = true;
					dropped_id_52972 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_52972) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj52969").trigger('SCActionDragDrop52972_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj52969_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52969_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj52969 
move_92791();
function move_92791() {
	window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount = obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj52969");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 216;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount = window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj52969_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52995();
function runjs_52995() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52996();
function runjs_52996() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("border-color", "#C00000"); $("#obj52631").css("border-width", "2px"); $("#obj52631").css("border-style", "solid"); $("#obj52631").css("border-radius", "10px"); $("#obj52631").css("-webkit-border-radius", "10px"); $("#obj52631").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52696 
hide_52997();
function hide_52997() {
	var selector = "#obj52696";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52997(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52969_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52998();
function runjs_52998() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52969").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52999();
function switchText_52999() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj52969_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52969 
move_53000();
function move_53000() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj52969");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 216;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj52969_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_53001();
function runjs_53001() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_53002();
function runjs_53002() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("border-color", "#000000"); $("#obj52631").css("border-width", "1px"); $("#obj52631").css("border-style", "solid"); $("#obj52631").css("border-radius", "0px"); $("#obj52631").css("-webkit-border-radius", "0px"); $("#obj52631").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52696
(function(){
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52696";
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
					window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52969_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_53004();
function runjs_53004() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52969").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_53005();
function runjs_53005() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52969").css("border-color", "rgba(0,0,0,0)"); $("#obj52969").css("border-width", "0px"); $("#obj52969").css("border-style", "solid"); $("#obj52969").css("border-radius", "10px"); $("#obj52969").css("-webkit-border-radius", "10px"); $("#obj52969").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52619 
playAudio_53006();
function playAudio_53006() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52619")[0];
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
		    window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj52969_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_53007();
function switchText_53007() {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = obj52969_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52969_droppedInsideTargetActions_3_runningActionsCount = window.obj52969_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj52969_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj52969_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52981();
function runjs_52981() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52982();
function runjs_52982() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("border-color", "#C00000"); $("#obj52635").css("border-width", "2px"); $("#obj52635").css("border-style", "solid"); $("#obj52635").css("border-radius", "10px"); $("#obj52635").css("-webkit-border-radius", "10px"); $("#obj52635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52694 
hide_52983();
function hide_52983() {
	var selector = "#obj52694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52983(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52969_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52984();
function runjs_52984() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52969").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52985();
function switchText_52985() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj52969_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52969 
move_52986();
function move_52986() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj52969");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 216;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj52969_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_52987();
function runjs_52987() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_52988();
function runjs_52988() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52635").css("border-color", "#000000"); $("#obj52635").css("border-width", "1px"); $("#obj52635").css("border-style", "solid"); $("#obj52635").css("border-radius", "0px"); $("#obj52635").css("-webkit-border-radius", "0px"); $("#obj52635").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52694
(function(){
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52694";
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
					window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52969_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_52990();
function runjs_52990() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52969").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_52991();
function runjs_52991() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52969").css("border-color", "rgba(0,0,0,0)"); $("#obj52969").css("border-width", "0px"); $("#obj52969").css("border-style", "solid"); $("#obj52969").css("border-radius", "10px"); $("#obj52969").css("-webkit-border-radius", "10px"); $("#obj52969").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52619 
playAudio_52992();
function playAudio_52992() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52619")[0];
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
		    window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj52969_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_52993();
function switchText_52993() {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = obj52969_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52969_droppedInsideTargetActions_2_runningActionsCount = window.obj52969_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj52969_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj52969_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52974();
function runjs_52974() {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = obj52969_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52975();
function runjs_52975() {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = obj52969_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52639").css("border-color", "#058E3F"); $("#obj52639").css("border-width", "2px"); $("#obj52639").css("border-style", "solid"); $("#obj52639").css("border-radius", "10px"); $("#obj52639").css("-webkit-border-radius", "10px"); $("#obj52639").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52692 
hide_52976();
function hide_52976() {
	var selector = "#obj52692";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52969_droppedInsideTargetActions_runningActionsCount = obj52969_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52976(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52969_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52977();
function runjs_52977() {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = obj52969_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52969").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj52969_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52978();
function switchText_52978() {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = obj52969_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj52969_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52621 
playAudio_52979();
function playAudio_52979() {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = obj52969_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52621")[0];
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
		    window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52969_droppedInsideTargetActions_runningActionsCount = window.obj52969_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52969_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52969_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52969_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52969_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj52969_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52969").trigger("obj52969_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52969) {
				console.warn("de-queueing event obj52969." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52969").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52969_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj52726_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj52726");
//	action: dragDrop
//	target: obj52726 
dragDrop_52729();
function dragDrop_52729() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj52726_onTouchDown_runningActionsCount = obj52726_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj52726');
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
	  	containerNode = $('#obj52649');
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
    	window.obj52726_onTouchDown_runningActionsCount = window.obj52726_onTouchDown_runningActionsCount - 1;
if (window.obj52726_onTouchDown_runningActionsCount < 0) {
	window.obj52726_onTouchDown_runningActionsCount = 0;
} else if (window.obj52726_onTouchDown_runningActionsCount == 0) {
	obj52726_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52635","#obj52639","#obj52631");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_52729 = false;
    	var dropped_id_52729;
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
					dropped_52729 = true;
					dropped_id_52729 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_52729) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj52726").trigger('SCActionDragDrop52729_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj52726_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52726_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj52726 
move_92793();
function move_92793() {
	window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount = obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj52726");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 330;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount = window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj52726_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52752();
function runjs_52752() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52753();
function runjs_52753() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("border-color", "#C00000"); $("#obj52631").css("border-width", "2px"); $("#obj52631").css("border-style", "solid"); $("#obj52631").css("border-radius", "10px"); $("#obj52631").css("-webkit-border-radius", "10px"); $("#obj52631").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52696 
hide_52754();
function hide_52754() {
	var selector = "#obj52696";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52754(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52726_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52755();
function runjs_52755() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52726").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52756();
function switchText_52756() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj52726_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52726 
move_52757();
function move_52757() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj52726");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 330;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj52726_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_52758();
function runjs_52758() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_52759();
function runjs_52759() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52631").css("border-color", "#000000"); $("#obj52631").css("border-width", "1px"); $("#obj52631").css("border-style", "solid"); $("#obj52631").css("border-radius", "0px"); $("#obj52631").css("-webkit-border-radius", "0px"); $("#obj52631").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52696
(function(){
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52696";
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
					window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52726_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_52761();
function runjs_52761() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52726").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_52762();
function runjs_52762() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52726").css("border-color", "rgba(0,0,0,0)"); $("#obj52726").css("border-width", "0px"); $("#obj52726").css("border-style", "solid"); $("#obj52726").css("border-radius", "10px"); $("#obj52726").css("-webkit-border-radius", "10px"); $("#obj52726").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52619 
playAudio_52763();
function playAudio_52763() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52619")[0];
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
		    window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj52726_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_52764();
function switchText_52764() {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = obj52726_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52726_droppedInsideTargetActions_3_runningActionsCount = window.obj52726_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj52726_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj52726_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52738();
function runjs_52738() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52739();
function runjs_52739() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52639").css("border-color", "#C00000"); $("#obj52639").css("border-width", "2px"); $("#obj52639").css("border-style", "solid"); $("#obj52639").css("border-radius", "10px"); $("#obj52639").css("-webkit-border-radius", "10px"); $("#obj52639").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52692 
hide_52740();
function hide_52740() {
	var selector = "#obj52692";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52740(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52726_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52741();
function runjs_52741() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52726").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52742();
function switchText_52742() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj52726_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52726 
move_52743();
function move_52743() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj52726");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 330;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj52726_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_52744();
function runjs_52744() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52639").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_52745();
function runjs_52745() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52639").css("border-color", "#000000"); $("#obj52639").css("border-width", "1px"); $("#obj52639").css("border-style", "solid"); $("#obj52639").css("border-radius", "0px"); $("#obj52639").css("-webkit-border-radius", "0px"); $("#obj52639").css("-moz-border-radius", "0px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52692
(function(){
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52692";
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
					window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52726_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_52747();
function runjs_52747() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52726").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_52748();
function runjs_52748() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52726").css("border-color", "rgba(0,0,0,0)"); $("#obj52726").css("border-width", "0px"); $("#obj52726").css("border-style", "solid"); $("#obj52726").css("border-radius", "10px"); $("#obj52726").css("-webkit-border-radius", "10px"); $("#obj52726").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52619 
playAudio_52749();
function playAudio_52749() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52619")[0];
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
		    window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj52726_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_52750();
function switchText_52750() {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = obj52726_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52726_droppedInsideTargetActions_2_runningActionsCount = window.obj52726_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj52726_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj52726_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52731();
function runjs_52731() {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = obj52726_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52635").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52732();
function runjs_52732() {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = obj52726_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52635").css("border-color", "#058E3F"); $("#obj52635").css("border-width", "2px"); $("#obj52635").css("border-style", "solid"); $("#obj52635").css("border-radius", "10px"); $("#obj52635").css("-webkit-border-radius", "10px"); $("#obj52635").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52694 
hide_52733();
function hide_52733() {
	var selector = "#obj52694";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52726_droppedInsideTargetActions_runningActionsCount = obj52726_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52733(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52726_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52734();
function runjs_52734() {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = obj52726_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52726").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj52726_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52735();
function switchText_52735() {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = obj52726_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52623_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52623_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52623").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52623_content");
			setTimeout(function () {
				window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52623 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj52726_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52621 
playAudio_52736();
function playAudio_52736() {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = obj52726_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52621")[0];
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
		    window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52726_droppedInsideTargetActions_runningActionsCount = window.obj52726_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52726_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52726_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52726_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52726_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj52726_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52726").trigger("obj52726_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52726) {
				console.warn("de-queueing event obj52726." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52726").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52726_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj68014_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68014_onTap_activeActionGroupIndex = -1;
		$("#obj68014").trigger("obj68014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68014) {
				console.warn("de-queueing event obj68014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68014_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68014 
hide_68017();
function hide_68017() {
	var selector = "#obj68014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68014_onTap_runningActionsCount = obj68014_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68014_onTap_runningActionsCount = window.obj68014_onTap_runningActionsCount - 1;
if (window.obj68014_onTap_runningActionsCount < 0) {
	window.obj68014_onTap_runningActionsCount = 0;
} else if (window.obj68014_onTap_runningActionsCount == 0) {
	obj68014_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68017(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68014_onTap_runningActionsCount = window.obj68014_onTap_runningActionsCount - 1;
if (window.obj68014_onTap_runningActionsCount < 0) {
	window.obj68014_onTap_runningActionsCount = 0;
} else if (window.obj68014_onTap_runningActionsCount == 0) {
	obj68014_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68020 
stopMovie_68016();
function stopMovie_68016() {
	window.obj68014_onTap_runningActionsCount = obj68014_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68020")[0];
	myVideo.pause();
	window.obj68014_onTap_runningActionsCount = window.obj68014_onTap_runningActionsCount - 1;
if (window.obj68014_onTap_runningActionsCount < 0) {
	window.obj68014_onTap_runningActionsCount = 0;
} else if (window.obj68014_onTap_runningActionsCount == 0) {
	obj68014_onTap_actionGroup1();
}
}
















};
obj68014_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68014_onTap_activeActionGroupIndex = -1;
		$("#obj68014").trigger("obj68014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68014) {
				console.warn("de-queueing event obj68014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68014_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68006
(function(){
	window.obj68014_onTap_runningActionsCount = obj68014_onTap_runningActionsCount + 1;

	var selector = "#obj68006";
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
					window.obj68014_onTap_runningActionsCount = window.obj68014_onTap_runningActionsCount - 1;
if (window.obj68014_onTap_runningActionsCount < 0) {
	window.obj68014_onTap_runningActionsCount = 0;
} else if (window.obj68014_onTap_runningActionsCount == 0) {
	obj68014_onTap_actionGroup2();
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
				window.obj68014_onTap_runningActionsCount = window.obj68014_onTap_runningActionsCount - 1;
if (window.obj68014_onTap_runningActionsCount < 0) {
	window.obj68014_onTap_runningActionsCount = 0;
} else if (window.obj68014_onTap_runningActionsCount == 0) {
	obj68014_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68014_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68014_onTap_activeActionGroupIndex = -1;
		$("#obj68014").trigger("obj68014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68014) {
				console.warn("de-queueing event obj68014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68014_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68020 
move_68019();
function move_68019() {
	window.obj68014_onTap_runningActionsCount = obj68014_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68020");
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
			window.obj68014_onTap_runningActionsCount = window.obj68014_onTap_runningActionsCount - 1;
if (window.obj68014_onTap_runningActionsCount < 0) {
	window.obj68014_onTap_runningActionsCount = 0;
} else if (window.obj68014_onTap_runningActionsCount == 0) {
	obj68014_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68014_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68014_onTap_activeActionGroupIndex = -1;
		$("#obj68014").trigger("obj68014_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68014) {
				console.warn("de-queueing event obj68014." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68014").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68014_onTap_activeActionGroupIndex = 3;
	





















};
obj68006_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68006_onTap_activeActionGroupIndex = -1;
		$("#obj68006").trigger("obj68006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68006) {
				console.warn("de-queueing event obj68006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68006_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj68006 
hide_68009();
function hide_68009() {
	var selector = "#obj68006";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj68006_onTap_runningActionsCount = obj68006_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj68006_onTap_runningActionsCount = window.obj68006_onTap_runningActionsCount - 1;
if (window.obj68006_onTap_runningActionsCount < 0) {
	window.obj68006_onTap_runningActionsCount = 0;
} else if (window.obj68006_onTap_runningActionsCount == 0) {
	obj68006_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68009(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj68006_onTap_runningActionsCount = window.obj68006_onTap_runningActionsCount - 1;
if (window.obj68006_onTap_runningActionsCount < 0) {
	window.obj68006_onTap_runningActionsCount = 0;
} else if (window.obj68006_onTap_runningActionsCount == 0) {
	obj68006_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68020 
playPauseMovie_68008();
function playPauseMovie_68008() {
	window.obj68006_onTap_runningActionsCount = obj68006_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68020")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj68006_onTap_runningActionsCount = window.obj68006_onTap_runningActionsCount - 1;
if (window.obj68006_onTap_runningActionsCount < 0) {
	window.obj68006_onTap_runningActionsCount = 0;
} else if (window.obj68006_onTap_runningActionsCount == 0) {
	obj68006_onTap_actionGroup1();
}
}

















};
obj68006_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68006_onTap_activeActionGroupIndex = -1;
		$("#obj68006").trigger("obj68006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68006) {
				console.warn("de-queueing event obj68006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68006_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj68014
(function(){
	window.obj68006_onTap_runningActionsCount = obj68006_onTap_runningActionsCount + 1;

	var selector = "#obj68014";
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
					window.obj68006_onTap_runningActionsCount = window.obj68006_onTap_runningActionsCount - 1;
if (window.obj68006_onTap_runningActionsCount < 0) {
	window.obj68006_onTap_runningActionsCount = 0;
} else if (window.obj68006_onTap_runningActionsCount == 0) {
	obj68006_onTap_actionGroup2();
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
				window.obj68006_onTap_runningActionsCount = window.obj68006_onTap_runningActionsCount - 1;
if (window.obj68006_onTap_runningActionsCount < 0) {
	window.obj68006_onTap_runningActionsCount = 0;
} else if (window.obj68006_onTap_runningActionsCount == 0) {
	obj68006_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj68006_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj68006_onTap_activeActionGroupIndex = -1;
		$("#obj68006").trigger("obj68006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68006) {
				console.warn("de-queueing event obj68006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68006_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68020 
move_68011();
function move_68011() {
	window.obj68006_onTap_runningActionsCount = obj68006_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68020");
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
			window.obj68006_onTap_runningActionsCount = window.obj68006_onTap_runningActionsCount - 1;
if (window.obj68006_onTap_runningActionsCount < 0) {
	window.obj68006_onTap_runningActionsCount = 0;
} else if (window.obj68006_onTap_runningActionsCount == 0) {
	obj68006_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj68006_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj68006_onTap_activeActionGroupIndex = -1;
		$("#obj68006").trigger("obj68006_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 68006) {
				console.warn("de-queueing event obj68006." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj68006").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj68006_onTap_activeActionGroupIndex = 3;
	





















};
obj89125_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89125_onTap_activeActionGroupIndex = -1;
		$("#obj89125").trigger("obj89125_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89125) {
				console.warn("de-queueing event obj89125." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89125").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89125_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89130 
stopAudio_89127();
function stopAudio_89127() {
	window.obj89125_onTap_runningActionsCount = obj89125_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89130")[0];
	myAudio.pause();
	window.obj89125_onTap_runningActionsCount = window.obj89125_onTap_runningActionsCount - 1;
if (window.obj89125_onTap_runningActionsCount < 0) {
	window.obj89125_onTap_runningActionsCount = 0;
} else if (window.obj89125_onTap_runningActionsCount == 0) {
	obj89125_onTap_actionGroup1();
}
}








};
obj89125_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89125_onTap_activeActionGroupIndex = -1;
		$("#obj89125").trigger("obj89125_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89125) {
				console.warn("de-queueing event obj89125." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89125").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89125_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89125 
hide_89128();
function hide_89128() {
	var selector = "#obj89125";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89125_onTap_runningActionsCount = obj89125_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89125_onTap_runningActionsCount = window.obj89125_onTap_runningActionsCount - 1;
if (window.obj89125_onTap_runningActionsCount < 0) {
	window.obj89125_onTap_runningActionsCount = 0;
} else if (window.obj89125_onTap_runningActionsCount == 0) {
	obj89125_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89128(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89125_onTap_runningActionsCount = window.obj89125_onTap_runningActionsCount - 1;
if (window.obj89125_onTap_runningActionsCount < 0) {
	window.obj89125_onTap_runningActionsCount = 0;
} else if (window.obj89125_onTap_runningActionsCount == 0) {
	obj89125_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89125_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89125_onTap_activeActionGroupIndex = -1;
		$("#obj89125").trigger("obj89125_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89125) {
				console.warn("de-queueing event obj89125." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89125").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89125_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89120
(function(){
	window.obj89125_onTap_runningActionsCount = obj89125_onTap_runningActionsCount + 1;

	var selector = "#obj89120";
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
					window.obj89125_onTap_runningActionsCount = window.obj89125_onTap_runningActionsCount - 1;
if (window.obj89125_onTap_runningActionsCount < 0) {
	window.obj89125_onTap_runningActionsCount = 0;
} else if (window.obj89125_onTap_runningActionsCount == 0) {
	obj89125_onTap_actionGroup3();
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
				window.obj89125_onTap_runningActionsCount = window.obj89125_onTap_runningActionsCount - 1;
if (window.obj89125_onTap_runningActionsCount < 0) {
	window.obj89125_onTap_runningActionsCount = 0;
} else if (window.obj89125_onTap_runningActionsCount == 0) {
	obj89125_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89125_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89125_onTap_activeActionGroupIndex = -1;
		$("#obj89125").trigger("obj89125_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89125) {
				console.warn("de-queueing event obj89125." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89125").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89125_onTap_activeActionGroupIndex = 3;
	





















};
obj89120_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89120_onTap_activeActionGroupIndex = -1;
		$("#obj89120").trigger("obj89120_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89120) {
				console.warn("de-queueing event obj89120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89120_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89120 
hide_89122();
function hide_89122() {
	var selector = "#obj89120";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89120_onTap_runningActionsCount = obj89120_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89120_onTap_runningActionsCount = window.obj89120_onTap_runningActionsCount - 1;
if (window.obj89120_onTap_runningActionsCount < 0) {
	window.obj89120_onTap_runningActionsCount = 0;
} else if (window.obj89120_onTap_runningActionsCount == 0) {
	obj89120_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89122(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89120_onTap_runningActionsCount = window.obj89120_onTap_runningActionsCount - 1;
if (window.obj89120_onTap_runningActionsCount < 0) {
	window.obj89120_onTap_runningActionsCount = 0;
} else if (window.obj89120_onTap_runningActionsCount == 0) {
	obj89120_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89120_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89120_onTap_activeActionGroupIndex = -1;
		$("#obj89120").trigger("obj89120_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89120) {
				console.warn("de-queueing event obj89120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89120_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89125
(function(){
	window.obj89120_onTap_runningActionsCount = obj89120_onTap_runningActionsCount + 1;

	var selector = "#obj89125";
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
					window.obj89120_onTap_runningActionsCount = window.obj89120_onTap_runningActionsCount - 1;
if (window.obj89120_onTap_runningActionsCount < 0) {
	window.obj89120_onTap_runningActionsCount = 0;
} else if (window.obj89120_onTap_runningActionsCount == 0) {
	obj89120_onTap_actionGroup2();
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
				window.obj89120_onTap_runningActionsCount = window.obj89120_onTap_runningActionsCount - 1;
if (window.obj89120_onTap_runningActionsCount < 0) {
	window.obj89120_onTap_runningActionsCount = 0;
} else if (window.obj89120_onTap_runningActionsCount == 0) {
	obj89120_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89120_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89120_onTap_activeActionGroupIndex = -1;
		$("#obj89120").trigger("obj89120_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89120) {
				console.warn("de-queueing event obj89120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89120_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89130 
playAudio_89124();
function playAudio_89124() {
	window.obj89120_onTap_runningActionsCount = obj89120_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89130")[0];
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
		    window.obj89120_onTap_runningActionsCount = window.obj89120_onTap_runningActionsCount - 1;
if (window.obj89120_onTap_runningActionsCount < 0) {
	window.obj89120_onTap_runningActionsCount = 0;
} else if (window.obj89120_onTap_runningActionsCount == 0) {
	obj89120_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89120_onTap_runningActionsCount = window.obj89120_onTap_runningActionsCount - 1;
if (window.obj89120_onTap_runningActionsCount < 0) {
	window.obj89120_onTap_runningActionsCount = 0;
} else if (window.obj89120_onTap_runningActionsCount == 0) {
	obj89120_onTap_actionGroup3();
}
	}
}









};
obj89120_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89120_onTap_activeActionGroupIndex = -1;
		$("#obj89120").trigger("obj89120_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89120) {
				console.warn("de-queueing event obj89120." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89120").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89120_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj52664: Event Touch Down
 *
 */
$("#obj52664").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52664_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52664_onTap is still running");
	return;
}
var obj52664_onTap_runningActionsCount = 0;
var obj52664_onTap_loopCount = 0;
obj52664_onTap_actionGroup0();
});










/*
 *
 *   obj52661: Event Touch Down
 *
 */
$("#obj52661").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52661_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52661_onTap is still running");
	return;
}
var obj52661_onTap_runningActionsCount = 0;
var obj52661_onTap_loopCount = 0;
obj52661_onTap_actionGroup0();
});










/*
 *
 *   obj52657: Event Touch Down
 *
 */
$("#obj52657").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52657_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52657_onTap is still running");
	return;
}
var obj52657_onTap_runningActionsCount = 0;
var obj52657_onTap_loopCount = 0;
obj52657_onTap_actionGroup0();
});

























































































































































































































































































/*
 *
 *   obj52807: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj52807");
	var winTarget = document.getElementById("obj52807");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj52807").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj52807_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj52807_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj52807_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52807_onTouchDown is still running");
	return;
}
var obj52807_onTouchDown_runningActionsCount = 0;
var obj52807_onTouchDown_loopCount = 0;
obj52807_onTouchDown_actionGroup0();
});



/*
 *
 *   obj52807: Event SCActionDragDrop52810_droppedOutsideTargetActions
 *
 */
$("#obj52807").bind("SCActionDragDrop52810_droppedOutsideTargetActions", function(event) {
	if (window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52807_SCActionDragDrop52810_droppedOutsideTargetActions is still running");
	return;
}
var obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_loopCount = 0;
obj52807_SCActionDragDrop52810_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj52807: Event droppedInsideTargetActions_3
 *
 */
$("#obj52807").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj52807_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52807_droppedInsideTargetActions_3 is still running");
	return;
}
var obj52807_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj52807_droppedInsideTargetActions_3_loopCount = 0;
obj52807_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj52807: Event droppedInsideTargetActions_2
 *
 */
$("#obj52807").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj52807_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52807_droppedInsideTargetActions_2 is still running");
	return;
}
var obj52807_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52807_droppedInsideTargetActions_2_loopCount = 0;
obj52807_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj52807: Event droppedInsideTargetActions
 *
 */
$("#obj52807").bind("droppedInsideTargetActions", function(event) {
	if (window.obj52807_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52807_droppedInsideTargetActions is still running");
	return;
}
var obj52807_droppedInsideTargetActions_runningActionsCount = 0;
var obj52807_droppedInsideTargetActions_loopCount = 0;
obj52807_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj52969: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj52969");
	var winTarget = document.getElementById("obj52969");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj52969").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj52969_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj52969_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj52969_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52969_onTouchDown is still running");
	return;
}
var obj52969_onTouchDown_runningActionsCount = 0;
var obj52969_onTouchDown_loopCount = 0;
obj52969_onTouchDown_actionGroup0();
});



/*
 *
 *   obj52969: Event SCActionDragDrop52972_droppedOutsideTargetActions
 *
 */
$("#obj52969").bind("SCActionDragDrop52972_droppedOutsideTargetActions", function(event) {
	if (window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52969_SCActionDragDrop52972_droppedOutsideTargetActions is still running");
	return;
}
var obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_loopCount = 0;
obj52969_SCActionDragDrop52972_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj52969: Event droppedInsideTargetActions_3
 *
 */
$("#obj52969").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj52969_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52969_droppedInsideTargetActions_3 is still running");
	return;
}
var obj52969_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj52969_droppedInsideTargetActions_3_loopCount = 0;
obj52969_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj52969: Event droppedInsideTargetActions_2
 *
 */
$("#obj52969").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj52969_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52969_droppedInsideTargetActions_2 is still running");
	return;
}
var obj52969_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52969_droppedInsideTargetActions_2_loopCount = 0;
obj52969_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj52969: Event droppedInsideTargetActions
 *
 */
$("#obj52969").bind("droppedInsideTargetActions", function(event) {
	if (window.obj52969_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52969_droppedInsideTargetActions is still running");
	return;
}
var obj52969_droppedInsideTargetActions_runningActionsCount = 0;
var obj52969_droppedInsideTargetActions_loopCount = 0;
obj52969_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj52726: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj52726");
	var winTarget = document.getElementById("obj52726");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj52726").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj52726_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj52726_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj52726_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52726_onTouchDown is still running");
	return;
}
var obj52726_onTouchDown_runningActionsCount = 0;
var obj52726_onTouchDown_loopCount = 0;
obj52726_onTouchDown_actionGroup0();
});



/*
 *
 *   obj52726: Event SCActionDragDrop52729_droppedOutsideTargetActions
 *
 */
$("#obj52726").bind("SCActionDragDrop52729_droppedOutsideTargetActions", function(event) {
	if (window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52726_SCActionDragDrop52729_droppedOutsideTargetActions is still running");
	return;
}
var obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_loopCount = 0;
obj52726_SCActionDragDrop52729_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj52726: Event droppedInsideTargetActions_3
 *
 */
$("#obj52726").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj52726_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52726_droppedInsideTargetActions_3 is still running");
	return;
}
var obj52726_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj52726_droppedInsideTargetActions_3_loopCount = 0;
obj52726_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj52726: Event droppedInsideTargetActions_2
 *
 */
$("#obj52726").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj52726_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52726_droppedInsideTargetActions_2 is still running");
	return;
}
var obj52726_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52726_droppedInsideTargetActions_2_loopCount = 0;
obj52726_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj52726: Event droppedInsideTargetActions
 *
 */
$("#obj52726").bind("droppedInsideTargetActions", function(event) {
	if (window.obj52726_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52726_droppedInsideTargetActions is still running");
	return;
}
var obj52726_droppedInsideTargetActions_runningActionsCount = 0;
var obj52726_droppedInsideTargetActions_loopCount = 0;
obj52726_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj68014: Event Touch Down
 *
 */
$("#obj68014").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68014_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68014_onTap is still running");
	return;
}
var obj68014_onTap_runningActionsCount = 0;
var obj68014_onTap_loopCount = 0;
obj68014_onTap_actionGroup0();
});










/*
 *
 *   obj68006: Event Touch Down
 *
 */
$("#obj68006").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj68006_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj68006_onTap is still running");
	return;
}
var obj68006_onTap_runningActionsCount = 0;
var obj68006_onTap_loopCount = 0;
obj68006_onTap_actionGroup0();
});










/*
 *
 *   obj89125: Event Touch Down
 *
 */
$("#obj89125").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89125_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89125_onTap is still running");
	return;
}
var obj89125_onTap_runningActionsCount = 0;
var obj89125_onTap_loopCount = 0;
obj89125_onTap_actionGroup0();
});










/*
 *
 *   obj89120: Event Touch Down
 *
 */
$("#obj89120").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89120_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89120_onTap is still running");
	return;
}
var obj89120_onTap_runningActionsCount = 0;
var obj89120_onTap_loopCount = 0;
obj89120_onTap_actionGroup0();
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
	
$("#obj52680").trigger('SCEventShow');
$("#obj52664").trigger('SCEventShow');
$("#obj52661").trigger('SCEventShow');
$("#obj52657").trigger('SCEventShow');
$("#obj52655").trigger('SCEventShow');
$("#obj52653").trigger('SCEventShow');
$("#obj52651").trigger('SCEventShow');
$("#obj52649").trigger('SCEventShow');
$("#obj52647").trigger('SCEventShow');
$("#obj52645").trigger('SCEventShow');
$("#obj52643").trigger('SCEventShow');
$("#obj52641").trigger('SCEventShow');
$("#obj52639").trigger('SCEventShow');
$("#obj52637").trigger('SCEventShow');
$("#obj52635").trigger('SCEventShow');
$("#obj52633").trigger('SCEventShow');
$("#obj52631").trigger('SCEventShow');
$("#obj52629").trigger('SCEventShow');
$("#obj52627").trigger('SCEventShow');
$("#obj52625").trigger('SCEventShow');
$("#obj52623").trigger('SCEventShow');
$("#obj52621").trigger('SCEventShow');
$("#obj52619").trigger('SCEventShow');
$("#obj52684").trigger('SCEventShow');
$("#obj52682").trigger('SCEventShow');
$("#obj52686").trigger('SCEventShow');
$("#obj52688").trigger('SCEventShow');
$("#obj52690").trigger('SCEventShow');
$("#obj52692").trigger('SCEventShow');
$("#obj52694").trigger('SCEventShow');
$("#obj52696").trigger('SCEventShow');
$("#obj52807").trigger('SCEventShow');
$("#obj52969").trigger('SCEventShow');
$("#obj52726").trigger('SCEventShow');
$("#obj68014").trigger('SCEventShow');
$("#obj68006").trigger('SCEventShow');
$("#obj89125").trigger('SCEventShow');
$("#obj89120").trigger('SCEventShow');
$("#obj89130").trigger('SCEventShow');
$("#obj95003").trigger('SCEventShow');
$("#obj68020").trigger('SCEventShow');
	
});