pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 10633;
pubcoder.page.title = pubcoder.page.title || "48";
pubcoder.page.number = pubcoder.page.number || 48;
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
var obj71189_onTap_activeActionGroupIndex = -1;
var obj71189_onTap_runningActionsCount = 0;
var obj71189_onTap_loopCount = 0;
var obj71186_onTap_activeActionGroupIndex = -1;
var obj71186_onTap_runningActionsCount = 0;
var obj71186_onTap_loopCount = 0;
var obj71182_onTap_activeActionGroupIndex = -1;
var obj71182_onTap_runningActionsCount = 0;
var obj71182_onTap_loopCount = 0;
var obj71142_onDrag_activeActionGroupIndex = -1;
var obj71142_onDrag_runningActionsCount = 0;
var obj71142_onDrag_loopCount = 0;
var obj71142_onTouchDown_activeActionGroupIndex = -1;
var obj71142_onTouchDown_runningActionsCount = 0;
var obj71142_onTouchDown_loopCount = 0;
var obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_loopCount = 0;
var obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71142_droppedInsideTargetActions_runningActionsCount = 0;
var obj71142_droppedInsideTargetActions_loopCount = 0;
var obj71131_onDrag_activeActionGroupIndex = -1;
var obj71131_onDrag_runningActionsCount = 0;
var obj71131_onDrag_loopCount = 0;
var obj71131_onTouchDown_activeActionGroupIndex = -1;
var obj71131_onTouchDown_runningActionsCount = 0;
var obj71131_onTouchDown_loopCount = 0;
var obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_loopCount = 0;
var obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71131_droppedInsideTargetActions_runningActionsCount = 0;
var obj71131_droppedInsideTargetActions_loopCount = 0;
var obj71107_onTap_activeActionGroupIndex = -1;
var obj71107_onTap_runningActionsCount = 0;
var obj71107_onTap_loopCount = 0;
var obj71099_onTap_activeActionGroupIndex = -1;
var obj71099_onTap_runningActionsCount = 0;
var obj71099_onTap_loopCount = 0;
var obj87319_onTap_activeActionGroupIndex = -1;
var obj87319_onTap_runningActionsCount = 0;
var obj87319_onTap_loopCount = 0;
var obj87314_onTap_activeActionGroupIndex = -1;
var obj87314_onTap_runningActionsCount = 0;
var obj87314_onTap_loopCount = 0;
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
		
