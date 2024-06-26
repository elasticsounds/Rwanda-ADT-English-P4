pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 10145;
pubcoder.page.title = pubcoder.page.title || "47";
pubcoder.page.number = pubcoder.page.number || 47;
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
var obj71040_onTap_activeActionGroupIndex = -1;
var obj71040_onTap_runningActionsCount = 0;
var obj71040_onTap_loopCount = 0;
var obj71037_onTap_activeActionGroupIndex = -1;
var obj71037_onTap_runningActionsCount = 0;
var obj71037_onTap_loopCount = 0;
var obj71033_onTap_activeActionGroupIndex = -1;
var obj71033_onTap_runningActionsCount = 0;
var obj71033_onTap_loopCount = 0;
var obj70994_onDrag_activeActionGroupIndex = -1;
var obj70994_onDrag_runningActionsCount = 0;
var obj70994_onDrag_loopCount = 0;
var obj70994_onTouchDown_activeActionGroupIndex = -1;
var obj70994_onTouchDown_runningActionsCount = 0;
var obj70994_onTouchDown_loopCount = 0;
var obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_loopCount = 0;
var obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70994_droppedInsideTargetActions_3_loopCount = 0;
var obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70994_droppedInsideTargetActions_2_loopCount = 0;
var obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70994_droppedInsideTargetActions_runningActionsCount = 0;
var obj70994_droppedInsideTargetActions_loopCount = 0;
var obj70955_onDrag_activeActionGroupIndex = -1;
var obj70955_onDrag_runningActionsCount = 0;
var obj70955_onDrag_loopCount = 0;
var obj70955_onTouchDown_activeActionGroupIndex = -1;
var obj70955_onTouchDown_runningActionsCount = 0;
var obj70955_onTouchDown_loopCount = 0;
var obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_loopCount = 0;
var obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70955_droppedInsideTargetActions_3_loopCount = 0;
var obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70955_droppedInsideTargetActions_2_loopCount = 0;
var obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70955_droppedInsideTargetActions_runningActionsCount = 0;
var obj70955_droppedInsideTargetActions_loopCount = 0;
var obj70916_onDrag_activeActionGroupIndex = -1;
var obj70916_onDrag_runningActionsCount = 0;
var obj70916_onDrag_loopCount = 0;
var obj70916_onTouchDown_activeActionGroupIndex = -1;
var obj70916_onTouchDown_runningActionsCount = 0;
var obj70916_onTouchDown_loopCount = 0;
var obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_loopCount = 0;
var obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70916_droppedInsideTargetActions_3_loopCount = 0;
var obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70916_droppedInsideTargetActions_2_loopCount = 0;
var obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70916_droppedInsideTargetActions_runningActionsCount = 0;
var obj70916_droppedInsideTargetActions_loopCount = 0;
var obj70898_onTap_activeActionGroupIndex = -1;
var obj70898_onTap_runningActionsCount = 0;
var obj70898_onTap_loopCount = 0;
var obj70890_onTap_activeActionGroupIndex = -1;
var obj70890_onTap_runningActionsCount = 0;
var obj70890_onTap_loopCount = 0;
var obj87304_onTap_activeActionGroupIndex = -1;
var obj87304_onTap_runningActionsCount = 0;
var obj87304_onTap_loopCount = 0;
var obj87299_onTap_activeActionGroupIndex = -1;
var obj87299_onTap_runningActionsCount = 0;
var obj87299_onTap_loopCount = 0;
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
		
