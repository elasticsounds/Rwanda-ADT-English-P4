pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 9017;
pubcoder.page.title = pubcoder.page.title || "44";
pubcoder.page.number = pubcoder.page.number || 44;
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
var obj70589_onTap_activeActionGroupIndex = -1;
var obj70589_onTap_runningActionsCount = 0;
var obj70589_onTap_loopCount = 0;
var obj70586_onTap_activeActionGroupIndex = -1;
var obj70586_onTap_runningActionsCount = 0;
var obj70586_onTap_loopCount = 0;
var obj70582_onTap_activeActionGroupIndex = -1;
var obj70582_onTap_runningActionsCount = 0;
var obj70582_onTap_loopCount = 0;
var obj70485_onDrag_activeActionGroupIndex = -1;
var obj70485_onDrag_runningActionsCount = 0;
var obj70485_onDrag_loopCount = 0;
var obj70485_onTouchDown_activeActionGroupIndex = -1;
var obj70485_onTouchDown_runningActionsCount = 0;
var obj70485_onTouchDown_loopCount = 0;
var obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_loopCount = 0;
var obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_4_loopCount = 0;
var obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_3_loopCount = 0;
var obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_2_loopCount = 0;
var obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70485_droppedInsideTargetActions_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_loopCount = 0;
var obj70432_onDrag_activeActionGroupIndex = -1;
var obj70432_onDrag_runningActionsCount = 0;
var obj70432_onDrag_loopCount = 0;
var obj70432_onTouchDown_activeActionGroupIndex = -1;
var obj70432_onTouchDown_runningActionsCount = 0;
var obj70432_onTouchDown_loopCount = 0;
var obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_loopCount = 0;
var obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_4_loopCount = 0;
var obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_3_loopCount = 0;
var obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_2_loopCount = 0;
var obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70432_droppedInsideTargetActions_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_loopCount = 0;
var obj70379_onDrag_activeActionGroupIndex = -1;
var obj70379_onDrag_runningActionsCount = 0;
var obj70379_onDrag_loopCount = 0;
var obj70379_onTouchDown_activeActionGroupIndex = -1;
var obj70379_onTouchDown_runningActionsCount = 0;
var obj70379_onTouchDown_loopCount = 0;
var obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_loopCount = 0;
var obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_4_loopCount = 0;
var obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_3_loopCount = 0;
var obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_2_loopCount = 0;
var obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70379_droppedInsideTargetActions_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_loopCount = 0;
var obj70326_onDrag_activeActionGroupIndex = -1;
var obj70326_onDrag_runningActionsCount = 0;
var obj70326_onDrag_loopCount = 0;
var obj70326_onTouchDown_activeActionGroupIndex = -1;
var obj70326_onTouchDown_runningActionsCount = 0;
var obj70326_onTouchDown_loopCount = 0;
var obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_loopCount = 0;
var obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_4_loopCount = 0;
var obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_3_loopCount = 0;
var obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_2_loopCount = 0;
var obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj70326_droppedInsideTargetActions_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_loopCount = 0;
var obj70308_onTap_activeActionGroupIndex = -1;
var obj70308_onTap_runningActionsCount = 0;
var obj70308_onTap_loopCount = 0;
var obj70300_onTap_activeActionGroupIndex = -1;
var obj70300_onTap_runningActionsCount = 0;
var obj70300_onTap_loopCount = 0;
var obj87262_onTap_activeActionGroupIndex = -1;
var obj87262_onTap_runningActionsCount = 0;
var obj87262_onTap_loopCount = 0;
var obj87257_onTap_activeActionGroupIndex = -1;
var obj87257_onTap_runningActionsCount = 0;
var obj87257_onTap_loopCount = 0;
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
		
