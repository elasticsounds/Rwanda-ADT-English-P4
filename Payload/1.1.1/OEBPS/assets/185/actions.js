pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 51664;
pubcoder.page.title = pubcoder.page.title || "185";
pubcoder.page.number = pubcoder.page.number || 185;
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
var obj52065_onTap_activeActionGroupIndex = -1;
var obj52065_onTap_runningActionsCount = 0;
var obj52065_onTap_loopCount = 0;
var obj52062_onTap_activeActionGroupIndex = -1;
var obj52062_onTap_runningActionsCount = 0;
var obj52062_onTap_loopCount = 0;
var obj52058_onTap_activeActionGroupIndex = -1;
var obj52058_onTap_runningActionsCount = 0;
var obj52058_onTap_loopCount = 0;
var obj51933_onDrag_activeActionGroupIndex = -1;
var obj51933_onDrag_runningActionsCount = 0;
var obj51933_onDrag_loopCount = 0;
var obj51933_onTouchDown_activeActionGroupIndex = -1;
var obj51933_onTouchDown_runningActionsCount = 0;
var obj51933_onTouchDown_loopCount = 0;
var obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_loopCount = 0;
var obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_4_loopCount = 0;
var obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_3_loopCount = 0;
var obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_2_loopCount = 0;
var obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj51933_droppedInsideTargetActions_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_loopCount = 0;
var obj51866_onDrag_activeActionGroupIndex = -1;
var obj51866_onDrag_runningActionsCount = 0;
var obj51866_onDrag_loopCount = 0;
var obj51866_onTouchDown_activeActionGroupIndex = -1;
var obj51866_onTouchDown_runningActionsCount = 0;
var obj51866_onTouchDown_loopCount = 0;
var obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_loopCount = 0;
var obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_4_loopCount = 0;
var obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_3_loopCount = 0;
var obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_2_loopCount = 0;
var obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj51866_droppedInsideTargetActions_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_loopCount = 0;
var obj51799_onDrag_activeActionGroupIndex = -1;
var obj51799_onDrag_runningActionsCount = 0;
var obj51799_onDrag_loopCount = 0;
var obj51799_onTouchDown_activeActionGroupIndex = -1;
var obj51799_onTouchDown_runningActionsCount = 0;
var obj51799_onTouchDown_loopCount = 0;
var obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_loopCount = 0;
var obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_4_loopCount = 0;
var obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_3_loopCount = 0;
var obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_2_loopCount = 0;
var obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj51799_droppedInsideTargetActions_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_loopCount = 0;
var obj51665_onDrag_activeActionGroupIndex = -1;
var obj51665_onDrag_runningActionsCount = 0;
var obj51665_onDrag_loopCount = 0;
var obj51665_onTouchDown_activeActionGroupIndex = -1;
var obj51665_onTouchDown_runningActionsCount = 0;
var obj51665_onTouchDown_loopCount = 0;
var obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_loopCount = 0;
var obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_4_loopCount = 0;
var obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_3_loopCount = 0;
var obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_2_loopCount = 0;
var obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj51665_droppedInsideTargetActions_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_loopCount = 0;
var obj67982_onTap_activeActionGroupIndex = -1;
var obj67982_onTap_runningActionsCount = 0;
var obj67982_onTap_loopCount = 0;
var obj67974_onTap_activeActionGroupIndex = -1;
var obj67974_onTap_runningActionsCount = 0;
var obj67974_onTap_loopCount = 0;
var obj89101_onTap_activeActionGroupIndex = -1;
var obj89101_onTap_runningActionsCount = 0;
var obj89101_onTap_loopCount = 0;
var obj89096_onTap_activeActionGroupIndex = -1;
var obj89096_onTap_runningActionsCount = 0;
var obj89096_onTap_loopCount = 0;
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
		
