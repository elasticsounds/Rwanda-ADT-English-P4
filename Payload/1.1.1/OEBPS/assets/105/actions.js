pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 29125;
pubcoder.page.title = pubcoder.page.title || "105";
pubcoder.page.number = pubcoder.page.number || 105;
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
var obj81960_onTap_activeActionGroupIndex = -1;
var obj81960_onTap_runningActionsCount = 0;
var obj81960_onTap_loopCount = 0;
var obj81957_onTap_activeActionGroupIndex = -1;
var obj81957_onTap_runningActionsCount = 0;
var obj81957_onTap_loopCount = 0;
var obj81953_onTap_activeActionGroupIndex = -1;
var obj81953_onTap_runningActionsCount = 0;
var obj81953_onTap_loopCount = 0;
var obj81850_onDrag_activeActionGroupIndex = -1;
var obj81850_onDrag_runningActionsCount = 0;
var obj81850_onDrag_loopCount = 0;
var obj81850_onTouchDown_activeActionGroupIndex = -1;
var obj81850_onTouchDown_runningActionsCount = 0;
var obj81850_onTouchDown_loopCount = 0;
var obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_loopCount = 0;
var obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81850_droppedInsideTargetActions_3_loopCount = 0;
var obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81850_droppedInsideTargetActions_2_loopCount = 0;
var obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81850_droppedInsideTargetActions_runningActionsCount = 0;
var obj81850_droppedInsideTargetActions_loopCount = 0;
var obj81783_onDrag_activeActionGroupIndex = -1;
var obj81783_onDrag_runningActionsCount = 0;
var obj81783_onDrag_loopCount = 0;
var obj81783_onTouchDown_activeActionGroupIndex = -1;
var obj81783_onTouchDown_runningActionsCount = 0;
var obj81783_onTouchDown_loopCount = 0;
var obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_loopCount = 0;
var obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81783_droppedInsideTargetActions_3_loopCount = 0;
var obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81783_droppedInsideTargetActions_2_loopCount = 0;
var obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81783_droppedInsideTargetActions_runningActionsCount = 0;
var obj81783_droppedInsideTargetActions_loopCount = 0;
var obj81716_onDrag_activeActionGroupIndex = -1;
var obj81716_onDrag_runningActionsCount = 0;
var obj81716_onDrag_loopCount = 0;
var obj81716_onTouchDown_activeActionGroupIndex = -1;
var obj81716_onTouchDown_runningActionsCount = 0;
var obj81716_onTouchDown_loopCount = 0;
var obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_loopCount = 0;
var obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81716_droppedInsideTargetActions_3_loopCount = 0;
var obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81716_droppedInsideTargetActions_2_loopCount = 0;
var obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj81716_droppedInsideTargetActions_runningActionsCount = 0;
var obj81716_droppedInsideTargetActions_loopCount = 0;
var obj81698_onTap_activeActionGroupIndex = -1;
var obj81698_onTap_runningActionsCount = 0;
var obj81698_onTap_loopCount = 0;
var obj81690_onTap_activeActionGroupIndex = -1;
var obj81690_onTap_runningActionsCount = 0;
var obj81690_onTap_loopCount = 0;
var obj83638_onTap_activeActionGroupIndex = -1;
var obj83638_onTap_runningActionsCount = 0;
var obj83638_onTap_loopCount = 0;
var obj88129_onTap_activeActionGroupIndex = -1;
var obj88129_onTap_runningActionsCount = 0;
var obj88129_onTap_loopCount = 0;
var obj88124_onTap_activeActionGroupIndex = -1;
var obj88124_onTap_runningActionsCount = 0;
var obj88124_onTap_loopCount = 0;
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
		