obj70589_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70589_onTap_activeActionGroupIndex = -1;
		$("#obj70589").trigger("obj70589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70589) {
				console.warn("de-queueing event obj70589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70589_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70591();
function goToPage_70591() {
	window.obj70589_onTap_runningActionsCount = obj70589_onTap_runningActionsCount + 1;
	$("#anchor265")[0].click();
	window.obj70589_onTap_runningActionsCount = window.obj70589_onTap_runningActionsCount - 1;
if (window.obj70589_onTap_runningActionsCount < 0) {
	window.obj70589_onTap_runningActionsCount = 0;
} else if (window.obj70589_onTap_runningActionsCount == 0) {
	obj70589_onTap_actionGroup1();
}
}





















};
obj70589_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70589_onTap_activeActionGroupIndex = -1;
		$("#obj70589").trigger("obj70589_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70589) {
				console.warn("de-queueing event obj70589." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70589").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70589_onTap_activeActionGroupIndex = 1;
	





















};
obj70586_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70586_onTap_activeActionGroupIndex = -1;
		$("#obj70586").trigger("obj70586_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70586) {
				console.warn("de-queueing event obj70586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70586_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70588();
function goToPage_70588() {
	window.obj70586_onTap_runningActionsCount = obj70586_onTap_runningActionsCount + 1;
	$("#anchor266")[0].click();
	window.obj70586_onTap_runningActionsCount = window.obj70586_onTap_runningActionsCount - 1;
if (window.obj70586_onTap_runningActionsCount < 0) {
	window.obj70586_onTap_runningActionsCount = 0;
} else if (window.obj70586_onTap_runningActionsCount == 0) {
	obj70586_onTap_actionGroup1();
}
}





















};
obj70586_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70586_onTap_activeActionGroupIndex = -1;
		$("#obj70586").trigger("obj70586_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70586) {
				console.warn("de-queueing event obj70586." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70586").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70586_onTap_activeActionGroupIndex = 1;
	





















};
obj70582_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70582_onTap_activeActionGroupIndex = -1;
		$("#obj70582").trigger("obj70582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70582) {
				console.warn("de-queueing event obj70582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70582_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_70584();
function goToPage_70584() {
	window.obj70582_onTap_runningActionsCount = obj70582_onTap_runningActionsCount + 1;
	$("#anchor267")[0].click();
	window.obj70582_onTap_runningActionsCount = window.obj70582_onTap_runningActionsCount - 1;
if (window.obj70582_onTap_runningActionsCount < 0) {
	window.obj70582_onTap_runningActionsCount = 0;
} else if (window.obj70582_onTap_runningActionsCount == 0) {
	obj70582_onTap_actionGroup1();
}
}





















};
obj70582_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70582_onTap_activeActionGroupIndex = -1;
		$("#obj70582").trigger("obj70582_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70582) {
				console.warn("de-queueing event obj70582." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70582").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70582_onTap_activeActionGroupIndex = 1;
	





















};
obj70485_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70485");
//	action: dragDrop
//	target: obj70485 
dragDrop_70488();
function dragDrop_70488() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70485_onTouchDown_runningActionsCount = obj70485_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70485');
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
	  	containerNode = $('#obj70572');
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
    	window.obj70485_onTouchDown_runningActionsCount = window.obj70485_onTouchDown_runningActionsCount - 1;
if (window.obj70485_onTouchDown_runningActionsCount < 0) {
	window.obj70485_onTouchDown_runningActionsCount = 0;
} else if (window.obj70485_onTouchDown_runningActionsCount == 0) {
	obj70485_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj70544","#obj70568","#obj70552","#obj70548");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70488 = false;
    	var dropped_id_70488;
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
					dropped_70488 = true;
					dropped_id_70488 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70488) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70485").trigger('SCActionDragDrop70488_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70485_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70485_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70485 
move_92228();
function move_92228() {
	window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount = obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount = window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70485_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70525();
function runjs_70525() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70526();
function runjs_70526() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#C00000"); $("#obj70548").css("border-width", "2px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70540 
hide_70527();
function hide_70527() {
	var selector = "#obj70540";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70527(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70485_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70528();
function runjs_70528() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70485").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70529();
function switchText_70529() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70485 
move_70530();
function move_70530() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj70485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj70485_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70531();
function runjs_70531() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70532();
function runjs_70532() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#000000"); $("#obj70548").css("border-width", "1px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70540
(function(){
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj70540";
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
					window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70485_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70534();
function runjs_70534() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70535();
function runjs_70535() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70485").css("border-color", "rgba(0,0,0,0)"); $("#obj70485").css("border-width", "0px"); $("#obj70485").css("border-style", "solid"); $("#obj70485").css("border-radius", "10px"); $("#obj70485").css("-webkit-border-radius", "10px"); $("#obj70485").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70536();
function playAudio_70536() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj70485_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70537();
function switchText_70537() {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = obj70485_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_4_runningActionsCount = window.obj70485_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj70485_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70511();
function runjs_70511() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70512();
function runjs_70512() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#C00000"); $("#obj70552").css("border-width", "2px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70542 
hide_70513();
function hide_70513() {
	var selector = "#obj70542";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70513(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70485_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70514();
function runjs_70514() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70485").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70515();
function switchText_70515() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70485 
move_70516();
function move_70516() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70485_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70517();
function runjs_70517() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70518();
function runjs_70518() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#000000"); $("#obj70552").css("border-width", "1px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70542
(function(){
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj70542";
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
					window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70485_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70520();
function runjs_70520() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70521();
function runjs_70521() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70485").css("border-color", "rgba(0,0,0,0)"); $("#obj70485").css("border-width", "0px"); $("#obj70485").css("border-style", "solid"); $("#obj70485").css("border-radius", "10px"); $("#obj70485").css("-webkit-border-radius", "10px"); $("#obj70485").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70522();
function playAudio_70522() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70485_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70523();
function switchText_70523() {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = obj70485_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_3_runningActionsCount = window.obj70485_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70485_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70497();
function runjs_70497() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70498();
function runjs_70498() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#C00000"); $("#obj70568").css("border-width", "2px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70566 
hide_70499();
function hide_70499() {
	var selector = "#obj70566";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70499(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70485_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70500();
function runjs_70500() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70485").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70501();
function switchText_70501() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70485 
move_70502();
function move_70502() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70485");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70485_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70503();
function runjs_70503() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70504();
function runjs_70504() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#000000"); $("#obj70568").css("border-width", "1px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70566
(function(){
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj70566";
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
					window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70485_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70506();
function runjs_70506() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70485").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70507();
function runjs_70507() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70485").css("border-color", "rgba(0,0,0,0)"); $("#obj70485").css("border-width", "0px"); $("#obj70485").css("border-style", "solid"); $("#obj70485").css("border-radius", "10px"); $("#obj70485").css("-webkit-border-radius", "10px"); $("#obj70485").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70508();
function playAudio_70508() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70485_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70509();
function switchText_70509() {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = obj70485_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_2_runningActionsCount = window.obj70485_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70485_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70490();
function runjs_70490() {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70494();
function switchText_70494() {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70491();
function runjs_70491() {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#058E3F"); $("#obj70544").css("border-width", "2px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj70538 
hide_70492();
function hide_70492() {
	var selector = "#obj70538";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70492(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70485_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70493();
function runjs_70493() {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70485").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70485_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj70558 
playAudio_70495();
function playAudio_70495() {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj70558")[0];
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
		    window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70485_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90156();
function switchText_90156() {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = obj70485_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70485_droppedInsideTargetActions_runningActionsCount = window.obj70485_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70485_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70485_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70485_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70485_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70485_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70485").trigger("obj70485_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70485) {
				console.warn("de-queueing event obj70485." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70485").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70485_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70432_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70432");
//	action: dragDrop
//	target: obj70432 
dragDrop_70435();
function dragDrop_70435() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70432_onTouchDown_runningActionsCount = obj70432_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70432');
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
	  	containerNode = $('#obj70572');
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
    	window.obj70432_onTouchDown_runningActionsCount = window.obj70432_onTouchDown_runningActionsCount - 1;
if (window.obj70432_onTouchDown_runningActionsCount < 0) {
	window.obj70432_onTouchDown_runningActionsCount = 0;
} else if (window.obj70432_onTouchDown_runningActionsCount == 0) {
	obj70432_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj70548","#obj70568","#obj70552","#obj70544");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70435 = false;
    	var dropped_id_70435;
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
					dropped_70435 = true;
					dropped_id_70435 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70435) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70432").trigger('SCActionDragDrop70435_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70432_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70432_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70432 
move_92224();
function move_92224() {
	window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount = obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70432");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount = window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70432_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70472();
function runjs_70472() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70473();
function runjs_70473() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#C00000"); $("#obj70544").css("border-width", "2px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70538 
hide_70474();
function hide_70474() {
	var selector = "#obj70538";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70474(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70432_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70475();
function runjs_70475() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70432").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70476();
function switchText_70476() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70432 
move_70477();
function move_70477() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj70432");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj70432_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70478();
function runjs_70478() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70479();
function runjs_70479() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#000000"); $("#obj70544").css("border-width", "1px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70538
(function(){
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj70538";
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
					window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70432_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70481();
function runjs_70481() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70432").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70482();
function runjs_70482() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70432").css("border-color", "rgba(0,0,0,0)"); $("#obj70432").css("border-width", "0px"); $("#obj70432").css("border-style", "solid"); $("#obj70432").css("border-radius", "10px"); $("#obj70432").css("-webkit-border-radius", "10px"); $("#obj70432").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70483();
function playAudio_70483() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj70432_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70484();
function switchText_70484() {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = obj70432_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_4_runningActionsCount = window.obj70432_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj70432_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70458();
function runjs_70458() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70459();
function runjs_70459() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#C00000"); $("#obj70552").css("border-width", "2px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70542 
hide_70460();
function hide_70460() {
	var selector = "#obj70542";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70460(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70432_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70461();
function runjs_70461() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70432").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70462();
function switchText_70462() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70432 
move_70463();
function move_70463() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70432");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70432_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70464();
function runjs_70464() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70465();
function runjs_70465() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#000000"); $("#obj70552").css("border-width", "1px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70542
(function(){
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj70542";
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
					window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70432_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70467();
function runjs_70467() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70432").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70468();
function runjs_70468() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70432").css("border-color", "rgba(0,0,0,0)"); $("#obj70432").css("border-width", "0px"); $("#obj70432").css("border-style", "solid"); $("#obj70432").css("border-radius", "10px"); $("#obj70432").css("-webkit-border-radius", "10px"); $("#obj70432").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70469();
function playAudio_70469() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70432_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70470();
function switchText_70470() {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = obj70432_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_3_runningActionsCount = window.obj70432_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70432_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70444();
function runjs_70444() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70445();
function runjs_70445() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#C00000"); $("#obj70568").css("border-width", "2px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70566 
hide_70446();
function hide_70446() {
	var selector = "#obj70566";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70446(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70432_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70447();
function runjs_70447() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70432").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70448();
function switchText_70448() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70432 
move_70449();
function move_70449() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70432");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 317;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70432_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70450();
function runjs_70450() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70451();
function runjs_70451() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#000000"); $("#obj70568").css("border-width", "1px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70566
(function(){
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj70566";
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
					window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70432_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70453();
function runjs_70453() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70432").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70454();
function runjs_70454() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70432").css("border-color", "rgba(0,0,0,0)"); $("#obj70432").css("border-width", "0px"); $("#obj70432").css("border-style", "solid"); $("#obj70432").css("border-radius", "10px"); $("#obj70432").css("-webkit-border-radius", "10px"); $("#obj70432").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70455();
function playAudio_70455() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70432_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70456();
function switchText_70456() {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = obj70432_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_2_runningActionsCount = window.obj70432_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70432_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70437();
function runjs_70437() {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70441();
function switchText_70441() {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70438();
function runjs_70438() {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#058E3F"); $("#obj70548").css("border-width", "2px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj70540 
hide_70439();
function hide_70439() {
	var selector = "#obj70540";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70439(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70432_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70440();
function runjs_70440() {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70432").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70432_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj70558 
playAudio_70442();
function playAudio_70442() {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj70558")[0];
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
		    window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70432_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90155();
function switchText_90155() {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = obj70432_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70432_droppedInsideTargetActions_runningActionsCount = window.obj70432_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70432_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70432_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70432_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70432_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70432_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70432").trigger("obj70432_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70432) {
				console.warn("de-queueing event obj70432." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70432").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70432_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70379_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70379");
//	action: dragDrop
//	target: obj70379 
dragDrop_70382();
function dragDrop_70382() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70379_onTouchDown_runningActionsCount = obj70379_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70379');
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
	  	containerNode = $('#obj70572');
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
    	window.obj70379_onTouchDown_runningActionsCount = window.obj70379_onTouchDown_runningActionsCount - 1;
if (window.obj70379_onTouchDown_runningActionsCount < 0) {
	window.obj70379_onTouchDown_runningActionsCount = 0;
} else if (window.obj70379_onTouchDown_runningActionsCount == 0) {
	obj70379_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj70552","#obj70568","#obj70548","#obj70544");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70382 = false;
    	var dropped_id_70382;
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
					dropped_70382 = true;
					dropped_id_70382 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70382) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70379").trigger('SCActionDragDrop70382_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70379_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70379_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70379 
move_92222();
function move_92222() {
	window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount = obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70379");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount = window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70379_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70419();
function runjs_70419() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70420();
function runjs_70420() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#C00000"); $("#obj70544").css("border-width", "2px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70538 
hide_70421();
function hide_70421() {
	var selector = "#obj70538";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70421(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70379_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70422();
function runjs_70422() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70379").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70423();
function switchText_70423() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70379 
move_70424();
function move_70424() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj70379");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj70379_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70425();
function runjs_70425() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70426();
function runjs_70426() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#000000"); $("#obj70544").css("border-width", "1px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70538
(function(){
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj70538";
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
					window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70379_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70428();
function runjs_70428() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70379").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70429();
function runjs_70429() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70379").css("border-color", "rgba(0,0,0,0)"); $("#obj70379").css("border-width", "0px"); $("#obj70379").css("border-style", "solid"); $("#obj70379").css("border-radius", "10px"); $("#obj70379").css("-webkit-border-radius", "10px"); $("#obj70379").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70430();
function playAudio_70430() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj70379_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70431();
function switchText_70431() {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = obj70379_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_4_runningActionsCount = window.obj70379_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj70379_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70405();
function runjs_70405() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70406();
function runjs_70406() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#C00000"); $("#obj70548").css("border-width", "2px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70540 
hide_70407();
function hide_70407() {
	var selector = "#obj70540";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70407(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70379_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70408();
function runjs_70408() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70379").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70409();
function switchText_70409() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70379 
move_70410();
function move_70410() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70379");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70379_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70411();
function runjs_70411() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70412();
function runjs_70412() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#000000"); $("#obj70548").css("border-width", "1px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70540
(function(){
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj70540";
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
					window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70379_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70414();
function runjs_70414() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70379").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70415();
function runjs_70415() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70379").css("border-color", "rgba(0,0,0,0)"); $("#obj70379").css("border-width", "0px"); $("#obj70379").css("border-style", "solid"); $("#obj70379").css("border-radius", "10px"); $("#obj70379").css("-webkit-border-radius", "10px"); $("#obj70379").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70416();
function playAudio_70416() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70379_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70417();
function switchText_70417() {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = obj70379_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_3_runningActionsCount = window.obj70379_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70379_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70391();
function runjs_70391() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70392();
function runjs_70392() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#C00000"); $("#obj70568").css("border-width", "2px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70566 
hide_70393();
function hide_70393() {
	var selector = "#obj70566";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70393(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70379_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70394();
function runjs_70394() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70379").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70395();
function switchText_70395() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70379 
move_70396();
function move_70396() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70379");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 597;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70379_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70397();
function runjs_70397() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70398();
function runjs_70398() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#000000"); $("#obj70568").css("border-width", "1px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70566
(function(){
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj70566";
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
					window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70379_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70400();
function runjs_70400() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70379").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70401();
function runjs_70401() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70379").css("border-color", "rgba(0,0,0,0)"); $("#obj70379").css("border-width", "0px"); $("#obj70379").css("border-style", "solid"); $("#obj70379").css("border-radius", "10px"); $("#obj70379").css("-webkit-border-radius", "10px"); $("#obj70379").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70402();
function playAudio_70402() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70379_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70403();
function switchText_70403() {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = obj70379_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_2_runningActionsCount = window.obj70379_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70379_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70384();
function runjs_70384() {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70388();
function switchText_70388() {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70385();
function runjs_70385() {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#058E3F"); $("#obj70552").css("border-width", "2px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj70542 
hide_70386();
function hide_70386() {
	var selector = "#obj70542";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70386(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70379_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70387();
function runjs_70387() {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70379").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70379_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj70558 
playAudio_70389();
function playAudio_70389() {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj70558")[0];
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
		    window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70379_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90153();
function switchText_90153() {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = obj70379_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70379_droppedInsideTargetActions_runningActionsCount = window.obj70379_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70379_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70379_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70379_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70379_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70379_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70379").trigger("obj70379_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70379) {
				console.warn("de-queueing event obj70379." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70379").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70379_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70326_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj70326");
//	action: dragDrop
//	target: obj70326 
dragDrop_70329();
function dragDrop_70329() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj70326_onTouchDown_runningActionsCount = obj70326_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj70326');
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
	  	containerNode = $('#obj70572');
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
    	window.obj70326_onTouchDown_runningActionsCount = window.obj70326_onTouchDown_runningActionsCount - 1;
if (window.obj70326_onTouchDown_runningActionsCount < 0) {
	window.obj70326_onTouchDown_runningActionsCount = 0;
} else if (window.obj70326_onTouchDown_runningActionsCount == 0) {
	obj70326_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj70568","#obj70552","#obj70548","#obj70544");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_70329 = false;
    	var dropped_id_70329;
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
					dropped_70329 = true;
					dropped_id_70329 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_70329) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj70326").trigger('SCActionDragDrop70329_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj70326_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70326_onTouchDown_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj70326 
move_92226();
function move_92226() {
	window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount = obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj70326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount = window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj70326_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70366();
function runjs_70366() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70367();
function runjs_70367() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#C00000"); $("#obj70544").css("border-width", "2px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70538 
hide_70368();
function hide_70368() {
	var selector = "#obj70538";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70368(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70326_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70369();
function runjs_70369() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70326").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70370();
function switchText_70370() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70326 
move_70371();
function move_70371() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj70326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj70326_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70372();
function runjs_70372() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70373();
function runjs_70373() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70544").css("border-color", "#000000"); $("#obj70544").css("border-width", "1px"); $("#obj70544").css("border-style", "solid"); $("#obj70544").css("border-radius", "10px"); $("#obj70544").css("-webkit-border-radius", "10px"); $("#obj70544").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70538
(function(){
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj70538";
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
					window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70326_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70375();
function runjs_70375() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70326").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70376();
function runjs_70376() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj70326").css("border-color", "rgba(0,0,0,0)"); $("#obj70326").css("border-width", "0px"); $("#obj70326").css("border-style", "solid"); $("#obj70326").css("border-radius", "10px"); $("#obj70326").css("-webkit-border-radius", "10px"); $("#obj70326").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70377();
function playAudio_70377() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj70326_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70378();
function switchText_70378() {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = obj70326_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_4_runningActionsCount = window.obj70326_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj70326_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70352();
function runjs_70352() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70353();
function runjs_70353() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#C00000"); $("#obj70548").css("border-width", "2px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70540 
hide_70354();
function hide_70354() {
	var selector = "#obj70540";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70354(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70326_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70355();
function runjs_70355() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70326").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70356();
function switchText_70356() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70326 
move_70357();
function move_70357() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj70326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj70326_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70358();
function runjs_70358() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70359();
function runjs_70359() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70548").css("border-color", "#000000"); $("#obj70548").css("border-width", "1px"); $("#obj70548").css("border-style", "solid"); $("#obj70548").css("border-radius", "10px"); $("#obj70548").css("-webkit-border-radius", "10px"); $("#obj70548").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70540
(function(){
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj70540";
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
					window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70326_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70361();
function runjs_70361() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70326").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70362();
function runjs_70362() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj70326").css("border-color", "rgba(0,0,0,0)"); $("#obj70326").css("border-width", "0px"); $("#obj70326").css("border-style", "solid"); $("#obj70326").css("border-radius", "10px"); $("#obj70326").css("-webkit-border-radius", "10px"); $("#obj70326").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70363();
function playAudio_70363() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj70326_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70364();
function switchText_70364() {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = obj70326_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_3_runningActionsCount = window.obj70326_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj70326_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70338();
function runjs_70338() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_70339();
function runjs_70339() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#C00000"); $("#obj70552").css("border-width", "2px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj70542 
hide_70340();
function hide_70340() {
	var selector = "#obj70542";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70340(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70326_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_70341();
function runjs_70341() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70326").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_70342();
function switchText_70342() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj70326 
move_70343();
function move_70343() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj70326");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 161;
	var moveY = 658;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj70326_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_70344();
function runjs_70344() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70552").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_70345();
function runjs_70345() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70552").css("border-color", "#000000"); $("#obj70552").css("border-width", "1px"); $("#obj70552").css("border-style", "solid"); $("#obj70552").css("border-radius", "10px"); $("#obj70552").css("-webkit-border-radius", "10px"); $("#obj70552").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj70542
(function(){
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj70542";
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
					window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70326_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_70347();
function runjs_70347() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70326").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_70348();
function runjs_70348() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj70326").css("border-color", "rgba(0,0,0,0)"); $("#obj70326").css("border-width", "0px"); $("#obj70326").css("border-style", "solid"); $("#obj70326").css("border-radius", "10px"); $("#obj70326").css("-webkit-border-radius", "10px"); $("#obj70326").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj70560 
playAudio_70349();
function playAudio_70349() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj70560")[0];
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
		    window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj70326_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_70350();
function switchText_70350() {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = obj70326_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_2_runningActionsCount = window.obj70326_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj70326_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_70331();
function runjs_70331() {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70568").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_70335();
function switchText_70335() {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_70332();
function runjs_70332() {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70568").css("border-color", "#058E3F"); $("#obj70568").css("border-width", "2px"); $("#obj70568").css("border-style", "solid"); $("#obj70568").css("border-radius", "10px"); $("#obj70568").css("-webkit-border-radius", "10px"); $("#obj70568").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj70566 
hide_70333();
function hide_70333() {
	var selector = "#obj70566";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70333(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj70326_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_70334();
function runjs_70334() {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj70326").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj70326_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj70558 
playAudio_70336();
function playAudio_70336() {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj70558")[0];
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
		    window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj70326_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90154();
function switchText_90154() {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = obj70326_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj70562_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj70562_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj70562").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj70562_content");
			setTimeout(function () {
				window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj70562 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj70326_droppedInsideTargetActions_runningActionsCount = window.obj70326_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj70326_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj70326_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj70326_droppedInsideTargetActions_runningActionsCount == 0) {
	obj70326_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj70326_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj70326").trigger("obj70326_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70326) {
				console.warn("de-queueing event obj70326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70326_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj70308_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70308_onTap_activeActionGroupIndex = -1;
		$("#obj70308").trigger("obj70308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70308) {
				console.warn("de-queueing event obj70308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70308_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70308 
hide_70311();
function hide_70311() {
	var selector = "#obj70308";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70308_onTap_runningActionsCount = obj70308_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70308_onTap_runningActionsCount = window.obj70308_onTap_runningActionsCount - 1;
if (window.obj70308_onTap_runningActionsCount < 0) {
	window.obj70308_onTap_runningActionsCount = 0;
} else if (window.obj70308_onTap_runningActionsCount == 0) {
	obj70308_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70311(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70308_onTap_runningActionsCount = window.obj70308_onTap_runningActionsCount - 1;
if (window.obj70308_onTap_runningActionsCount < 0) {
	window.obj70308_onTap_runningActionsCount = 0;
} else if (window.obj70308_onTap_runningActionsCount == 0) {
	obj70308_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj70298 
stopMovie_70310();
function stopMovie_70310() {
	window.obj70308_onTap_runningActionsCount = obj70308_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70298")[0];
	myVideo.pause();
	window.obj70308_onTap_runningActionsCount = window.obj70308_onTap_runningActionsCount - 1;
if (window.obj70308_onTap_runningActionsCount < 0) {
	window.obj70308_onTap_runningActionsCount = 0;
} else if (window.obj70308_onTap_runningActionsCount == 0) {
	obj70308_onTap_actionGroup1();
}
}
















};
obj70308_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70308_onTap_activeActionGroupIndex = -1;
		$("#obj70308").trigger("obj70308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70308) {
				console.warn("de-queueing event obj70308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70308_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70300
(function(){
	window.obj70308_onTap_runningActionsCount = obj70308_onTap_runningActionsCount + 1;

	var selector = "#obj70300";
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
					window.obj70308_onTap_runningActionsCount = window.obj70308_onTap_runningActionsCount - 1;
if (window.obj70308_onTap_runningActionsCount < 0) {
	window.obj70308_onTap_runningActionsCount = 0;
} else if (window.obj70308_onTap_runningActionsCount == 0) {
	obj70308_onTap_actionGroup2();
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
				window.obj70308_onTap_runningActionsCount = window.obj70308_onTap_runningActionsCount - 1;
if (window.obj70308_onTap_runningActionsCount < 0) {
	window.obj70308_onTap_runningActionsCount = 0;
} else if (window.obj70308_onTap_runningActionsCount == 0) {
	obj70308_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70308_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70308_onTap_activeActionGroupIndex = -1;
		$("#obj70308").trigger("obj70308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70308) {
				console.warn("de-queueing event obj70308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70308_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70298 
move_70313();
function move_70313() {
	window.obj70308_onTap_runningActionsCount = obj70308_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70298");
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
			window.obj70308_onTap_runningActionsCount = window.obj70308_onTap_runningActionsCount - 1;
if (window.obj70308_onTap_runningActionsCount < 0) {
	window.obj70308_onTap_runningActionsCount = 0;
} else if (window.obj70308_onTap_runningActionsCount == 0) {
	obj70308_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70308_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70308_onTap_activeActionGroupIndex = -1;
		$("#obj70308").trigger("obj70308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70308) {
				console.warn("de-queueing event obj70308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70308_onTap_activeActionGroupIndex = 3;
	





















};
obj70300_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70300_onTap_activeActionGroupIndex = -1;
		$("#obj70300").trigger("obj70300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70300) {
				console.warn("de-queueing event obj70300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70300_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj70300 
hide_70303();
function hide_70303() {
	var selector = "#obj70300";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj70300_onTap_runningActionsCount = obj70300_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj70300_onTap_runningActionsCount = window.obj70300_onTap_runningActionsCount - 1;
if (window.obj70300_onTap_runningActionsCount < 0) {
	window.obj70300_onTap_runningActionsCount = 0;
} else if (window.obj70300_onTap_runningActionsCount == 0) {
	obj70300_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_70303(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj70300_onTap_runningActionsCount = window.obj70300_onTap_runningActionsCount - 1;
if (window.obj70300_onTap_runningActionsCount < 0) {
	window.obj70300_onTap_runningActionsCount = 0;
} else if (window.obj70300_onTap_runningActionsCount == 0) {
	obj70300_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj70298 
playPauseMovie_70302();
function playPauseMovie_70302() {
	window.obj70300_onTap_runningActionsCount = obj70300_onTap_runningActionsCount + 1;
	var myVideo = $("#obj70298")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj70300_onTap_runningActionsCount = window.obj70300_onTap_runningActionsCount - 1;
if (window.obj70300_onTap_runningActionsCount < 0) {
	window.obj70300_onTap_runningActionsCount = 0;
} else if (window.obj70300_onTap_runningActionsCount == 0) {
	obj70300_onTap_actionGroup1();
}
}

















};
obj70300_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70300_onTap_activeActionGroupIndex = -1;
		$("#obj70300").trigger("obj70300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70300) {
				console.warn("de-queueing event obj70300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70300_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj70308
(function(){
	window.obj70300_onTap_runningActionsCount = obj70300_onTap_runningActionsCount + 1;

	var selector = "#obj70308";
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
					window.obj70300_onTap_runningActionsCount = window.obj70300_onTap_runningActionsCount - 1;
if (window.obj70300_onTap_runningActionsCount < 0) {
	window.obj70300_onTap_runningActionsCount = 0;
} else if (window.obj70300_onTap_runningActionsCount == 0) {
	obj70300_onTap_actionGroup2();
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
				window.obj70300_onTap_runningActionsCount = window.obj70300_onTap_runningActionsCount - 1;
if (window.obj70300_onTap_runningActionsCount < 0) {
	window.obj70300_onTap_runningActionsCount = 0;
} else if (window.obj70300_onTap_runningActionsCount == 0) {
	obj70300_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj70300_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj70300_onTap_activeActionGroupIndex = -1;
		$("#obj70300").trigger("obj70300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70300) {
				console.warn("de-queueing event obj70300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70300_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj70298 
move_70305();
function move_70305() {
	window.obj70300_onTap_runningActionsCount = obj70300_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj70298");
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
			window.obj70300_onTap_runningActionsCount = window.obj70300_onTap_runningActionsCount - 1;
if (window.obj70300_onTap_runningActionsCount < 0) {
	window.obj70300_onTap_runningActionsCount = 0;
} else if (window.obj70300_onTap_runningActionsCount == 0) {
	obj70300_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj70300_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj70300_onTap_activeActionGroupIndex = -1;
		$("#obj70300").trigger("obj70300_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 70300) {
				console.warn("de-queueing event obj70300." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj70300").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj70300_onTap_activeActionGroupIndex = 3;
	





















};
obj87262_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87262_onTap_activeActionGroupIndex = -1;
		$("#obj87262").trigger("obj87262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87262) {
				console.warn("de-queueing event obj87262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87262_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87267 
stopAudio_87264();
function stopAudio_87264() {
	window.obj87262_onTap_runningActionsCount = obj87262_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87267")[0];
	myAudio.pause();
	window.obj87262_onTap_runningActionsCount = window.obj87262_onTap_runningActionsCount - 1;
if (window.obj87262_onTap_runningActionsCount < 0) {
	window.obj87262_onTap_runningActionsCount = 0;
} else if (window.obj87262_onTap_runningActionsCount == 0) {
	obj87262_onTap_actionGroup1();
}
}








};
obj87262_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87262_onTap_activeActionGroupIndex = -1;
		$("#obj87262").trigger("obj87262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87262) {
				console.warn("de-queueing event obj87262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87262_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87262 
hide_87265();
function hide_87265() {
	var selector = "#obj87262";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87262_onTap_runningActionsCount = obj87262_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87262_onTap_runningActionsCount = window.obj87262_onTap_runningActionsCount - 1;
if (window.obj87262_onTap_runningActionsCount < 0) {
	window.obj87262_onTap_runningActionsCount = 0;
} else if (window.obj87262_onTap_runningActionsCount == 0) {
	obj87262_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87265(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87262_onTap_runningActionsCount = window.obj87262_onTap_runningActionsCount - 1;
if (window.obj87262_onTap_runningActionsCount < 0) {
	window.obj87262_onTap_runningActionsCount = 0;
} else if (window.obj87262_onTap_runningActionsCount == 0) {
	obj87262_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87262_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87262_onTap_activeActionGroupIndex = -1;
		$("#obj87262").trigger("obj87262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87262) {
				console.warn("de-queueing event obj87262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87262_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87257
(function(){
	window.obj87262_onTap_runningActionsCount = obj87262_onTap_runningActionsCount + 1;

	var selector = "#obj87257";
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
					window.obj87262_onTap_runningActionsCount = window.obj87262_onTap_runningActionsCount - 1;
if (window.obj87262_onTap_runningActionsCount < 0) {
	window.obj87262_onTap_runningActionsCount = 0;
} else if (window.obj87262_onTap_runningActionsCount == 0) {
	obj87262_onTap_actionGroup3();
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
				window.obj87262_onTap_runningActionsCount = window.obj87262_onTap_runningActionsCount - 1;
if (window.obj87262_onTap_runningActionsCount < 0) {
	window.obj87262_onTap_runningActionsCount = 0;
} else if (window.obj87262_onTap_runningActionsCount == 0) {
	obj87262_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87262_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87262_onTap_activeActionGroupIndex = -1;
		$("#obj87262").trigger("obj87262_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87262) {
				console.warn("de-queueing event obj87262." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87262").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87262_onTap_activeActionGroupIndex = 3;
	





















};
obj87257_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87257_onTap_activeActionGroupIndex = -1;
		$("#obj87257").trigger("obj87257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87257) {
				console.warn("de-queueing event obj87257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87257_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87257 
hide_87259();
function hide_87259() {
	var selector = "#obj87257";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87257_onTap_runningActionsCount = obj87257_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87257_onTap_runningActionsCount = window.obj87257_onTap_runningActionsCount - 1;
if (window.obj87257_onTap_runningActionsCount < 0) {
	window.obj87257_onTap_runningActionsCount = 0;
} else if (window.obj87257_onTap_runningActionsCount == 0) {
	obj87257_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87259(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87257_onTap_runningActionsCount = window.obj87257_onTap_runningActionsCount - 1;
if (window.obj87257_onTap_runningActionsCount < 0) {
	window.obj87257_onTap_runningActionsCount = 0;
} else if (window.obj87257_onTap_runningActionsCount == 0) {
	obj87257_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87257_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87257_onTap_activeActionGroupIndex = -1;
		$("#obj87257").trigger("obj87257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87257) {
				console.warn("de-queueing event obj87257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87257_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87262
(function(){
	window.obj87257_onTap_runningActionsCount = obj87257_onTap_runningActionsCount + 1;

	var selector = "#obj87262";
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
					window.obj87257_onTap_runningActionsCount = window.obj87257_onTap_runningActionsCount - 1;
if (window.obj87257_onTap_runningActionsCount < 0) {
	window.obj87257_onTap_runningActionsCount = 0;
} else if (window.obj87257_onTap_runningActionsCount == 0) {
	obj87257_onTap_actionGroup2();
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
				window.obj87257_onTap_runningActionsCount = window.obj87257_onTap_runningActionsCount - 1;
if (window.obj87257_onTap_runningActionsCount < 0) {
	window.obj87257_onTap_runningActionsCount = 0;
} else if (window.obj87257_onTap_runningActionsCount == 0) {
	obj87257_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87257_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87257_onTap_activeActionGroupIndex = -1;
		$("#obj87257").trigger("obj87257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87257) {
				console.warn("de-queueing event obj87257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87257_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87267 
playAudio_87261();
function playAudio_87261() {
	window.obj87257_onTap_runningActionsCount = obj87257_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87267")[0];
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
		    window.obj87257_onTap_runningActionsCount = window.obj87257_onTap_runningActionsCount - 1;
if (window.obj87257_onTap_runningActionsCount < 0) {
	window.obj87257_onTap_runningActionsCount = 0;
} else if (window.obj87257_onTap_runningActionsCount == 0) {
	obj87257_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87257_onTap_runningActionsCount = window.obj87257_onTap_runningActionsCount - 1;
if (window.obj87257_onTap_runningActionsCount < 0) {
	window.obj87257_onTap_runningActionsCount = 0;
} else if (window.obj87257_onTap_runningActionsCount == 0) {
	obj87257_onTap_actionGroup3();
}
	}
}









};
obj87257_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87257_onTap_activeActionGroupIndex = -1;
		$("#obj87257").trigger("obj87257_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87257) {
				console.warn("de-queueing event obj87257." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87257").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87257_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj70589: Event Touch Down
 *
 */
$("#obj70589").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70589_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70589_onTap is still running");
	return;
}
var obj70589_onTap_runningActionsCount = 0;
var obj70589_onTap_loopCount = 0;
obj70589_onTap_actionGroup0();
});










/*
 *
 *   obj70586: Event Touch Down
 *
 */
$("#obj70586").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70586_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70586_onTap is still running");
	return;
}
var obj70586_onTap_runningActionsCount = 0;
var obj70586_onTap_loopCount = 0;
obj70586_onTap_actionGroup0();
});










/*
 *
 *   obj70582: Event Touch Down
 *
 */
$("#obj70582").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70582_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70582_onTap is still running");
	return;
}
var obj70582_onTap_runningActionsCount = 0;
var obj70582_onTap_loopCount = 0;
obj70582_onTap_actionGroup0();
});







































































































































































































































/*
 *
 *   obj70485: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70485");
	var winTarget = document.getElementById("obj70485");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70485").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70485_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70485_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70485_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70485_onTouchDown is still running");
	return;
}
var obj70485_onTouchDown_runningActionsCount = 0;
var obj70485_onTouchDown_loopCount = 0;
obj70485_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70485: Event SCActionDragDrop70488_droppedOutsideTargetActions
 *
 */
$("#obj70485").bind("SCActionDragDrop70488_droppedOutsideTargetActions", function(event) {
	if (window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70485_SCActionDragDrop70488_droppedOutsideTargetActions is still running");
	return;
}
var obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_loopCount = 0;
obj70485_SCActionDragDrop70488_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70485: Event droppedInsideTargetActions_4
 *
 */
$("#obj70485").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj70485_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70485_droppedInsideTargetActions_4 is still running");
	return;
}
var obj70485_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_4_loopCount = 0;
obj70485_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj70485: Event droppedInsideTargetActions_3
 *
 */
$("#obj70485").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70485_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70485_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70485_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_3_loopCount = 0;
obj70485_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70485: Event droppedInsideTargetActions_2
 *
 */
$("#obj70485").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70485_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70485_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70485_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_2_loopCount = 0;
obj70485_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70485: Event droppedInsideTargetActions
 *
 */
$("#obj70485").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70485_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70485_droppedInsideTargetActions is still running");
	return;
}
var obj70485_droppedInsideTargetActions_runningActionsCount = 0;
var obj70485_droppedInsideTargetActions_loopCount = 0;
obj70485_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj70432: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70432");
	var winTarget = document.getElementById("obj70432");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70432").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70432_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70432_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70432_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70432_onTouchDown is still running");
	return;
}
var obj70432_onTouchDown_runningActionsCount = 0;
var obj70432_onTouchDown_loopCount = 0;
obj70432_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70432: Event SCActionDragDrop70435_droppedOutsideTargetActions
 *
 */
$("#obj70432").bind("SCActionDragDrop70435_droppedOutsideTargetActions", function(event) {
	if (window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70432_SCActionDragDrop70435_droppedOutsideTargetActions is still running");
	return;
}
var obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_loopCount = 0;
obj70432_SCActionDragDrop70435_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70432: Event droppedInsideTargetActions_4
 *
 */
$("#obj70432").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj70432_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70432_droppedInsideTargetActions_4 is still running");
	return;
}
var obj70432_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_4_loopCount = 0;
obj70432_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj70432: Event droppedInsideTargetActions_3
 *
 */
$("#obj70432").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70432_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70432_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70432_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_3_loopCount = 0;
obj70432_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70432: Event droppedInsideTargetActions_2
 *
 */
$("#obj70432").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70432_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70432_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70432_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_2_loopCount = 0;
obj70432_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70432: Event droppedInsideTargetActions
 *
 */
$("#obj70432").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70432_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70432_droppedInsideTargetActions is still running");
	return;
}
var obj70432_droppedInsideTargetActions_runningActionsCount = 0;
var obj70432_droppedInsideTargetActions_loopCount = 0;
obj70432_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj70379: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70379");
	var winTarget = document.getElementById("obj70379");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70379").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70379_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70379_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70379_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70379_onTouchDown is still running");
	return;
}
var obj70379_onTouchDown_runningActionsCount = 0;
var obj70379_onTouchDown_loopCount = 0;
obj70379_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70379: Event SCActionDragDrop70382_droppedOutsideTargetActions
 *
 */
$("#obj70379").bind("SCActionDragDrop70382_droppedOutsideTargetActions", function(event) {
	if (window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70379_SCActionDragDrop70382_droppedOutsideTargetActions is still running");
	return;
}
var obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_loopCount = 0;
obj70379_SCActionDragDrop70382_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70379: Event droppedInsideTargetActions_4
 *
 */
$("#obj70379").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj70379_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70379_droppedInsideTargetActions_4 is still running");
	return;
}
var obj70379_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_4_loopCount = 0;
obj70379_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj70379: Event droppedInsideTargetActions_3
 *
 */
$("#obj70379").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70379_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70379_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70379_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_3_loopCount = 0;
obj70379_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70379: Event droppedInsideTargetActions_2
 *
 */
$("#obj70379").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70379_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70379_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70379_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_2_loopCount = 0;
obj70379_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70379: Event droppedInsideTargetActions
 *
 */
$("#obj70379").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70379_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70379_droppedInsideTargetActions is still running");
	return;
}
var obj70379_droppedInsideTargetActions_runningActionsCount = 0;
var obj70379_droppedInsideTargetActions_loopCount = 0;
obj70379_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj70326: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj70326");
	var winTarget = document.getElementById("obj70326");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj70326").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj70326_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj70326_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj70326_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70326_onTouchDown is still running");
	return;
}
var obj70326_onTouchDown_runningActionsCount = 0;
var obj70326_onTouchDown_loopCount = 0;
obj70326_onTouchDown_actionGroup0();
});



/*
 *
 *   obj70326: Event SCActionDragDrop70329_droppedOutsideTargetActions
 *
 */
$("#obj70326").bind("SCActionDragDrop70329_droppedOutsideTargetActions", function(event) {
	if (window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70326_SCActionDragDrop70329_droppedOutsideTargetActions is still running");
	return;
}
var obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_runningActionsCount = 0;
var obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_loopCount = 0;
obj70326_SCActionDragDrop70329_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj70326: Event droppedInsideTargetActions_4
 *
 */
$("#obj70326").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj70326_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70326_droppedInsideTargetActions_4 is still running");
	return;
}
var obj70326_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_4_loopCount = 0;
obj70326_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj70326: Event droppedInsideTargetActions_3
 *
 */
$("#obj70326").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj70326_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70326_droppedInsideTargetActions_3 is still running");
	return;
}
var obj70326_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_3_loopCount = 0;
obj70326_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj70326: Event droppedInsideTargetActions_2
 *
 */
$("#obj70326").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj70326_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70326_droppedInsideTargetActions_2 is still running");
	return;
}
var obj70326_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_2_loopCount = 0;
obj70326_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj70326: Event droppedInsideTargetActions
 *
 */
$("#obj70326").bind("droppedInsideTargetActions", function(event) {
	if (window.obj70326_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70326_droppedInsideTargetActions is still running");
	return;
}
var obj70326_droppedInsideTargetActions_runningActionsCount = 0;
var obj70326_droppedInsideTargetActions_loopCount = 0;
obj70326_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj70308: Event Touch Down
 *
 */
$("#obj70308").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70308_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70308_onTap is still running");
	return;
}
var obj70308_onTap_runningActionsCount = 0;
var obj70308_onTap_loopCount = 0;
obj70308_onTap_actionGroup0();
});










/*
 *
 *   obj70300: Event Touch Down
 *
 */
$("#obj70300").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj70300_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj70300_onTap is still running");
	return;
}
var obj70300_onTap_runningActionsCount = 0;
var obj70300_onTap_loopCount = 0;
obj70300_onTap_actionGroup0();
});










/*
 *
 *   obj87262: Event Touch Down
 *
 */
$("#obj87262").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87262_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87262_onTap is still running");
	return;
}
var obj87262_onTap_runningActionsCount = 0;
var obj87262_onTap_loopCount = 0;
obj87262_onTap_actionGroup0();
});










/*
 *
 *   obj87257: Event Touch Down
 *
 */
$("#obj87257").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87257_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87257_onTap is still running");
	return;
}
var obj87257_onTap_runningActionsCount = 0;
var obj87257_onTap_loopCount = 0;
obj87257_onTap_actionGroup0();
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
	
$("#obj70592").trigger('SCEventShow');
$("#obj70589").trigger('SCEventShow');
$("#obj70586").trigger('SCEventShow');
$("#obj70582").trigger('SCEventShow');
$("#obj70580").trigger('SCEventShow');
$("#obj70578").trigger('SCEventShow');
$("#obj70576").trigger('SCEventShow');
$("#obj70574").trigger('SCEventShow');
$("#obj70572").trigger('SCEventShow');
$("#obj70570").trigger('SCEventShow');
$("#obj70568").trigger('SCEventShow');
$("#obj70566").trigger('SCEventShow');
$("#obj70564").trigger('SCEventShow');
$("#obj70562").trigger('SCEventShow');
$("#obj70560").trigger('SCEventShow');
$("#obj70558").trigger('SCEventShow');
$("#obj70556").trigger('SCEventShow');
$("#obj70554").trigger('SCEventShow');
$("#obj70552").trigger('SCEventShow');
$("#obj70550").trigger('SCEventShow');
$("#obj70548").trigger('SCEventShow');
$("#obj70546").trigger('SCEventShow');
$("#obj70544").trigger('SCEventShow');
$("#obj70542").trigger('SCEventShow');
$("#obj70540").trigger('SCEventShow');
$("#obj70538").trigger('SCEventShow');
$("#obj70485").trigger('SCEventShow');
$("#obj70432").trigger('SCEventShow');
$("#obj70379").trigger('SCEventShow');
$("#obj70326").trigger('SCEventShow');
$("#obj70308").trigger('SCEventShow');
$("#obj70300").trigger('SCEventShow');
$("#obj87262").trigger('SCEventShow');
$("#obj87257").trigger('SCEventShow');
$("#obj87267").trigger('SCEventShow');
$("#obj94717").trigger('SCEventShow');
$("#obj70298").trigger('SCEventShow');
	
});