obj71189_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71189_onTap_activeActionGroupIndex = -1;
		$("#obj71189").trigger("obj71189_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71189) {
				console.warn("de-queueing event obj71189." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71189").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71189_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71191();
function goToPage_71191() {
	window.obj71189_onTap_runningActionsCount = obj71189_onTap_runningActionsCount + 1;
	$("#anchor293")[0].click();
	window.obj71189_onTap_runningActionsCount = window.obj71189_onTap_runningActionsCount - 1;
if (window.obj71189_onTap_runningActionsCount < 0) {
	window.obj71189_onTap_runningActionsCount = 0;
} else if (window.obj71189_onTap_runningActionsCount == 0) {
	obj71189_onTap_actionGroup1();
}
}





















};
obj71189_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71189_onTap_activeActionGroupIndex = -1;
		$("#obj71189").trigger("obj71189_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71189) {
				console.warn("de-queueing event obj71189." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71189").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71189_onTap_activeActionGroupIndex = 1;
	





















};
obj71186_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71186_onTap_activeActionGroupIndex = -1;
		$("#obj71186").trigger("obj71186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71186) {
				console.warn("de-queueing event obj71186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71186_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71188();
function goToPage_71188() {
	window.obj71186_onTap_runningActionsCount = obj71186_onTap_runningActionsCount + 1;
	$("#anchor294")[0].click();
	window.obj71186_onTap_runningActionsCount = window.obj71186_onTap_runningActionsCount - 1;
if (window.obj71186_onTap_runningActionsCount < 0) {
	window.obj71186_onTap_runningActionsCount = 0;
} else if (window.obj71186_onTap_runningActionsCount == 0) {
	obj71186_onTap_actionGroup1();
}
}





















};
obj71186_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71186_onTap_activeActionGroupIndex = -1;
		$("#obj71186").trigger("obj71186_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71186) {
				console.warn("de-queueing event obj71186." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71186").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71186_onTap_activeActionGroupIndex = 1;
	





















};
obj71182_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71182_onTap_activeActionGroupIndex = -1;
		$("#obj71182").trigger("obj71182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71182) {
				console.warn("de-queueing event obj71182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71182_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71184();
function goToPage_71184() {
	window.obj71182_onTap_runningActionsCount = obj71182_onTap_runningActionsCount + 1;
	$("#anchor295")[0].click();
	window.obj71182_onTap_runningActionsCount = window.obj71182_onTap_runningActionsCount - 1;
if (window.obj71182_onTap_runningActionsCount < 0) {
	window.obj71182_onTap_runningActionsCount = 0;
} else if (window.obj71182_onTap_runningActionsCount == 0) {
	obj71182_onTap_actionGroup1();
}
}





















};
obj71182_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71182_onTap_activeActionGroupIndex = -1;
		$("#obj71182").trigger("obj71182_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71182) {
				console.warn("de-queueing event obj71182." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71182").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71182_onTap_activeActionGroupIndex = 1;
	





















};
obj71142_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71142");
//	action: dragDrop
//	target: obj71142 
dragDrop_71145();
function dragDrop_71145() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71142_onTouchDown_runningActionsCount = obj71142_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71142');
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
	  	containerNode = $('#obj71166');
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
    	window.obj71142_onTouchDown_runningActionsCount = window.obj71142_onTouchDown_runningActionsCount - 1;
if (window.obj71142_onTouchDown_runningActionsCount < 0) {
	window.obj71142_onTouchDown_runningActionsCount = 0;
} else if (window.obj71142_onTouchDown_runningActionsCount == 0) {
	obj71142_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71162");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71145 = false;
    	var dropped_id_71145;
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
					dropped_71145 = true;
					dropped_id_71145 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71145) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71142").trigger('SCActionDragDrop71145_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71142_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71142_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71142 
move_92240();
function move_92240() {
	window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount = obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71142");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 664;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount = window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71142_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71147();
function runjs_71147() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71162").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71148();
function runjs_71148() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71162").css("border-color", "#C00000"); $("#obj71162").css("border-width", "2px"); $("#obj71162").css("border-style", "solid"); $("#obj71162").css("border-radius", "10px"); $("#obj71162").css("-webkit-border-radius", "10px"); $("#obj71162").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71160 
hide_71149();
function hide_71149() {
	var selector = "#obj71160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71149(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71142_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71150();
function runjs_71150() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71142").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71151();
function switchText_71151() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71127").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71127_content");
			setTimeout(function () {
				window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj71142_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71142 
move_71152();
function move_71152() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71142");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 139;
	var moveY = 664;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj71142_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71153();
function runjs_71153() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71162").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71154();
function runjs_71154() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71162").css("border-color", "#000000"); $("#obj71162").css("border-width", "1px"); $("#obj71162").css("border-style", "solid"); $("#obj71162").css("border-radius", "10px"); $("#obj71162").css("-webkit-border-radius", "10px"); $("#obj71162").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71160
(function(){
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj71160";
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
					window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup9();
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
				window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71142_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71156();
function runjs_71156() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71142").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71157();
function runjs_71157() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71142").css("border-color", "rgba(0,0,0,0)"); $("#obj71142").css("border-width", "0px"); $("#obj71142").css("border-style", "solid"); $("#obj71142").css("border-radius", "10px"); $("#obj71142").css("-webkit-border-radius", "10px"); $("#obj71142").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj71142_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71126 
playAudio_71158();
function playAudio_71158() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71126")[0];
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
		    window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj71142_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71159();
function switchText_71159() {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = obj71142_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71127").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71127_content");
			setTimeout(function () {
				window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71142_droppedInsideTargetActions_runningActionsCount = window.obj71142_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71142_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71142_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71142_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71142_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj71142_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71142").trigger("obj71142_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71142) {
				console.warn("de-queueing event obj71142." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71142").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71142_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj71131_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71131");
//	action: dragDrop
//	target: obj71131 
dragDrop_71134();
function dragDrop_71134() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71131_onTouchDown_runningActionsCount = obj71131_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71131');
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
	  	containerNode = $('#obj71166');
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
    	window.obj71131_onTouchDown_runningActionsCount = window.obj71131_onTouchDown_runningActionsCount - 1;
if (window.obj71131_onTouchDown_runningActionsCount < 0) {
	window.obj71131_onTouchDown_runningActionsCount = 0;
} else if (window.obj71131_onTouchDown_runningActionsCount == 0) {
	obj71131_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71162");
    	var actionsOnDrop = new Array("droppedInsideTargetActions") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71134 = false;
    	var dropped_id_71134;
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
					dropped_71134 = true;
					dropped_id_71134 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71134) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71131").trigger('SCActionDragDrop71134_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71131_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71131_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71131 
move_92242();
function move_92242() {
	window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount = obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71131");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 308;
	var moveY = 663;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount = window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71131_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71136();
function runjs_71136() {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71162").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71131_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71140();
function switchText_71140() {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71127").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71127_content");
			setTimeout(function () {
				window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj71131_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71137();
function runjs_71137() {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71162").css("border-color", "#058E3F"); $("#obj71162").css("border-width", "2px"); $("#obj71162").css("border-style", "solid"); $("#obj71162").css("border-radius", "10px"); $("#obj71162").css("-webkit-border-radius", "10px"); $("#obj71162").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj71131_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71160 
hide_71138();
function hide_71138() {
	var selector = "#obj71160";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71138(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71131_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71139();
function runjs_71139() {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71131").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj71131_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71125 
playAudio_71141();
function playAudio_71141() {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71125")[0];
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
		    window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj71131_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90161();
function switchText_90161() {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = obj71131_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71127_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71127_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71127").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71127_content");
			setTimeout(function () {
				window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71127 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71131_droppedInsideTargetActions_runningActionsCount = window.obj71131_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71131_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71131_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71131_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71131_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj71131_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71131").trigger("obj71131_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71131) {
				console.warn("de-queueing event obj71131." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71131").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71131_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj71107_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71107_onTap_activeActionGroupIndex = -1;
		$("#obj71107").trigger("obj71107_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71107) {
				console.warn("de-queueing event obj71107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71107_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71107 
hide_71110();
function hide_71110() {
	var selector = "#obj71107";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71107_onTap_runningActionsCount = obj71107_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71107_onTap_runningActionsCount = window.obj71107_onTap_runningActionsCount - 1;
if (window.obj71107_onTap_runningActionsCount < 0) {
	window.obj71107_onTap_runningActionsCount = 0;
} else if (window.obj71107_onTap_runningActionsCount == 0) {
	obj71107_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71110(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71107_onTap_runningActionsCount = window.obj71107_onTap_runningActionsCount - 1;
if (window.obj71107_onTap_runningActionsCount < 0) {
	window.obj71107_onTap_runningActionsCount = 0;
} else if (window.obj71107_onTap_runningActionsCount == 0) {
	obj71107_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj71097 
stopMovie_71109();
function stopMovie_71109() {
	window.obj71107_onTap_runningActionsCount = obj71107_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71097")[0];
	myVideo.pause();
	window.obj71107_onTap_runningActionsCount = window.obj71107_onTap_runningActionsCount - 1;
if (window.obj71107_onTap_runningActionsCount < 0) {
	window.obj71107_onTap_runningActionsCount = 0;
} else if (window.obj71107_onTap_runningActionsCount == 0) {
	obj71107_onTap_actionGroup1();
}
}
















};
obj71107_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71107_onTap_activeActionGroupIndex = -1;
		$("#obj71107").trigger("obj71107_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71107) {
				console.warn("de-queueing event obj71107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71107_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71099
(function(){
	window.obj71107_onTap_runningActionsCount = obj71107_onTap_runningActionsCount + 1;

	var selector = "#obj71099";
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
					window.obj71107_onTap_runningActionsCount = window.obj71107_onTap_runningActionsCount - 1;
if (window.obj71107_onTap_runningActionsCount < 0) {
	window.obj71107_onTap_runningActionsCount = 0;
} else if (window.obj71107_onTap_runningActionsCount == 0) {
	obj71107_onTap_actionGroup2();
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
				window.obj71107_onTap_runningActionsCount = window.obj71107_onTap_runningActionsCount - 1;
if (window.obj71107_onTap_runningActionsCount < 0) {
	window.obj71107_onTap_runningActionsCount = 0;
} else if (window.obj71107_onTap_runningActionsCount == 0) {
	obj71107_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71107_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71107_onTap_activeActionGroupIndex = -1;
		$("#obj71107").trigger("obj71107_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71107) {
				console.warn("de-queueing event obj71107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71107_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71097 
move_71112();
function move_71112() {
	window.obj71107_onTap_runningActionsCount = obj71107_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71097");
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
			window.obj71107_onTap_runningActionsCount = window.obj71107_onTap_runningActionsCount - 1;
if (window.obj71107_onTap_runningActionsCount < 0) {
	window.obj71107_onTap_runningActionsCount = 0;
} else if (window.obj71107_onTap_runningActionsCount == 0) {
	obj71107_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71107_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71107_onTap_activeActionGroupIndex = -1;
		$("#obj71107").trigger("obj71107_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71107) {
				console.warn("de-queueing event obj71107." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71107").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71107_onTap_activeActionGroupIndex = 3;
	





















};
obj71099_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71099_onTap_activeActionGroupIndex = -1;
		$("#obj71099").trigger("obj71099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71099) {
				console.warn("de-queueing event obj71099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71099_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71099 
hide_71102();
function hide_71102() {
	var selector = "#obj71099";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71099_onTap_runningActionsCount = obj71099_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71099_onTap_runningActionsCount = window.obj71099_onTap_runningActionsCount - 1;
if (window.obj71099_onTap_runningActionsCount < 0) {
	window.obj71099_onTap_runningActionsCount = 0;
} else if (window.obj71099_onTap_runningActionsCount == 0) {
	obj71099_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71102(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71099_onTap_runningActionsCount = window.obj71099_onTap_runningActionsCount - 1;
if (window.obj71099_onTap_runningActionsCount < 0) {
	window.obj71099_onTap_runningActionsCount = 0;
} else if (window.obj71099_onTap_runningActionsCount == 0) {
	obj71099_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj71097 
playPauseMovie_71101();
function playPauseMovie_71101() {
	window.obj71099_onTap_runningActionsCount = obj71099_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71097")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj71099_onTap_runningActionsCount = window.obj71099_onTap_runningActionsCount - 1;
if (window.obj71099_onTap_runningActionsCount < 0) {
	window.obj71099_onTap_runningActionsCount = 0;
} else if (window.obj71099_onTap_runningActionsCount == 0) {
	obj71099_onTap_actionGroup1();
}
}

















};
obj71099_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71099_onTap_activeActionGroupIndex = -1;
		$("#obj71099").trigger("obj71099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71099) {
				console.warn("de-queueing event obj71099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71099_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71107
(function(){
	window.obj71099_onTap_runningActionsCount = obj71099_onTap_runningActionsCount + 1;

	var selector = "#obj71107";
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
					window.obj71099_onTap_runningActionsCount = window.obj71099_onTap_runningActionsCount - 1;
if (window.obj71099_onTap_runningActionsCount < 0) {
	window.obj71099_onTap_runningActionsCount = 0;
} else if (window.obj71099_onTap_runningActionsCount == 0) {
	obj71099_onTap_actionGroup2();
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
				window.obj71099_onTap_runningActionsCount = window.obj71099_onTap_runningActionsCount - 1;
if (window.obj71099_onTap_runningActionsCount < 0) {
	window.obj71099_onTap_runningActionsCount = 0;
} else if (window.obj71099_onTap_runningActionsCount == 0) {
	obj71099_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71099_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71099_onTap_activeActionGroupIndex = -1;
		$("#obj71099").trigger("obj71099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71099) {
				console.warn("de-queueing event obj71099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71099_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71097 
move_71104();
function move_71104() {
	window.obj71099_onTap_runningActionsCount = obj71099_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71097");
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
			window.obj71099_onTap_runningActionsCount = window.obj71099_onTap_runningActionsCount - 1;
if (window.obj71099_onTap_runningActionsCount < 0) {
	window.obj71099_onTap_runningActionsCount = 0;
} else if (window.obj71099_onTap_runningActionsCount == 0) {
	obj71099_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71099_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71099_onTap_activeActionGroupIndex = -1;
		$("#obj71099").trigger("obj71099_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71099) {
				console.warn("de-queueing event obj71099." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71099").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71099_onTap_activeActionGroupIndex = 3;
	





















};
obj87319_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87319_onTap_activeActionGroupIndex = -1;
		$("#obj87319").trigger("obj87319_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87319) {
				console.warn("de-queueing event obj87319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87319_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87324 
stopAudio_87321();
function stopAudio_87321() {
	window.obj87319_onTap_runningActionsCount = obj87319_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87324")[0];
	myAudio.pause();
	window.obj87319_onTap_runningActionsCount = window.obj87319_onTap_runningActionsCount - 1;
if (window.obj87319_onTap_runningActionsCount < 0) {
	window.obj87319_onTap_runningActionsCount = 0;
} else if (window.obj87319_onTap_runningActionsCount == 0) {
	obj87319_onTap_actionGroup1();
}
}








};
obj87319_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87319_onTap_activeActionGroupIndex = -1;
		$("#obj87319").trigger("obj87319_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87319) {
				console.warn("de-queueing event obj87319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87319_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87319 
hide_87322();
function hide_87322() {
	var selector = "#obj87319";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87319_onTap_runningActionsCount = obj87319_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87319_onTap_runningActionsCount = window.obj87319_onTap_runningActionsCount - 1;
if (window.obj87319_onTap_runningActionsCount < 0) {
	window.obj87319_onTap_runningActionsCount = 0;
} else if (window.obj87319_onTap_runningActionsCount == 0) {
	obj87319_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87322(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87319_onTap_runningActionsCount = window.obj87319_onTap_runningActionsCount - 1;
if (window.obj87319_onTap_runningActionsCount < 0) {
	window.obj87319_onTap_runningActionsCount = 0;
} else if (window.obj87319_onTap_runningActionsCount == 0) {
	obj87319_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87319_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87319_onTap_activeActionGroupIndex = -1;
		$("#obj87319").trigger("obj87319_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87319) {
				console.warn("de-queueing event obj87319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87319_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87314
(function(){
	window.obj87319_onTap_runningActionsCount = obj87319_onTap_runningActionsCount + 1;

	var selector = "#obj87314";
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
					window.obj87319_onTap_runningActionsCount = window.obj87319_onTap_runningActionsCount - 1;
if (window.obj87319_onTap_runningActionsCount < 0) {
	window.obj87319_onTap_runningActionsCount = 0;
} else if (window.obj87319_onTap_runningActionsCount == 0) {
	obj87319_onTap_actionGroup3();
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
				window.obj87319_onTap_runningActionsCount = window.obj87319_onTap_runningActionsCount - 1;
if (window.obj87319_onTap_runningActionsCount < 0) {
	window.obj87319_onTap_runningActionsCount = 0;
} else if (window.obj87319_onTap_runningActionsCount == 0) {
	obj87319_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87319_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87319_onTap_activeActionGroupIndex = -1;
		$("#obj87319").trigger("obj87319_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87319) {
				console.warn("de-queueing event obj87319." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87319").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87319_onTap_activeActionGroupIndex = 3;
	





















};
obj87314_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87314_onTap_activeActionGroupIndex = -1;
		$("#obj87314").trigger("obj87314_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87314) {
				console.warn("de-queueing event obj87314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87314_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87314 
hide_87316();
function hide_87316() {
	var selector = "#obj87314";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87314_onTap_runningActionsCount = obj87314_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87314_onTap_runningActionsCount = window.obj87314_onTap_runningActionsCount - 1;
if (window.obj87314_onTap_runningActionsCount < 0) {
	window.obj87314_onTap_runningActionsCount = 0;
} else if (window.obj87314_onTap_runningActionsCount == 0) {
	obj87314_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87316(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87314_onTap_runningActionsCount = window.obj87314_onTap_runningActionsCount - 1;
if (window.obj87314_onTap_runningActionsCount < 0) {
	window.obj87314_onTap_runningActionsCount = 0;
} else if (window.obj87314_onTap_runningActionsCount == 0) {
	obj87314_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87314_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87314_onTap_activeActionGroupIndex = -1;
		$("#obj87314").trigger("obj87314_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87314) {
				console.warn("de-queueing event obj87314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87314_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87319
(function(){
	window.obj87314_onTap_runningActionsCount = obj87314_onTap_runningActionsCount + 1;

	var selector = "#obj87319";
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
					window.obj87314_onTap_runningActionsCount = window.obj87314_onTap_runningActionsCount - 1;
if (window.obj87314_onTap_runningActionsCount < 0) {
	window.obj87314_onTap_runningActionsCount = 0;
} else if (window.obj87314_onTap_runningActionsCount == 0) {
	obj87314_onTap_actionGroup2();
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
				window.obj87314_onTap_runningActionsCount = window.obj87314_onTap_runningActionsCount - 1;
if (window.obj87314_onTap_runningActionsCount < 0) {
	window.obj87314_onTap_runningActionsCount = 0;
} else if (window.obj87314_onTap_runningActionsCount == 0) {
	obj87314_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87314_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87314_onTap_activeActionGroupIndex = -1;
		$("#obj87314").trigger("obj87314_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87314) {
				console.warn("de-queueing event obj87314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87314_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87324 
playAudio_87318();
function playAudio_87318() {
	window.obj87314_onTap_runningActionsCount = obj87314_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87324")[0];
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
		    window.obj87314_onTap_runningActionsCount = window.obj87314_onTap_runningActionsCount - 1;
if (window.obj87314_onTap_runningActionsCount < 0) {
	window.obj87314_onTap_runningActionsCount = 0;
} else if (window.obj87314_onTap_runningActionsCount == 0) {
	obj87314_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87314_onTap_runningActionsCount = window.obj87314_onTap_runningActionsCount - 1;
if (window.obj87314_onTap_runningActionsCount < 0) {
	window.obj87314_onTap_runningActionsCount = 0;
} else if (window.obj87314_onTap_runningActionsCount == 0) {
	obj87314_onTap_actionGroup3();
}
	}
}









};
obj87314_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87314_onTap_activeActionGroupIndex = -1;
		$("#obj87314").trigger("obj87314_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87314) {
				console.warn("de-queueing event obj87314." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87314").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87314_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj71189: Event Touch Down
 *
 */
$("#obj71189").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71189_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71189_onTap is still running");
	return;
}
var obj71189_onTap_runningActionsCount = 0;
var obj71189_onTap_loopCount = 0;
obj71189_onTap_actionGroup0();
});










/*
 *
 *   obj71186: Event Touch Down
 *
 */
$("#obj71186").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71186_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71186_onTap is still running");
	return;
}
var obj71186_onTap_runningActionsCount = 0;
var obj71186_onTap_loopCount = 0;
obj71186_onTap_actionGroup0();
});










/*
 *
 *   obj71182: Event Touch Down
 *
 */
$("#obj71182").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71182_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71182_onTap is still running");
	return;
}
var obj71182_onTap_runningActionsCount = 0;
var obj71182_onTap_loopCount = 0;
obj71182_onTap_actionGroup0();
});

























































































































/*
 *
 *   obj71142: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71142");
	var winTarget = document.getElementById("obj71142");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71142").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71142_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71142_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71142_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71142_onTouchDown is still running");
	return;
}
var obj71142_onTouchDown_runningActionsCount = 0;
var obj71142_onTouchDown_loopCount = 0;
obj71142_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71142: Event SCActionDragDrop71145_droppedOutsideTargetActions
 *
 */
$("#obj71142").bind("SCActionDragDrop71145_droppedOutsideTargetActions", function(event) {
	if (window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71142_SCActionDragDrop71145_droppedOutsideTargetActions is still running");
	return;
}
var obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_loopCount = 0;
obj71142_SCActionDragDrop71145_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71142: Event droppedInsideTargetActions
 *
 */
$("#obj71142").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71142_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71142_droppedInsideTargetActions is still running");
	return;
}
var obj71142_droppedInsideTargetActions_runningActionsCount = 0;
var obj71142_droppedInsideTargetActions_loopCount = 0;
obj71142_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj71131: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71131");
	var winTarget = document.getElementById("obj71131");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71131").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71131_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71131_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71131_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71131_onTouchDown is still running");
	return;
}
var obj71131_onTouchDown_runningActionsCount = 0;
var obj71131_onTouchDown_loopCount = 0;
obj71131_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71131: Event SCActionDragDrop71134_droppedOutsideTargetActions
 *
 */
$("#obj71131").bind("SCActionDragDrop71134_droppedOutsideTargetActions", function(event) {
	if (window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71131_SCActionDragDrop71134_droppedOutsideTargetActions is still running");
	return;
}
var obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_loopCount = 0;
obj71131_SCActionDragDrop71134_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71131: Event droppedInsideTargetActions
 *
 */
$("#obj71131").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71131_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71131_droppedInsideTargetActions is still running");
	return;
}
var obj71131_droppedInsideTargetActions_runningActionsCount = 0;
var obj71131_droppedInsideTargetActions_loopCount = 0;
obj71131_droppedInsideTargetActions_actionGroup0();
});













































/*
 *
 *   obj71107: Event Touch Down
 *
 */
$("#obj71107").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71107_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71107_onTap is still running");
	return;
}
var obj71107_onTap_runningActionsCount = 0;
var obj71107_onTap_loopCount = 0;
obj71107_onTap_actionGroup0();
});










/*
 *
 *   obj71099: Event Touch Down
 *
 */
$("#obj71099").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71099_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71099_onTap is still running");
	return;
}
var obj71099_onTap_runningActionsCount = 0;
var obj71099_onTap_loopCount = 0;
obj71099_onTap_actionGroup0();
});










/*
 *
 *   obj87319: Event Touch Down
 *
 */
$("#obj87319").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87319_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87319_onTap is still running");
	return;
}
var obj87319_onTap_runningActionsCount = 0;
var obj87319_onTap_loopCount = 0;
obj87319_onTap_actionGroup0();
});










/*
 *
 *   obj87314: Event Touch Down
 *
 */
$("#obj87314").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87314_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87314_onTap is still running");
	return;
}
var obj87314_onTap_runningActionsCount = 0;
var obj87314_onTap_loopCount = 0;
obj87314_onTap_actionGroup0();
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
	
$("#obj71192").trigger('SCEventShow');
$("#obj71189").trigger('SCEventShow');
$("#obj71186").trigger('SCEventShow');
$("#obj71182").trigger('SCEventShow');
$("#obj71180").trigger('SCEventShow');
$("#obj71178").trigger('SCEventShow');
$("#obj71176").trigger('SCEventShow');
$("#obj71174").trigger('SCEventShow');
$("#obj71172").trigger('SCEventShow');
$("#obj71170").trigger('SCEventShow');
$("#obj71168").trigger('SCEventShow');
$("#obj71166").trigger('SCEventShow');
$("#obj71164").trigger('SCEventShow');
$("#obj71162").trigger('SCEventShow');
$("#obj71160").trigger('SCEventShow');
$("#obj71142").trigger('SCEventShow');
$("#obj71131").trigger('SCEventShow');
$("#obj71129").trigger('SCEventShow');
$("#obj71127").trigger('SCEventShow');
$("#obj71126").trigger('SCEventShow');
$("#obj71125").trigger('SCEventShow');
$("#obj71107").trigger('SCEventShow');
$("#obj71099").trigger('SCEventShow');
$("#obj87319").trigger('SCEventShow');
$("#obj87314").trigger('SCEventShow');
$("#obj87324").trigger('SCEventShow');
$("#obj94725").trigger('SCEventShow');
$("#obj71097").trigger('SCEventShow');
	
});