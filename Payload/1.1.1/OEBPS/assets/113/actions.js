pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 32330;
pubcoder.page.title = pubcoder.page.title || "113";
pubcoder.page.number = pubcoder.page.number || 113;
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
var obj85179_onTap_activeActionGroupIndex = -1;
var obj85179_onTap_runningActionsCount = 0;
var obj85179_onTap_loopCount = 0;
var obj85176_onTap_activeActionGroupIndex = -1;
var obj85176_onTap_runningActionsCount = 0;
var obj85176_onTap_loopCount = 0;
var obj85172_onTap_activeActionGroupIndex = -1;
var obj85172_onTap_runningActionsCount = 0;
var obj85172_onTap_loopCount = 0;
var obj85069_onDrag_activeActionGroupIndex = -1;
var obj85069_onDrag_runningActionsCount = 0;
var obj85069_onDrag_loopCount = 0;
var obj85069_onTouchDown_activeActionGroupIndex = -1;
var obj85069_onTouchDown_runningActionsCount = 0;
var obj85069_onTouchDown_loopCount = 0;
var obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_loopCount = 0;
var obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85069_droppedInsideTargetActions_3_loopCount = 0;
var obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85069_droppedInsideTargetActions_2_loopCount = 0;
var obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85069_droppedInsideTargetActions_runningActionsCount = 0;
var obj85069_droppedInsideTargetActions_loopCount = 0;
var obj85002_onDrag_activeActionGroupIndex = -1;
var obj85002_onDrag_runningActionsCount = 0;
var obj85002_onDrag_loopCount = 0;
var obj85002_onTouchDown_activeActionGroupIndex = -1;
var obj85002_onTouchDown_runningActionsCount = 0;
var obj85002_onTouchDown_loopCount = 0;
var obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_loopCount = 0;
var obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85002_droppedInsideTargetActions_3_loopCount = 0;
var obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85002_droppedInsideTargetActions_2_loopCount = 0;
var obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj85002_droppedInsideTargetActions_runningActionsCount = 0;
var obj85002_droppedInsideTargetActions_loopCount = 0;
var obj84935_onDrag_activeActionGroupIndex = -1;
var obj84935_onDrag_runningActionsCount = 0;
var obj84935_onDrag_loopCount = 0;
var obj84935_onTouchDown_activeActionGroupIndex = -1;
var obj84935_onTouchDown_runningActionsCount = 0;
var obj84935_onTouchDown_loopCount = 0;
var obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_loopCount = 0;
var obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj84935_droppedInsideTargetActions_3_loopCount = 0;
var obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj84935_droppedInsideTargetActions_2_loopCount = 0;
var obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj84935_droppedInsideTargetActions_runningActionsCount = 0;
var obj84935_droppedInsideTargetActions_loopCount = 0;
var obj84917_onTap_activeActionGroupIndex = -1;
var obj84917_onTap_runningActionsCount = 0;
var obj84917_onTap_loopCount = 0;
var obj84909_onTap_activeActionGroupIndex = -1;
var obj84909_onTap_runningActionsCount = 0;
var obj84909_onTap_loopCount = 0;
var obj88225_onTap_activeActionGroupIndex = -1;
var obj88225_onTap_runningActionsCount = 0;
var obj88225_onTap_loopCount = 0;
var obj88220_onTap_activeActionGroupIndex = -1;
var obj88220_onTap_runningActionsCount = 0;
var obj88220_onTap_loopCount = 0;
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
		
