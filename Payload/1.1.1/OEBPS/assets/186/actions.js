pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 52087;
pubcoder.page.title = pubcoder.page.title || "186";
pubcoder.page.number = pubcoder.page.number || 186;
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
var obj52093_onTap_activeActionGroupIndex = -1;
var obj52093_onTap_runningActionsCount = 0;
var obj52093_onTap_loopCount = 0;
var obj52090_onTap_activeActionGroupIndex = -1;
var obj52090_onTap_runningActionsCount = 0;
var obj52090_onTap_loopCount = 0;
var obj52096_onTap_activeActionGroupIndex = -1;
var obj52096_onTap_runningActionsCount = 0;
var obj52096_onTap_loopCount = 0;
var obj52154_onDrag_activeActionGroupIndex = -1;
var obj52154_onDrag_runningActionsCount = 0;
var obj52154_onDrag_loopCount = 0;
var obj52154_onTouchDown_activeActionGroupIndex = -1;
var obj52154_onTouchDown_runningActionsCount = 0;
var obj52154_onTouchDown_loopCount = 0;
var obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_loopCount = 0;
var obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52154_droppedInsideTargetActions_2_loopCount = 0;
var obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj52154_droppedInsideTargetActions_runningActionsCount = 0;
var obj52154_droppedInsideTargetActions_loopCount = 0;
var obj52179_onDrag_activeActionGroupIndex = -1;
var obj52179_onDrag_runningActionsCount = 0;
var obj52179_onDrag_loopCount = 0;
var obj52179_onTouchDown_activeActionGroupIndex = -1;
var obj52179_onTouchDown_runningActionsCount = 0;
var obj52179_onTouchDown_loopCount = 0;
var obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_loopCount = 0;
var obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52179_droppedInsideTargetActions_2_loopCount = 0;
var obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj52179_droppedInsideTargetActions_runningActionsCount = 0;
var obj52179_droppedInsideTargetActions_loopCount = 0;
var obj67998_onTap_activeActionGroupIndex = -1;
var obj67998_onTap_runningActionsCount = 0;
var obj67998_onTap_loopCount = 0;
var obj67990_onTap_activeActionGroupIndex = -1;
var obj67990_onTap_runningActionsCount = 0;
var obj67990_onTap_loopCount = 0;
var obj89113_onTap_activeActionGroupIndex = -1;
var obj89113_onTap_runningActionsCount = 0;
var obj89113_onTap_loopCount = 0;
var obj89108_onTap_activeActionGroupIndex = -1;
var obj89108_onTap_runningActionsCount = 0;
var obj89108_onTap_loopCount = 0;
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
		