obj71040_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71040_onTap_activeActionGroupIndex = -1;
		$("#obj71040").trigger("obj71040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71040) {
				console.warn("de-queueing event obj71040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71040_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71042();
function goToPage_71042() {
	window.obj71040_onTap_runningActionsCount = obj71040_onTap_runningActionsCount + 1;
	$("#anchor288")[0].click();
	window.obj71040_onTap_runningActionsCount = window.obj71040_onTap_runningActionsCount - 1;
if (window.obj71040_onTap_runningActionsCount < 0) {
	window.obj71040_onTap_runningActionsCount = 0;
} else if (window.obj71040_onTap_runningActionsCount == 0) {
	obj71040_onTap_actionGroup1();
}
}





















};
obj71040_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71040_onTap_activeActionGroupIndex = -1;
		$("#obj71040").trigger("obj71040_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71040) {
				console.warn("de-queueing event obj71040." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71040").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71040_onTap_activeActionGroupIndex = 1;
	





















};
obj71037_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71037_onTap_activeActionGroupIndex = -1;
		$("#obj71037").trigger("obj71037_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71037) {
				console.warn("de-queueing event obj71037." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71037").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71037_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71039();
function goToPage_71039() {
	window.obj71037_onTap_runningActionsCount = obj71037_onTap_runningActionsCount + 1;
	$("#anchor289")[0].click();
	window.obj71037_onTap_runningActionsCount = window.obj71037_onTap_runningActionsCount - 1;
if (window.obj71037_onTap_runningActionsCount < 0) {
	window.obj71037_onTap_runningActionsCount = 0;
} else if (window.obj71037_onTap_runningActionsCount == 0) {
	obj71037_onTap_actionGroup1();
}
}





















};
obj71037_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71037_onTap_activeActionGroupIndex = -1;
		$("#obj71037").trigger("obj71037_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71037) {
				console.warn("de-queueing event obj71037." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71037").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71037_onTap_activeActionGroupIndex = 1;
	





















};
obj71033_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71033_onTap_activeActionGroupIndex = -1;
		$("#obj71033").trigger("obj71033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71033) {
				console.warn("de-queueing event obj71033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71033_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71035();
function goToPage_71035() {
	window.obj71033_onTap_runningActionsCount = obj71033_onTap_runningActionsCount + 1;
	$("#anchor290")[0].click();
	window.obj71033_onTap_runningActionsCount = window.obj71033_onTap_runningActionsCount - 1;
if (window.obj71033_onTap_runningActionsCount < 0) {
	window.obj71033_onTap_runningActionsCount = 0;
} else if (window.obj71033_onTap_runningActionsCount == 0) {
	obj71033_onTap_actionGroup1();
}
}





















};
obj71033_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71033_onTap_activeActionGroupIndex = -1;
		$("#obj71033").trigger("obj71033_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71033) {
				console.warn("de-queueing event obj71033." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71033").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71033_onTap_activeActionGroupIndex = 1;
	





















};
obj70994_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70994");
//	action: dragDrop
//	target: obj70994 
dragDrop_70997();
function dragDrop_70997() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70994_onTouchDown_runningActionsCount = obj70994_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70994');
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
	  	containerNode = $('#obj71075');
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
    	window.obj70994_onTouchDown_runningActionsCount = window.obj70994_onTouchDown_runningActionsCount - 1;
if (window.obj70994_onTouchDown_runningActionsCount < 0) {
	window.obj70994_onTouchDown_runningActionsCount = 0;
} else if (window.obj70994_onTouchDown_runningActionsCount == 0) {
	obj70994_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71051","#obj71069","#obj71057");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70997 = false;
    	var dropped_id_70997;
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
					dropped_70997 = true;
					dropped_id_70997 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70997) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70994").trigger('SCActionDragDrop70997_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70994_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70994_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70994 
move_92234();
function move_92234() {
	window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount = obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70994");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount = window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70994_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71020();
function runjs_71020() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71057").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71021();
function runjs_71021() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71057").css("border-color", "#C00000"); $("#obj71057").css("border-width", "2px"); $("#obj71057").css("border-style", "solid"); $("#obj71057").css("border-radius", "10px"); $("#obj71057").css("-webkit-border-radius", "10px"); $("#obj71057").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71055 
hide_71022();
function hide_71022() {
	var selector = "#obj71055";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71022(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70994_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71023();
function runjs_71023() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70994").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71024();
function switchText_71024() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70994_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70994 
move_71025();
function move_71025() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70994");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70994_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71026();
function runjs_71026() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71057").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71027();
function runjs_71027() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71057").css("border-color", "#000000"); $("#obj71057").css("border-width", "1px"); $("#obj71057").css("border-style", "solid"); $("#obj71057").css("border-radius", "10px"); $("#obj71057").css("-webkit-border-radius", "10px"); $("#obj71057").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71055
(function(){
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71055";
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
					window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70994_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71029();
function runjs_71029() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70994").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71030();
function runjs_71030() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70994").css("border-color", "rgba(0,0,0,0)"); $("#obj70994").css("border-width", "0px"); $("#obj70994").css("border-style", "solid"); $("#obj70994").css("border-radius", "10px"); $("#obj70994").css("-webkit-border-radius", "10px"); $("#obj70994").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71045 
playAudio_71031();
function playAudio_71031() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71045")[0];
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
		    window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70994_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71032();
function switchText_71032() {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = obj70994_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70994_droppedInsideTargetActions_3_runningActionsCount = window.obj70994_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70994_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70994_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71006();
function runjs_71006() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71007();
function runjs_71007() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("border-color", "#C00000"); $("#obj71069").css("border-width", "2px"); $("#obj71069").css("border-style", "solid"); $("#obj71069").css("border-radius", "10px"); $("#obj71069").css("-webkit-border-radius", "10px"); $("#obj71069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71067 
hide_71008();
function hide_71008() {
	var selector = "#obj71067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71008(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70994_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71009();
function runjs_71009() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70994").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71010();
function switchText_71010() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70994_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70994 
move_71011();
function move_71011() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70994");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 114;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70994_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71012();
function runjs_71012() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71013();
function runjs_71013() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("border-color", "#000000"); $("#obj71069").css("border-width", "1px"); $("#obj71069").css("border-style", "solid"); $("#obj71069").css("border-radius", "10px"); $("#obj71069").css("-webkit-border-radius", "10px"); $("#obj71069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71067
(function(){
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71067";
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
					window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70994_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71015();
function runjs_71015() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70994").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71016();
function runjs_71016() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70994").css("border-color", "rgba(0,0,0,0)"); $("#obj70994").css("border-width", "0px"); $("#obj70994").css("border-style", "solid"); $("#obj70994").css("border-radius", "10px"); $("#obj70994").css("-webkit-border-radius", "10px"); $("#obj70994").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71045 
playAudio_71017();
function playAudio_71017() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71045")[0];
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
		    window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70994_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71018();
function switchText_71018() {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = obj70994_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70994_droppedInsideTargetActions_2_runningActionsCount = window.obj70994_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70994_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70994_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70999();
function runjs_70999() {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71051").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71003();
function switchText_71003() {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70994_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71000();
function runjs_71000() {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71051").css("border-color", "#058E3F"); $("#obj71051").css("border-width", "2px"); $("#obj71051").css("border-style", "solid"); $("#obj71051").css("border-radius", "10px"); $("#obj71051").css("-webkit-border-radius", "10px"); $("#obj71051").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71049 
hide_71001();
function hide_71001() {
	var selector = "#obj71049";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71001(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70994_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71002();
function runjs_71002() {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70994").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70994_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71047 
playAudio_71004();
function playAudio_71004() {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71047")[0];
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
		    window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70994_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90158();
function switchText_90158() {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = obj70994_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70994_droppedInsideTargetActions_runningActionsCount = window.obj70994_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70994_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70994_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70994_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70994_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70994_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70994").trigger("obj70994_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70994) {
				console.warn("de-queueing event obj70994." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70994").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70994_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70955_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70955");
//	action: dragDrop
//	target: obj70955 
dragDrop_70958();
function dragDrop_70958() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70955_onTouchDown_runningActionsCount = obj70955_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70955');
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
	  	containerNode = $('#obj71075');
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
    	window.obj70955_onTouchDown_runningActionsCount = window.obj70955_onTouchDown_runningActionsCount - 1;
if (window.obj70955_onTouchDown_runningActionsCount < 0) {
	window.obj70955_onTouchDown_runningActionsCount = 0;
} else if (window.obj70955_onTouchDown_runningActionsCount == 0) {
	obj70955_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71069","#obj71057","#obj71051");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70958 = false;
    	var dropped_id_70958;
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
					dropped_70958 = true;
					dropped_id_70958 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70958) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70955").trigger('SCActionDragDrop70958_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70955_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70955_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70955 
move_92236();
function move_92236() {
	window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount = obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70955");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount = window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70955_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70981();
function runjs_70981() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70982();
function runjs_70982() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("border-color", "#C00000"); $("#obj71051").css("border-width", "2px"); $("#obj71051").css("border-style", "solid"); $("#obj71051").css("border-radius", "10px"); $("#obj71051").css("-webkit-border-radius", "10px"); $("#obj71051").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71049 
hide_70983();
function hide_70983() {
	var selector = "#obj71049";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70983(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70955_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70984();
function runjs_70984() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70955").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70985();
function switchText_70985() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70955_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70955 
move_70986();
function move_70986() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70955");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70955_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70987();
function runjs_70987() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70988();
function runjs_70988() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("border-color", "#000000"); $("#obj71051").css("border-width", "1px"); $("#obj71051").css("border-style", "solid"); $("#obj71051").css("border-radius", "10px"); $("#obj71051").css("-webkit-border-radius", "10px"); $("#obj71051").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71049
(function(){
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71049";
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
					window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70955_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70990();
function runjs_70990() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70955").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70991();
function runjs_70991() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70955").css("border-color", "rgba(0,0,0,0)"); $("#obj70955").css("border-width", "0px"); $("#obj70955").css("border-style", "solid"); $("#obj70955").css("border-radius", "10px"); $("#obj70955").css("-webkit-border-radius", "10px"); $("#obj70955").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71045 
playAudio_70992();
function playAudio_70992() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71045")[0];
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
		    window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70955_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70993();
function switchText_70993() {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = obj70955_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70955_droppedInsideTargetActions_3_runningActionsCount = window.obj70955_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70955_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70955_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70967();
function runjs_70967() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71057").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70968();
function runjs_70968() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71057").css("border-color", "#C00000"); $("#obj71057").css("border-width", "2px"); $("#obj71057").css("border-style", "solid"); $("#obj71057").css("border-radius", "10px"); $("#obj71057").css("-webkit-border-radius", "10px"); $("#obj71057").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71055 
hide_70969();
function hide_70969() {
	var selector = "#obj71055";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70969(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70955_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70970();
function runjs_70970() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70955").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70971();
function switchText_70971() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70955_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70955 
move_70972();
function move_70972() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70955");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70955_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70973();
function runjs_70973() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71057").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70974();
function runjs_70974() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71057").css("border-color", "#000000"); $("#obj71057").css("border-width", "1px"); $("#obj71057").css("border-style", "solid"); $("#obj71057").css("border-radius", "10px"); $("#obj71057").css("-webkit-border-radius", "10px"); $("#obj71057").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71055
(function(){
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71055";
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
					window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70955_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70976();
function runjs_70976() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70955").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70977();
function runjs_70977() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70955").css("border-color", "rgba(0,0,0,0)"); $("#obj70955").css("border-width", "0px"); $("#obj70955").css("border-style", "solid"); $("#obj70955").css("border-radius", "10px"); $("#obj70955").css("-webkit-border-radius", "10px"); $("#obj70955").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71045 
playAudio_70978();
function playAudio_70978() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71045")[0];
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
		    window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70955_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70979();
function switchText_70979() {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = obj70955_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70955_droppedInsideTargetActions_2_runningActionsCount = window.obj70955_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70955_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70955_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70960();
function runjs_70960() {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71069").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70964();
function switchText_70964() {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70955_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70961();
function runjs_70961() {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71069").css("border-color", "#058E3F"); $("#obj71069").css("border-width", "2px"); $("#obj71069").css("border-style", "solid"); $("#obj71069").css("border-radius", "10px"); $("#obj71069").css("-webkit-border-radius", "10px"); $("#obj71069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71067 
hide_70962();
function hide_70962() {
	var selector = "#obj71067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70962(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70955_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70963();
function runjs_70963() {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70955").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70955_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71047 
playAudio_70965();
function playAudio_70965() {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71047")[0];
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
		    window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70955_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90159();
function switchText_90159() {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = obj70955_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70955_droppedInsideTargetActions_runningActionsCount = window.obj70955_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70955_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70955_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70955_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70955_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70955_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70955").trigger("obj70955_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70955) {
				console.warn("de-queueing event obj70955." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70955").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70955_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70916_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70916");
//	action: dragDrop
//	target: obj70916 
dragDrop_70919();
function dragDrop_70919() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70916_onTouchDown_runningActionsCount = obj70916_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70916');
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
	  	containerNode = $('#obj71075');
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
    	window.obj70916_onTouchDown_runningActionsCount = window.obj70916_onTouchDown_runningActionsCount - 1;
if (window.obj70916_onTouchDown_runningActionsCount < 0) {
	window.obj70916_onTouchDown_runningActionsCount = 0;
} else if (window.obj70916_onTouchDown_runningActionsCount == 0) {
	obj70916_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71057","#obj71069","#obj71051");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70919 = false;
    	var dropped_id_70919;
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
					dropped_70919 = true;
					dropped_id_70919 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70919) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70916").trigger('SCActionDragDrop70919_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70916_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70916_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70916 
move_92238();
function move_92238() {
	window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount = obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70916");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 662;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount = window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70916_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70942();
function runjs_70942() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70943();
function runjs_70943() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("border-color", "#C00000"); $("#obj71051").css("border-width", "2px"); $("#obj71051").css("border-style", "solid"); $("#obj71051").css("border-radius", "10px"); $("#obj71051").css("-webkit-border-radius", "10px"); $("#obj71051").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71049 
hide_70944();
function hide_70944() {
	var selector = "#obj71049";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70944(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70916_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70945();
function runjs_70945() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70916").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70946();
function switchText_70946() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70916_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70916 
move_70947();
function move_70947() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70916");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 662;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70916_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70948();
function runjs_70948() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70949();
function runjs_70949() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71051").css("border-color", "#000000"); $("#obj71051").css("border-width", "1px"); $("#obj71051").css("border-style", "solid"); $("#obj71051").css("border-radius", "10px"); $("#obj71051").css("-webkit-border-radius", "10px"); $("#obj71051").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71049
(function(){
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71049";
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
					window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70916_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70951();
function runjs_70951() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70916").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70952();
function runjs_70952() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70916").css("border-color", "rgba(0,0,0,0)"); $("#obj70916").css("border-width", "0px"); $("#obj70916").css("border-style", "solid"); $("#obj70916").css("border-radius", "10px"); $("#obj70916").css("-webkit-border-radius", "10px"); $("#obj70916").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71045 
playAudio_70953();
function playAudio_70953() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71045")[0];
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
		    window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70916_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70954();
function switchText_70954() {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = obj70916_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70916_droppedInsideTargetActions_3_runningActionsCount = window.obj70916_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70916_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70916_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70928();
function runjs_70928() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70929();
function runjs_70929() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("border-color", "#C00000"); $("#obj71069").css("border-width", "2px"); $("#obj71069").css("border-style", "solid"); $("#obj71069").css("border-radius", "10px"); $("#obj71069").css("-webkit-border-radius", "10px"); $("#obj71069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71067 
hide_70930();
function hide_70930() {
	var selector = "#obj71067";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70930(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70916_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70931();
function runjs_70931() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70916").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70932();
function switchText_70932() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70916_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70916 
move_70933();
function move_70933() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70916");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 386;
	var moveY = 662;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70916_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70934();
function runjs_70934() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70935();
function runjs_70935() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71069").css("border-color", "#000000"); $("#obj71069").css("border-width", "1px"); $("#obj71069").css("border-style", "solid"); $("#obj71069").css("border-radius", "10px"); $("#obj71069").css("-webkit-border-radius", "10px"); $("#obj71069").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71067
(function(){
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71067";
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
					window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70916_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70937();
function runjs_70937() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70916").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70938();
function runjs_70938() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70916").css("border-color", "rgba(0,0,0,0)"); $("#obj70916").css("border-width", "0px"); $("#obj70916").css("border-style", "solid"); $("#obj70916").css("border-radius", "10px"); $("#obj70916").css("-webkit-border-radius", "10px"); $("#obj70916").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71045 
playAudio_70939();
function playAudio_70939() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71045")[0];
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
		    window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70916_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70940();
function switchText_70940() {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = obj70916_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70916_droppedInsideTargetActions_2_runningActionsCount = window.obj70916_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70916_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70916_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70921();
function runjs_70921() {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71057").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70925();
function switchText_70925() {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70916_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70922();
function runjs_70922() {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71057").css("border-color", "#058E3F"); $("#obj71057").css("border-width", "2px"); $("#obj71057").css("border-style", "solid"); $("#obj71057").css("border-radius", "10px"); $("#obj71057").css("-webkit-border-radius", "10px"); $("#obj71057").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71055 
hide_70923();
function hide_70923() {
	var selector = "#obj71055";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70923(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70916_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70924();
function runjs_70924() {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70916").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70916_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71047 
playAudio_70926();
function playAudio_70926() {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71047")[0];
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
		    window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70916_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90160();
function switchText_90160() {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = obj70916_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71043_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71043_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71043").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71043_content");
			setTimeout(function () {
				window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71043 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70916_droppedInsideTargetActions_runningActionsCount = window.obj70916_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70916_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70916_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70916_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70916_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70916_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70916").trigger("obj70916_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70916) {
				console.warn("de-queueing event obj70916." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70916").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70916_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70898_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70898_onTap_activeActionGroupIndex = -1;
		$("#obj70898").trigger("obj70898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70898) {
				console.warn("de-queueing event obj70898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70898_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70898 
hide_70901();
function hide_70901() {
	var selector = "#obj70898";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70898_onTap_runningActionsCount = obj70898_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70898_onTap_runningActionsCount = window.obj70898_onTap_runningActionsCount - 1;
if (window.obj70898_onTap_runningActionsCount < 0) {
	window.obj70898_onTap_runningActionsCount = 0;
} else if (window.obj70898_onTap_runningActionsCount == 0) {
	obj70898_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70901(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70898_onTap_runningActionsCount = window.obj70898_onTap_runningActionsCount - 1;
if (window.obj70898_onTap_runningActionsCount < 0) {
	window.obj70898_onTap_runningActionsCount = 0;
} else if (window.obj70898_onTap_runningActionsCount == 0) {
	obj70898_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj70888 
stopMovie_70900();
function stopMovie_70900() {
	window.obj70898_onTap_runningActionsCount = obj70898_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70888")[0];
	myVideo.pause();
	window.obj70898_onTap_runningActionsCount = window.obj70898_onTap_runningActionsCount - 1;
if (window.obj70898_onTap_runningActionsCount < 0) {
	window.obj70898_onTap_runningActionsCount = 0;
} else if (window.obj70898_onTap_runningActionsCount == 0) {
	obj70898_onTap_actionGroup1();
}
}
















};
obj70898_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70898_onTap_activeActionGroupIndex = -1;
		$("#obj70898").trigger("obj70898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70898) {
				console.warn("de-queueing event obj70898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70898_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70890
(function(){
	window.obj70898_onTap_runningActionsCount = obj70898_onTap_runningActionsCount + 1;

	var selector = "#obj70890";
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
					window.obj70898_onTap_runningActionsCount = window.obj70898_onTap_runningActionsCount - 1;
if (window.obj70898_onTap_runningActionsCount < 0) {
	window.obj70898_onTap_runningActionsCount = 0;
} else if (window.obj70898_onTap_runningActionsCount == 0) {
	obj70898_onTap_actionGroup2();
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
				window.obj70898_onTap_runningActionsCount = window.obj70898_onTap_runningActionsCount - 1;
if (window.obj70898_onTap_runningActionsCount < 0) {
	window.obj70898_onTap_runningActionsCount = 0;
} else if (window.obj70898_onTap_runningActionsCount == 0) {
	obj70898_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70898_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70898_onTap_activeActionGroupIndex = -1;
		$("#obj70898").trigger("obj70898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70898) {
				console.warn("de-queueing event obj70898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70898_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70888 
move_70903();
function move_70903() {
	window.obj70898_onTap_runningActionsCount = obj70898_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70888");
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
			window.obj70898_onTap_runningActionsCount = window.obj70898_onTap_runningActionsCount - 1;
if (window.obj70898_onTap_runningActionsCount < 0) {
	window.obj70898_onTap_runningActionsCount = 0;
} else if (window.obj70898_onTap_runningActionsCount == 0) {
	obj70898_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70898_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70898_onTap_activeActionGroupIndex = -1;
		$("#obj70898").trigger("obj70898_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70898) {
				console.warn("de-queueing event obj70898." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70898").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70898_onTap_activeActionGroupIndex = 3;
	





















};
obj70890_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70890_onTap_activeActionGroupIndex = -1;
		$("#obj70890").trigger("obj70890_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70890) {
				console.warn("de-queueing event obj70890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70890_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70890 
hide_70893();
function hide_70893() {
	var selector = "#obj70890";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70890_onTap_runningActionsCount = obj70890_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70890_onTap_runningActionsCount = window.obj70890_onTap_runningActionsCount - 1;
if (window.obj70890_onTap_runningActionsCount < 0) {
	window.obj70890_onTap_runningActionsCount = 0;
} else if (window.obj70890_onTap_runningActionsCount == 0) {
	obj70890_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70893(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70890_onTap_runningActionsCount = window.obj70890_onTap_runningActionsCount - 1;
if (window.obj70890_onTap_runningActionsCount < 0) {
	window.obj70890_onTap_runningActionsCount = 0;
} else if (window.obj70890_onTap_runningActionsCount == 0) {
	obj70890_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj70888 
playPauseMovie_70892();
function playPauseMovie_70892() {
	window.obj70890_onTap_runningActionsCount = obj70890_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70888")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj70890_onTap_runningActionsCount = window.obj70890_onTap_runningActionsCount - 1;
if (window.obj70890_onTap_runningActionsCount < 0) {
	window.obj70890_onTap_runningActionsCount = 0;
} else if (window.obj70890_onTap_runningActionsCount == 0) {
	obj70890_onTap_actionGroup1();
}
}

















};
obj70890_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70890_onTap_activeActionGroupIndex = -1;
		$("#obj70890").trigger("obj70890_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70890) {
				console.warn("de-queueing event obj70890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70890_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70898
(function(){
	window.obj70890_onTap_runningActionsCount = obj70890_onTap_runningActionsCount + 1;

	var selector = "#obj70898";
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
					window.obj70890_onTap_runningActionsCount = window.obj70890_onTap_runningActionsCount - 1;
if (window.obj70890_onTap_runningActionsCount < 0) {
	window.obj70890_onTap_runningActionsCount = 0;
} else if (window.obj70890_onTap_runningActionsCount == 0) {
	obj70890_onTap_actionGroup2();
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
				window.obj70890_onTap_runningActionsCount = window.obj70890_onTap_runningActionsCount - 1;
if (window.obj70890_onTap_runningActionsCount < 0) {
	window.obj70890_onTap_runningActionsCount = 0;
} else if (window.obj70890_onTap_runningActionsCount == 0) {
	obj70890_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70890_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70890_onTap_activeActionGroupIndex = -1;
		$("#obj70890").trigger("obj70890_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70890) {
				console.warn("de-queueing event obj70890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70890_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70888 
move_70895();
function move_70895() {
	window.obj70890_onTap_runningActionsCount = obj70890_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70888");
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
			window.obj70890_onTap_runningActionsCount = window.obj70890_onTap_runningActionsCount - 1;
if (window.obj70890_onTap_runningActionsCount < 0) {
	window.obj70890_onTap_runningActionsCount = 0;
} else if (window.obj70890_onTap_runningActionsCount == 0) {
	obj70890_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70890_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70890_onTap_activeActionGroupIndex = -1;
		$("#obj70890").trigger("obj70890_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70890) {
				console.warn("de-queueing event obj70890." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70890").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70890_onTap_activeActionGroupIndex = 3;
	





















};
obj87304_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87304_onTap_activeActionGroupIndex = -1;
		$("#obj87304").trigger("obj87304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87304) {
				console.warn("de-queueing event obj87304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87304_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87309 
stopAudio_87306();
function stopAudio_87306() {
	window.obj87304_onTap_runningActionsCount = obj87304_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87309")[0];
	myAudio.pause();
	window.obj87304_onTap_runningActionsCount = window.obj87304_onTap_runningActionsCount - 1;
if (window.obj87304_onTap_runningActionsCount < 0) {
	window.obj87304_onTap_runningActionsCount = 0;
} else if (window.obj87304_onTap_runningActionsCount == 0) {
	obj87304_onTap_actionGroup1();
}
}








};
obj87304_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87304_onTap_activeActionGroupIndex = -1;
		$("#obj87304").trigger("obj87304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87304) {
				console.warn("de-queueing event obj87304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87304_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87304 
hide_87307();
function hide_87307() {
	var selector = "#obj87304";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87304_onTap_runningActionsCount = obj87304_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87304_onTap_runningActionsCount = window.obj87304_onTap_runningActionsCount - 1;
if (window.obj87304_onTap_runningActionsCount < 0) {
	window.obj87304_onTap_runningActionsCount = 0;
} else if (window.obj87304_onTap_runningActionsCount == 0) {
	obj87304_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87307(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87304_onTap_runningActionsCount = window.obj87304_onTap_runningActionsCount - 1;
if (window.obj87304_onTap_runningActionsCount < 0) {
	window.obj87304_onTap_runningActionsCount = 0;
} else if (window.obj87304_onTap_runningActionsCount == 0) {
	obj87304_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87304_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87304_onTap_activeActionGroupIndex = -1;
		$("#obj87304").trigger("obj87304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87304) {
				console.warn("de-queueing event obj87304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87304_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87299
(function(){
	window.obj87304_onTap_runningActionsCount = obj87304_onTap_runningActionsCount + 1;

	var selector = "#obj87299";
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
					window.obj87304_onTap_runningActionsCount = window.obj87304_onTap_runningActionsCount - 1;
if (window.obj87304_onTap_runningActionsCount < 0) {
	window.obj87304_onTap_runningActionsCount = 0;
} else if (window.obj87304_onTap_runningActionsCount == 0) {
	obj87304_onTap_actionGroup3();
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
				window.obj87304_onTap_runningActionsCount = window.obj87304_onTap_runningActionsCount - 1;
if (window.obj87304_onTap_runningActionsCount < 0) {
	window.obj87304_onTap_runningActionsCount = 0;
} else if (window.obj87304_onTap_runningActionsCount == 0) {
	obj87304_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87304_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87304_onTap_activeActionGroupIndex = -1;
		$("#obj87304").trigger("obj87304_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87304) {
				console.warn("de-queueing event obj87304." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87304").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87304_onTap_activeActionGroupIndex = 3;
	





















};
obj87299_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87299_onTap_activeActionGroupIndex = -1;
		$("#obj87299").trigger("obj87299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87299) {
				console.warn("de-queueing event obj87299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87299_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87299 
hide_87301();
function hide_87301() {
	var selector = "#obj87299";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87299_onTap_runningActionsCount = obj87299_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87299_onTap_runningActionsCount = window.obj87299_onTap_runningActionsCount - 1;
if (window.obj87299_onTap_runningActionsCount < 0) {
	window.obj87299_onTap_runningActionsCount = 0;
} else if (window.obj87299_onTap_runningActionsCount == 0) {
	obj87299_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87301(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87299_onTap_runningActionsCount = window.obj87299_onTap_runningActionsCount - 1;
if (window.obj87299_onTap_runningActionsCount < 0) {
	window.obj87299_onTap_runningActionsCount = 0;
} else if (window.obj87299_onTap_runningActionsCount == 0) {
	obj87299_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87299_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87299_onTap_activeActionGroupIndex = -1;
		$("#obj87299").trigger("obj87299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87299) {
				console.warn("de-queueing event obj87299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87299_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87304
(function(){
	window.obj87299_onTap_runningActionsCount = obj87299_onTap_runningActionsCount + 1;

	var selector = "#obj87304";
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
					window.obj87299_onTap_runningActionsCount = window.obj87299_onTap_runningActionsCount - 1;
if (window.obj87299_onTap_runningActionsCount < 0) {
	window.obj87299_onTap_runningActionsCount = 0;
} else if (window.obj87299_onTap_runningActionsCount == 0) {
	obj87299_onTap_actionGroup2();
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
				window.obj87299_onTap_runningActionsCount = window.obj87299_onTap_runningActionsCount - 1;
if (window.obj87299_onTap_runningActionsCount < 0) {
	window.obj87299_onTap_runningActionsCount = 0;
} else if (window.obj87299_onTap_runningActionsCount == 0) {
	obj87299_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87299_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87299_onTap_activeActionGroupIndex = -1;
		$("#obj87299").trigger("obj87299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87299) {
				console.warn("de-queueing event obj87299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87299_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87309 
playAudio_87303();
function playAudio_87303() {
	window.obj87299_onTap_runningActionsCount = obj87299_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87309")[0];
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
		    window.obj87299_onTap_runningActionsCount = window.obj87299_onTap_runningActionsCount - 1;
if (window.obj87299_onTap_runningActionsCount < 0) {
	window.obj87299_onTap_runningActionsCount = 0;
} else if (window.obj87299_onTap_runningActionsCount == 0) {
	obj87299_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87299_onTap_runningActionsCount = window.obj87299_onTap_runningActionsCount - 1;
if (window.obj87299_onTap_runningActionsCount < 0) {
	window.obj87299_onTap_runningActionsCount = 0;
} else if (window.obj87299_onTap_runningActionsCount == 0) {
	obj87299_onTap_actionGroup3();
}
	}
}









};
obj87299_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87299_onTap_activeActionGroupIndex = -1;
		$("#obj87299").trigger("obj87299_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87299) {
				console.warn("de-queueing event obj87299." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87299").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87299_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		

















































































































































































































































































/*
 *
 *   obj71040: Event Touch Down
 *
 */
$("#obj71040").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71040_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71040_onTap is still running");
	return;
}
var obj71040_onTap_runningActionsCount = 0;
var obj71040_onTap_loopCount = 0;
obj71040_onTap_actionGroup0();
});










/*
 *
 *   obj71037: Event Touch Down
 *
 */
$("#obj71037").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71037_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71037_onTap is still running");
	return;
}
var obj71037_onTap_runningActionsCount = 0;
var obj71037_onTap_loopCount = 0;
obj71037_onTap_actionGroup0();
});










/*
 *
 *   obj71033: Event Touch Down
 *
 */
$("#obj71033").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71033_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71033_onTap is still running");
	return;
}
var obj71033_onTap_runningActionsCount = 0;
var obj71033_onTap_loopCount = 0;
obj71033_onTap_actionGroup0();
});











/*
 *
 *   obj70994: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70994");
	var winTarget = document.getElementById("obj70994");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70994").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70994_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70994_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70994_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70994_onTouchDown is still running");
	return;
}
var obj70994_onTouchDown_runningActionsCount = 0;
var obj70994_onTouchDown_loopCount = 0;
obj70994_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70994: Event SCActionDragDrop70997_droppedOutsideTargetActions
 *
 */
$("#obj70994").bind("SCActionDragDrop70997_droppedOutsideTargetActions", function(event) {
	if (window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70994_SCActionDragDrop70997_droppedOutsideTargetActions is still running");
	return;
}
var obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_loopCount = 0;
obj70994_SCActionDragDrop70997_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70994: Event droppedInsideTargetActions_3
 *
 */
$("#obj70994").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70994_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70994_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70994_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70994_droppedInsideTargetActions_3_loopCount = 0;
obj70994_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70994: Event droppedInsideTargetActions_2
 *
 */
$("#obj70994").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70994_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70994_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70994_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70994_droppedInsideTargetActions_2_loopCount = 0;
obj70994_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70994: Event droppedInsideTargetActions
 *
 */
$("#obj70994").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70994_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70994_droppedInsideTargetActions is still running");
	return;
}
var obj70994_droppedInsideTargetActions_runningActionsCount = 0;
var obj70994_droppedInsideTargetActions_loopCount = 0;
obj70994_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj70955: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70955");
	var winTarget = document.getElementById("obj70955");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70955").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70955_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70955_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70955_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70955_onTouchDown is still running");
	return;
}
var obj70955_onTouchDown_runningActionsCount = 0;
var obj70955_onTouchDown_loopCount = 0;
obj70955_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70955: Event SCActionDragDrop70958_droppedOutsideTargetActions
 *
 */
$("#obj70955").bind("SCActionDragDrop70958_droppedOutsideTargetActions", function(event) {
	if (window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70955_SCActionDragDrop70958_droppedOutsideTargetActions is still running");
	return;
}
var obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_loopCount = 0;
obj70955_SCActionDragDrop70958_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70955: Event droppedInsideTargetActions_3
 *
 */
$("#obj70955").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70955_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70955_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70955_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70955_droppedInsideTargetActions_3_loopCount = 0;
obj70955_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70955: Event droppedInsideTargetActions_2
 *
 */
$("#obj70955").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70955_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70955_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70955_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70955_droppedInsideTargetActions_2_loopCount = 0;
obj70955_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70955: Event droppedInsideTargetActions
 *
 */
$("#obj70955").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70955_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70955_droppedInsideTargetActions is still running");
	return;
}
var obj70955_droppedInsideTargetActions_runningActionsCount = 0;
var obj70955_droppedInsideTargetActions_loopCount = 0;
obj70955_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj70916: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70916");
	var winTarget = document.getElementById("obj70916");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70916").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70916_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70916_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70916_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70916_onTouchDown is still running");
	return;
}
var obj70916_onTouchDown_runningActionsCount = 0;
var obj70916_onTouchDown_loopCount = 0;
obj70916_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70916: Event SCActionDragDrop70919_droppedOutsideTargetActions
 *
 */
$("#obj70916").bind("SCActionDragDrop70919_droppedOutsideTargetActions", function(event) {
	if (window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70916_SCActionDragDrop70919_droppedOutsideTargetActions is still running");
	return;
}
var obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_loopCount = 0;
obj70916_SCActionDragDrop70919_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70916: Event droppedInsideTargetActions_3
 *
 */
$("#obj70916").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70916_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70916_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70916_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70916_droppedInsideTargetActions_3_loopCount = 0;
obj70916_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70916: Event droppedInsideTargetActions_2
 *
 */
$("#obj70916").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70916_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70916_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70916_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70916_droppedInsideTargetActions_2_loopCount = 0;
obj70916_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70916: Event droppedInsideTargetActions
 *
 */
$("#obj70916").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70916_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70916_droppedInsideTargetActions is still running");
	return;
}
var obj70916_droppedInsideTargetActions_runningActionsCount = 0;
var obj70916_droppedInsideTargetActions_loopCount = 0;
obj70916_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj70898: Event Touch Down
 *
 */
$("#obj70898").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70898_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70898_onTap is still running");
	return;
}
var obj70898_onTap_runningActionsCount = 0;
var obj70898_onTap_loopCount = 0;
obj70898_onTap_actionGroup0();
});










/*
 *
 *   obj70890: Event Touch Down
 *
 */
$("#obj70890").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70890_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70890_onTap is still running");
	return;
}
var obj70890_onTap_runningActionsCount = 0;
var obj70890_onTap_loopCount = 0;
obj70890_onTap_actionGroup0();
});










/*
 *
 *   obj87304: Event Touch Down
 *
 */
$("#obj87304").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87304_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87304_onTap is still running");
	return;
}
var obj87304_onTap_runningActionsCount = 0;
var obj87304_onTap_loopCount = 0;
obj87304_onTap_actionGroup0();
});










/*
 *
 *   obj87299: Event Touch Down
 *
 */
$("#obj87299").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87299_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87299_onTap is still running");
	return;
}
var obj87299_onTap_runningActionsCount = 0;
var obj87299_onTap_loopCount = 0;
obj87299_onTap_actionGroup0();
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
	
$("#obj71095").trigger('SCEventShow');
$("#obj71093").trigger('SCEventShow');
$("#obj71091").trigger('SCEventShow');
$("#obj71089").trigger('SCEventShow');
$("#obj71087").trigger('SCEventShow');
$("#obj71085").trigger('SCEventShow');
$("#obj71083").trigger('SCEventShow');
$("#obj71081").trigger('SCEventShow');
$("#obj71079").trigger('SCEventShow');
$("#obj71077").trigger('SCEventShow');
$("#obj71075").trigger('SCEventShow');
$("#obj71073").trigger('SCEventShow');
$("#obj71071").trigger('SCEventShow');
$("#obj71069").trigger('SCEventShow');
$("#obj71067").trigger('SCEventShow');
$("#obj71065").trigger('SCEventShow');
$("#obj71063").trigger('SCEventShow');
$("#obj71061").trigger('SCEventShow');
$("#obj71059").trigger('SCEventShow');
$("#obj71057").trigger('SCEventShow');
$("#obj71055").trigger('SCEventShow');
$("#obj71053").trigger('SCEventShow');
$("#obj71051").trigger('SCEventShow');
$("#obj71049").trigger('SCEventShow');
$("#obj71047").trigger('SCEventShow');
$("#obj71045").trigger('SCEventShow');
$("#obj71043").trigger('SCEventShow');
$("#obj71040").trigger('SCEventShow');
$("#obj71037").trigger('SCEventShow');
$("#obj71033").trigger('SCEventShow');
$("#obj70994").trigger('SCEventShow');
$("#obj70955").trigger('SCEventShow');
$("#obj70916").trigger('SCEventShow');
$("#obj70898").trigger('SCEventShow');
$("#obj70890").trigger('SCEventShow');
$("#obj87304").trigger('SCEventShow');
$("#obj87299").trigger('SCEventShow');
$("#obj87309").trigger('SCEventShow');
$("#obj94723").trigger('SCEventShow');
$("#obj70888").trigger('SCEventShow');
	
});