obj85179_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85179_onTap_activeActionGroupIndex = -1;
		$("#obj85179").trigger("obj85179_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85179) {
				console.warn("de-queueing event obj85179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85179_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85181();
function goToPage_85181() {
	window.obj85179_onTap_runningActionsCount = obj85179_onTap_runningActionsCount + 1;
	$("#anchor677")[0].click();
	window.obj85179_onTap_runningActionsCount = window.obj85179_onTap_runningActionsCount - 1;
if (window.obj85179_onTap_runningActionsCount < 0) {
	window.obj85179_onTap_runningActionsCount = 0;
} else if (window.obj85179_onTap_runningActionsCount == 0) {
	obj85179_onTap_actionGroup1();
}
}





















};
obj85179_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85179_onTap_activeActionGroupIndex = -1;
		$("#obj85179").trigger("obj85179_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85179) {
				console.warn("de-queueing event obj85179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85179_onTap_activeActionGroupIndex = 1;
	





















};
obj85176_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85176_onTap_activeActionGroupIndex = -1;
		$("#obj85176").trigger("obj85176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85176) {
				console.warn("de-queueing event obj85176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85176_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85178();
function goToPage_85178() {
	window.obj85176_onTap_runningActionsCount = obj85176_onTap_runningActionsCount + 1;
	$("#anchor678")[0].click();
	window.obj85176_onTap_runningActionsCount = window.obj85176_onTap_runningActionsCount - 1;
if (window.obj85176_onTap_runningActionsCount < 0) {
	window.obj85176_onTap_runningActionsCount = 0;
} else if (window.obj85176_onTap_runningActionsCount == 0) {
	obj85176_onTap_actionGroup1();
}
}





















};
obj85176_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85176_onTap_activeActionGroupIndex = -1;
		$("#obj85176").trigger("obj85176_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85176) {
				console.warn("de-queueing event obj85176." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85176").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85176_onTap_activeActionGroupIndex = 1;
	





















};
obj85172_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85172_onTap_activeActionGroupIndex = -1;
		$("#obj85172").trigger("obj85172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85172) {
				console.warn("de-queueing event obj85172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85172_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_85174();
function goToPage_85174() {
	window.obj85172_onTap_runningActionsCount = obj85172_onTap_runningActionsCount + 1;
	$("#anchor679")[0].click();
	window.obj85172_onTap_runningActionsCount = window.obj85172_onTap_runningActionsCount - 1;
if (window.obj85172_onTap_runningActionsCount < 0) {
	window.obj85172_onTap_runningActionsCount = 0;
} else if (window.obj85172_onTap_runningActionsCount == 0) {
	obj85172_onTap_actionGroup1();
}
}





















};
obj85172_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85172_onTap_activeActionGroupIndex = -1;
		$("#obj85172").trigger("obj85172_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85172) {
				console.warn("de-queueing event obj85172." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85172").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85172_onTap_activeActionGroupIndex = 1;
	





















};
obj85069_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85069");
//	action: dragDrop
//	target: obj85069 
dragDrop_85072();
function dragDrop_85072() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85069_onTouchDown_runningActionsCount = obj85069_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85069');
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
	  	containerNode = $('#obj85162');
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
    	window.obj85069_onTouchDown_runningActionsCount = window.obj85069_onTouchDown_runningActionsCount - 1;
if (window.obj85069_onTouchDown_runningActionsCount < 0) {
	window.obj85069_onTouchDown_runningActionsCount = 0;
} else if (window.obj85069_onTouchDown_runningActionsCount == 0) {
	obj85069_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85158","#obj85156","#obj85154");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85072 = false;
    	var dropped_id_85072;
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
					dropped_85072 = true;
					dropped_id_85072 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85072) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85069").trigger('SCActionDragDrop85072_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85069_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85069_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85069 
move_92501();
function move_92501() {
	window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount = obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount = window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85069_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85095();
function runjs_85095() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85096();
function runjs_85096() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("border-color", "#C00000"); $("#obj85154").css("border-width", "2px"); $("#obj85154").css("border-style", "solid"); $("#obj85154").css("border-radius", "10px"); $("#obj85154").css("-webkit-border-radius", "10px"); $("#obj85154").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85148 
hide_85097();
function hide_85097() {
	var selector = "#obj85148";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85097(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85069_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85098();
function runjs_85098() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85099();
function switchText_85099() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85069_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85069 
move_85100();
function move_85100() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85069_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85101();
function runjs_85101() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85102();
function runjs_85102() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("border-color", "#000000"); $("#obj85154").css("border-width", "1px"); $("#obj85154").css("border-style", "solid"); $("#obj85154").css("border-radius", "10px"); $("#obj85154").css("-webkit-border-radius", "10px"); $("#obj85154").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85148
(function(){
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85148";
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
					window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85069_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85104();
function runjs_85104() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85069").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85105();
function runjs_85105() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85069").css("border-color", "rgba(0,0,0,0)"); $("#obj85069").css("border-width", "0px"); $("#obj85069").css("border-style", "solid"); $("#obj85069").css("border-radius", "10px"); $("#obj85069").css("-webkit-border-radius", "10px"); $("#obj85069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85140 
playAudio_85106();
function playAudio_85106() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85140")[0];
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
		    window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85069_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85107();
function switchText_85107() {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = obj85069_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85069_droppedInsideTargetActions_3_runningActionsCount = window.obj85069_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85069_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85069_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85081();
function runjs_85081() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85156").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85082();
function runjs_85082() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85156").css("border-color", "#C00000"); $("#obj85156").css("border-width", "2px"); $("#obj85156").css("border-style", "solid"); $("#obj85156").css("border-radius", "10px"); $("#obj85156").css("-webkit-border-radius", "10px"); $("#obj85156").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85150 
hide_85083();
function hide_85083() {
	var selector = "#obj85150";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85083(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85069_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85084();
function runjs_85084() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85085();
function switchText_85085() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85069_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85069 
move_85086();
function move_85086() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85069");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 78;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85069_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85087();
function runjs_85087() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85156").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85088();
function runjs_85088() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85156").css("border-color", "#000000"); $("#obj85156").css("border-width", "1px"); $("#obj85156").css("border-style", "solid"); $("#obj85156").css("border-radius", "10px"); $("#obj85156").css("-webkit-border-radius", "10px"); $("#obj85156").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85150
(function(){
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85150";
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
					window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85069_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85090();
function runjs_85090() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85069").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85091();
function runjs_85091() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85069").css("border-color", "rgba(0,0,0,0)"); $("#obj85069").css("border-width", "0px"); $("#obj85069").css("border-style", "solid"); $("#obj85069").css("border-radius", "10px"); $("#obj85069").css("-webkit-border-radius", "10px"); $("#obj85069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85140 
playAudio_85092();
function playAudio_85092() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85140")[0];
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
		    window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85069_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85093();
function switchText_85093() {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = obj85069_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85069_droppedInsideTargetActions_2_runningActionsCount = window.obj85069_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85069_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85069_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85074();
function runjs_85074() {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85158").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85078();
function switchText_85078() {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85069_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85075();
function runjs_85075() {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85158").css("border-color", "#058E3F"); $("#obj85158").css("border-width", "2px"); $("#obj85158").css("border-style", "solid"); $("#obj85158").css("border-radius", "10px"); $("#obj85158").css("-webkit-border-radius", "10px"); $("#obj85158").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85152 
hide_85076();
function hide_85076() {
	var selector = "#obj85152";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85076(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85069_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85077();
function runjs_85077() {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85069").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85069_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85144 
playAudio_85079();
function playAudio_85079() {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85144")[0];
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
		    window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85069_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90408();
function switchText_90408() {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = obj85069_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85069_droppedInsideTargetActions_runningActionsCount = window.obj85069_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85069_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85069_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85069_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85069_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85069_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85069").trigger("obj85069_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85069) {
				console.warn("de-queueing event obj85069." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85069").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85069_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj85002_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj85002");
//	action: dragDrop
//	target: obj85002 
dragDrop_85005();
function dragDrop_85005() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj85002_onTouchDown_runningActionsCount = obj85002_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj85002');
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
	  	containerNode = $('#obj85162');
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
    	window.obj85002_onTouchDown_runningActionsCount = window.obj85002_onTouchDown_runningActionsCount - 1;
if (window.obj85002_onTouchDown_runningActionsCount < 0) {
	window.obj85002_onTouchDown_runningActionsCount = 0;
} else if (window.obj85002_onTouchDown_runningActionsCount == 0) {
	obj85002_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85156","#obj85158","#obj85154");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_85005 = false;
    	var dropped_id_85005;
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
					dropped_85005 = true;
					dropped_id_85005 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_85005) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj85002").trigger('SCActionDragDrop85005_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj85002_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85002_onTouchDown_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj85002 
move_92505();
function move_92505() {
	window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount = obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj85002");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 327;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount = window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj85002_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85028();
function runjs_85028() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85029();
function runjs_85029() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("border-color", "#C00000"); $("#obj85154").css("border-width", "2px"); $("#obj85154").css("border-style", "solid"); $("#obj85154").css("border-radius", "10px"); $("#obj85154").css("-webkit-border-radius", "10px"); $("#obj85154").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85148 
hide_85030();
function hide_85030() {
	var selector = "#obj85148";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85030(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85002_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85031();
function runjs_85031() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85002").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85032();
function switchText_85032() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj85002_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85002 
move_85033();
function move_85033() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj85002");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 327;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj85002_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85034();
function runjs_85034() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85035();
function runjs_85035() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85154").css("border-color", "#000000"); $("#obj85154").css("border-width", "1px"); $("#obj85154").css("border-style", "solid"); $("#obj85154").css("border-radius", "10px"); $("#obj85154").css("-webkit-border-radius", "10px"); $("#obj85154").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85148
(function(){
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85148";
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
					window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85002_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85037();
function runjs_85037() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85002").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85038();
function runjs_85038() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85002").css("border-color", "rgba(0,0,0,0)"); $("#obj85002").css("border-width", "0px"); $("#obj85002").css("border-style", "solid"); $("#obj85002").css("border-radius", "10px"); $("#obj85002").css("-webkit-border-radius", "10px"); $("#obj85002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85140 
playAudio_85039();
function playAudio_85039() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85140")[0];
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
		    window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj85002_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85040();
function switchText_85040() {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = obj85002_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85002_droppedInsideTargetActions_3_runningActionsCount = window.obj85002_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj85002_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj85002_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85014();
function runjs_85014() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_85015();
function runjs_85015() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("border-color", "#C00000"); $("#obj85158").css("border-width", "2px"); $("#obj85158").css("border-style", "solid"); $("#obj85158").css("border-radius", "10px"); $("#obj85158").css("-webkit-border-radius", "10px"); $("#obj85158").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85152 
hide_85016();
function hide_85016() {
	var selector = "#obj85152";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85016(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85002_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_85017();
function runjs_85017() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85002").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_85018();
function switchText_85018() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj85002_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj85002 
move_85019();
function move_85019() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj85002");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 327;
	var moveY = 554;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj85002_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_85020();
function runjs_85020() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_85021();
function runjs_85021() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("border-color", "#000000"); $("#obj85158").css("border-width", "1px"); $("#obj85158").css("border-style", "solid"); $("#obj85158").css("border-radius", "10px"); $("#obj85158").css("-webkit-border-radius", "10px"); $("#obj85158").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85152
(function(){
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85152";
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
					window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj85002_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_85023();
function runjs_85023() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85002").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_85024();
function runjs_85024() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85002").css("border-color", "rgba(0,0,0,0)"); $("#obj85002").css("border-width", "0px"); $("#obj85002").css("border-style", "solid"); $("#obj85002").css("border-radius", "10px"); $("#obj85002").css("-webkit-border-radius", "10px"); $("#obj85002").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85140 
playAudio_85025();
function playAudio_85025() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85140")[0];
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
		    window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj85002_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_85026();
function switchText_85026() {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = obj85002_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85002_droppedInsideTargetActions_2_runningActionsCount = window.obj85002_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj85002_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj85002_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_85007();
function runjs_85007() {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85156").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_85011();
function switchText_85011() {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj85002_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_85008();
function runjs_85008() {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85156").css("border-color", "#058E3F"); $("#obj85156").css("border-width", "2px"); $("#obj85156").css("border-style", "solid"); $("#obj85156").css("border-radius", "10px"); $("#obj85156").css("-webkit-border-radius", "10px"); $("#obj85156").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85150 
hide_85009();
function hide_85009() {
	var selector = "#obj85150";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_85009(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj85002_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_85010();
function runjs_85010() {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85002").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj85002_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85144 
playAudio_85012();
function playAudio_85012() {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85144")[0];
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
		    window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj85002_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90410();
function switchText_90410() {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = obj85002_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj85002_droppedInsideTargetActions_runningActionsCount = window.obj85002_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj85002_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj85002_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj85002_droppedInsideTargetActions_runningActionsCount == 0) {
	obj85002_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj85002_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj85002").trigger("obj85002_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 85002) {
				console.warn("de-queueing event obj85002." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj85002").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj85002_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj84935_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj84935");
//	action: dragDrop
//	target: obj84935 
dragDrop_84938();
function dragDrop_84938() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj84935_onTouchDown_runningActionsCount = obj84935_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj84935');
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
	  	containerNode = $('#obj85162');
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
    	window.obj84935_onTouchDown_runningActionsCount = window.obj84935_onTouchDown_runningActionsCount - 1;
if (window.obj84935_onTouchDown_runningActionsCount < 0) {
	window.obj84935_onTouchDown_runningActionsCount = 0;
} else if (window.obj84935_onTouchDown_runningActionsCount == 0) {
	obj84935_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj85154","#obj85158","#obj85156");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_84938 = false;
    	var dropped_id_84938;
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
					dropped_84938 = true;
					dropped_id_84938 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_84938) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj84935").trigger('SCActionDragDrop84938_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj84935_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84935_onTouchDown_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj84935 
move_92503();
function move_92503() {
	window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount = obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj84935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 209;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount = window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj84935_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84961();
function runjs_84961() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85156").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84962();
function runjs_84962() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85156").css("border-color", "#C00000"); $("#obj85156").css("border-width", "2px"); $("#obj85156").css("border-style", "solid"); $("#obj85156").css("border-radius", "10px"); $("#obj85156").css("-webkit-border-radius", "10px"); $("#obj85156").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85150 
hide_84963();
function hide_84963() {
	var selector = "#obj85150";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84963(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84935_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84964();
function runjs_84964() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84935").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84965();
function switchText_84965() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj84935_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84935 
move_84966();
function move_84966() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj84935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 209;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj84935_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84967();
function runjs_84967() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85156").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84968();
function runjs_84968() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj85156").css("border-color", "#000000"); $("#obj85156").css("border-width", "1px"); $("#obj85156").css("border-style", "solid"); $("#obj85156").css("border-radius", "10px"); $("#obj85156").css("-webkit-border-radius", "10px"); $("#obj85156").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85150
(function(){
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj85150";
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
					window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84935_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84970();
function runjs_84970() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84935").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84971();
function runjs_84971() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj84935").css("border-color", "rgba(0,0,0,0)"); $("#obj84935").css("border-width", "0px"); $("#obj84935").css("border-style", "solid"); $("#obj84935").css("border-radius", "10px"); $("#obj84935").css("-webkit-border-radius", "10px"); $("#obj84935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85140 
playAudio_84972();
function playAudio_84972() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj85140")[0];
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
		    window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj84935_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84973();
function switchText_84973() {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = obj84935_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84935_droppedInsideTargetActions_3_runningActionsCount = window.obj84935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj84935_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj84935_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84947();
function runjs_84947() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_84948();
function runjs_84948() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("border-color", "#C00000"); $("#obj85158").css("border-width", "2px"); $("#obj85158").css("border-style", "solid"); $("#obj85158").css("border-radius", "10px"); $("#obj85158").css("-webkit-border-radius", "10px"); $("#obj85158").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj85152 
hide_84949();
function hide_84949() {
	var selector = "#obj85152";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84949(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84935_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_84950();
function runjs_84950() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84935").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_84951();
function switchText_84951() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj84935_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj84935 
move_84952();
function move_84952() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj84935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 209;
	var moveY = 642;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj84935_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_84953();
function runjs_84953() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_84954();
function runjs_84954() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj85158").css("border-color", "#000000"); $("#obj85158").css("border-width", "1px"); $("#obj85158").css("border-style", "solid"); $("#obj85158").css("border-radius", "10px"); $("#obj85158").css("-webkit-border-radius", "10px"); $("#obj85158").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj85152
(function(){
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj85152";
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
					window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84935_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_84956();
function runjs_84956() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84935").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_84957();
function runjs_84957() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj84935").css("border-color", "rgba(0,0,0,0)"); $("#obj84935").css("border-width", "0px"); $("#obj84935").css("border-style", "solid"); $("#obj84935").css("border-radius", "10px"); $("#obj84935").css("-webkit-border-radius", "10px"); $("#obj84935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj85140 
playAudio_84958();
function playAudio_84958() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj85140")[0];
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
		    window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj84935_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_84959();
function switchText_84959() {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = obj84935_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84935_droppedInsideTargetActions_2_runningActionsCount = window.obj84935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj84935_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj84935_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_84940();
function runjs_84940() {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85154").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_84944();
function switchText_84944() {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj84935_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_84941();
function runjs_84941() {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj85154").css("border-color", "#058E3F"); $("#obj85154").css("border-width", "2px"); $("#obj85154").css("border-style", "solid"); $("#obj85154").css("border-radius", "10px"); $("#obj85154").css("-webkit-border-radius", "10px"); $("#obj85154").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj85148 
hide_84942();
function hide_84942() {
	var selector = "#obj85148";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84942(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj84935_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_84943();
function runjs_84943() {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj84935").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj84935_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj85144 
playAudio_84945();
function playAudio_84945() {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj85144")[0];
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
		    window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj84935_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90409();
function switchText_90409() {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = obj84935_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj85142_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj85142_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj85142").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj85142_content");
			setTimeout(function () {
				window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj85142 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj84935_droppedInsideTargetActions_runningActionsCount = window.obj84935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj84935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj84935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj84935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj84935_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj84935_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj84935").trigger("obj84935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84935) {
				console.warn("de-queueing event obj84935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84935_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj84917_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84917_onTap_activeActionGroupIndex = -1;
		$("#obj84917").trigger("obj84917_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84917) {
				console.warn("de-queueing event obj84917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84917_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj84917 
hide_84920();
function hide_84920() {
	var selector = "#obj84917";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84917_onTap_runningActionsCount = obj84917_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84917_onTap_runningActionsCount = window.obj84917_onTap_runningActionsCount - 1;
if (window.obj84917_onTap_runningActionsCount < 0) {
	window.obj84917_onTap_runningActionsCount = 0;
} else if (window.obj84917_onTap_runningActionsCount == 0) {
	obj84917_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84920(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84917_onTap_runningActionsCount = window.obj84917_onTap_runningActionsCount - 1;
if (window.obj84917_onTap_runningActionsCount < 0) {
	window.obj84917_onTap_runningActionsCount = 0;
} else if (window.obj84917_onTap_runningActionsCount == 0) {
	obj84917_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj84907 
stopMovie_84919();
function stopMovie_84919() {
	window.obj84917_onTap_runningActionsCount = obj84917_onTap_runningActionsCount + 1;
	var myVideo = $("#obj84907")[0];
	myVideo.pause();
	window.obj84917_onTap_runningActionsCount = window.obj84917_onTap_runningActionsCount - 1;
if (window.obj84917_onTap_runningActionsCount < 0) {
	window.obj84917_onTap_runningActionsCount = 0;
} else if (window.obj84917_onTap_runningActionsCount == 0) {
	obj84917_onTap_actionGroup1();
}
}
















};
obj84917_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84917_onTap_activeActionGroupIndex = -1;
		$("#obj84917").trigger("obj84917_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84917) {
				console.warn("de-queueing event obj84917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84917_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj84909
(function(){
	window.obj84917_onTap_runningActionsCount = obj84917_onTap_runningActionsCount + 1;

	var selector = "#obj84909";
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
					window.obj84917_onTap_runningActionsCount = window.obj84917_onTap_runningActionsCount - 1;
if (window.obj84917_onTap_runningActionsCount < 0) {
	window.obj84917_onTap_runningActionsCount = 0;
} else if (window.obj84917_onTap_runningActionsCount == 0) {
	obj84917_onTap_actionGroup2();
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
				window.obj84917_onTap_runningActionsCount = window.obj84917_onTap_runningActionsCount - 1;
if (window.obj84917_onTap_runningActionsCount < 0) {
	window.obj84917_onTap_runningActionsCount = 0;
} else if (window.obj84917_onTap_runningActionsCount == 0) {
	obj84917_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84917_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84917_onTap_activeActionGroupIndex = -1;
		$("#obj84917").trigger("obj84917_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84917) {
				console.warn("de-queueing event obj84917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84917_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj84907 
move_84922();
function move_84922() {
	window.obj84917_onTap_runningActionsCount = obj84917_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj84907");
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
			window.obj84917_onTap_runningActionsCount = window.obj84917_onTap_runningActionsCount - 1;
if (window.obj84917_onTap_runningActionsCount < 0) {
	window.obj84917_onTap_runningActionsCount = 0;
} else if (window.obj84917_onTap_runningActionsCount == 0) {
	obj84917_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj84917_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84917_onTap_activeActionGroupIndex = -1;
		$("#obj84917").trigger("obj84917_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84917) {
				console.warn("de-queueing event obj84917." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84917").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84917_onTap_activeActionGroupIndex = 3;
	





















};
obj84909_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84909_onTap_activeActionGroupIndex = -1;
		$("#obj84909").trigger("obj84909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84909) {
				console.warn("de-queueing event obj84909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84909_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj84909 
hide_84912();
function hide_84912() {
	var selector = "#obj84909";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj84909_onTap_runningActionsCount = obj84909_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj84909_onTap_runningActionsCount = window.obj84909_onTap_runningActionsCount - 1;
if (window.obj84909_onTap_runningActionsCount < 0) {
	window.obj84909_onTap_runningActionsCount = 0;
} else if (window.obj84909_onTap_runningActionsCount == 0) {
	obj84909_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_84912(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj84909_onTap_runningActionsCount = window.obj84909_onTap_runningActionsCount - 1;
if (window.obj84909_onTap_runningActionsCount < 0) {
	window.obj84909_onTap_runningActionsCount = 0;
} else if (window.obj84909_onTap_runningActionsCount == 0) {
	obj84909_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj84907 
playPauseMovie_84911();
function playPauseMovie_84911() {
	window.obj84909_onTap_runningActionsCount = obj84909_onTap_runningActionsCount + 1;
	var myVideo = $("#obj84907")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj84909_onTap_runningActionsCount = window.obj84909_onTap_runningActionsCount - 1;
if (window.obj84909_onTap_runningActionsCount < 0) {
	window.obj84909_onTap_runningActionsCount = 0;
} else if (window.obj84909_onTap_runningActionsCount == 0) {
	obj84909_onTap_actionGroup1();
}
}

















};
obj84909_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84909_onTap_activeActionGroupIndex = -1;
		$("#obj84909").trigger("obj84909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84909) {
				console.warn("de-queueing event obj84909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84909_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj84917
(function(){
	window.obj84909_onTap_runningActionsCount = obj84909_onTap_runningActionsCount + 1;

	var selector = "#obj84917";
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
					window.obj84909_onTap_runningActionsCount = window.obj84909_onTap_runningActionsCount - 1;
if (window.obj84909_onTap_runningActionsCount < 0) {
	window.obj84909_onTap_runningActionsCount = 0;
} else if (window.obj84909_onTap_runningActionsCount == 0) {
	obj84909_onTap_actionGroup2();
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
				window.obj84909_onTap_runningActionsCount = window.obj84909_onTap_runningActionsCount - 1;
if (window.obj84909_onTap_runningActionsCount < 0) {
	window.obj84909_onTap_runningActionsCount = 0;
} else if (window.obj84909_onTap_runningActionsCount == 0) {
	obj84909_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj84909_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj84909_onTap_activeActionGroupIndex = -1;
		$("#obj84909").trigger("obj84909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84909) {
				console.warn("de-queueing event obj84909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84909_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj84907 
move_84914();
function move_84914() {
	window.obj84909_onTap_runningActionsCount = obj84909_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj84907");
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
			window.obj84909_onTap_runningActionsCount = window.obj84909_onTap_runningActionsCount - 1;
if (window.obj84909_onTap_runningActionsCount < 0) {
	window.obj84909_onTap_runningActionsCount = 0;
} else if (window.obj84909_onTap_runningActionsCount == 0) {
	obj84909_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj84909_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj84909_onTap_activeActionGroupIndex = -1;
		$("#obj84909").trigger("obj84909_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 84909) {
				console.warn("de-queueing event obj84909." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj84909").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj84909_onTap_activeActionGroupIndex = 3;
	





















};
obj88225_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88225_onTap_activeActionGroupIndex = -1;
		$("#obj88225").trigger("obj88225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88225) {
				console.warn("de-queueing event obj88225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88225_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88230 
stopAudio_88227();
function stopAudio_88227() {
	window.obj88225_onTap_runningActionsCount = obj88225_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88230")[0];
	myAudio.pause();
	window.obj88225_onTap_runningActionsCount = window.obj88225_onTap_runningActionsCount - 1;
if (window.obj88225_onTap_runningActionsCount < 0) {
	window.obj88225_onTap_runningActionsCount = 0;
} else if (window.obj88225_onTap_runningActionsCount == 0) {
	obj88225_onTap_actionGroup1();
}
}








};
obj88225_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88225_onTap_activeActionGroupIndex = -1;
		$("#obj88225").trigger("obj88225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88225) {
				console.warn("de-queueing event obj88225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88225_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88225 
hide_88228();
function hide_88228() {
	var selector = "#obj88225";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88225_onTap_runningActionsCount = obj88225_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88225_onTap_runningActionsCount = window.obj88225_onTap_runningActionsCount - 1;
if (window.obj88225_onTap_runningActionsCount < 0) {
	window.obj88225_onTap_runningActionsCount = 0;
} else if (window.obj88225_onTap_runningActionsCount == 0) {
	obj88225_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88228(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88225_onTap_runningActionsCount = window.obj88225_onTap_runningActionsCount - 1;
if (window.obj88225_onTap_runningActionsCount < 0) {
	window.obj88225_onTap_runningActionsCount = 0;
} else if (window.obj88225_onTap_runningActionsCount == 0) {
	obj88225_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88225_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88225_onTap_activeActionGroupIndex = -1;
		$("#obj88225").trigger("obj88225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88225) {
				console.warn("de-queueing event obj88225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88225_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88220
(function(){
	window.obj88225_onTap_runningActionsCount = obj88225_onTap_runningActionsCount + 1;

	var selector = "#obj88220";
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
					window.obj88225_onTap_runningActionsCount = window.obj88225_onTap_runningActionsCount - 1;
if (window.obj88225_onTap_runningActionsCount < 0) {
	window.obj88225_onTap_runningActionsCount = 0;
} else if (window.obj88225_onTap_runningActionsCount == 0) {
	obj88225_onTap_actionGroup3();
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
				window.obj88225_onTap_runningActionsCount = window.obj88225_onTap_runningActionsCount - 1;
if (window.obj88225_onTap_runningActionsCount < 0) {
	window.obj88225_onTap_runningActionsCount = 0;
} else if (window.obj88225_onTap_runningActionsCount == 0) {
	obj88225_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88225_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88225_onTap_activeActionGroupIndex = -1;
		$("#obj88225").trigger("obj88225_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88225) {
				console.warn("de-queueing event obj88225." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88225").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88225_onTap_activeActionGroupIndex = 3;
	





















};
obj88220_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88220_onTap_activeActionGroupIndex = -1;
		$("#obj88220").trigger("obj88220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88220) {
				console.warn("de-queueing event obj88220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88220_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88220 
hide_88222();
function hide_88222() {
	var selector = "#obj88220";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88220_onTap_runningActionsCount = obj88220_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88220_onTap_runningActionsCount = window.obj88220_onTap_runningActionsCount - 1;
if (window.obj88220_onTap_runningActionsCount < 0) {
	window.obj88220_onTap_runningActionsCount = 0;
} else if (window.obj88220_onTap_runningActionsCount == 0) {
	obj88220_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88222(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88220_onTap_runningActionsCount = window.obj88220_onTap_runningActionsCount - 1;
if (window.obj88220_onTap_runningActionsCount < 0) {
	window.obj88220_onTap_runningActionsCount = 0;
} else if (window.obj88220_onTap_runningActionsCount == 0) {
	obj88220_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88220_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88220_onTap_activeActionGroupIndex = -1;
		$("#obj88220").trigger("obj88220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88220) {
				console.warn("de-queueing event obj88220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88220_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88225
(function(){
	window.obj88220_onTap_runningActionsCount = obj88220_onTap_runningActionsCount + 1;

	var selector = "#obj88225";
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
					window.obj88220_onTap_runningActionsCount = window.obj88220_onTap_runningActionsCount - 1;
if (window.obj88220_onTap_runningActionsCount < 0) {
	window.obj88220_onTap_runningActionsCount = 0;
} else if (window.obj88220_onTap_runningActionsCount == 0) {
	obj88220_onTap_actionGroup2();
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
				window.obj88220_onTap_runningActionsCount = window.obj88220_onTap_runningActionsCount - 1;
if (window.obj88220_onTap_runningActionsCount < 0) {
	window.obj88220_onTap_runningActionsCount = 0;
} else if (window.obj88220_onTap_runningActionsCount == 0) {
	obj88220_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88220_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88220_onTap_activeActionGroupIndex = -1;
		$("#obj88220").trigger("obj88220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88220) {
				console.warn("de-queueing event obj88220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88220_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88230 
playAudio_88224();
function playAudio_88224() {
	window.obj88220_onTap_runningActionsCount = obj88220_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88230")[0];
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
		    window.obj88220_onTap_runningActionsCount = window.obj88220_onTap_runningActionsCount - 1;
if (window.obj88220_onTap_runningActionsCount < 0) {
	window.obj88220_onTap_runningActionsCount = 0;
} else if (window.obj88220_onTap_runningActionsCount == 0) {
	obj88220_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88220_onTap_runningActionsCount = window.obj88220_onTap_runningActionsCount - 1;
if (window.obj88220_onTap_runningActionsCount < 0) {
	window.obj88220_onTap_runningActionsCount = 0;
} else if (window.obj88220_onTap_runningActionsCount == 0) {
	obj88220_onTap_actionGroup3();
}
	}
}









};
obj88220_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88220_onTap_activeActionGroupIndex = -1;
		$("#obj88220").trigger("obj88220_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88220) {
				console.warn("de-queueing event obj88220." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88220").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88220_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj85179: Event Touch Down
 *
 */
$("#obj85179").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85179_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85179_onTap is still running");
	return;
}
var obj85179_onTap_runningActionsCount = 0;
var obj85179_onTap_loopCount = 0;
obj85179_onTap_actionGroup0();
});










/*
 *
 *   obj85176: Event Touch Down
 *
 */
$("#obj85176").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85176_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85176_onTap is still running");
	return;
}
var obj85176_onTap_runningActionsCount = 0;
var obj85176_onTap_loopCount = 0;
obj85176_onTap_actionGroup0();
});










/*
 *
 *   obj85172: Event Touch Down
 *
 */
$("#obj85172").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj85172_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85172_onTap is still running");
	return;
}
var obj85172_onTap_runningActionsCount = 0;
var obj85172_onTap_loopCount = 0;
obj85172_onTap_actionGroup0();
});































































































































































































/*
 *
 *   obj85069: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85069");
	var winTarget = document.getElementById("obj85069");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85069").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85069_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85069_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85069_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85069_onTouchDown is still running");
	return;
}
var obj85069_onTouchDown_runningActionsCount = 0;
var obj85069_onTouchDown_loopCount = 0;
obj85069_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85069: Event SCActionDragDrop85072_droppedOutsideTargetActions
 *
 */
$("#obj85069").bind("SCActionDragDrop85072_droppedOutsideTargetActions", function(event) {
	if (window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85069_SCActionDragDrop85072_droppedOutsideTargetActions is still running");
	return;
}
var obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_loopCount = 0;
obj85069_SCActionDragDrop85072_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85069: Event droppedInsideTargetActions_3
 *
 */
$("#obj85069").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85069_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85069_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85069_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85069_droppedInsideTargetActions_3_loopCount = 0;
obj85069_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85069: Event droppedInsideTargetActions_2
 *
 */
$("#obj85069").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85069_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85069_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85069_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85069_droppedInsideTargetActions_2_loopCount = 0;
obj85069_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85069: Event droppedInsideTargetActions
 *
 */
$("#obj85069").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85069_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85069_droppedInsideTargetActions is still running");
	return;
}
var obj85069_droppedInsideTargetActions_runningActionsCount = 0;
var obj85069_droppedInsideTargetActions_loopCount = 0;
obj85069_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj85002: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj85002");
	var winTarget = document.getElementById("obj85002");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj85002").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj85002_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj85002_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj85002_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85002_onTouchDown is still running");
	return;
}
var obj85002_onTouchDown_runningActionsCount = 0;
var obj85002_onTouchDown_loopCount = 0;
obj85002_onTouchDown_actionGroup0();
});



/*
 *
 *   obj85002: Event SCActionDragDrop85005_droppedOutsideTargetActions
 *
 */
$("#obj85002").bind("SCActionDragDrop85005_droppedOutsideTargetActions", function(event) {
	if (window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85002_SCActionDragDrop85005_droppedOutsideTargetActions is still running");
	return;
}
var obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_runningActionsCount = 0;
var obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_loopCount = 0;
obj85002_SCActionDragDrop85005_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj85002: Event droppedInsideTargetActions_3
 *
 */
$("#obj85002").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj85002_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85002_droppedInsideTargetActions_3 is still running");
	return;
}
var obj85002_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj85002_droppedInsideTargetActions_3_loopCount = 0;
obj85002_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj85002: Event droppedInsideTargetActions_2
 *
 */
$("#obj85002").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj85002_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85002_droppedInsideTargetActions_2 is still running");
	return;
}
var obj85002_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj85002_droppedInsideTargetActions_2_loopCount = 0;
obj85002_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj85002: Event droppedInsideTargetActions
 *
 */
$("#obj85002").bind("droppedInsideTargetActions", function(event) {
	if (window.obj85002_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj85002_droppedInsideTargetActions is still running");
	return;
}
var obj85002_droppedInsideTargetActions_runningActionsCount = 0;
var obj85002_droppedInsideTargetActions_loopCount = 0;
obj85002_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj84935: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj84935");
	var winTarget = document.getElementById("obj84935");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj84935").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj84935_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj84935_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj84935_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84935_onTouchDown is still running");
	return;
}
var obj84935_onTouchDown_runningActionsCount = 0;
var obj84935_onTouchDown_loopCount = 0;
obj84935_onTouchDown_actionGroup0();
});



/*
 *
 *   obj84935: Event SCActionDragDrop84938_droppedOutsideTargetActions
 *
 */
$("#obj84935").bind("SCActionDragDrop84938_droppedOutsideTargetActions", function(event) {
	if (window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84935_SCActionDragDrop84938_droppedOutsideTargetActions is still running");
	return;
}
var obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_runningActionsCount = 0;
var obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_loopCount = 0;
obj84935_SCActionDragDrop84938_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj84935: Event droppedInsideTargetActions_3
 *
 */
$("#obj84935").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj84935_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84935_droppedInsideTargetActions_3 is still running");
	return;
}
var obj84935_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj84935_droppedInsideTargetActions_3_loopCount = 0;
obj84935_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj84935: Event droppedInsideTargetActions_2
 *
 */
$("#obj84935").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj84935_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84935_droppedInsideTargetActions_2 is still running");
	return;
}
var obj84935_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj84935_droppedInsideTargetActions_2_loopCount = 0;
obj84935_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj84935: Event droppedInsideTargetActions
 *
 */
$("#obj84935").bind("droppedInsideTargetActions", function(event) {
	if (window.obj84935_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84935_droppedInsideTargetActions is still running");
	return;
}
var obj84935_droppedInsideTargetActions_runningActionsCount = 0;
var obj84935_droppedInsideTargetActions_loopCount = 0;
obj84935_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj84917: Event Touch Down
 *
 */
$("#obj84917").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84917_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84917_onTap is still running");
	return;
}
var obj84917_onTap_runningActionsCount = 0;
var obj84917_onTap_loopCount = 0;
obj84917_onTap_actionGroup0();
});










/*
 *
 *   obj84909: Event Touch Down
 *
 */
$("#obj84909").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj84909_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj84909_onTap is still running");
	return;
}
var obj84909_onTap_runningActionsCount = 0;
var obj84909_onTap_loopCount = 0;
obj84909_onTap_actionGroup0();
});










/*
 *
 *   obj88225: Event Touch Down
 *
 */
$("#obj88225").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88225_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88225_onTap is still running");
	return;
}
var obj88225_onTap_runningActionsCount = 0;
var obj88225_onTap_loopCount = 0;
obj88225_onTap_actionGroup0();
});










/*
 *
 *   obj88220: Event Touch Down
 *
 */
$("#obj88220").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88220_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88220_onTap is still running");
	return;
}
var obj88220_onTap_runningActionsCount = 0;
var obj88220_onTap_loopCount = 0;
obj88220_onTap_actionGroup0();
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
	
$("#obj85182").trigger('SCEventShow');
$("#obj85179").trigger('SCEventShow');
$("#obj85176").trigger('SCEventShow');
$("#obj85172").trigger('SCEventShow');
$("#obj85170").trigger('SCEventShow');
$("#obj85168").trigger('SCEventShow');
$("#obj85166").trigger('SCEventShow');
$("#obj85164").trigger('SCEventShow');
$("#obj85162").trigger('SCEventShow');
$("#obj85160").trigger('SCEventShow');
$("#obj85158").trigger('SCEventShow');
$("#obj85156").trigger('SCEventShow');
$("#obj85154").trigger('SCEventShow');
$("#obj85152").trigger('SCEventShow');
$("#obj85150").trigger('SCEventShow');
$("#obj85148").trigger('SCEventShow');
$("#obj85146").trigger('SCEventShow');
$("#obj85144").trigger('SCEventShow');
$("#obj85142").trigger('SCEventShow');
$("#obj85140").trigger('SCEventShow');
$("#obj85138").trigger('SCEventShow');
$("#obj85136").trigger('SCEventShow');
$("#obj85069").trigger('SCEventShow');
$("#obj85002").trigger('SCEventShow');
$("#obj84935").trigger('SCEventShow');
$("#obj84917").trigger('SCEventShow');
$("#obj84909").trigger('SCEventShow');
$("#obj88225").trigger('SCEventShow');
$("#obj88220").trigger('SCEventShow');
$("#obj88230").trigger('SCEventShow');
$("#obj94855").trigger('SCEventShow');
$("#obj84907").trigger('SCEventShow');
	
});