obj52093_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52093_onTap_activeActionGroupIndex = -1;
		$("#obj52093").trigger("obj52093_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52093) {
				console.warn("de-queueing event obj52093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52093_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52095();
function goToPage_52095() {
	window.obj52093_onTap_runningActionsCount = obj52093_onTap_runningActionsCount + 1;
	$("#anchor1093")[0].click();
	window.obj52093_onTap_runningActionsCount = window.obj52093_onTap_runningActionsCount - 1;
if (window.obj52093_onTap_runningActionsCount < 0) {
	window.obj52093_onTap_runningActionsCount = 0;
} else if (window.obj52093_onTap_runningActionsCount == 0) {
	obj52093_onTap_actionGroup1();
}
}





















};
obj52093_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52093_onTap_activeActionGroupIndex = -1;
		$("#obj52093").trigger("obj52093_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52093) {
				console.warn("de-queueing event obj52093." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52093").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52093_onTap_activeActionGroupIndex = 1;
	





















};
obj52090_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52090_onTap_activeActionGroupIndex = -1;
		$("#obj52090").trigger("obj52090_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52090) {
				console.warn("de-queueing event obj52090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52090_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52092();
function goToPage_52092() {
	window.obj52090_onTap_runningActionsCount = obj52090_onTap_runningActionsCount + 1;
	$("#anchor1094")[0].click();
	window.obj52090_onTap_runningActionsCount = window.obj52090_onTap_runningActionsCount - 1;
if (window.obj52090_onTap_runningActionsCount < 0) {
	window.obj52090_onTap_runningActionsCount = 0;
} else if (window.obj52090_onTap_runningActionsCount == 0) {
	obj52090_onTap_actionGroup1();
}
}





















};
obj52090_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52090_onTap_activeActionGroupIndex = -1;
		$("#obj52090").trigger("obj52090_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52090) {
				console.warn("de-queueing event obj52090." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52090").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52090_onTap_activeActionGroupIndex = 1;
	





















};
obj52096_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52096_onTap_activeActionGroupIndex = -1;
		$("#obj52096").trigger("obj52096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52096) {
				console.warn("de-queueing event obj52096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52096_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52098();
function goToPage_52098() {
	window.obj52096_onTap_runningActionsCount = obj52096_onTap_runningActionsCount + 1;
	$("#anchor1095")[0].click();
	window.obj52096_onTap_runningActionsCount = window.obj52096_onTap_runningActionsCount - 1;
if (window.obj52096_onTap_runningActionsCount < 0) {
	window.obj52096_onTap_runningActionsCount = 0;
} else if (window.obj52096_onTap_runningActionsCount == 0) {
	obj52096_onTap_actionGroup1();
}
}





















};
obj52096_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52096_onTap_activeActionGroupIndex = -1;
		$("#obj52096").trigger("obj52096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52096) {
				console.warn("de-queueing event obj52096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52096_onTap_activeActionGroupIndex = 1;
	





















};
obj52154_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj52154");
//	action: dragDrop
//	target: obj52154 
dragDrop_52157();
function dragDrop_52157() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj52154_onTouchDown_runningActionsCount = obj52154_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj52154');
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
	  	containerNode = $('#obj52135');
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
    	window.obj52154_onTouchDown_runningActionsCount = window.obj52154_onTouchDown_runningActionsCount - 1;
if (window.obj52154_onTouchDown_runningActionsCount < 0) {
	window.obj52154_onTouchDown_runningActionsCount = 0;
} else if (window.obj52154_onTouchDown_runningActionsCount == 0) {
	obj52154_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52139","#obj52133");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_52157 = false;
    	var dropped_id_52157;
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
					dropped_52157 = true;
					dropped_id_52157 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_52157) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj52154").trigger('SCActionDragDrop52157_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj52154_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52154_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj52154 
move_92785();
function move_92785() {
	window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount = obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj52154");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 667;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount = window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj52154_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52166();
function runjs_52166() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52133").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52167();
function runjs_52167() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52133").css("border-color", "#C00000"); $("#obj52133").css("border-width", "2px"); $("#obj52133").css("border-style", "solid"); $("#obj52133").css("border-radius", "10px"); $("#obj52133").css("-webkit-border-radius", "10px"); $("#obj52133").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52131 
hide_52168();
function hide_52168() {
	var selector = "#obj52131";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52168(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52154_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52169();
function runjs_52169() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52154").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52170();
function switchText_52170() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52145_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52145_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52145").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52145_content");
			setTimeout(function () {
				window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52145 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj52154_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52154 
move_52171();
function move_52171() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj52154");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 127;
	var moveY = 667;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj52154_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_52172();
function runjs_52172() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52133").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_52173();
function runjs_52173() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52133").css("border-color", "#000000"); $("#obj52133").css("border-width", "1px"); $("#obj52133").css("border-style", "solid"); $("#obj52133").css("border-radius", "10px"); $("#obj52133").css("-webkit-border-radius", "10px"); $("#obj52133").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52131
(function(){
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52131";
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
					window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52154_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_52175();
function runjs_52175() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52154").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_52176();
function runjs_52176() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52154").css("border-color", "rgba(0,0,0,0)"); $("#obj52154").css("border-width", "0px"); $("#obj52154").css("border-style", "solid"); $("#obj52154").css("border-radius", "10px"); $("#obj52154").css("-webkit-border-radius", "10px"); $("#obj52154").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52208 
playAudio_52177();
function playAudio_52177() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52208")[0];
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
		    window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj52154_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_52178();
function switchText_52178() {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = obj52154_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52145_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52145_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52145").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52145_content");
			setTimeout(function () {
				window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52145 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52154_droppedInsideTargetActions_2_runningActionsCount = window.obj52154_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj52154_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj52154_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52159();
function runjs_52159() {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = obj52154_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52139").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52160();
function runjs_52160() {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = obj52154_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52139").css("border-color", "#058E3F"); $("#obj52139").css("border-width", "2px"); $("#obj52139").css("border-style", "solid"); $("#obj52139").css("border-radius", "10px"); $("#obj52139").css("-webkit-border-radius", "10px"); $("#obj52139").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52137 
hide_52161();
function hide_52161() {
	var selector = "#obj52137";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52154_droppedInsideTargetActions_runningActionsCount = obj52154_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52161(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52154_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52162();
function runjs_52162() {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = obj52154_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52154").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj52154_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52163();
function switchText_52163() {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = obj52154_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52145_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52145_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52145").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52145_content");
			setTimeout(function () {
				window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52145 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj52154_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52207 
playAudio_52164();
function playAudio_52164() {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = obj52154_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52207")[0];
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
		    window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52154_droppedInsideTargetActions_runningActionsCount = window.obj52154_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52154_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52154_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52154_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52154_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj52154_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52154").trigger("obj52154_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52154) {
				console.warn("de-queueing event obj52154." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52154").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52154_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj52179_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj52179");
//	action: dragDrop
//	target: obj52179 
dragDrop_52182();
function dragDrop_52182() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj52179_onTouchDown_runningActionsCount = obj52179_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj52179');
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
	  	containerNode = $('#obj52135');
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
    	window.obj52179_onTouchDown_runningActionsCount = window.obj52179_onTouchDown_runningActionsCount - 1;
if (window.obj52179_onTouchDown_runningActionsCount < 0) {
	window.obj52179_onTouchDown_runningActionsCount = 0;
} else if (window.obj52179_onTouchDown_runningActionsCount == 0) {
	obj52179_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52133","#obj52139");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_52182 = false;
    	var dropped_id_52182;
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
					dropped_52182 = true;
					dropped_id_52182 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_52182) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj52179").trigger('SCActionDragDrop52182_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj52179_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52179_onTouchDown_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj52179 
move_92787();
function move_92787() {
	window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount = obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj52179");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 331;
	var moveY = 667;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount = window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj52179_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52191();
function runjs_52191() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52139").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52192();
function runjs_52192() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52139").css("border-color", "#C00000"); $("#obj52139").css("border-width", "2px"); $("#obj52139").css("border-style", "solid"); $("#obj52139").css("border-radius", "10px"); $("#obj52139").css("-webkit-border-radius", "10px"); $("#obj52139").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52137 
hide_52193();
function hide_52193() {
	var selector = "#obj52137";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52193(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52179_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52194();
function runjs_52194() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52179").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52195();
function switchText_52195() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52145_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52145_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52145").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52145_content");
			setTimeout(function () {
				window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52145 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj52179_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj52179 
move_52196();
function move_52196() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj52179");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 331;
	var moveY = 667;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj52179_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_52197();
function runjs_52197() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52139").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_52198();
function runjs_52198() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52139").css("border-color", "#000000"); $("#obj52139").css("border-width", "1px"); $("#obj52139").css("border-style", "solid"); $("#obj52139").css("border-radius", "10px"); $("#obj52139").css("-webkit-border-radius", "10px"); $("#obj52139").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52137
(function(){
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52137";
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
					window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj52179_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_52200();
function runjs_52200() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52179").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_52201();
function runjs_52201() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52179").css("border-color", "rgba(0,0,0,0)"); $("#obj52179").css("border-width", "0px"); $("#obj52179").css("border-style", "solid"); $("#obj52179").css("border-radius", "10px"); $("#obj52179").css("-webkit-border-radius", "10px"); $("#obj52179").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52208 
playAudio_52202();
function playAudio_52202() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52208")[0];
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
		    window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj52179_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_52203();
function switchText_52203() {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = obj52179_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52145_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52145_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52145").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52145_content");
			setTimeout(function () {
				window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52145 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52179_droppedInsideTargetActions_2_runningActionsCount = window.obj52179_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj52179_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj52179_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_52184();
function runjs_52184() {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = obj52179_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52133").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_52185();
function runjs_52185() {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = obj52179_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52133").css("border-color", "#058E3F"); $("#obj52133").css("border-width", "2px"); $("#obj52133").css("border-style", "solid"); $("#obj52133").css("border-radius", "10px"); $("#obj52133").css("-webkit-border-radius", "10px"); $("#obj52133").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52131 
hide_52186();
function hide_52186() {
	var selector = "#obj52131";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj52179_droppedInsideTargetActions_runningActionsCount = obj52179_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_52186(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj52179_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_52187();
function runjs_52187() {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = obj52179_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52179").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj52179_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_52188();
function switchText_52188() {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = obj52179_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52145_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52145_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52145").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52145_content");
			setTimeout(function () {
				window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52145 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj52179_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52207 
playAudio_52189();
function playAudio_52189() {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = obj52179_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52207")[0];
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
		    window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj52179_droppedInsideTargetActions_runningActionsCount = window.obj52179_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj52179_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj52179_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj52179_droppedInsideTargetActions_runningActionsCount == 0) {
	obj52179_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj52179_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj52179").trigger("obj52179_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52179) {
				console.warn("de-queueing event obj52179." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52179").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52179_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj67998_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67998_onTap_activeActionGroupIndex = -1;
		$("#obj67998").trigger("obj67998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67998) {
				console.warn("de-queueing event obj67998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67998_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67998 
hide_68001();
function hide_68001() {
	var selector = "#obj67998";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67998_onTap_runningActionsCount = obj67998_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67998_onTap_runningActionsCount = window.obj67998_onTap_runningActionsCount - 1;
if (window.obj67998_onTap_runningActionsCount < 0) {
	window.obj67998_onTap_runningActionsCount = 0;
} else if (window.obj67998_onTap_runningActionsCount == 0) {
	obj67998_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_68001(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67998_onTap_runningActionsCount = window.obj67998_onTap_runningActionsCount - 1;
if (window.obj67998_onTap_runningActionsCount < 0) {
	window.obj67998_onTap_runningActionsCount = 0;
} else if (window.obj67998_onTap_runningActionsCount == 0) {
	obj67998_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj68004 
stopMovie_68000();
function stopMovie_68000() {
	window.obj67998_onTap_runningActionsCount = obj67998_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68004")[0];
	myVideo.pause();
	window.obj67998_onTap_runningActionsCount = window.obj67998_onTap_runningActionsCount - 1;
if (window.obj67998_onTap_runningActionsCount < 0) {
	window.obj67998_onTap_runningActionsCount = 0;
} else if (window.obj67998_onTap_runningActionsCount == 0) {
	obj67998_onTap_actionGroup1();
}
}
















};
obj67998_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67998_onTap_activeActionGroupIndex = -1;
		$("#obj67998").trigger("obj67998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67998) {
				console.warn("de-queueing event obj67998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67998_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67990
(function(){
	window.obj67998_onTap_runningActionsCount = obj67998_onTap_runningActionsCount + 1;

	var selector = "#obj67990";
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
					window.obj67998_onTap_runningActionsCount = window.obj67998_onTap_runningActionsCount - 1;
if (window.obj67998_onTap_runningActionsCount < 0) {
	window.obj67998_onTap_runningActionsCount = 0;
} else if (window.obj67998_onTap_runningActionsCount == 0) {
	obj67998_onTap_actionGroup2();
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
				window.obj67998_onTap_runningActionsCount = window.obj67998_onTap_runningActionsCount - 1;
if (window.obj67998_onTap_runningActionsCount < 0) {
	window.obj67998_onTap_runningActionsCount = 0;
} else if (window.obj67998_onTap_runningActionsCount == 0) {
	obj67998_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67998_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67998_onTap_activeActionGroupIndex = -1;
		$("#obj67998").trigger("obj67998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67998) {
				console.warn("de-queueing event obj67998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67998_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68004 
move_68003();
function move_68003() {
	window.obj67998_onTap_runningActionsCount = obj67998_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68004");
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
			window.obj67998_onTap_runningActionsCount = window.obj67998_onTap_runningActionsCount - 1;
if (window.obj67998_onTap_runningActionsCount < 0) {
	window.obj67998_onTap_runningActionsCount = 0;
} else if (window.obj67998_onTap_runningActionsCount == 0) {
	obj67998_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67998_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67998_onTap_activeActionGroupIndex = -1;
		$("#obj67998").trigger("obj67998_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67998) {
				console.warn("de-queueing event obj67998." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67998").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67998_onTap_activeActionGroupIndex = 3;
	





















};
obj67990_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67990_onTap_activeActionGroupIndex = -1;
		$("#obj67990").trigger("obj67990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67990) {
				console.warn("de-queueing event obj67990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67990_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67990 
hide_67993();
function hide_67993() {
	var selector = "#obj67990";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67990_onTap_runningActionsCount = obj67990_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67990_onTap_runningActionsCount = window.obj67990_onTap_runningActionsCount - 1;
if (window.obj67990_onTap_runningActionsCount < 0) {
	window.obj67990_onTap_runningActionsCount = 0;
} else if (window.obj67990_onTap_runningActionsCount == 0) {
	obj67990_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67993(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67990_onTap_runningActionsCount = window.obj67990_onTap_runningActionsCount - 1;
if (window.obj67990_onTap_runningActionsCount < 0) {
	window.obj67990_onTap_runningActionsCount = 0;
} else if (window.obj67990_onTap_runningActionsCount == 0) {
	obj67990_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj68004 
playPauseMovie_67992();
function playPauseMovie_67992() {
	window.obj67990_onTap_runningActionsCount = obj67990_onTap_runningActionsCount + 1;
	var myVideo = $("#obj68004")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67990_onTap_runningActionsCount = window.obj67990_onTap_runningActionsCount - 1;
if (window.obj67990_onTap_runningActionsCount < 0) {
	window.obj67990_onTap_runningActionsCount = 0;
} else if (window.obj67990_onTap_runningActionsCount == 0) {
	obj67990_onTap_actionGroup1();
}
}

















};
obj67990_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67990_onTap_activeActionGroupIndex = -1;
		$("#obj67990").trigger("obj67990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67990) {
				console.warn("de-queueing event obj67990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67990_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67998
(function(){
	window.obj67990_onTap_runningActionsCount = obj67990_onTap_runningActionsCount + 1;

	var selector = "#obj67998";
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
					window.obj67990_onTap_runningActionsCount = window.obj67990_onTap_runningActionsCount - 1;
if (window.obj67990_onTap_runningActionsCount < 0) {
	window.obj67990_onTap_runningActionsCount = 0;
} else if (window.obj67990_onTap_runningActionsCount == 0) {
	obj67990_onTap_actionGroup2();
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
				window.obj67990_onTap_runningActionsCount = window.obj67990_onTap_runningActionsCount - 1;
if (window.obj67990_onTap_runningActionsCount < 0) {
	window.obj67990_onTap_runningActionsCount = 0;
} else if (window.obj67990_onTap_runningActionsCount == 0) {
	obj67990_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67990_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67990_onTap_activeActionGroupIndex = -1;
		$("#obj67990").trigger("obj67990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67990) {
				console.warn("de-queueing event obj67990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67990_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj68004 
move_67995();
function move_67995() {
	window.obj67990_onTap_runningActionsCount = obj67990_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj68004");
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
			window.obj67990_onTap_runningActionsCount = window.obj67990_onTap_runningActionsCount - 1;
if (window.obj67990_onTap_runningActionsCount < 0) {
	window.obj67990_onTap_runningActionsCount = 0;
} else if (window.obj67990_onTap_runningActionsCount == 0) {
	obj67990_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67990_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67990_onTap_activeActionGroupIndex = -1;
		$("#obj67990").trigger("obj67990_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67990) {
				console.warn("de-queueing event obj67990." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67990").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67990_onTap_activeActionGroupIndex = 3;
	





















};
obj89113_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89113_onTap_activeActionGroupIndex = -1;
		$("#obj89113").trigger("obj89113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89113) {
				console.warn("de-queueing event obj89113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89113_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89118 
stopAudio_89115();
function stopAudio_89115() {
	window.obj89113_onTap_runningActionsCount = obj89113_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89118")[0];
	myAudio.pause();
	window.obj89113_onTap_runningActionsCount = window.obj89113_onTap_runningActionsCount - 1;
if (window.obj89113_onTap_runningActionsCount < 0) {
	window.obj89113_onTap_runningActionsCount = 0;
} else if (window.obj89113_onTap_runningActionsCount == 0) {
	obj89113_onTap_actionGroup1();
}
}








};
obj89113_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89113_onTap_activeActionGroupIndex = -1;
		$("#obj89113").trigger("obj89113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89113) {
				console.warn("de-queueing event obj89113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89113_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89113 
hide_89116();
function hide_89116() {
	var selector = "#obj89113";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89113_onTap_runningActionsCount = obj89113_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89113_onTap_runningActionsCount = window.obj89113_onTap_runningActionsCount - 1;
if (window.obj89113_onTap_runningActionsCount < 0) {
	window.obj89113_onTap_runningActionsCount = 0;
} else if (window.obj89113_onTap_runningActionsCount == 0) {
	obj89113_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89116(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89113_onTap_runningActionsCount = window.obj89113_onTap_runningActionsCount - 1;
if (window.obj89113_onTap_runningActionsCount < 0) {
	window.obj89113_onTap_runningActionsCount = 0;
} else if (window.obj89113_onTap_runningActionsCount == 0) {
	obj89113_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89113_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89113_onTap_activeActionGroupIndex = -1;
		$("#obj89113").trigger("obj89113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89113) {
				console.warn("de-queueing event obj89113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89113_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89108
(function(){
	window.obj89113_onTap_runningActionsCount = obj89113_onTap_runningActionsCount + 1;

	var selector = "#obj89108";
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
					window.obj89113_onTap_runningActionsCount = window.obj89113_onTap_runningActionsCount - 1;
if (window.obj89113_onTap_runningActionsCount < 0) {
	window.obj89113_onTap_runningActionsCount = 0;
} else if (window.obj89113_onTap_runningActionsCount == 0) {
	obj89113_onTap_actionGroup3();
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
				window.obj89113_onTap_runningActionsCount = window.obj89113_onTap_runningActionsCount - 1;
if (window.obj89113_onTap_runningActionsCount < 0) {
	window.obj89113_onTap_runningActionsCount = 0;
} else if (window.obj89113_onTap_runningActionsCount == 0) {
	obj89113_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89113_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89113_onTap_activeActionGroupIndex = -1;
		$("#obj89113").trigger("obj89113_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89113) {
				console.warn("de-queueing event obj89113." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89113").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89113_onTap_activeActionGroupIndex = 3;
	





















};
obj89108_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89108_onTap_activeActionGroupIndex = -1;
		$("#obj89108").trigger("obj89108_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89108) {
				console.warn("de-queueing event obj89108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89108_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89108 
hide_89110();
function hide_89110() {
	var selector = "#obj89108";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89108_onTap_runningActionsCount = obj89108_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89108_onTap_runningActionsCount = window.obj89108_onTap_runningActionsCount - 1;
if (window.obj89108_onTap_runningActionsCount < 0) {
	window.obj89108_onTap_runningActionsCount = 0;
} else if (window.obj89108_onTap_runningActionsCount == 0) {
	obj89108_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89110(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89108_onTap_runningActionsCount = window.obj89108_onTap_runningActionsCount - 1;
if (window.obj89108_onTap_runningActionsCount < 0) {
	window.obj89108_onTap_runningActionsCount = 0;
} else if (window.obj89108_onTap_runningActionsCount == 0) {
	obj89108_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89108_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89108_onTap_activeActionGroupIndex = -1;
		$("#obj89108").trigger("obj89108_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89108) {
				console.warn("de-queueing event obj89108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89108_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89113
(function(){
	window.obj89108_onTap_runningActionsCount = obj89108_onTap_runningActionsCount + 1;

	var selector = "#obj89113";
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
					window.obj89108_onTap_runningActionsCount = window.obj89108_onTap_runningActionsCount - 1;
if (window.obj89108_onTap_runningActionsCount < 0) {
	window.obj89108_onTap_runningActionsCount = 0;
} else if (window.obj89108_onTap_runningActionsCount == 0) {
	obj89108_onTap_actionGroup2();
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
				window.obj89108_onTap_runningActionsCount = window.obj89108_onTap_runningActionsCount - 1;
if (window.obj89108_onTap_runningActionsCount < 0) {
	window.obj89108_onTap_runningActionsCount = 0;
} else if (window.obj89108_onTap_runningActionsCount == 0) {
	obj89108_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89108_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89108_onTap_activeActionGroupIndex = -1;
		$("#obj89108").trigger("obj89108_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89108) {
				console.warn("de-queueing event obj89108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89108_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89118 
playAudio_89112();
function playAudio_89112() {
	window.obj89108_onTap_runningActionsCount = obj89108_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89118")[0];
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
		    window.obj89108_onTap_runningActionsCount = window.obj89108_onTap_runningActionsCount - 1;
if (window.obj89108_onTap_runningActionsCount < 0) {
	window.obj89108_onTap_runningActionsCount = 0;
} else if (window.obj89108_onTap_runningActionsCount == 0) {
	obj89108_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89108_onTap_runningActionsCount = window.obj89108_onTap_runningActionsCount - 1;
if (window.obj89108_onTap_runningActionsCount < 0) {
	window.obj89108_onTap_runningActionsCount = 0;
} else if (window.obj89108_onTap_runningActionsCount == 0) {
	obj89108_onTap_actionGroup3();
}
	}
}









};
obj89108_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89108_onTap_activeActionGroupIndex = -1;
		$("#obj89108").trigger("obj89108_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89108) {
				console.warn("de-queueing event obj89108." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89108").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89108_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj52093: Event Touch Down
 *
 */
$("#obj52093").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52093_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52093_onTap is still running");
	return;
}
var obj52093_onTap_runningActionsCount = 0;
var obj52093_onTap_loopCount = 0;
obj52093_onTap_actionGroup0();
});










/*
 *
 *   obj52090: Event Touch Down
 *
 */
$("#obj52090").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52090_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52090_onTap is still running");
	return;
}
var obj52090_onTap_runningActionsCount = 0;
var obj52090_onTap_loopCount = 0;
obj52090_onTap_actionGroup0();
});










/*
 *
 *   obj52096: Event Touch Down
 *
 */
$("#obj52096").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52096_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52096_onTap is still running");
	return;
}
var obj52096_onTap_runningActionsCount = 0;
var obj52096_onTap_loopCount = 0;
obj52096_onTap_actionGroup0();
});





















































































































































































/*
 *
 *   obj52154: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj52154");
	var winTarget = document.getElementById("obj52154");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj52154").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj52154_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj52154_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj52154_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52154_onTouchDown is still running");
	return;
}
var obj52154_onTouchDown_runningActionsCount = 0;
var obj52154_onTouchDown_loopCount = 0;
obj52154_onTouchDown_actionGroup0();
});



/*
 *
 *   obj52154: Event SCActionDragDrop52157_droppedOutsideTargetActions
 *
 */
$("#obj52154").bind("SCActionDragDrop52157_droppedOutsideTargetActions", function(event) {
	if (window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52154_SCActionDragDrop52157_droppedOutsideTargetActions is still running");
	return;
}
var obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_loopCount = 0;
obj52154_SCActionDragDrop52157_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj52154: Event droppedInsideTargetActions_2
 *
 */
$("#obj52154").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj52154_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52154_droppedInsideTargetActions_2 is still running");
	return;
}
var obj52154_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52154_droppedInsideTargetActions_2_loopCount = 0;
obj52154_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj52154: Event droppedInsideTargetActions
 *
 */
$("#obj52154").bind("droppedInsideTargetActions", function(event) {
	if (window.obj52154_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52154_droppedInsideTargetActions is still running");
	return;
}
var obj52154_droppedInsideTargetActions_runningActionsCount = 0;
var obj52154_droppedInsideTargetActions_loopCount = 0;
obj52154_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj52179: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj52179");
	var winTarget = document.getElementById("obj52179");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj52179").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj52179_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj52179_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj52179_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52179_onTouchDown is still running");
	return;
}
var obj52179_onTouchDown_runningActionsCount = 0;
var obj52179_onTouchDown_loopCount = 0;
obj52179_onTouchDown_actionGroup0();
});



/*
 *
 *   obj52179: Event SCActionDragDrop52182_droppedOutsideTargetActions
 *
 */
$("#obj52179").bind("SCActionDragDrop52182_droppedOutsideTargetActions", function(event) {
	if (window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52179_SCActionDragDrop52182_droppedOutsideTargetActions is still running");
	return;
}
var obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_runningActionsCount = 0;
var obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_loopCount = 0;
obj52179_SCActionDragDrop52182_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj52179: Event droppedInsideTargetActions_2
 *
 */
$("#obj52179").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj52179_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52179_droppedInsideTargetActions_2 is still running");
	return;
}
var obj52179_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj52179_droppedInsideTargetActions_2_loopCount = 0;
obj52179_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj52179: Event droppedInsideTargetActions
 *
 */
$("#obj52179").bind("droppedInsideTargetActions", function(event) {
	if (window.obj52179_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52179_droppedInsideTargetActions is still running");
	return;
}
var obj52179_droppedInsideTargetActions_runningActionsCount = 0;
var obj52179_droppedInsideTargetActions_loopCount = 0;
obj52179_droppedInsideTargetActions_actionGroup0();
});













































/*
 *
 *   obj67998: Event Touch Down
 *
 */
$("#obj67998").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67998_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67998_onTap is still running");
	return;
}
var obj67998_onTap_runningActionsCount = 0;
var obj67998_onTap_loopCount = 0;
obj67998_onTap_actionGroup0();
});










/*
 *
 *   obj67990: Event Touch Down
 *
 */
$("#obj67990").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67990_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67990_onTap is still running");
	return;
}
var obj67990_onTap_runningActionsCount = 0;
var obj67990_onTap_loopCount = 0;
obj67990_onTap_actionGroup0();
});










/*
 *
 *   obj89113: Event Touch Down
 *
 */
$("#obj89113").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89113_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89113_onTap is still running");
	return;
}
var obj89113_onTap_runningActionsCount = 0;
var obj89113_onTap_loopCount = 0;
obj89113_onTap_actionGroup0();
});










/*
 *
 *   obj89108: Event Touch Down
 *
 */
$("#obj89108").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89108_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89108_onTap is still running");
	return;
}
var obj89108_onTap_runningActionsCount = 0;
var obj89108_onTap_loopCount = 0;
obj89108_onTap_actionGroup0();
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
	
$("#obj52088").trigger('SCEventShow');
$("#obj52093").trigger('SCEventShow');
$("#obj52090").trigger('SCEventShow');
$("#obj52096").trigger('SCEventShow');
$("#obj52115").trigger('SCEventShow');
$("#obj52113").trigger('SCEventShow');
$("#obj52118").trigger('SCEventShow');
$("#obj52121").trigger('SCEventShow');
$("#obj52124").trigger('SCEventShow');
$("#obj52127").trigger('SCEventShow');
$("#obj52147").trigger('SCEventShow');
$("#obj52149").trigger('SCEventShow');
$("#obj52135").trigger('SCEventShow');
$("#obj52129").trigger('SCEventShow');
$("#obj52141").trigger('SCEventShow');
$("#obj52133").trigger('SCEventShow');
$("#obj52139").trigger('SCEventShow');
$("#obj52131").trigger('SCEventShow');
$("#obj52137").trigger('SCEventShow');
$("#obj52143").trigger('SCEventShow');
$("#obj52145").trigger('SCEventShow');
$("#obj52154").trigger('SCEventShow');
$("#obj52179").trigger('SCEventShow');
$("#obj52151").trigger('SCEventShow');
$("#obj52204").trigger('SCEventShow');
$("#obj52208").trigger('SCEventShow');
$("#obj52207").trigger('SCEventShow');
$("#obj67998").trigger('SCEventShow');
$("#obj67990").trigger('SCEventShow');
$("#obj89113").trigger('SCEventShow');
$("#obj89108").trigger('SCEventShow');
$("#obj89118").trigger('SCEventShow');
$("#obj95001").trigger('SCEventShow');
$("#obj68004").trigger('SCEventShow');
$("#obj98854").trigger('SCEventShow');
$("#obj98856").trigger('SCEventShow');
$("#obj98858").trigger('SCEventShow');
$("#obj98860").trigger('SCEventShow');
	
});