obj52065_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52065_onTap_activeActionGroupIndex = -1;
		$("#obj52065").trigger("obj52065_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52065) {
				console.warn("de-queueing event obj52065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52065_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52067();
function goToPage_52067() {
	window.obj52065_onTap_runningActionsCount = obj52065_onTap_runningActionsCount + 1;
	$("#anchor1086")[0].click();
	window.obj52065_onTap_runningActionsCount = window.obj52065_onTap_runningActionsCount - 1;
if (window.obj52065_onTap_runningActionsCount < 0) {
	window.obj52065_onTap_runningActionsCount = 0;
} else if (window.obj52065_onTap_runningActionsCount == 0) {
	obj52065_onTap_actionGroup1();
}
}





















};
obj52065_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52065_onTap_activeActionGroupIndex = -1;
		$("#obj52065").trigger("obj52065_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52065) {
				console.warn("de-queueing event obj52065." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52065").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52065_onTap_activeActionGroupIndex = 1;
	





















};
obj52062_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52062_onTap_activeActionGroupIndex = -1;
		$("#obj52062").trigger("obj52062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52062) {
				console.warn("de-queueing event obj52062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52062_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52064();
function goToPage_52064() {
	window.obj52062_onTap_runningActionsCount = obj52062_onTap_runningActionsCount + 1;
	$("#anchor1087")[0].click();
	window.obj52062_onTap_runningActionsCount = window.obj52062_onTap_runningActionsCount - 1;
if (window.obj52062_onTap_runningActionsCount < 0) {
	window.obj52062_onTap_runningActionsCount = 0;
} else if (window.obj52062_onTap_runningActionsCount == 0) {
	obj52062_onTap_actionGroup1();
}
}





















};
obj52062_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52062_onTap_activeActionGroupIndex = -1;
		$("#obj52062").trigger("obj52062_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52062) {
				console.warn("de-queueing event obj52062." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52062").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52062_onTap_activeActionGroupIndex = 1;
	





















};
obj52058_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj52058_onTap_activeActionGroupIndex = -1;
		$("#obj52058").trigger("obj52058_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52058) {
				console.warn("de-queueing event obj52058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52058_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_52060();
function goToPage_52060() {
	window.obj52058_onTap_runningActionsCount = obj52058_onTap_runningActionsCount + 1;
	$("#anchor1088")[0].click();
	window.obj52058_onTap_runningActionsCount = window.obj52058_onTap_runningActionsCount - 1;
if (window.obj52058_onTap_runningActionsCount < 0) {
	window.obj52058_onTap_runningActionsCount = 0;
} else if (window.obj52058_onTap_runningActionsCount == 0) {
	obj52058_onTap_actionGroup1();
}
}





















};
obj52058_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj52058_onTap_activeActionGroupIndex = -1;
		$("#obj52058").trigger("obj52058_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 52058) {
				console.warn("de-queueing event obj52058." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj52058").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj52058_onTap_activeActionGroupIndex = 1;
	





















};
obj51933_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj51933");
//	action: dragDrop
//	target: obj51933 
dragDrop_51936();
function dragDrop_51936() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj51933_onTouchDown_runningActionsCount = obj51933_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj51933');
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
	  	containerNode = $('#obj52050');
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
    	window.obj51933_onTouchDown_runningActionsCount = window.obj51933_onTouchDown_runningActionsCount - 1;
if (window.obj51933_onTouchDown_runningActionsCount < 0) {
	window.obj51933_onTouchDown_runningActionsCount = 0;
} else if (window.obj51933_onTouchDown_runningActionsCount == 0) {
	obj51933_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52016","#obj52034","#obj52028","#obj52040");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_51936 = false;
    	var dropped_id_51936;
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
					dropped_51936 = true;
					dropped_id_51936 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_51936) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj51933").trigger('SCActionDragDrop51936_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj51933_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51933_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj51933 
move_92777();
function move_92777() {
	window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount = obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj51933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount = window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj51933_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51973();
function runjs_51973() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51974();
function runjs_51974() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#C00000"); $("#obj52040").css("border-width", "2px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52038 
hide_51975();
function hide_51975() {
	var selector = "#obj52038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51975(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51933_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51976();
function runjs_51976() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51933").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51977();
function switchText_51977() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51933 
move_51978();
function move_51978() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj51933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj51933_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51979();
function runjs_51979() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51980();
function runjs_51980() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#000000"); $("#obj52040").css("border-width", "1px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52038
(function(){
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj52038";
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
					window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51933_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51982();
function runjs_51982() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51933").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51983();
function runjs_51983() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51933").css("border-color", "rgba(0,0,0,0)"); $("#obj51933").css("border-width", "0px"); $("#obj51933").css("border-style", "solid"); $("#obj51933").css("border-radius", "10px"); $("#obj51933").css("-webkit-border-radius", "10px"); $("#obj51933").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51984();
function playAudio_51984() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj51933_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51985();
function switchText_51985() {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = obj51933_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_4_runningActionsCount = window.obj51933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj51933_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51959();
function runjs_51959() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51960();
function runjs_51960() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#C00000"); $("#obj52028").css("border-width", "2px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52026 
hide_51961();
function hide_51961() {
	var selector = "#obj52026";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51961(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51933_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51962();
function runjs_51962() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51933").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51963();
function switchText_51963() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51933 
move_51964();
function move_51964() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj51933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj51933_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51965();
function runjs_51965() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51966();
function runjs_51966() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#000000"); $("#obj52028").css("border-width", "1px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52026
(function(){
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52026";
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
					window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51933_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51968();
function runjs_51968() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51933").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51969();
function runjs_51969() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51933").css("border-color", "rgba(0,0,0,0)"); $("#obj51933").css("border-width", "0px"); $("#obj51933").css("border-style", "solid"); $("#obj51933").css("border-radius", "10px"); $("#obj51933").css("-webkit-border-radius", "10px"); $("#obj51933").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51970();
function playAudio_51970() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj51933_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51971();
function switchText_51971() {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = obj51933_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_3_runningActionsCount = window.obj51933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj51933_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51945();
function runjs_51945() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51946();
function runjs_51946() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#C00000"); $("#obj52034").css("border-width", "2px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52032 
hide_51947();
function hide_51947() {
	var selector = "#obj52032";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51947(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51933_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51948();
function runjs_51948() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51933").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51949();
function switchText_51949() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51933 
move_51950();
function move_51950() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj51933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 73;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj51933_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51951();
function runjs_51951() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51952();
function runjs_51952() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#000000"); $("#obj52034").css("border-width", "1px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52032
(function(){
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52032";
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
					window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51933_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51954();
function runjs_51954() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51933").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51955();
function runjs_51955() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51933").css("border-color", "rgba(0,0,0,0)"); $("#obj51933").css("border-width", "0px"); $("#obj51933").css("border-style", "solid"); $("#obj51933").css("border-radius", "10px"); $("#obj51933").css("-webkit-border-radius", "10px"); $("#obj51933").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51956();
function playAudio_51956() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj51933_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51957();
function switchText_51957() {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = obj51933_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_2_runningActionsCount = window.obj51933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj51933_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51938();
function runjs_51938() {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = obj51933_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51939();
function runjs_51939() {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = obj51933_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#058E3F"); $("#obj52016").css("border-width", "2px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52014 
hide_51940();
function hide_51940() {
	var selector = "#obj52014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51933_droppedInsideTargetActions_runningActionsCount = obj51933_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51940(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51933_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51941();
function runjs_51941() {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = obj51933_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj51933").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj51933_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51942();
function switchText_51942() {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = obj51933_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj51933_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52010 
playAudio_51943();
function playAudio_51943() {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = obj51933_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52010")[0];
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
		    window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51933_droppedInsideTargetActions_runningActionsCount = window.obj51933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51933_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj51933_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51933").trigger("obj51933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51933) {
				console.warn("de-queueing event obj51933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51933_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj51866_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj51866");
//	action: dragDrop
//	target: obj51866 
dragDrop_51869();
function dragDrop_51869() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj51866_onTouchDown_runningActionsCount = obj51866_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj51866');
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
	  	containerNode = $('#obj52050');
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
    	window.obj51866_onTouchDown_runningActionsCount = window.obj51866_onTouchDown_runningActionsCount - 1;
if (window.obj51866_onTouchDown_runningActionsCount < 0) {
	window.obj51866_onTouchDown_runningActionsCount = 0;
} else if (window.obj51866_onTouchDown_runningActionsCount == 0) {
	obj51866_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52028","#obj52034","#obj52040","#obj52016");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_51869 = false;
    	var dropped_id_51869;
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
					dropped_51869 = true;
					dropped_id_51869 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_51869) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj51866").trigger('SCActionDragDrop51869_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj51866_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51866_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj51866 
move_92779();
function move_92779() {
	window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount = obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj51866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount = window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj51866_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51906();
function runjs_51906() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51907();
function runjs_51907() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#C00000"); $("#obj52016").css("border-width", "2px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52014 
hide_51908();
function hide_51908() {
	var selector = "#obj52014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51908(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51866_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51909();
function runjs_51909() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51866").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51910();
function switchText_51910() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51866 
move_51911();
function move_51911() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj51866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj51866_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51912();
function runjs_51912() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51913();
function runjs_51913() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#000000"); $("#obj52016").css("border-width", "1px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52014
(function(){
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj52014";
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
					window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51866_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51915();
function runjs_51915() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51866").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51916();
function runjs_51916() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51866").css("border-color", "rgba(0,0,0,0)"); $("#obj51866").css("border-width", "0px"); $("#obj51866").css("border-style", "solid"); $("#obj51866").css("border-radius", "10px"); $("#obj51866").css("-webkit-border-radius", "10px"); $("#obj51866").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51917();
function playAudio_51917() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj51866_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51918();
function switchText_51918() {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = obj51866_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_4_runningActionsCount = window.obj51866_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj51866_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51892();
function runjs_51892() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51893();
function runjs_51893() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#C00000"); $("#obj52040").css("border-width", "2px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52038 
hide_51894();
function hide_51894() {
	var selector = "#obj52038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51894(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51866_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51895();
function runjs_51895() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51866").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51896();
function switchText_51896() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51866 
move_51897();
function move_51897() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj51866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj51866_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51898();
function runjs_51898() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51899();
function runjs_51899() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#000000"); $("#obj52040").css("border-width", "1px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52038
(function(){
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52038";
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
					window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51866_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51901();
function runjs_51901() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51866").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51902();
function runjs_51902() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51866").css("border-color", "rgba(0,0,0,0)"); $("#obj51866").css("border-width", "0px"); $("#obj51866").css("border-style", "solid"); $("#obj51866").css("border-radius", "10px"); $("#obj51866").css("-webkit-border-radius", "10px"); $("#obj51866").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51903();
function playAudio_51903() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj51866_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51904();
function switchText_51904() {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = obj51866_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_3_runningActionsCount = window.obj51866_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj51866_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51878();
function runjs_51878() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51879();
function runjs_51879() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#C00000"); $("#obj52034").css("border-width", "2px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52032 
hide_51880();
function hide_51880() {
	var selector = "#obj52032";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51880(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51866_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51881();
function runjs_51881() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51866").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51882();
function switchText_51882() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51866 
move_51883();
function move_51883() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj51866");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 194;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj51866_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51884();
function runjs_51884() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51885();
function runjs_51885() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#000000"); $("#obj52034").css("border-width", "1px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52032
(function(){
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52032";
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
					window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51866_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51887();
function runjs_51887() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51866").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51888();
function runjs_51888() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51866").css("border-color", "rgba(0,0,0,0)"); $("#obj51866").css("border-width", "0px"); $("#obj51866").css("border-style", "solid"); $("#obj51866").css("border-radius", "10px"); $("#obj51866").css("-webkit-border-radius", "10px"); $("#obj51866").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51889();
function playAudio_51889() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj51866_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51890();
function switchText_51890() {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = obj51866_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_2_runningActionsCount = window.obj51866_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj51866_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51871();
function runjs_51871() {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = obj51866_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51872();
function runjs_51872() {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = obj51866_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#058E3F"); $("#obj52028").css("border-width", "2px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52026 
hide_51873();
function hide_51873() {
	var selector = "#obj52026";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51866_droppedInsideTargetActions_runningActionsCount = obj51866_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51873(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51866_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51874();
function runjs_51874() {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = obj51866_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj51866").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj51866_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51875();
function switchText_51875() {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = obj51866_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj51866_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52010 
playAudio_51876();
function playAudio_51876() {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = obj51866_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52010")[0];
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
		    window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51866_droppedInsideTargetActions_runningActionsCount = window.obj51866_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51866_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51866_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51866_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51866_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj51866_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51866").trigger("obj51866_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51866) {
				console.warn("de-queueing event obj51866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51866_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj51799_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj51799");
//	action: dragDrop
//	target: obj51799 
dragDrop_51802();
function dragDrop_51802() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj51799_onTouchDown_runningActionsCount = obj51799_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj51799');
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
	  	containerNode = $('#obj52050');
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
    	window.obj51799_onTouchDown_runningActionsCount = window.obj51799_onTouchDown_runningActionsCount - 1;
if (window.obj51799_onTouchDown_runningActionsCount < 0) {
	window.obj51799_onTouchDown_runningActionsCount = 0;
} else if (window.obj51799_onTouchDown_runningActionsCount == 0) {
	obj51799_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52040","#obj52034","#obj52028","#obj52016");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_51802 = false;
    	var dropped_id_51802;
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
					dropped_51802 = true;
					dropped_id_51802 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_51802) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj51799").trigger('SCActionDragDrop51802_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj51799_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51799_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj51799 
move_92781();
function move_92781() {
	window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount = obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj51799");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 314;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount = window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj51799_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51839();
function runjs_51839() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51840();
function runjs_51840() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#C00000"); $("#obj52016").css("border-width", "2px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52014 
hide_51841();
function hide_51841() {
	var selector = "#obj52014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51841(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51799_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51842();
function runjs_51842() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51843();
function switchText_51843() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51799 
move_51844();
function move_51844() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj51799");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 314;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj51799_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51845();
function runjs_51845() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51846();
function runjs_51846() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#000000"); $("#obj52016").css("border-width", "1px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52014
(function(){
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj52014";
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
					window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51799_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51848();
function runjs_51848() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51799").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51849();
function runjs_51849() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51799").css("border-color", "rgba(0,0,0,0)"); $("#obj51799").css("border-width", "0px"); $("#obj51799").css("border-style", "solid"); $("#obj51799").css("border-radius", "10px"); $("#obj51799").css("-webkit-border-radius", "10px"); $("#obj51799").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51850();
function playAudio_51850() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj51799_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51851();
function switchText_51851() {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = obj51799_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_4_runningActionsCount = window.obj51799_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj51799_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51825();
function runjs_51825() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51826();
function runjs_51826() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#C00000"); $("#obj52028").css("border-width", "2px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52026 
hide_51827();
function hide_51827() {
	var selector = "#obj52026";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51827(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51799_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51828();
function runjs_51828() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51829();
function switchText_51829() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51799 
move_51830();
function move_51830() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj51799");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 314;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj51799_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51831();
function runjs_51831() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51832();
function runjs_51832() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#000000"); $("#obj52028").css("border-width", "1px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52026
(function(){
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52026";
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
					window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51799_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51834();
function runjs_51834() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51799").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51835();
function runjs_51835() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51799").css("border-color", "rgba(0,0,0,0)"); $("#obj51799").css("border-width", "0px"); $("#obj51799").css("border-style", "solid"); $("#obj51799").css("border-radius", "10px"); $("#obj51799").css("-webkit-border-radius", "10px"); $("#obj51799").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51836();
function playAudio_51836() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj51799_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51837();
function switchText_51837() {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = obj51799_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_3_runningActionsCount = window.obj51799_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj51799_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51811();
function runjs_51811() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51812();
function runjs_51812() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#C00000"); $("#obj52034").css("border-width", "2px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52032 
hide_51813();
function hide_51813() {
	var selector = "#obj52032";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51813(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51799_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51814();
function runjs_51814() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51815();
function switchText_51815() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51799 
move_51816();
function move_51816() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj51799");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 314;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj51799_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51817();
function runjs_51817() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51818();
function runjs_51818() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#000000"); $("#obj52034").css("border-width", "1px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52032
(function(){
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52032";
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
					window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51799_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51820();
function runjs_51820() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51799").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51821();
function runjs_51821() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51799").css("border-color", "rgba(0,0,0,0)"); $("#obj51799").css("border-width", "0px"); $("#obj51799").css("border-style", "solid"); $("#obj51799").css("border-radius", "10px"); $("#obj51799").css("-webkit-border-radius", "10px"); $("#obj51799").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51822();
function playAudio_51822() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj51799_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51823();
function switchText_51823() {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = obj51799_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_2_runningActionsCount = window.obj51799_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj51799_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51804();
function runjs_51804() {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = obj51799_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51805();
function runjs_51805() {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = obj51799_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#058E3F"); $("#obj52040").css("border-width", "2px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52038 
hide_51806();
function hide_51806() {
	var selector = "#obj52038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51799_droppedInsideTargetActions_runningActionsCount = obj51799_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51806(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51799_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51807();
function runjs_51807() {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = obj51799_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj51799").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj51799_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51808();
function switchText_51808() {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = obj51799_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj51799_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52010 
playAudio_51809();
function playAudio_51809() {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = obj51799_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52010")[0];
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
		    window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51799_droppedInsideTargetActions_runningActionsCount = window.obj51799_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51799_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51799_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51799_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51799_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj51799_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51799").trigger("obj51799_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51799) {
				console.warn("de-queueing event obj51799." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51799").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51799_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj51665_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj51665");
//	action: dragDrop
//	target: obj51665 
dragDrop_51668();
function dragDrop_51668() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj51665_onTouchDown_runningActionsCount = obj51665_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj51665');
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
	  	containerNode = $('#obj52050');
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
    	window.obj51665_onTouchDown_runningActionsCount = window.obj51665_onTouchDown_runningActionsCount - 1;
if (window.obj51665_onTouchDown_runningActionsCount < 0) {
	window.obj51665_onTouchDown_runningActionsCount = 0;
} else if (window.obj51665_onTouchDown_runningActionsCount == 0) {
	obj51665_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj52034","#obj52040","#obj52028","#obj52016");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_51668 = false;
    	var dropped_id_51668;
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
					dropped_51668 = true;
					dropped_id_51668 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_51668) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj51665").trigger('SCActionDragDrop51668_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj51665_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51665_onTouchDown_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj51665 
move_92783();
function move_92783() {
	window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount = obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj51665");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 429;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount = window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj51665_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51705();
function runjs_51705() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51706();
function runjs_51706() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#C00000"); $("#obj52016").css("border-width", "2px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52014 
hide_51707();
function hide_51707() {
	var selector = "#obj52014";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51707(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51665_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51708();
function runjs_51708() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51665").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51709();
function switchText_51709() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51665 
move_51710();
function move_51710() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj51665");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 429;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj51665_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51711();
function runjs_51711() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51712();
function runjs_51712() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj52016").css("border-color", "#000000"); $("#obj52016").css("border-width", "1px"); $("#obj52016").css("border-style", "solid"); $("#obj52016").css("border-radius", "10px"); $("#obj52016").css("-webkit-border-radius", "10px"); $("#obj52016").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52014
(function(){
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj52014";
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
					window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51665_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51714();
function runjs_51714() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51665").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51715();
function runjs_51715() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj51665").css("border-color", "rgba(0,0,0,0)"); $("#obj51665").css("border-width", "0px"); $("#obj51665").css("border-style", "solid"); $("#obj51665").css("border-radius", "10px"); $("#obj51665").css("-webkit-border-radius", "10px"); $("#obj51665").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51716();
function playAudio_51716() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj51665_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51717();
function switchText_51717() {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = obj51665_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_4_runningActionsCount = window.obj51665_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj51665_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51691();
function runjs_51691() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51692();
function runjs_51692() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#C00000"); $("#obj52028").css("border-width", "2px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52026 
hide_51693();
function hide_51693() {
	var selector = "#obj52026";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51693(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51665_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51694();
function runjs_51694() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51665").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51695();
function switchText_51695() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51665 
move_51696();
function move_51696() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj51665");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 429;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj51665_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51697();
function runjs_51697() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51698();
function runjs_51698() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj52028").css("border-color", "#000000"); $("#obj52028").css("border-width", "1px"); $("#obj52028").css("border-style", "solid"); $("#obj52028").css("border-radius", "10px"); $("#obj52028").css("-webkit-border-radius", "10px"); $("#obj52028").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52026
(function(){
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj52026";
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
					window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51665_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51700();
function runjs_51700() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51665").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51701();
function runjs_51701() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj51665").css("border-color", "rgba(0,0,0,0)"); $("#obj51665").css("border-width", "0px"); $("#obj51665").css("border-style", "solid"); $("#obj51665").css("border-radius", "10px"); $("#obj51665").css("-webkit-border-radius", "10px"); $("#obj51665").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51702();
function playAudio_51702() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj51665_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51703();
function switchText_51703() {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = obj51665_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_3_runningActionsCount = window.obj51665_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj51665_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51677();
function runjs_51677() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51678();
function runjs_51678() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#C00000"); $("#obj52040").css("border-width", "2px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52038 
hide_51679();
function hide_51679() {
	var selector = "#obj52038";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51679(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51665_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51680();
function runjs_51680() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51665").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51681();
function switchText_51681() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj51665 
move_51682();
function move_51682() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj51665");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 429;
	var moveY = 653;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj51665_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_51683();
function runjs_51683() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52040").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_51684();
function runjs_51684() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj52040").css("border-color", "#000000"); $("#obj52040").css("border-width", "1px"); $("#obj52040").css("border-style", "solid"); $("#obj52040").css("border-radius", "10px"); $("#obj52040").css("-webkit-border-radius", "10px"); $("#obj52040").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj52038
(function(){
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj52038";
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
					window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj51665_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_51686();
function runjs_51686() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51665").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_51687();
function runjs_51687() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj51665").css("border-color", "rgba(0,0,0,0)"); $("#obj51665").css("border-width", "0px"); $("#obj51665").css("border-style", "solid"); $("#obj51665").css("border-radius", "10px"); $("#obj51665").css("-webkit-border-radius", "10px"); $("#obj51665").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj52008 
playAudio_51688();
function playAudio_51688() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj52008")[0];
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
		    window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj51665_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_51689();
function switchText_51689() {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = obj51665_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_2_runningActionsCount = window.obj51665_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj51665_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_51670();
function runjs_51670() {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = obj51665_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52034").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_51671();
function runjs_51671() {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = obj51665_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj52034").css("border-color", "#058E3F"); $("#obj52034").css("border-width", "2px"); $("#obj52034").css("border-style", "solid"); $("#obj52034").css("border-radius", "10px"); $("#obj52034").css("-webkit-border-radius", "10px"); $("#obj52034").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj52032 
hide_51672();
function hide_51672() {
	var selector = "#obj52032";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj51665_droppedInsideTargetActions_runningActionsCount = obj51665_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_51672(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj51665_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_51673();
function runjs_51673() {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = obj51665_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj51665").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj51665_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_51674();
function switchText_51674() {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = obj51665_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj52024_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj52024_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj52024").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj52024_content");
			setTimeout(function () {
				window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj52024 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj51665_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj52010 
playAudio_51675();
function playAudio_51675() {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = obj51665_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj52010")[0];
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
		    window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj51665_droppedInsideTargetActions_runningActionsCount = window.obj51665_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj51665_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj51665_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj51665_droppedInsideTargetActions_runningActionsCount == 0) {
	obj51665_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj51665_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj51665").trigger("obj51665_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 51665) {
				console.warn("de-queueing event obj51665." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj51665").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj51665_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj67982_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67982_onTap_activeActionGroupIndex = -1;
		$("#obj67982").trigger("obj67982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67982) {
				console.warn("de-queueing event obj67982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67982_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67982 
hide_67985();
function hide_67985() {
	var selector = "#obj67982";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67982_onTap_runningActionsCount = obj67982_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67982_onTap_runningActionsCount = window.obj67982_onTap_runningActionsCount - 1;
if (window.obj67982_onTap_runningActionsCount < 0) {
	window.obj67982_onTap_runningActionsCount = 0;
} else if (window.obj67982_onTap_runningActionsCount == 0) {
	obj67982_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67985(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67982_onTap_runningActionsCount = window.obj67982_onTap_runningActionsCount - 1;
if (window.obj67982_onTap_runningActionsCount < 0) {
	window.obj67982_onTap_runningActionsCount = 0;
} else if (window.obj67982_onTap_runningActionsCount == 0) {
	obj67982_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67988 
stopMovie_67984();
function stopMovie_67984() {
	window.obj67982_onTap_runningActionsCount = obj67982_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67988")[0];
	myVideo.pause();
	window.obj67982_onTap_runningActionsCount = window.obj67982_onTap_runningActionsCount - 1;
if (window.obj67982_onTap_runningActionsCount < 0) {
	window.obj67982_onTap_runningActionsCount = 0;
} else if (window.obj67982_onTap_runningActionsCount == 0) {
	obj67982_onTap_actionGroup1();
}
}
















};
obj67982_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67982_onTap_activeActionGroupIndex = -1;
		$("#obj67982").trigger("obj67982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67982) {
				console.warn("de-queueing event obj67982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67982_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67974
(function(){
	window.obj67982_onTap_runningActionsCount = obj67982_onTap_runningActionsCount + 1;

	var selector = "#obj67974";
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
					window.obj67982_onTap_runningActionsCount = window.obj67982_onTap_runningActionsCount - 1;
if (window.obj67982_onTap_runningActionsCount < 0) {
	window.obj67982_onTap_runningActionsCount = 0;
} else if (window.obj67982_onTap_runningActionsCount == 0) {
	obj67982_onTap_actionGroup2();
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
				window.obj67982_onTap_runningActionsCount = window.obj67982_onTap_runningActionsCount - 1;
if (window.obj67982_onTap_runningActionsCount < 0) {
	window.obj67982_onTap_runningActionsCount = 0;
} else if (window.obj67982_onTap_runningActionsCount == 0) {
	obj67982_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67982_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67982_onTap_activeActionGroupIndex = -1;
		$("#obj67982").trigger("obj67982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67982) {
				console.warn("de-queueing event obj67982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67982_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67988 
move_67987();
function move_67987() {
	window.obj67982_onTap_runningActionsCount = obj67982_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67988");
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
			window.obj67982_onTap_runningActionsCount = window.obj67982_onTap_runningActionsCount - 1;
if (window.obj67982_onTap_runningActionsCount < 0) {
	window.obj67982_onTap_runningActionsCount = 0;
} else if (window.obj67982_onTap_runningActionsCount == 0) {
	obj67982_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67982_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67982_onTap_activeActionGroupIndex = -1;
		$("#obj67982").trigger("obj67982_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67982) {
				console.warn("de-queueing event obj67982." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67982").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67982_onTap_activeActionGroupIndex = 3;
	





















};
obj67974_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67974_onTap_activeActionGroupIndex = -1;
		$("#obj67974").trigger("obj67974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67974) {
				console.warn("de-queueing event obj67974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67974_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67974 
hide_67977();
function hide_67977() {
	var selector = "#obj67974";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67974_onTap_runningActionsCount = obj67974_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67974_onTap_runningActionsCount = window.obj67974_onTap_runningActionsCount - 1;
if (window.obj67974_onTap_runningActionsCount < 0) {
	window.obj67974_onTap_runningActionsCount = 0;
} else if (window.obj67974_onTap_runningActionsCount == 0) {
	obj67974_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67977(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67974_onTap_runningActionsCount = window.obj67974_onTap_runningActionsCount - 1;
if (window.obj67974_onTap_runningActionsCount < 0) {
	window.obj67974_onTap_runningActionsCount = 0;
} else if (window.obj67974_onTap_runningActionsCount == 0) {
	obj67974_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67988 
playPauseMovie_67976();
function playPauseMovie_67976() {
	window.obj67974_onTap_runningActionsCount = obj67974_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67988")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67974_onTap_runningActionsCount = window.obj67974_onTap_runningActionsCount - 1;
if (window.obj67974_onTap_runningActionsCount < 0) {
	window.obj67974_onTap_runningActionsCount = 0;
} else if (window.obj67974_onTap_runningActionsCount == 0) {
	obj67974_onTap_actionGroup1();
}
}

















};
obj67974_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67974_onTap_activeActionGroupIndex = -1;
		$("#obj67974").trigger("obj67974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67974) {
				console.warn("de-queueing event obj67974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67974_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67982
(function(){
	window.obj67974_onTap_runningActionsCount = obj67974_onTap_runningActionsCount + 1;

	var selector = "#obj67982";
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
					window.obj67974_onTap_runningActionsCount = window.obj67974_onTap_runningActionsCount - 1;
if (window.obj67974_onTap_runningActionsCount < 0) {
	window.obj67974_onTap_runningActionsCount = 0;
} else if (window.obj67974_onTap_runningActionsCount == 0) {
	obj67974_onTap_actionGroup2();
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
				window.obj67974_onTap_runningActionsCount = window.obj67974_onTap_runningActionsCount - 1;
if (window.obj67974_onTap_runningActionsCount < 0) {
	window.obj67974_onTap_runningActionsCount = 0;
} else if (window.obj67974_onTap_runningActionsCount == 0) {
	obj67974_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67974_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67974_onTap_activeActionGroupIndex = -1;
		$("#obj67974").trigger("obj67974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67974) {
				console.warn("de-queueing event obj67974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67974_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67988 
move_67979();
function move_67979() {
	window.obj67974_onTap_runningActionsCount = obj67974_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67988");
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
			window.obj67974_onTap_runningActionsCount = window.obj67974_onTap_runningActionsCount - 1;
if (window.obj67974_onTap_runningActionsCount < 0) {
	window.obj67974_onTap_runningActionsCount = 0;
} else if (window.obj67974_onTap_runningActionsCount == 0) {
	obj67974_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67974_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67974_onTap_activeActionGroupIndex = -1;
		$("#obj67974").trigger("obj67974_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67974) {
				console.warn("de-queueing event obj67974." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67974").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67974_onTap_activeActionGroupIndex = 3;
	





















};
obj89101_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89101_onTap_activeActionGroupIndex = -1;
		$("#obj89101").trigger("obj89101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89101) {
				console.warn("de-queueing event obj89101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89101_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj89106 
stopAudio_89103();
function stopAudio_89103() {
	window.obj89101_onTap_runningActionsCount = obj89101_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89106")[0];
	myAudio.pause();
	window.obj89101_onTap_runningActionsCount = window.obj89101_onTap_runningActionsCount - 1;
if (window.obj89101_onTap_runningActionsCount < 0) {
	window.obj89101_onTap_runningActionsCount = 0;
} else if (window.obj89101_onTap_runningActionsCount == 0) {
	obj89101_onTap_actionGroup1();
}
}








};
obj89101_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89101_onTap_activeActionGroupIndex = -1;
		$("#obj89101").trigger("obj89101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89101) {
				console.warn("de-queueing event obj89101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89101_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj89101 
hide_89104();
function hide_89104() {
	var selector = "#obj89101";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89101_onTap_runningActionsCount = obj89101_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89101_onTap_runningActionsCount = window.obj89101_onTap_runningActionsCount - 1;
if (window.obj89101_onTap_runningActionsCount < 0) {
	window.obj89101_onTap_runningActionsCount = 0;
} else if (window.obj89101_onTap_runningActionsCount == 0) {
	obj89101_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89104(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89101_onTap_runningActionsCount = window.obj89101_onTap_runningActionsCount - 1;
if (window.obj89101_onTap_runningActionsCount < 0) {
	window.obj89101_onTap_runningActionsCount = 0;
} else if (window.obj89101_onTap_runningActionsCount == 0) {
	obj89101_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89101_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89101_onTap_activeActionGroupIndex = -1;
		$("#obj89101").trigger("obj89101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89101) {
				console.warn("de-queueing event obj89101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89101_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj89096
(function(){
	window.obj89101_onTap_runningActionsCount = obj89101_onTap_runningActionsCount + 1;

	var selector = "#obj89096";
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
					window.obj89101_onTap_runningActionsCount = window.obj89101_onTap_runningActionsCount - 1;
if (window.obj89101_onTap_runningActionsCount < 0) {
	window.obj89101_onTap_runningActionsCount = 0;
} else if (window.obj89101_onTap_runningActionsCount == 0) {
	obj89101_onTap_actionGroup3();
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
				window.obj89101_onTap_runningActionsCount = window.obj89101_onTap_runningActionsCount - 1;
if (window.obj89101_onTap_runningActionsCount < 0) {
	window.obj89101_onTap_runningActionsCount = 0;
} else if (window.obj89101_onTap_runningActionsCount == 0) {
	obj89101_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89101_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89101_onTap_activeActionGroupIndex = -1;
		$("#obj89101").trigger("obj89101_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89101) {
				console.warn("de-queueing event obj89101." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89101").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89101_onTap_activeActionGroupIndex = 3;
	





















};
obj89096_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89096_onTap_activeActionGroupIndex = -1;
		$("#obj89096").trigger("obj89096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89096) {
				console.warn("de-queueing event obj89096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89096_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj89096 
hide_89098();
function hide_89098() {
	var selector = "#obj89096";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj89096_onTap_runningActionsCount = obj89096_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj89096_onTap_runningActionsCount = window.obj89096_onTap_runningActionsCount - 1;
if (window.obj89096_onTap_runningActionsCount < 0) {
	window.obj89096_onTap_runningActionsCount = 0;
} else if (window.obj89096_onTap_runningActionsCount == 0) {
	obj89096_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_89098(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj89096_onTap_runningActionsCount = window.obj89096_onTap_runningActionsCount - 1;
if (window.obj89096_onTap_runningActionsCount < 0) {
	window.obj89096_onTap_runningActionsCount = 0;
} else if (window.obj89096_onTap_runningActionsCount == 0) {
	obj89096_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj89096_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89096_onTap_activeActionGroupIndex = -1;
		$("#obj89096").trigger("obj89096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89096) {
				console.warn("de-queueing event obj89096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89096_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj89101
(function(){
	window.obj89096_onTap_runningActionsCount = obj89096_onTap_runningActionsCount + 1;

	var selector = "#obj89101";
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
					window.obj89096_onTap_runningActionsCount = window.obj89096_onTap_runningActionsCount - 1;
if (window.obj89096_onTap_runningActionsCount < 0) {
	window.obj89096_onTap_runningActionsCount = 0;
} else if (window.obj89096_onTap_runningActionsCount == 0) {
	obj89096_onTap_actionGroup2();
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
				window.obj89096_onTap_runningActionsCount = window.obj89096_onTap_runningActionsCount - 1;
if (window.obj89096_onTap_runningActionsCount < 0) {
	window.obj89096_onTap_runningActionsCount = 0;
} else if (window.obj89096_onTap_runningActionsCount == 0) {
	obj89096_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj89096_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj89096_onTap_activeActionGroupIndex = -1;
		$("#obj89096").trigger("obj89096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89096) {
				console.warn("de-queueing event obj89096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89096_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj89106 
playAudio_89100();
function playAudio_89100() {
	window.obj89096_onTap_runningActionsCount = obj89096_onTap_runningActionsCount + 1;
	var myAudio = $("#obj89106")[0];
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
		    window.obj89096_onTap_runningActionsCount = window.obj89096_onTap_runningActionsCount - 1;
if (window.obj89096_onTap_runningActionsCount < 0) {
	window.obj89096_onTap_runningActionsCount = 0;
} else if (window.obj89096_onTap_runningActionsCount == 0) {
	obj89096_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj89096_onTap_runningActionsCount = window.obj89096_onTap_runningActionsCount - 1;
if (window.obj89096_onTap_runningActionsCount < 0) {
	window.obj89096_onTap_runningActionsCount = 0;
} else if (window.obj89096_onTap_runningActionsCount == 0) {
	obj89096_onTap_actionGroup3();
}
	}
}









};
obj89096_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj89096_onTap_activeActionGroupIndex = -1;
		$("#obj89096").trigger("obj89096_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 89096) {
				console.warn("de-queueing event obj89096." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj89096").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj89096_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj52065: Event Touch Down
 *
 */
$("#obj52065").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52065_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52065_onTap is still running");
	return;
}
var obj52065_onTap_runningActionsCount = 0;
var obj52065_onTap_loopCount = 0;
obj52065_onTap_actionGroup0();
});










/*
 *
 *   obj52062: Event Touch Down
 *
 */
$("#obj52062").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52062_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52062_onTap is still running");
	return;
}
var obj52062_onTap_runningActionsCount = 0;
var obj52062_onTap_loopCount = 0;
obj52062_onTap_actionGroup0();
});










/*
 *
 *   obj52058: Event Touch Down
 *
 */
$("#obj52058").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj52058_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj52058_onTap is still running");
	return;
}
var obj52058_onTap_runningActionsCount = 0;
var obj52058_onTap_loopCount = 0;
obj52058_onTap_actionGroup0();
});





































































































































































































































































/*
 *
 *   obj51933: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj51933");
	var winTarget = document.getElementById("obj51933");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj51933").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj51933_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj51933_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj51933_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51933_onTouchDown is still running");
	return;
}
var obj51933_onTouchDown_runningActionsCount = 0;
var obj51933_onTouchDown_loopCount = 0;
obj51933_onTouchDown_actionGroup0();
});



/*
 *
 *   obj51933: Event SCActionDragDrop51936_droppedOutsideTargetActions
 *
 */
$("#obj51933").bind("SCActionDragDrop51936_droppedOutsideTargetActions", function(event) {
	if (window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51933_SCActionDragDrop51936_droppedOutsideTargetActions is still running");
	return;
}
var obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_loopCount = 0;
obj51933_SCActionDragDrop51936_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj51933: Event droppedInsideTargetActions_4
 *
 */
$("#obj51933").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj51933_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51933_droppedInsideTargetActions_4 is still running");
	return;
}
var obj51933_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_4_loopCount = 0;
obj51933_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj51933: Event droppedInsideTargetActions_3
 *
 */
$("#obj51933").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj51933_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51933_droppedInsideTargetActions_3 is still running");
	return;
}
var obj51933_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_3_loopCount = 0;
obj51933_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj51933: Event droppedInsideTargetActions_2
 *
 */
$("#obj51933").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj51933_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51933_droppedInsideTargetActions_2 is still running");
	return;
}
var obj51933_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_2_loopCount = 0;
obj51933_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj51933: Event droppedInsideTargetActions
 *
 */
$("#obj51933").bind("droppedInsideTargetActions", function(event) {
	if (window.obj51933_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51933_droppedInsideTargetActions is still running");
	return;
}
var obj51933_droppedInsideTargetActions_runningActionsCount = 0;
var obj51933_droppedInsideTargetActions_loopCount = 0;
obj51933_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj51866: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj51866");
	var winTarget = document.getElementById("obj51866");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj51866").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj51866_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj51866_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj51866_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51866_onTouchDown is still running");
	return;
}
var obj51866_onTouchDown_runningActionsCount = 0;
var obj51866_onTouchDown_loopCount = 0;
obj51866_onTouchDown_actionGroup0();
});



/*
 *
 *   obj51866: Event SCActionDragDrop51869_droppedOutsideTargetActions
 *
 */
$("#obj51866").bind("SCActionDragDrop51869_droppedOutsideTargetActions", function(event) {
	if (window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51866_SCActionDragDrop51869_droppedOutsideTargetActions is still running");
	return;
}
var obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_loopCount = 0;
obj51866_SCActionDragDrop51869_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj51866: Event droppedInsideTargetActions_4
 *
 */
$("#obj51866").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj51866_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51866_droppedInsideTargetActions_4 is still running");
	return;
}
var obj51866_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_4_loopCount = 0;
obj51866_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj51866: Event droppedInsideTargetActions_3
 *
 */
$("#obj51866").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj51866_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51866_droppedInsideTargetActions_3 is still running");
	return;
}
var obj51866_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_3_loopCount = 0;
obj51866_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj51866: Event droppedInsideTargetActions_2
 *
 */
$("#obj51866").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj51866_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51866_droppedInsideTargetActions_2 is still running");
	return;
}
var obj51866_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_2_loopCount = 0;
obj51866_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj51866: Event droppedInsideTargetActions
 *
 */
$("#obj51866").bind("droppedInsideTargetActions", function(event) {
	if (window.obj51866_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51866_droppedInsideTargetActions is still running");
	return;
}
var obj51866_droppedInsideTargetActions_runningActionsCount = 0;
var obj51866_droppedInsideTargetActions_loopCount = 0;
obj51866_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj51799: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj51799");
	var winTarget = document.getElementById("obj51799");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj51799").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj51799_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj51799_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj51799_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51799_onTouchDown is still running");
	return;
}
var obj51799_onTouchDown_runningActionsCount = 0;
var obj51799_onTouchDown_loopCount = 0;
obj51799_onTouchDown_actionGroup0();
});



/*
 *
 *   obj51799: Event SCActionDragDrop51802_droppedOutsideTargetActions
 *
 */
$("#obj51799").bind("SCActionDragDrop51802_droppedOutsideTargetActions", function(event) {
	if (window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51799_SCActionDragDrop51802_droppedOutsideTargetActions is still running");
	return;
}
var obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_loopCount = 0;
obj51799_SCActionDragDrop51802_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj51799: Event droppedInsideTargetActions_4
 *
 */
$("#obj51799").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj51799_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51799_droppedInsideTargetActions_4 is still running");
	return;
}
var obj51799_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_4_loopCount = 0;
obj51799_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj51799: Event droppedInsideTargetActions_3
 *
 */
$("#obj51799").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj51799_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51799_droppedInsideTargetActions_3 is still running");
	return;
}
var obj51799_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_3_loopCount = 0;
obj51799_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj51799: Event droppedInsideTargetActions_2
 *
 */
$("#obj51799").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj51799_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51799_droppedInsideTargetActions_2 is still running");
	return;
}
var obj51799_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_2_loopCount = 0;
obj51799_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj51799: Event droppedInsideTargetActions
 *
 */
$("#obj51799").bind("droppedInsideTargetActions", function(event) {
	if (window.obj51799_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51799_droppedInsideTargetActions is still running");
	return;
}
var obj51799_droppedInsideTargetActions_runningActionsCount = 0;
var obj51799_droppedInsideTargetActions_loopCount = 0;
obj51799_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj51665: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj51665");
	var winTarget = document.getElementById("obj51665");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj51665").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj51665_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj51665_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj51665_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51665_onTouchDown is still running");
	return;
}
var obj51665_onTouchDown_runningActionsCount = 0;
var obj51665_onTouchDown_loopCount = 0;
obj51665_onTouchDown_actionGroup0();
});



/*
 *
 *   obj51665: Event SCActionDragDrop51668_droppedOutsideTargetActions
 *
 */
$("#obj51665").bind("SCActionDragDrop51668_droppedOutsideTargetActions", function(event) {
	if (window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51665_SCActionDragDrop51668_droppedOutsideTargetActions is still running");
	return;
}
var obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_runningActionsCount = 0;
var obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_loopCount = 0;
obj51665_SCActionDragDrop51668_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj51665: Event droppedInsideTargetActions_4
 *
 */
$("#obj51665").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj51665_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51665_droppedInsideTargetActions_4 is still running");
	return;
}
var obj51665_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_4_loopCount = 0;
obj51665_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj51665: Event droppedInsideTargetActions_3
 *
 */
$("#obj51665").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj51665_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51665_droppedInsideTargetActions_3 is still running");
	return;
}
var obj51665_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_3_loopCount = 0;
obj51665_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj51665: Event droppedInsideTargetActions_2
 *
 */
$("#obj51665").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj51665_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51665_droppedInsideTargetActions_2 is still running");
	return;
}
var obj51665_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_2_loopCount = 0;
obj51665_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj51665: Event droppedInsideTargetActions
 *
 */
$("#obj51665").bind("droppedInsideTargetActions", function(event) {
	if (window.obj51665_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj51665_droppedInsideTargetActions is still running");
	return;
}
var obj51665_droppedInsideTargetActions_runningActionsCount = 0;
var obj51665_droppedInsideTargetActions_loopCount = 0;
obj51665_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67982: Event Touch Down
 *
 */
$("#obj67982").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67982_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67982_onTap is still running");
	return;
}
var obj67982_onTap_runningActionsCount = 0;
var obj67982_onTap_loopCount = 0;
obj67982_onTap_actionGroup0();
});










/*
 *
 *   obj67974: Event Touch Down
 *
 */
$("#obj67974").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67974_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67974_onTap is still running");
	return;
}
var obj67974_onTap_runningActionsCount = 0;
var obj67974_onTap_loopCount = 0;
obj67974_onTap_actionGroup0();
});










/*
 *
 *   obj89101: Event Touch Down
 *
 */
$("#obj89101").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89101_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89101_onTap is still running");
	return;
}
var obj89101_onTap_runningActionsCount = 0;
var obj89101_onTap_loopCount = 0;
obj89101_onTap_actionGroup0();
});










/*
 *
 *   obj89096: Event Touch Down
 *
 */
$("#obj89096").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj89096_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj89096_onTap is still running");
	return;
}
var obj89096_onTap_runningActionsCount = 0;
var obj89096_onTap_loopCount = 0;
obj89096_onTap_actionGroup0();
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
	
$("#obj52081").trigger('SCEventShow');
$("#obj52065").trigger('SCEventShow');
$("#obj52062").trigger('SCEventShow');
$("#obj52058").trigger('SCEventShow');
$("#obj52056").trigger('SCEventShow');
$("#obj52054").trigger('SCEventShow');
$("#obj52052").trigger('SCEventShow');
$("#obj52050").trigger('SCEventShow');
$("#obj52048").trigger('SCEventShow');
$("#obj52046").trigger('SCEventShow');
$("#obj52044").trigger('SCEventShow');
$("#obj52042").trigger('SCEventShow');
$("#obj52040").trigger('SCEventShow');
$("#obj52038").trigger('SCEventShow');
$("#obj52036").trigger('SCEventShow');
$("#obj52034").trigger('SCEventShow');
$("#obj52032").trigger('SCEventShow');
$("#obj52030").trigger('SCEventShow');
$("#obj52028").trigger('SCEventShow');
$("#obj52026").trigger('SCEventShow');
$("#obj52024").trigger('SCEventShow');
$("#obj52022").trigger('SCEventShow');
$("#obj52020").trigger('SCEventShow');
$("#obj52018").trigger('SCEventShow');
$("#obj52016").trigger('SCEventShow');
$("#obj52014").trigger('SCEventShow');
$("#obj52012").trigger('SCEventShow');
$("#obj52010").trigger('SCEventShow');
$("#obj52008").trigger('SCEventShow');
$("#obj51933").trigger('SCEventShow');
$("#obj51866").trigger('SCEventShow');
$("#obj51799").trigger('SCEventShow');
$("#obj51665").trigger('SCEventShow');
$("#obj67982").trigger('SCEventShow');
$("#obj67974").trigger('SCEventShow');
$("#obj89101").trigger('SCEventShow');
$("#obj89096").trigger('SCEventShow');
$("#obj89106").trigger('SCEventShow');
$("#obj94999").trigger('SCEventShow');
$("#obj67988").trigger('SCEventShow');
	
});