obj81960_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81960_onTap_activeActionGroupIndex = -1;
		$("#obj81960").trigger("obj81960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81960) {
				console.warn("de-queueing event obj81960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81960_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83641();
function goToPage_83641() {
	window.obj81960_onTap_runningActionsCount = obj81960_onTap_runningActionsCount + 1;
	$("#anchor625")[0].click();
	window.obj81960_onTap_runningActionsCount = window.obj81960_onTap_runningActionsCount - 1;
if (window.obj81960_onTap_runningActionsCount < 0) {
	window.obj81960_onTap_runningActionsCount = 0;
} else if (window.obj81960_onTap_runningActionsCount == 0) {
	obj81960_onTap_actionGroup1();
}
}





















};
obj81960_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81960_onTap_activeActionGroupIndex = -1;
		$("#obj81960").trigger("obj81960_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81960) {
				console.warn("de-queueing event obj81960." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81960").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81960_onTap_activeActionGroupIndex = 1;
	





















};
obj81957_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81957_onTap_activeActionGroupIndex = -1;
		$("#obj81957").trigger("obj81957_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81957) {
				console.warn("de-queueing event obj81957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81957_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83642();
function goToPage_83642() {
	window.obj81957_onTap_runningActionsCount = obj81957_onTap_runningActionsCount + 1;
	$("#anchor626")[0].click();
	window.obj81957_onTap_runningActionsCount = window.obj81957_onTap_runningActionsCount - 1;
if (window.obj81957_onTap_runningActionsCount < 0) {
	window.obj81957_onTap_runningActionsCount = 0;
} else if (window.obj81957_onTap_runningActionsCount == 0) {
	obj81957_onTap_actionGroup1();
}
}





















};
obj81957_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81957_onTap_activeActionGroupIndex = -1;
		$("#obj81957").trigger("obj81957_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81957) {
				console.warn("de-queueing event obj81957." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81957").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81957_onTap_activeActionGroupIndex = 1;
	





















};
obj81953_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81953_onTap_activeActionGroupIndex = -1;
		$("#obj81953").trigger("obj81953_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81953) {
				console.warn("de-queueing event obj81953." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81953").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81953_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_81955();
function goToPage_81955() {
	window.obj81953_onTap_runningActionsCount = obj81953_onTap_runningActionsCount + 1;
	$("#anchor627")[0].click();
	window.obj81953_onTap_runningActionsCount = window.obj81953_onTap_runningActionsCount - 1;
if (window.obj81953_onTap_runningActionsCount < 0) {
	window.obj81953_onTap_runningActionsCount = 0;
} else if (window.obj81953_onTap_runningActionsCount == 0) {
	obj81953_onTap_actionGroup1();
}
}





















};
obj81953_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81953_onTap_activeActionGroupIndex = -1;
		$("#obj81953").trigger("obj81953_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81953) {
				console.warn("de-queueing event obj81953." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81953").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81953_onTap_activeActionGroupIndex = 1;
	





















};
obj81850_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81850");
//	action: dragDrop
//	target: obj81850 
dragDrop_81853();
function dragDrop_81853() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81850_onTouchDown_runningActionsCount = obj81850_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81850');
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
	  	containerNode = $('#obj81943');
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
    	window.obj81850_onTouchDown_runningActionsCount = window.obj81850_onTouchDown_runningActionsCount - 1;
if (window.obj81850_onTouchDown_runningActionsCount < 0) {
	window.obj81850_onTouchDown_runningActionsCount = 0;
} else if (window.obj81850_onTouchDown_runningActionsCount == 0) {
	obj81850_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81937","#obj81939","#obj81935");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81853 = false;
    	var dropped_id_81853;
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
					dropped_81853 = true;
					dropped_id_81853 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81853) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81850").trigger('SCActionDragDrop81853_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81850_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81850_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81850 
move_92445();
function move_92445() {
	window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount = obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81850");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount = window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81850_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81876();
function runjs_81876() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81877();
function runjs_81877() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("border-color", "#C00000"); $("#obj81935").css("border-width", "2px"); $("#obj81935").css("border-style", "solid"); $("#obj81935").css("border-radius", "10px"); $("#obj81935").css("-webkit-border-radius", "10px"); $("#obj81935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81929 
hide_81878();
function hide_81878() {
	var selector = "#obj81929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81878(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81850_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81879();
function runjs_81879() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81850").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81880();
function switchText_81880() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81850_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81850 
move_81881();
function move_81881() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81850");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81850_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81882();
function runjs_81882() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81883();
function runjs_81883() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("border-color", "#000000"); $("#obj81935").css("border-width", "1px"); $("#obj81935").css("border-style", "solid"); $("#obj81935").css("border-radius", "10px"); $("#obj81935").css("-webkit-border-radius", "10px"); $("#obj81935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81929
(function(){
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81929";
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
					window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81850_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81885();
function runjs_81885() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81850").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81886();
function runjs_81886() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81850").css("border-color", "rgba(0,0,0,0)"); $("#obj81850").css("border-width", "0px"); $("#obj81850").css("border-style", "solid"); $("#obj81850").css("border-radius", "10px"); $("#obj81850").css("-webkit-border-radius", "10px"); $("#obj81850").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81921 
playAudio_81887();
function playAudio_81887() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81921")[0];
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
		    window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81850_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81888();
function switchText_81888() {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = obj81850_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81850_droppedInsideTargetActions_3_runningActionsCount = window.obj81850_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81850_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81850_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81862();
function runjs_81862() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81863();
function runjs_81863() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("border-color", "#C00000"); $("#obj81939").css("border-width", "2px"); $("#obj81939").css("border-style", "solid"); $("#obj81939").css("border-radius", "10px"); $("#obj81939").css("-webkit-border-radius", "10px"); $("#obj81939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81933 
hide_81864();
function hide_81864() {
	var selector = "#obj81933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81864(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81850_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81865();
function runjs_81865() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81850").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81866();
function switchText_81866() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81850_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81850 
move_81867();
function move_81867() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81850");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 210;
	var moveY = 633;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81850_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81868();
function runjs_81868() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81869();
function runjs_81869() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("border-color", "#000000"); $("#obj81939").css("border-width", "1px"); $("#obj81939").css("border-style", "solid"); $("#obj81939").css("border-radius", "10px"); $("#obj81939").css("-webkit-border-radius", "10px"); $("#obj81939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81933
(function(){
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81933";
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
					window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81850_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81871();
function runjs_81871() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81850").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81872();
function runjs_81872() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81850").css("border-color", "rgba(0,0,0,0)"); $("#obj81850").css("border-width", "0px"); $("#obj81850").css("border-style", "solid"); $("#obj81850").css("border-radius", "10px"); $("#obj81850").css("-webkit-border-radius", "10px"); $("#obj81850").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81921 
playAudio_81873();
function playAudio_81873() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81921")[0];
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
		    window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81850_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81874();
function switchText_81874() {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = obj81850_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81850_droppedInsideTargetActions_2_runningActionsCount = window.obj81850_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81850_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81850_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81855();
function runjs_81855() {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81937").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81859();
function switchText_81859() {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81850_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81856();
function runjs_81856() {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81937").css("border-color", "#058E3F"); $("#obj81937").css("border-width", "2px"); $("#obj81937").css("border-style", "solid"); $("#obj81937").css("border-radius", "10px"); $("#obj81937").css("-webkit-border-radius", "10px"); $("#obj81937").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81931 
hide_81857();
function hide_81857() {
	var selector = "#obj81931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81857(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81850_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81858();
function runjs_81858() {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81850").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81850_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81925 
playAudio_81860();
function playAudio_81860() {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81925")[0];
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
		    window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81850_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90357();
function switchText_90357() {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = obj81850_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81850_droppedInsideTargetActions_runningActionsCount = window.obj81850_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81850_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81850_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81850_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81850_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81850_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81850").trigger("obj81850_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81850) {
				console.warn("de-queueing event obj81850." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81850").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81850_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81783_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81783");
//	action: dragDrop
//	target: obj81783 
dragDrop_81786();
function dragDrop_81786() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81783_onTouchDown_runningActionsCount = obj81783_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81783');
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
	  	containerNode = $('#obj81943');
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
    	window.obj81783_onTouchDown_runningActionsCount = window.obj81783_onTouchDown_runningActionsCount - 1;
if (window.obj81783_onTouchDown_runningActionsCount < 0) {
	window.obj81783_onTouchDown_runningActionsCount = 0;
} else if (window.obj81783_onTouchDown_runningActionsCount == 0) {
	obj81783_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81939","#obj81937","#obj81935");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81786 = false;
    	var dropped_id_81786;
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
					dropped_81786 = true;
					dropped_id_81786 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81786) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81783").trigger('SCActionDragDrop81786_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81783_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81783_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81783 
move_92443();
function move_92443() {
	window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount = obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81783");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 342;
	var moveY = 549;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount = window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81783_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81809();
function runjs_81809() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81810();
function runjs_81810() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("border-color", "#C00000"); $("#obj81935").css("border-width", "2px"); $("#obj81935").css("border-style", "solid"); $("#obj81935").css("border-radius", "10px"); $("#obj81935").css("-webkit-border-radius", "10px"); $("#obj81935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81929 
hide_81811();
function hide_81811() {
	var selector = "#obj81929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81811(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81783_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81812();
function runjs_81812() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81783").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81813();
function switchText_81813() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81783_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81783 
move_81814();
function move_81814() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81783");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 342;
	var moveY = 549;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81783_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81815();
function runjs_81815() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81816();
function runjs_81816() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81935").css("border-color", "#000000"); $("#obj81935").css("border-width", "1px"); $("#obj81935").css("border-style", "solid"); $("#obj81935").css("border-radius", "10px"); $("#obj81935").css("-webkit-border-radius", "10px"); $("#obj81935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81929
(function(){
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81929";
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
					window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81783_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81818();
function runjs_81818() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81783").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81819();
function runjs_81819() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81783").css("border-color", "rgba(0,0,0,0)"); $("#obj81783").css("border-width", "0px"); $("#obj81783").css("border-style", "solid"); $("#obj81783").css("border-radius", "10px"); $("#obj81783").css("-webkit-border-radius", "10px"); $("#obj81783").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81921 
playAudio_81820();
function playAudio_81820() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81921")[0];
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
		    window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81783_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81821();
function switchText_81821() {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = obj81783_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81783_droppedInsideTargetActions_3_runningActionsCount = window.obj81783_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81783_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81783_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81795();
function runjs_81795() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81937").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81796();
function runjs_81796() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81937").css("border-color", "#C00000"); $("#obj81937").css("border-width", "2px"); $("#obj81937").css("border-style", "solid"); $("#obj81937").css("border-radius", "10px"); $("#obj81937").css("-webkit-border-radius", "10px"); $("#obj81937").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81931 
hide_81797();
function hide_81797() {
	var selector = "#obj81931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81797(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81783_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81798();
function runjs_81798() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81783").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81799();
function switchText_81799() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81783_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81783 
move_81800();
function move_81800() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81783");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 342;
	var moveY = 549;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81783_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81801();
function runjs_81801() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81937").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81802();
function runjs_81802() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81937").css("border-color", "#000000"); $("#obj81937").css("border-width", "1px"); $("#obj81937").css("border-style", "solid"); $("#obj81937").css("border-radius", "10px"); $("#obj81937").css("-webkit-border-radius", "10px"); $("#obj81937").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81931
(function(){
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81931";
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
					window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81783_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81804();
function runjs_81804() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81783").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81805();
function runjs_81805() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81783").css("border-color", "rgba(0,0,0,0)"); $("#obj81783").css("border-width", "0px"); $("#obj81783").css("border-style", "solid"); $("#obj81783").css("border-radius", "10px"); $("#obj81783").css("-webkit-border-radius", "10px"); $("#obj81783").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81921 
playAudio_81806();
function playAudio_81806() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81921")[0];
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
		    window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81783_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81807();
function switchText_81807() {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = obj81783_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81783_droppedInsideTargetActions_2_runningActionsCount = window.obj81783_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81783_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81783_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81788();
function runjs_81788() {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81792();
function switchText_81792() {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81783_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81789();
function runjs_81789() {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81939").css("border-color", "#058E3F"); $("#obj81939").css("border-width", "2px"); $("#obj81939").css("border-style", "solid"); $("#obj81939").css("border-radius", "10px"); $("#obj81939").css("-webkit-border-radius", "10px"); $("#obj81939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81933 
hide_81790();
function hide_81790() {
	var selector = "#obj81933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81790(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81783_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81791();
function runjs_81791() {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81783").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81783_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81925 
playAudio_81793();
function playAudio_81793() {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81925")[0];
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
		    window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81783_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90358();
function switchText_90358() {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = obj81783_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81783_droppedInsideTargetActions_runningActionsCount = window.obj81783_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81783_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81783_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81783_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81783_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81783_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81783").trigger("obj81783_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81783) {
				console.warn("de-queueing event obj81783." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81783").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81783_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81716_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj81716");
//	action: dragDrop
//	target: obj81716 
dragDrop_81719();
function dragDrop_81719() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj81716_onTouchDown_runningActionsCount = obj81716_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj81716');
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
	  	containerNode = $('#obj81943');
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
    	window.obj81716_onTouchDown_runningActionsCount = window.obj81716_onTouchDown_runningActionsCount - 1;
if (window.obj81716_onTouchDown_runningActionsCount < 0) {
	window.obj81716_onTouchDown_runningActionsCount = 0;
} else if (window.obj81716_onTouchDown_runningActionsCount == 0) {
	obj81716_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj81935","#obj81939","#obj81937");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_81719 = false;
    	var dropped_id_81719;
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
					dropped_81719 = true;
					dropped_id_81719 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_81719) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj81716").trigger('SCActionDragDrop81719_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj81716_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81716_onTouchDown_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj81716 
move_92441();
function move_92441() {
	window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount = obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj81716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 70;
	var moveY = 564;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount = window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj81716_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81742();
function runjs_81742() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81937").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81743();
function runjs_81743() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81937").css("border-color", "#C00000"); $("#obj81937").css("border-width", "2px"); $("#obj81937").css("border-style", "solid"); $("#obj81937").css("border-radius", "10px"); $("#obj81937").css("-webkit-border-radius", "10px"); $("#obj81937").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81931 
hide_81744();
function hide_81744() {
	var selector = "#obj81931";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81744(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81716_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81745();
function runjs_81745() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81746();
function switchText_81746() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj81716_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81716 
move_81747();
function move_81747() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj81716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 70;
	var moveY = 564;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj81716_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81748();
function runjs_81748() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81937").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81749();
function runjs_81749() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81937").css("border-color", "#000000"); $("#obj81937").css("border-width", "1px"); $("#obj81937").css("border-style", "solid"); $("#obj81937").css("border-radius", "10px"); $("#obj81937").css("-webkit-border-radius", "10px"); $("#obj81937").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81931
(function(){
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj81931";
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
					window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81716_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81751();
function runjs_81751() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81716").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81752();
function runjs_81752() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj81716").css("border-color", "rgba(0,0,0,0)"); $("#obj81716").css("border-width", "0px"); $("#obj81716").css("border-style", "solid"); $("#obj81716").css("border-radius", "10px"); $("#obj81716").css("-webkit-border-radius", "10px"); $("#obj81716").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81921 
playAudio_81753();
function playAudio_81753() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj81921")[0];
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
		    window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj81716_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81754();
function switchText_81754() {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = obj81716_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81716_droppedInsideTargetActions_3_runningActionsCount = window.obj81716_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj81716_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj81716_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81728();
function runjs_81728() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_81729();
function runjs_81729() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("border-color", "#C00000"); $("#obj81939").css("border-width", "2px"); $("#obj81939").css("border-style", "solid"); $("#obj81939").css("border-radius", "10px"); $("#obj81939").css("-webkit-border-radius", "10px"); $("#obj81939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj81933 
hide_81730();
function hide_81730() {
	var selector = "#obj81933";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81730(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81716_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_81731();
function runjs_81731() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_81732();
function switchText_81732() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj81716_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj81716 
move_81733();
function move_81733() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj81716");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 70;
	var moveY = 564;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj81716_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_81734();
function runjs_81734() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_81735();
function runjs_81735() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81939").css("border-color", "#000000"); $("#obj81939").css("border-width", "1px"); $("#obj81939").css("border-style", "solid"); $("#obj81939").css("border-radius", "10px"); $("#obj81939").css("-webkit-border-radius", "10px"); $("#obj81939").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj81933
(function(){
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj81933";
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
					window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81716_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_81737();
function runjs_81737() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81716").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_81738();
function runjs_81738() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj81716").css("border-color", "rgba(0,0,0,0)"); $("#obj81716").css("border-width", "0px"); $("#obj81716").css("border-style", "solid"); $("#obj81716").css("border-radius", "10px"); $("#obj81716").css("-webkit-border-radius", "10px"); $("#obj81716").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj81921 
playAudio_81739();
function playAudio_81739() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj81921")[0];
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
		    window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj81716_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_81740();
function switchText_81740() {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = obj81716_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81716_droppedInsideTargetActions_2_runningActionsCount = window.obj81716_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj81716_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj81716_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_81721();
function runjs_81721() {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81935").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_81725();
function switchText_81725() {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj81716_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_81722();
function runjs_81722() {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81935").css("border-color", "#058E3F"); $("#obj81935").css("border-width", "2px"); $("#obj81935").css("border-style", "solid"); $("#obj81935").css("border-radius", "10px"); $("#obj81935").css("-webkit-border-radius", "10px"); $("#obj81935").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj81929 
hide_81723();
function hide_81723() {
	var selector = "#obj81929";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81723(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj81716_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_81724();
function runjs_81724() {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj81716").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj81716_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj81925 
playAudio_81726();
function playAudio_81726() {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj81925")[0];
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
		    window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj81716_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90356();
function switchText_90356() {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = obj81716_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj81923_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj81923_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj81923").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj81923_content");
			setTimeout(function () {
				window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj81923 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj81716_droppedInsideTargetActions_runningActionsCount = window.obj81716_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj81716_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj81716_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj81716_droppedInsideTargetActions_runningActionsCount == 0) {
	obj81716_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj81716_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj81716").trigger("obj81716_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81716) {
				console.warn("de-queueing event obj81716." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81716").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81716_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj81698_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81698_onTap_activeActionGroupIndex = -1;
		$("#obj81698").trigger("obj81698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81698) {
				console.warn("de-queueing event obj81698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81698_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81698 
hide_81701();
function hide_81701() {
	var selector = "#obj81698";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81698_onTap_runningActionsCount = obj81698_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81698_onTap_runningActionsCount = window.obj81698_onTap_runningActionsCount - 1;
if (window.obj81698_onTap_runningActionsCount < 0) {
	window.obj81698_onTap_runningActionsCount = 0;
} else if (window.obj81698_onTap_runningActionsCount == 0) {
	obj81698_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81701(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81698_onTap_runningActionsCount = window.obj81698_onTap_runningActionsCount - 1;
if (window.obj81698_onTap_runningActionsCount < 0) {
	window.obj81698_onTap_runningActionsCount = 0;
} else if (window.obj81698_onTap_runningActionsCount == 0) {
	obj81698_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj81688 
stopMovie_81700();
function stopMovie_81700() {
	window.obj81698_onTap_runningActionsCount = obj81698_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81688")[0];
	myVideo.pause();
	window.obj81698_onTap_runningActionsCount = window.obj81698_onTap_runningActionsCount - 1;
if (window.obj81698_onTap_runningActionsCount < 0) {
	window.obj81698_onTap_runningActionsCount = 0;
} else if (window.obj81698_onTap_runningActionsCount == 0) {
	obj81698_onTap_actionGroup1();
}
}
















};
obj81698_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81698_onTap_activeActionGroupIndex = -1;
		$("#obj81698").trigger("obj81698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81698) {
				console.warn("de-queueing event obj81698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81698_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81690
(function(){
	window.obj81698_onTap_runningActionsCount = obj81698_onTap_runningActionsCount + 1;

	var selector = "#obj81690";
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
					window.obj81698_onTap_runningActionsCount = window.obj81698_onTap_runningActionsCount - 1;
if (window.obj81698_onTap_runningActionsCount < 0) {
	window.obj81698_onTap_runningActionsCount = 0;
} else if (window.obj81698_onTap_runningActionsCount == 0) {
	obj81698_onTap_actionGroup2();
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
				window.obj81698_onTap_runningActionsCount = window.obj81698_onTap_runningActionsCount - 1;
if (window.obj81698_onTap_runningActionsCount < 0) {
	window.obj81698_onTap_runningActionsCount = 0;
} else if (window.obj81698_onTap_runningActionsCount == 0) {
	obj81698_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81698_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81698_onTap_activeActionGroupIndex = -1;
		$("#obj81698").trigger("obj81698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81698) {
				console.warn("de-queueing event obj81698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81698_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81688 
move_81703();
function move_81703() {
	window.obj81698_onTap_runningActionsCount = obj81698_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81688");
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
			window.obj81698_onTap_runningActionsCount = window.obj81698_onTap_runningActionsCount - 1;
if (window.obj81698_onTap_runningActionsCount < 0) {
	window.obj81698_onTap_runningActionsCount = 0;
} else if (window.obj81698_onTap_runningActionsCount == 0) {
	obj81698_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81698_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81698_onTap_activeActionGroupIndex = -1;
		$("#obj81698").trigger("obj81698_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81698) {
				console.warn("de-queueing event obj81698." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81698").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81698_onTap_activeActionGroupIndex = 3;
	





















};
obj81690_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81690_onTap_activeActionGroupIndex = -1;
		$("#obj81690").trigger("obj81690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81690) {
				console.warn("de-queueing event obj81690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81690_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj81690 
hide_81693();
function hide_81693() {
	var selector = "#obj81690";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj81690_onTap_runningActionsCount = obj81690_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj81690_onTap_runningActionsCount = window.obj81690_onTap_runningActionsCount - 1;
if (window.obj81690_onTap_runningActionsCount < 0) {
	window.obj81690_onTap_runningActionsCount = 0;
} else if (window.obj81690_onTap_runningActionsCount == 0) {
	obj81690_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_81693(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj81690_onTap_runningActionsCount = window.obj81690_onTap_runningActionsCount - 1;
if (window.obj81690_onTap_runningActionsCount < 0) {
	window.obj81690_onTap_runningActionsCount = 0;
} else if (window.obj81690_onTap_runningActionsCount == 0) {
	obj81690_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj81688 
playPauseMovie_81692();
function playPauseMovie_81692() {
	window.obj81690_onTap_runningActionsCount = obj81690_onTap_runningActionsCount + 1;
	var myVideo = $("#obj81688")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj81690_onTap_runningActionsCount = window.obj81690_onTap_runningActionsCount - 1;
if (window.obj81690_onTap_runningActionsCount < 0) {
	window.obj81690_onTap_runningActionsCount = 0;
} else if (window.obj81690_onTap_runningActionsCount == 0) {
	obj81690_onTap_actionGroup1();
}
}

















};
obj81690_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81690_onTap_activeActionGroupIndex = -1;
		$("#obj81690").trigger("obj81690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81690) {
				console.warn("de-queueing event obj81690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81690_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj81698
(function(){
	window.obj81690_onTap_runningActionsCount = obj81690_onTap_runningActionsCount + 1;

	var selector = "#obj81698";
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
					window.obj81690_onTap_runningActionsCount = window.obj81690_onTap_runningActionsCount - 1;
if (window.obj81690_onTap_runningActionsCount < 0) {
	window.obj81690_onTap_runningActionsCount = 0;
} else if (window.obj81690_onTap_runningActionsCount == 0) {
	obj81690_onTap_actionGroup2();
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
				window.obj81690_onTap_runningActionsCount = window.obj81690_onTap_runningActionsCount - 1;
if (window.obj81690_onTap_runningActionsCount < 0) {
	window.obj81690_onTap_runningActionsCount = 0;
} else if (window.obj81690_onTap_runningActionsCount == 0) {
	obj81690_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj81690_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj81690_onTap_activeActionGroupIndex = -1;
		$("#obj81690").trigger("obj81690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81690) {
				console.warn("de-queueing event obj81690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81690_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj81688 
move_81695();
function move_81695() {
	window.obj81690_onTap_runningActionsCount = obj81690_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj81688");
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
			window.obj81690_onTap_runningActionsCount = window.obj81690_onTap_runningActionsCount - 1;
if (window.obj81690_onTap_runningActionsCount < 0) {
	window.obj81690_onTap_runningActionsCount = 0;
} else if (window.obj81690_onTap_runningActionsCount == 0) {
	obj81690_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj81690_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj81690_onTap_activeActionGroupIndex = -1;
		$("#obj81690").trigger("obj81690_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 81690) {
				console.warn("de-queueing event obj81690." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj81690").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj81690_onTap_activeActionGroupIndex = 3;
	





















};
obj83638_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj83638_onTap_activeActionGroupIndex = -1;
		$("#obj83638").trigger("obj83638_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83638) {
				console.warn("de-queueing event obj83638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83638_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_83640();
function goToPage_83640() {
	window.obj83638_onTap_runningActionsCount = obj83638_onTap_runningActionsCount + 1;
	$("#anchor630")[0].click();
	window.obj83638_onTap_runningActionsCount = window.obj83638_onTap_runningActionsCount - 1;
if (window.obj83638_onTap_runningActionsCount < 0) {
	window.obj83638_onTap_runningActionsCount = 0;
} else if (window.obj83638_onTap_runningActionsCount == 0) {
	obj83638_onTap_actionGroup1();
}
}





















};
obj83638_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj83638_onTap_activeActionGroupIndex = -1;
		$("#obj83638").trigger("obj83638_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 83638) {
				console.warn("de-queueing event obj83638." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj83638").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj83638_onTap_activeActionGroupIndex = 1;
	





















};
obj88129_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88129_onTap_activeActionGroupIndex = -1;
		$("#obj88129").trigger("obj88129_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88129) {
				console.warn("de-queueing event obj88129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88129_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88134 
stopAudio_88131();
function stopAudio_88131() {
	window.obj88129_onTap_runningActionsCount = obj88129_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88134")[0];
	myAudio.pause();
	window.obj88129_onTap_runningActionsCount = window.obj88129_onTap_runningActionsCount - 1;
if (window.obj88129_onTap_runningActionsCount < 0) {
	window.obj88129_onTap_runningActionsCount = 0;
} else if (window.obj88129_onTap_runningActionsCount == 0) {
	obj88129_onTap_actionGroup1();
}
}








};
obj88129_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88129_onTap_activeActionGroupIndex = -1;
		$("#obj88129").trigger("obj88129_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88129) {
				console.warn("de-queueing event obj88129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88129_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88129 
hide_88132();
function hide_88132() {
	var selector = "#obj88129";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88129_onTap_runningActionsCount = obj88129_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88129_onTap_runningActionsCount = window.obj88129_onTap_runningActionsCount - 1;
if (window.obj88129_onTap_runningActionsCount < 0) {
	window.obj88129_onTap_runningActionsCount = 0;
} else if (window.obj88129_onTap_runningActionsCount == 0) {
	obj88129_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88132(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88129_onTap_runningActionsCount = window.obj88129_onTap_runningActionsCount - 1;
if (window.obj88129_onTap_runningActionsCount < 0) {
	window.obj88129_onTap_runningActionsCount = 0;
} else if (window.obj88129_onTap_runningActionsCount == 0) {
	obj88129_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88129_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88129_onTap_activeActionGroupIndex = -1;
		$("#obj88129").trigger("obj88129_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88129) {
				console.warn("de-queueing event obj88129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88129_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88124
(function(){
	window.obj88129_onTap_runningActionsCount = obj88129_onTap_runningActionsCount + 1;

	var selector = "#obj88124";
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
					window.obj88129_onTap_runningActionsCount = window.obj88129_onTap_runningActionsCount - 1;
if (window.obj88129_onTap_runningActionsCount < 0) {
	window.obj88129_onTap_runningActionsCount = 0;
} else if (window.obj88129_onTap_runningActionsCount == 0) {
	obj88129_onTap_actionGroup3();
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
				window.obj88129_onTap_runningActionsCount = window.obj88129_onTap_runningActionsCount - 1;
if (window.obj88129_onTap_runningActionsCount < 0) {
	window.obj88129_onTap_runningActionsCount = 0;
} else if (window.obj88129_onTap_runningActionsCount == 0) {
	obj88129_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88129_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88129_onTap_activeActionGroupIndex = -1;
		$("#obj88129").trigger("obj88129_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88129) {
				console.warn("de-queueing event obj88129." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88129").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88129_onTap_activeActionGroupIndex = 3;
	





















};
obj88124_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88124_onTap_activeActionGroupIndex = -1;
		$("#obj88124").trigger("obj88124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88124) {
				console.warn("de-queueing event obj88124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88124_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88124 
hide_88126();
function hide_88126() {
	var selector = "#obj88124";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88124_onTap_runningActionsCount = obj88124_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88124_onTap_runningActionsCount = window.obj88124_onTap_runningActionsCount - 1;
if (window.obj88124_onTap_runningActionsCount < 0) {
	window.obj88124_onTap_runningActionsCount = 0;
} else if (window.obj88124_onTap_runningActionsCount == 0) {
	obj88124_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88126(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88124_onTap_runningActionsCount = window.obj88124_onTap_runningActionsCount - 1;
if (window.obj88124_onTap_runningActionsCount < 0) {
	window.obj88124_onTap_runningActionsCount = 0;
} else if (window.obj88124_onTap_runningActionsCount == 0) {
	obj88124_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88124_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88124_onTap_activeActionGroupIndex = -1;
		$("#obj88124").trigger("obj88124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88124) {
				console.warn("de-queueing event obj88124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88124_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88129
(function(){
	window.obj88124_onTap_runningActionsCount = obj88124_onTap_runningActionsCount + 1;

	var selector = "#obj88129";
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
					window.obj88124_onTap_runningActionsCount = window.obj88124_onTap_runningActionsCount - 1;
if (window.obj88124_onTap_runningActionsCount < 0) {
	window.obj88124_onTap_runningActionsCount = 0;
} else if (window.obj88124_onTap_runningActionsCount == 0) {
	obj88124_onTap_actionGroup2();
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
				window.obj88124_onTap_runningActionsCount = window.obj88124_onTap_runningActionsCount - 1;
if (window.obj88124_onTap_runningActionsCount < 0) {
	window.obj88124_onTap_runningActionsCount = 0;
} else if (window.obj88124_onTap_runningActionsCount == 0) {
	obj88124_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88124_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88124_onTap_activeActionGroupIndex = -1;
		$("#obj88124").trigger("obj88124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88124) {
				console.warn("de-queueing event obj88124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88124_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88134 
playAudio_88128();
function playAudio_88128() {
	window.obj88124_onTap_runningActionsCount = obj88124_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88134")[0];
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
		    window.obj88124_onTap_runningActionsCount = window.obj88124_onTap_runningActionsCount - 1;
if (window.obj88124_onTap_runningActionsCount < 0) {
	window.obj88124_onTap_runningActionsCount = 0;
} else if (window.obj88124_onTap_runningActionsCount == 0) {
	obj88124_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88124_onTap_runningActionsCount = window.obj88124_onTap_runningActionsCount - 1;
if (window.obj88124_onTap_runningActionsCount < 0) {
	window.obj88124_onTap_runningActionsCount = 0;
} else if (window.obj88124_onTap_runningActionsCount == 0) {
	obj88124_onTap_actionGroup3();
}
	}
}









};
obj88124_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88124_onTap_activeActionGroupIndex = -1;
		$("#obj88124").trigger("obj88124_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88124) {
				console.warn("de-queueing event obj88124." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88124").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88124_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj81960: Event Touch Down
 *
 */
$("#obj81960").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81960_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81960_onTap is still running");
	return;
}
var obj81960_onTap_runningActionsCount = 0;
var obj81960_onTap_loopCount = 0;
obj81960_onTap_actionGroup0();
});










/*
 *
 *   obj81957: Event Touch Down
 *
 */
$("#obj81957").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81957_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81957_onTap is still running");
	return;
}
var obj81957_onTap_runningActionsCount = 0;
var obj81957_onTap_loopCount = 0;
obj81957_onTap_actionGroup0();
});










/*
 *
 *   obj81953: Event Touch Down
 *
 */
$("#obj81953").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81953_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81953_onTap is still running");
	return;
}
var obj81953_onTap_runningActionsCount = 0;
var obj81953_onTap_loopCount = 0;
obj81953_onTap_actionGroup0();
});





















































































































































































/*
 *
 *   obj81850: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81850");
	var winTarget = document.getElementById("obj81850");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81850").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81850_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81850_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81850_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81850_onTouchDown is still running");
	return;
}
var obj81850_onTouchDown_runningActionsCount = 0;
var obj81850_onTouchDown_loopCount = 0;
obj81850_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81850: Event SCActionDragDrop81853_droppedOutsideTargetActions
 *
 */
$("#obj81850").bind("SCActionDragDrop81853_droppedOutsideTargetActions", function(event) {
	if (window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81850_SCActionDragDrop81853_droppedOutsideTargetActions is still running");
	return;
}
var obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_loopCount = 0;
obj81850_SCActionDragDrop81853_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81850: Event droppedInsideTargetActions_3
 *
 */
$("#obj81850").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81850_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81850_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81850_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81850_droppedInsideTargetActions_3_loopCount = 0;
obj81850_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81850: Event droppedInsideTargetActions_2
 *
 */
$("#obj81850").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81850_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81850_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81850_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81850_droppedInsideTargetActions_2_loopCount = 0;
obj81850_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81850: Event droppedInsideTargetActions
 *
 */
$("#obj81850").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81850_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81850_droppedInsideTargetActions is still running");
	return;
}
var obj81850_droppedInsideTargetActions_runningActionsCount = 0;
var obj81850_droppedInsideTargetActions_loopCount = 0;
obj81850_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj81783: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81783");
	var winTarget = document.getElementById("obj81783");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81783").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81783_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81783_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81783_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81783_onTouchDown is still running");
	return;
}
var obj81783_onTouchDown_runningActionsCount = 0;
var obj81783_onTouchDown_loopCount = 0;
obj81783_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81783: Event SCActionDragDrop81786_droppedOutsideTargetActions
 *
 */
$("#obj81783").bind("SCActionDragDrop81786_droppedOutsideTargetActions", function(event) {
	if (window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81783_SCActionDragDrop81786_droppedOutsideTargetActions is still running");
	return;
}
var obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_loopCount = 0;
obj81783_SCActionDragDrop81786_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81783: Event droppedInsideTargetActions_3
 *
 */
$("#obj81783").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81783_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81783_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81783_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81783_droppedInsideTargetActions_3_loopCount = 0;
obj81783_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81783: Event droppedInsideTargetActions_2
 *
 */
$("#obj81783").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81783_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81783_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81783_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81783_droppedInsideTargetActions_2_loopCount = 0;
obj81783_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81783: Event droppedInsideTargetActions
 *
 */
$("#obj81783").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81783_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81783_droppedInsideTargetActions is still running");
	return;
}
var obj81783_droppedInsideTargetActions_runningActionsCount = 0;
var obj81783_droppedInsideTargetActions_loopCount = 0;
obj81783_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj81716: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj81716");
	var winTarget = document.getElementById("obj81716");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj81716").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj81716_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj81716_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj81716_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81716_onTouchDown is still running");
	return;
}
var obj81716_onTouchDown_runningActionsCount = 0;
var obj81716_onTouchDown_loopCount = 0;
obj81716_onTouchDown_actionGroup0();
});



/*
 *
 *   obj81716: Event SCActionDragDrop81719_droppedOutsideTargetActions
 *
 */
$("#obj81716").bind("SCActionDragDrop81719_droppedOutsideTargetActions", function(event) {
	if (window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81716_SCActionDragDrop81719_droppedOutsideTargetActions is still running");
	return;
}
var obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_runningActionsCount = 0;
var obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_loopCount = 0;
obj81716_SCActionDragDrop81719_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj81716: Event droppedInsideTargetActions_3
 *
 */
$("#obj81716").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj81716_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81716_droppedInsideTargetActions_3 is still running");
	return;
}
var obj81716_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj81716_droppedInsideTargetActions_3_loopCount = 0;
obj81716_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj81716: Event droppedInsideTargetActions_2
 *
 */
$("#obj81716").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj81716_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81716_droppedInsideTargetActions_2 is still running");
	return;
}
var obj81716_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj81716_droppedInsideTargetActions_2_loopCount = 0;
obj81716_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj81716: Event droppedInsideTargetActions
 *
 */
$("#obj81716").bind("droppedInsideTargetActions", function(event) {
	if (window.obj81716_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81716_droppedInsideTargetActions is still running");
	return;
}
var obj81716_droppedInsideTargetActions_runningActionsCount = 0;
var obj81716_droppedInsideTargetActions_loopCount = 0;
obj81716_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj81698: Event Touch Down
 *
 */
$("#obj81698").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81698_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81698_onTap is still running");
	return;
}
var obj81698_onTap_runningActionsCount = 0;
var obj81698_onTap_loopCount = 0;
obj81698_onTap_actionGroup0();
});










/*
 *
 *   obj81690: Event Touch Down
 *
 */
$("#obj81690").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj81690_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj81690_onTap is still running");
	return;
}
var obj81690_onTap_runningActionsCount = 0;
var obj81690_onTap_loopCount = 0;
obj81690_onTap_actionGroup0();
});










/*
 *
 *   obj83638: Event Touch Down
 *
 */
$("#obj83638").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj83638_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj83638_onTap is still running");
	return;
}
var obj83638_onTap_runningActionsCount = 0;
var obj83638_onTap_loopCount = 0;
obj83638_onTap_actionGroup0();
});










/*
 *
 *   obj88129: Event Touch Down
 *
 */
$("#obj88129").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88129_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88129_onTap is still running");
	return;
}
var obj88129_onTap_runningActionsCount = 0;
var obj88129_onTap_loopCount = 0;
obj88129_onTap_actionGroup0();
});










/*
 *
 *   obj88124: Event Touch Down
 *
 */
$("#obj88124").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88124_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88124_onTap is still running");
	return;
}
var obj88124_onTap_runningActionsCount = 0;
var obj88124_onTap_loopCount = 0;
obj88124_onTap_actionGroup0();
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
	
$("#obj81963").trigger('SCEventShow');
$("#obj81960").trigger('SCEventShow');
$("#obj81957").trigger('SCEventShow');
$("#obj81953").trigger('SCEventShow');
$("#obj81949").trigger('SCEventShow');
$("#obj81947").trigger('SCEventShow');
$("#obj81945").trigger('SCEventShow');
$("#obj81943").trigger('SCEventShow');
$("#obj81941").trigger('SCEventShow');
$("#obj81939").trigger('SCEventShow');
$("#obj81937").trigger('SCEventShow');
$("#obj81935").trigger('SCEventShow');
$("#obj81933").trigger('SCEventShow');
$("#obj81931").trigger('SCEventShow');
$("#obj81929").trigger('SCEventShow');
$("#obj81927").trigger('SCEventShow');
$("#obj81925").trigger('SCEventShow');
$("#obj81923").trigger('SCEventShow');
$("#obj81921").trigger('SCEventShow');
$("#obj81919").trigger('SCEventShow');
$("#obj81917").trigger('SCEventShow');
$("#obj81850").trigger('SCEventShow');
$("#obj81783").trigger('SCEventShow');
$("#obj81716").trigger('SCEventShow');
$("#obj81698").trigger('SCEventShow');
$("#obj81690").trigger('SCEventShow');
$("#obj83638").trigger('SCEventShow');
$("#obj88129").trigger('SCEventShow');
$("#obj88124").trigger('SCEventShow');
$("#obj88134").trigger('SCEventShow');
$("#obj94839").trigger('SCEventShow');
$("#obj81688").trigger('SCEventShow');
	
});