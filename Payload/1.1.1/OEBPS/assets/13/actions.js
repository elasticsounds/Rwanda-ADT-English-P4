pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 1863;
pubcoder.page.title = pubcoder.page.title || "13";
pubcoder.page.number = pubcoder.page.number || 13;
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
var obj1866_onTap_activeActionGroupIndex = -1;
var obj1866_onTap_runningActionsCount = 0;
var obj1866_onTap_loopCount = 0;
var obj1869_onTap_activeActionGroupIndex = -1;
var obj1869_onTap_runningActionsCount = 0;
var obj1869_onTap_loopCount = 0;
var obj1872_onTap_activeActionGroupIndex = -1;
var obj1872_onTap_runningActionsCount = 0;
var obj1872_onTap_loopCount = 0;
var obj1929_onDrag_activeActionGroupIndex = -1;
var obj1929_onDrag_runningActionsCount = 0;
var obj1929_onDrag_loopCount = 0;
var obj1929_onTouchDown_activeActionGroupIndex = -1;
var obj1929_onTouchDown_runningActionsCount = 0;
var obj1929_onTouchDown_loopCount = 0;
var obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_loopCount = 0;
var obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_4_loopCount = 0;
var obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_3_loopCount = 0;
var obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_2_loopCount = 0;
var obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1929_droppedInsideTargetActions_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_loopCount = 0;
var obj1933_onDrag_activeActionGroupIndex = -1;
var obj1933_onDrag_runningActionsCount = 0;
var obj1933_onDrag_loopCount = 0;
var obj1933_onTouchDown_activeActionGroupIndex = -1;
var obj1933_onTouchDown_runningActionsCount = 0;
var obj1933_onTouchDown_loopCount = 0;
var obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_loopCount = 0;
var obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_4_loopCount = 0;
var obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_3_loopCount = 0;
var obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_2_loopCount = 0;
var obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1933_droppedInsideTargetActions_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_loopCount = 0;
var obj1935_onDrag_activeActionGroupIndex = -1;
var obj1935_onDrag_runningActionsCount = 0;
var obj1935_onDrag_loopCount = 0;
var obj1935_onTouchDown_activeActionGroupIndex = -1;
var obj1935_onTouchDown_runningActionsCount = 0;
var obj1935_onTouchDown_loopCount = 0;
var obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_loopCount = 0;
var obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_4_loopCount = 0;
var obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_3_loopCount = 0;
var obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_2_loopCount = 0;
var obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1935_droppedInsideTargetActions_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_loopCount = 0;
var obj1944_onDrag_activeActionGroupIndex = -1;
var obj1944_onDrag_runningActionsCount = 0;
var obj1944_onDrag_loopCount = 0;
var obj1944_onTouchDown_activeActionGroupIndex = -1;
var obj1944_onTouchDown_runningActionsCount = 0;
var obj1944_onTouchDown_loopCount = 0;
var obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_loopCount = 0;
var obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_4_loopCount = 0;
var obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_3_loopCount = 0;
var obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_2_loopCount = 0;
var obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj1944_droppedInsideTargetActions_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_loopCount = 0;
var obj65166_onTap_activeActionGroupIndex = -1;
var obj65166_onTap_runningActionsCount = 0;
var obj65166_onTap_loopCount = 0;
var obj65158_onTap_activeActionGroupIndex = -1;
var obj65158_onTap_runningActionsCount = 0;
var obj65158_onTap_loopCount = 0;
var obj86949_onTap_activeActionGroupIndex = -1;
var obj86949_onTap_runningActionsCount = 0;
var obj86949_onTap_loopCount = 0;
var obj86944_onTap_activeActionGroupIndex = -1;
var obj86944_onTap_runningActionsCount = 0;
var obj86944_onTap_loopCount = 0;
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
		
obj1866_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1866_onTap_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1866) {
				console.warn("de-queueing event obj1866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1866_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1868();
function goToPage_1868() {
	window.obj1866_onTap_runningActionsCount = obj1866_onTap_runningActionsCount + 1;
	$("#anchor86")[0].click();
	window.obj1866_onTap_runningActionsCount = window.obj1866_onTap_runningActionsCount - 1;
if (window.obj1866_onTap_runningActionsCount < 0) {
	window.obj1866_onTap_runningActionsCount = 0;
} else if (window.obj1866_onTap_runningActionsCount == 0) {
	obj1866_onTap_actionGroup1();
}
}





















};
obj1866_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1866_onTap_activeActionGroupIndex = -1;
		$("#obj1866").trigger("obj1866_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1866) {
				console.warn("de-queueing event obj1866." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1866").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1866_onTap_activeActionGroupIndex = 1;
	





















};
obj1869_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1869_onTap_activeActionGroupIndex = -1;
		$("#obj1869").trigger("obj1869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1869) {
				console.warn("de-queueing event obj1869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1869_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1871();
function goToPage_1871() {
	window.obj1869_onTap_runningActionsCount = obj1869_onTap_runningActionsCount + 1;
	$("#anchor87")[0].click();
	window.obj1869_onTap_runningActionsCount = window.obj1869_onTap_runningActionsCount - 1;
if (window.obj1869_onTap_runningActionsCount < 0) {
	window.obj1869_onTap_runningActionsCount = 0;
} else if (window.obj1869_onTap_runningActionsCount == 0) {
	obj1869_onTap_actionGroup1();
}
}





















};
obj1869_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1869_onTap_activeActionGroupIndex = -1;
		$("#obj1869").trigger("obj1869_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1869) {
				console.warn("de-queueing event obj1869." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1869").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1869_onTap_activeActionGroupIndex = 1;
	





















};
obj1872_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1872_onTap_activeActionGroupIndex = -1;
		$("#obj1872").trigger("obj1872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1872) {
				console.warn("de-queueing event obj1872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1872_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_1874();
function goToPage_1874() {
	window.obj1872_onTap_runningActionsCount = obj1872_onTap_runningActionsCount + 1;
	$("#anchor88")[0].click();
	window.obj1872_onTap_runningActionsCount = window.obj1872_onTap_runningActionsCount - 1;
if (window.obj1872_onTap_runningActionsCount < 0) {
	window.obj1872_onTap_runningActionsCount = 0;
} else if (window.obj1872_onTap_runningActionsCount == 0) {
	obj1872_onTap_actionGroup1();
}
}





















};
obj1872_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1872_onTap_activeActionGroupIndex = -1;
		$("#obj1872").trigger("obj1872_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1872) {
				console.warn("de-queueing event obj1872." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1872").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1872_onTap_activeActionGroupIndex = 1;
	





















};
obj1929_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1929");
//	action: dragDrop
//	target: obj1929 
dragDrop_1949();
function dragDrop_1949() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1929_onTouchDown_runningActionsCount = obj1929_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1929');
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
	  	containerNode = $('#obj1901');
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
    	window.obj1929_onTouchDown_runningActionsCount = window.obj1929_onTouchDown_runningActionsCount - 1;
if (window.obj1929_onTouchDown_runningActionsCount < 0) {
	window.obj1929_onTouchDown_runningActionsCount = 0;
} else if (window.obj1929_onTouchDown_runningActionsCount == 0) {
	obj1929_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1907","#obj1903","#obj1909","#obj1911");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1949 = false;
    	var dropped_id_1949;
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
					dropped_1949 = true;
					dropped_id_1949 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1949) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1929").trigger('SCActionDragDrop1949_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1929_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1929_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1929 
move_92110();
function move_92110() {
	window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount = obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1929");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 63;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount = window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1929_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2022();
function runjs_2022() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2023();
function runjs_2023() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#C00000"); $("#obj1911").css("border-width", "2px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "10px"); $("#obj1911").css("-webkit-border-radius", "10px"); $("#obj1911").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2024();
function switchText_2024() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1929 
move_2025();
function move_2025() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1929");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 63;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj1929_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2026();
function runjs_2026() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2027();
function runjs_2027() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#000000"); $("#obj1911").css("border-width", "1px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "15px"); $("#obj1911").css("-webkit-border-radius", "15px"); $("#obj1911").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2028();
function runjs_2028() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1929").css("border-color", "rgba(0,0,0,0)"); $("#obj1929").css("border-width", "0px"); $("#obj1929").css("border-style", "solid"); $("#obj1929").css("border-radius", "20px"); $("#obj1929").css("-webkit-border-radius", "20px"); $("#obj1929").css("-moz-border-radius", "20px"); $("#obj1929_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2126();
function switchText_2126() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2029();
function playAudio_2029() {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = obj1929_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1929_droppedInsideTargetActions_4_runningActionsCount = window.obj1929_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj1929_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	





















};
obj1929_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2013();
function runjs_2013() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2014();
function runjs_2014() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#C00000"); $("#obj1909").css("border-width", "2px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "10px"); $("#obj1909").css("-webkit-border-radius", "10px"); $("#obj1909").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2015();
function switchText_2015() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1929 
move_2016();
function move_2016() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1929");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 63;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj1929_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2017();
function runjs_2017() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2018();
function runjs_2018() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#000000"); $("#obj1909").css("border-width", "1px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "15px"); $("#obj1909").css("-webkit-border-radius", "15px"); $("#obj1909").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2019();
function runjs_2019() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1929").css("border-color", "rgba(0,0,0,0)"); $("#obj1929").css("border-width", "0px"); $("#obj1929").css("border-style", "solid"); $("#obj1929").css("border-radius", "20px"); $("#obj1929").css("-webkit-border-radius", "20px"); $("#obj1929").css("-moz-border-radius", "20px"); $("#obj1929_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2125();
function switchText_2125() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2020();
function playAudio_2020() {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = obj1929_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1929_droppedInsideTargetActions_3_runningActionsCount = window.obj1929_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj1929_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj1929_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1999();
function runjs_1999() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2000();
function runjs_2000() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#C00000"); $("#obj1903").css("border-width", "2px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "10px"); $("#obj1903").css("-webkit-border-radius", "10px"); $("#obj1903").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2002();
function switchText_2002() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1929 
move_2004();
function move_2004() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1929");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 63;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj1929_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2005();
function runjs_2005() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2006();
function runjs_2006() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#000000"); $("#obj1903").css("border-width", "1px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "15px"); $("#obj1903").css("-webkit-border-radius", "15px"); $("#obj1903").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2007();
function runjs_2007() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1929").css("border-color", "rgba(0,0,0,0)"); $("#obj1929").css("border-width", "0px"); $("#obj1929").css("border-style", "solid"); $("#obj1929").css("border-radius", "20px"); $("#obj1929").css("-webkit-border-radius", "20px"); $("#obj1929").css("-moz-border-radius", "20px"); $("#obj1929_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2124();
function switchText_2124() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2003();
function playAudio_2003() {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = obj1929_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1929_droppedInsideTargetActions_2_runningActionsCount = window.obj1929_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj1929_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj1929_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1951();
function runjs_1951() {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = obj1929_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1907").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1959();
function switchText_1959() {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = obj1929_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1952();
function runjs_1952() {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = obj1929_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#058E3F"); $("#obj1907").css("border-width", "2px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "10px"); $("#obj1907").css("-webkit-border-radius", "10px"); $("#obj1907").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj1929_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj1921 
hide_1953();
function hide_1953() {
	var selector = "#obj1921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1929_droppedInsideTargetActions_runningActionsCount = obj1929_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1953(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1929_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj1956 
playAudio_1954();
function playAudio_1954() {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = obj1929_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1956")[0];
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
		    window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj1929_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90083();
function switchText_90083() {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = obj1929_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1929_droppedInsideTargetActions_runningActionsCount = window.obj1929_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1929_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1929_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1929_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1929_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj1929_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1929").trigger("obj1929_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1929) {
				console.warn("de-queueing event obj1929." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1929").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1929_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj1933_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1933");
//	action: dragDrop
//	target: obj1933 
dragDrop_1979();
function dragDrop_1979() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1933_onTouchDown_runningActionsCount = obj1933_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1933');
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
	  	containerNode = $('#obj1901');
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
    	window.obj1933_onTouchDown_runningActionsCount = window.obj1933_onTouchDown_runningActionsCount - 1;
if (window.obj1933_onTouchDown_runningActionsCount < 0) {
	window.obj1933_onTouchDown_runningActionsCount = 0;
} else if (window.obj1933_onTouchDown_runningActionsCount == 0) {
	obj1933_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1903","#obj1911","#obj1909","#obj1907");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1979 = false;
    	var dropped_id_1979;
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
					dropped_1979 = true;
					dropped_id_1979 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1979) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1933").trigger('SCActionDragDrop1979_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1933_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1933_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1933 
move_92114();
function move_92114() {
	window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount = obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount = window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1933_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2085();
function runjs_2085() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1907").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2086();
function runjs_2086() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#C00000"); $("#obj1907").css("border-width", "2px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "10px"); $("#obj1907").css("-webkit-border-radius", "10px"); $("#obj1907").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2087();
function switchText_2087() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1933 
move_2088();
function move_2088() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj1933_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2089();
function runjs_2089() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1907").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2090();
function runjs_2090() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#000000"); $("#obj1907").css("border-width", "1px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "15px"); $("#obj1907").css("-webkit-border-radius", "15px"); $("#obj1907").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2091();
function runjs_2091() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1933").css("border-color", "rgba(0,0,0,0)"); $("#obj1933").css("border-width", "0px"); $("#obj1933").css("border-style", "solid"); $("#obj1933").css("border-radius", "20px"); $("#obj1933").css("-webkit-border-radius", "20px"); $("#obj1933").css("-moz-border-radius", "20px"); $("#obj1933_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2120();
function switchText_2120() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2092();
function playAudio_2092() {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = obj1933_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1933_droppedInsideTargetActions_4_runningActionsCount = window.obj1933_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj1933_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	





















};
obj1933_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2076();
function runjs_2076() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2077();
function runjs_2077() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#C00000"); $("#obj1909").css("border-width", "2px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "10px"); $("#obj1909").css("-webkit-border-radius", "10px"); $("#obj1909").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2078();
function switchText_2078() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1933 
move_2079();
function move_2079() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj1933_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2080();
function runjs_2080() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2081();
function runjs_2081() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#000000"); $("#obj1909").css("border-width", "1px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "15px"); $("#obj1909").css("-webkit-border-radius", "15px"); $("#obj1909").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2082();
function runjs_2082() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1933").css("border-color", "rgba(0,0,0,0)"); $("#obj1933").css("border-width", "0px"); $("#obj1933").css("border-style", "solid"); $("#obj1933").css("border-radius", "20px"); $("#obj1933").css("-webkit-border-radius", "20px"); $("#obj1933").css("-moz-border-radius", "20px"); $("#obj1933_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2119();
function switchText_2119() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2083();
function playAudio_2083() {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = obj1933_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1933_droppedInsideTargetActions_3_runningActionsCount = window.obj1933_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj1933_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj1933_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2067();
function runjs_2067() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1911").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2068();
function runjs_2068() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#C00000"); $("#obj1911").css("border-width", "2px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "10px"); $("#obj1911").css("-webkit-border-radius", "10px"); $("#obj1911").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2069();
function switchText_2069() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1933 
move_2070();
function move_2070() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1933");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 306;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj1933_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2071();
function runjs_2071() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1911").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2072();
function runjs_2072() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#000000"); $("#obj1911").css("border-width", "1px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "15px"); $("#obj1911").css("-webkit-border-radius", "15px"); $("#obj1911").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2073();
function runjs_2073() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1933").css("border-color", "rgba(0,0,0,0)"); $("#obj1933").css("border-width", "0px"); $("#obj1933").css("border-style", "solid"); $("#obj1933").css("border-radius", "20px"); $("#obj1933").css("-webkit-border-radius", "20px"); $("#obj1933").css("-moz-border-radius", "20px"); $("#obj1933_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2118();
function switchText_2118() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2074();
function playAudio_2074() {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = obj1933_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1933_droppedInsideTargetActions_2_runningActionsCount = window.obj1933_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj1933_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj1933_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1981();
function runjs_1981() {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = obj1933_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1903").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1984();
function switchText_1984() {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = obj1933_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1982();
function runjs_1982() {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = obj1933_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#058E3F"); $("#obj1903").css("border-width", "2px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "10px"); $("#obj1903").css("-webkit-border-radius", "10px"); $("#obj1903").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj1933_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj1921 
hide_1983();
function hide_1983() {
	var selector = "#obj1921";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1933_droppedInsideTargetActions_runningActionsCount = obj1933_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1983(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1933_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj1956 
playAudio_1985();
function playAudio_1985() {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = obj1933_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1956")[0];
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
		    window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj1933_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90085();
function switchText_90085() {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = obj1933_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1933_droppedInsideTargetActions_runningActionsCount = window.obj1933_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1933_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1933_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1933_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1933_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj1933_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1933").trigger("obj1933_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1933) {
				console.warn("de-queueing event obj1933." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1933").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1933_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj1935_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1935");
//	action: dragDrop
//	target: obj1935 
dragDrop_1987();
function dragDrop_1987() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1935_onTouchDown_runningActionsCount = obj1935_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1935');
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
	  	containerNode = $('#obj1901');
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
    	window.obj1935_onTouchDown_runningActionsCount = window.obj1935_onTouchDown_runningActionsCount - 1;
if (window.obj1935_onTouchDown_runningActionsCount < 0) {
	window.obj1935_onTouchDown_runningActionsCount = 0;
} else if (window.obj1935_onTouchDown_runningActionsCount == 0) {
	obj1935_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1909","#obj1903","#obj1907","#obj1911");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1987 = false;
    	var dropped_id_1987;
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
					dropped_1987 = true;
					dropped_id_1987 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1987) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1935").trigger('SCActionDragDrop1987_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1935_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1935_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1935 
move_92116();
function move_92116() {
	window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount = obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 431;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount = window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1935_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2103();
function runjs_2103() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2104();
function runjs_2104() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#C00000"); $("#obj1911").css("border-width", "2px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "10px"); $("#obj1911").css("-webkit-border-radius", "10px"); $("#obj1911").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2105();
function switchText_2105() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1935 
move_2106();
function move_2106() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 431;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj1935_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2107();
function runjs_2107() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2108();
function runjs_2108() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#000000"); $("#obj1911").css("border-width", "1px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "15px"); $("#obj1911").css("-webkit-border-radius", "15px"); $("#obj1911").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2109();
function runjs_2109() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1935").css("border-color", "rgba(0,0,0,0)"); $("#obj1935").css("border-width", "0px"); $("#obj1935").css("border-style", "solid"); $("#obj1935").css("border-radius", "20px"); $("#obj1935").css("-webkit-border-radius", "20px"); $("#obj1935").css("-moz-border-radius", "20px"); $("#obj1935_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2115();
function switchText_2115() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2110();
function playAudio_2110() {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = obj1935_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1935_droppedInsideTargetActions_4_runningActionsCount = window.obj1935_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj1935_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	





















};
obj1935_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2094();
function runjs_2094() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2095();
function runjs_2095() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#C00000"); $("#obj1907").css("border-width", "2px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "10px"); $("#obj1907").css("-webkit-border-radius", "10px"); $("#obj1907").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2096();
function switchText_2096() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1935 
move_2097();
function move_2097() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 431;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj1935_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2098();
function runjs_2098() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2099();
function runjs_2099() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#000000"); $("#obj1907").css("border-width", "1px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "15px"); $("#obj1907").css("-webkit-border-radius", "15px"); $("#obj1907").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2100();
function runjs_2100() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1935").css("border-color", "rgba(0,0,0,0)"); $("#obj1935").css("border-width", "0px"); $("#obj1935").css("border-style", "solid"); $("#obj1935").css("border-radius", "20px"); $("#obj1935").css("-webkit-border-radius", "20px"); $("#obj1935").css("-moz-border-radius", "20px"); $("#obj1935_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2117();
function switchText_2117() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2101();
function playAudio_2101() {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = obj1935_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1935_droppedInsideTargetActions_3_runningActionsCount = window.obj1935_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj1935_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj1935_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2040();
function runjs_2040() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2041();
function runjs_2041() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#C00000"); $("#obj1903").css("border-width", "2px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "10px"); $("#obj1903").css("-webkit-border-radius", "10px"); $("#obj1903").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2042();
function switchText_2042() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1935 
move_2043();
function move_2043() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1935");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 431;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj1935_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2044();
function runjs_2044() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2045();
function runjs_2045() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#000000"); $("#obj1903").css("border-width", "1px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "15px"); $("#obj1903").css("-webkit-border-radius", "15px"); $("#obj1903").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2046();
function runjs_2046() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1935").css("border-color", "rgba(0,0,0,0)"); $("#obj1935").css("border-width", "0px"); $("#obj1935").css("border-style", "solid"); $("#obj1935").css("border-radius", "20px"); $("#obj1935").css("-webkit-border-radius", "20px"); $("#obj1935").css("-moz-border-radius", "20px"); $("#obj1935_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2116();
function switchText_2116() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2047();
function playAudio_2047() {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = obj1935_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1935_droppedInsideTargetActions_2_runningActionsCount = window.obj1935_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj1935_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj1935_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1989();
function runjs_1989() {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = obj1935_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1909").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1992();
function switchText_1992() {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = obj1935_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1990();
function runjs_1990() {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = obj1935_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#058E3F"); $("#obj1909").css("border-width", "2px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "10px"); $("#obj1909").css("-webkit-border-radius", "10px"); $("#obj1909").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj1935_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj1925 
hide_1991();
function hide_1991() {
	var selector = "#obj1925";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1935_droppedInsideTargetActions_runningActionsCount = obj1935_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1991(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1935_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj1956 
playAudio_1993();
function playAudio_1993() {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = obj1935_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1956")[0];
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
		    window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj1935_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90086();
function switchText_90086() {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = obj1935_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1935_droppedInsideTargetActions_runningActionsCount = window.obj1935_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1935_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1935_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1935_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1935_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj1935_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1935").trigger("obj1935_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1935) {
				console.warn("de-queueing event obj1935." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1935").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1935_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj1944_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj1944");
//	action: dragDrop
//	target: obj1944 
dragDrop_1971();
function dragDrop_1971() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj1944_onTouchDown_runningActionsCount = obj1944_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj1944');
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
	  	containerNode = $('#obj1901');
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
    	window.obj1944_onTouchDown_runningActionsCount = window.obj1944_onTouchDown_runningActionsCount - 1;
if (window.obj1944_onTouchDown_runningActionsCount < 0) {
	window.obj1944_onTouchDown_runningActionsCount = 0;
} else if (window.obj1944_onTouchDown_runningActionsCount == 0) {
	obj1944_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj1911","#obj1903","#obj1907","#obj1909");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_1971 = false;
    	var dropped_id_1971;
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
					dropped_1971 = true;
					dropped_id_1971 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_1971) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj1944").trigger('SCActionDragDrop1971_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj1944_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_onTouchDown_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj1944 
move_92112();
function move_92112() {
	window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount = obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj1944");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 187;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount = window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj1944_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2058();
function runjs_2058() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1909").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2059();
function runjs_2059() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#C00000"); $("#obj1909").css("border-width", "2px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "10px"); $("#obj1909").css("-webkit-border-radius", "10px"); $("#obj1909").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2060();
function switchText_2060() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1944 
move_2061();
function move_2061() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj1944");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 187;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj1944_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2062();
function runjs_2062() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1909").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2063();
function runjs_2063() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1909").css("border-color", "#000000"); $("#obj1909").css("border-width", "1px"); $("#obj1909").css("border-style", "solid"); $("#obj1909").css("border-radius", "15px"); $("#obj1909").css("-webkit-border-radius", "15px"); $("#obj1909").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup6();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2064();
function runjs_2064() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj1944").css("border-color", "rgba(0,0,0,0)"); $("#obj1944").css("border-width", "0px"); $("#obj1944").css("border-style", "solid"); $("#obj1944").css("border-radius", "20px"); $("#obj1944").css("-webkit-border-radius", "20px"); $("#obj1944").css("-moz-border-radius", "20px"); $("#obj1944_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2123();
function switchText_2123() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2065();
function playAudio_2065() {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = obj1944_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1944_droppedInsideTargetActions_4_runningActionsCount = window.obj1944_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_4_actionGroup9();
}
	}
}









};
obj1944_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	





















};
obj1944_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2049();
function runjs_2049() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2050();
function runjs_2050() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#C00000"); $("#obj1907").css("border-width", "2px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "10px"); $("#obj1907").css("-webkit-border-radius", "10px"); $("#obj1907").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2051();
function switchText_2051() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1944 
move_2052();
function move_2052() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj1944");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 187;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup4();
}
		}, 1);
	});
}



















};
obj1944_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2053();
function runjs_2053() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup5();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2054();
function runjs_2054() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1907").css("border-color", "#000000"); $("#obj1907").css("border-width", "1px"); $("#obj1907").css("border-style", "solid"); $("#obj1907").css("border-radius", "15px"); $("#obj1907").css("-webkit-border-radius", "15px"); $("#obj1907").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup6();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2055();
function runjs_2055() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj1944").css("border-color", "rgba(0,0,0,0)"); $("#obj1944").css("border-width", "0px"); $("#obj1944").css("border-style", "solid"); $("#obj1944").css("border-radius", "20px"); $("#obj1944").css("-webkit-border-radius", "20px"); $("#obj1944").css("-moz-border-radius", "20px"); $("#obj1944_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2122();
function switchText_2122() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup8();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2056();
function playAudio_2056() {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = obj1944_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1944_droppedInsideTargetActions_3_runningActionsCount = window.obj1944_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_3_actionGroup9();
}
	}
}









};
obj1944_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	





















};
obj1944_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_2031();
function runjs_2031() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_2032();
function runjs_2032() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#C00000"); $("#obj1903").css("border-width", "2px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "10px"); $("#obj1903").css("-webkit-border-radius", "10px"); $("#obj1903").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_2033();
function switchText_2033() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj1944 
move_2034();
function move_2034() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj1944");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 187;
	var moveY = 562;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup4();
}
		}, 1);
	});
}



















};
obj1944_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_2035();
function runjs_2035() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup5();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	















//	action: Run JavaScript
runjs_2036();
function runjs_2036() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1903").css("border-color", "#000000"); $("#obj1903").css("border-width", "1px"); $("#obj1903").css("border-style", "solid"); $("#obj1903").css("border-radius", "15px"); $("#obj1903").css("-webkit-border-radius", "15px"); $("#obj1903").css("-moz-border-radius", "15px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup6();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_2037();
function runjs_2037() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj1944").css("border-color", "rgba(0,0,0,0)"); $("#obj1944").css("border-width", "0px"); $("#obj1944").css("border-style", "solid"); $("#obj1944").css("border-radius", "20px"); $("#obj1944").css("-webkit-border-radius", "20px"); $("#obj1944").css("-moz-border-radius", "20px"); $("#obj1944_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_2121();
function switchText_2121() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup8();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	












//	action: playAudio
//	target: obj1955 
playAudio_2038();
function playAudio_2038() {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = obj1944_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj1955")[0];
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
		    window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup9();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1944_droppedInsideTargetActions_2_runningActionsCount = window.obj1944_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_2_actionGroup9();
}
	}
}









};
obj1944_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	





















};
obj1944_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_1973();
function runjs_1973() {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = obj1944_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1911").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_1976();
function switchText_1976() {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = obj1944_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_1974();
function runjs_1974() {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = obj1944_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj1911").css("border-color", "#058E3F"); $("#obj1911").css("border-width", "2px"); $("#obj1911").css("border-style", "solid"); $("#obj1911").css("border-radius", "10px"); $("#obj1911").css("-webkit-border-radius", "10px"); $("#obj1911").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj1944_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj1927 
hide_1975();
function hide_1975() {
	var selector = "#obj1927";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj1944_droppedInsideTargetActions_runningActionsCount = obj1944_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 1000;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_1975(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj1944_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 4;
	












//	action: playAudio
//	target: obj1956 
playAudio_1977();
function playAudio_1977() {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = obj1944_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj1956")[0];
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
		    window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup5();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup5();
}
	}
}









};
obj1944_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 5;
	















//	action: Switch Text
switchText_90084();
function switchText_90084() {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = obj1944_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj1946_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj1946_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj1946").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj1946_content");
			setTimeout(function () {
				window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup6();
}
			}, 1);
		});
	} else {
		$("#obj1946 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj1944_droppedInsideTargetActions_runningActionsCount = window.obj1944_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj1944_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj1944_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj1944_droppedInsideTargetActions_runningActionsCount == 0) {
	obj1944_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	}
}






};
obj1944_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj1944").trigger("obj1944_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 1944) {
				console.warn("de-queueing event obj1944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj1944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj1944_droppedInsideTargetActions_activeActionGroupIndex = 6;
	





















};
obj65166_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65166_onTap_activeActionGroupIndex = -1;
		$("#obj65166").trigger("obj65166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65166) {
				console.warn("de-queueing event obj65166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65166_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65166 
hide_65169();
function hide_65169() {
	var selector = "#obj65166";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65166_onTap_runningActionsCount = obj65166_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65166_onTap_runningActionsCount = window.obj65166_onTap_runningActionsCount - 1;
if (window.obj65166_onTap_runningActionsCount < 0) {
	window.obj65166_onTap_runningActionsCount = 0;
} else if (window.obj65166_onTap_runningActionsCount == 0) {
	obj65166_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65169(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65166_onTap_runningActionsCount = window.obj65166_onTap_runningActionsCount - 1;
if (window.obj65166_onTap_runningActionsCount < 0) {
	window.obj65166_onTap_runningActionsCount = 0;
} else if (window.obj65166_onTap_runningActionsCount == 0) {
	obj65166_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj65172 
stopMovie_65168();
function stopMovie_65168() {
	window.obj65166_onTap_runningActionsCount = obj65166_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65172")[0];
	myVideo.pause();
	window.obj65166_onTap_runningActionsCount = window.obj65166_onTap_runningActionsCount - 1;
if (window.obj65166_onTap_runningActionsCount < 0) {
	window.obj65166_onTap_runningActionsCount = 0;
} else if (window.obj65166_onTap_runningActionsCount == 0) {
	obj65166_onTap_actionGroup1();
}
}
















};
obj65166_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65166_onTap_activeActionGroupIndex = -1;
		$("#obj65166").trigger("obj65166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65166) {
				console.warn("de-queueing event obj65166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65166_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65158
(function(){
	window.obj65166_onTap_runningActionsCount = obj65166_onTap_runningActionsCount + 1;

	var selector = "#obj65158";
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
					window.obj65166_onTap_runningActionsCount = window.obj65166_onTap_runningActionsCount - 1;
if (window.obj65166_onTap_runningActionsCount < 0) {
	window.obj65166_onTap_runningActionsCount = 0;
} else if (window.obj65166_onTap_runningActionsCount == 0) {
	obj65166_onTap_actionGroup2();
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
				window.obj65166_onTap_runningActionsCount = window.obj65166_onTap_runningActionsCount - 1;
if (window.obj65166_onTap_runningActionsCount < 0) {
	window.obj65166_onTap_runningActionsCount = 0;
} else if (window.obj65166_onTap_runningActionsCount == 0) {
	obj65166_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65166_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65166_onTap_activeActionGroupIndex = -1;
		$("#obj65166").trigger("obj65166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65166) {
				console.warn("de-queueing event obj65166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65166_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65172 
move_65171();
function move_65171() {
	window.obj65166_onTap_runningActionsCount = obj65166_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65172");
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
			window.obj65166_onTap_runningActionsCount = window.obj65166_onTap_runningActionsCount - 1;
if (window.obj65166_onTap_runningActionsCount < 0) {
	window.obj65166_onTap_runningActionsCount = 0;
} else if (window.obj65166_onTap_runningActionsCount == 0) {
	obj65166_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65166_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65166_onTap_activeActionGroupIndex = -1;
		$("#obj65166").trigger("obj65166_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65166) {
				console.warn("de-queueing event obj65166." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65166").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65166_onTap_activeActionGroupIndex = 3;
	





















};
obj65158_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65158_onTap_activeActionGroupIndex = -1;
		$("#obj65158").trigger("obj65158_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65158) {
				console.warn("de-queueing event obj65158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65158_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj65158 
hide_65161();
function hide_65161() {
	var selector = "#obj65158";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj65158_onTap_runningActionsCount = obj65158_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj65158_onTap_runningActionsCount = window.obj65158_onTap_runningActionsCount - 1;
if (window.obj65158_onTap_runningActionsCount < 0) {
	window.obj65158_onTap_runningActionsCount = 0;
} else if (window.obj65158_onTap_runningActionsCount == 0) {
	obj65158_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_65161(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj65158_onTap_runningActionsCount = window.obj65158_onTap_runningActionsCount - 1;
if (window.obj65158_onTap_runningActionsCount < 0) {
	window.obj65158_onTap_runningActionsCount = 0;
} else if (window.obj65158_onTap_runningActionsCount == 0) {
	obj65158_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj65172 
playPauseMovie_65160();
function playPauseMovie_65160() {
	window.obj65158_onTap_runningActionsCount = obj65158_onTap_runningActionsCount + 1;
	var myVideo = $("#obj65172")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj65158_onTap_runningActionsCount = window.obj65158_onTap_runningActionsCount - 1;
if (window.obj65158_onTap_runningActionsCount < 0) {
	window.obj65158_onTap_runningActionsCount = 0;
} else if (window.obj65158_onTap_runningActionsCount == 0) {
	obj65158_onTap_actionGroup1();
}
}

















};
obj65158_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65158_onTap_activeActionGroupIndex = -1;
		$("#obj65158").trigger("obj65158_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65158) {
				console.warn("de-queueing event obj65158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65158_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj65166
(function(){
	window.obj65158_onTap_runningActionsCount = obj65158_onTap_runningActionsCount + 1;

	var selector = "#obj65166";
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
					window.obj65158_onTap_runningActionsCount = window.obj65158_onTap_runningActionsCount - 1;
if (window.obj65158_onTap_runningActionsCount < 0) {
	window.obj65158_onTap_runningActionsCount = 0;
} else if (window.obj65158_onTap_runningActionsCount == 0) {
	obj65158_onTap_actionGroup2();
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
				window.obj65158_onTap_runningActionsCount = window.obj65158_onTap_runningActionsCount - 1;
if (window.obj65158_onTap_runningActionsCount < 0) {
	window.obj65158_onTap_runningActionsCount = 0;
} else if (window.obj65158_onTap_runningActionsCount == 0) {
	obj65158_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj65158_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj65158_onTap_activeActionGroupIndex = -1;
		$("#obj65158").trigger("obj65158_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65158) {
				console.warn("de-queueing event obj65158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65158_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj65172 
move_65163();
function move_65163() {
	window.obj65158_onTap_runningActionsCount = obj65158_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj65172");
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
			window.obj65158_onTap_runningActionsCount = window.obj65158_onTap_runningActionsCount - 1;
if (window.obj65158_onTap_runningActionsCount < 0) {
	window.obj65158_onTap_runningActionsCount = 0;
} else if (window.obj65158_onTap_runningActionsCount == 0) {
	obj65158_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj65158_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj65158_onTap_activeActionGroupIndex = -1;
		$("#obj65158").trigger("obj65158_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 65158) {
				console.warn("de-queueing event obj65158." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj65158").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj65158_onTap_activeActionGroupIndex = 3;
	





















};
obj86949_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86949_onTap_activeActionGroupIndex = -1;
		$("#obj86949").trigger("obj86949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86949) {
				console.warn("de-queueing event obj86949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86949_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj86954 
stopAudio_86951();
function stopAudio_86951() {
	window.obj86949_onTap_runningActionsCount = obj86949_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86954")[0];
	myAudio.pause();
	window.obj86949_onTap_runningActionsCount = window.obj86949_onTap_runningActionsCount - 1;
if (window.obj86949_onTap_runningActionsCount < 0) {
	window.obj86949_onTap_runningActionsCount = 0;
} else if (window.obj86949_onTap_runningActionsCount == 0) {
	obj86949_onTap_actionGroup1();
}
}








};
obj86949_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86949_onTap_activeActionGroupIndex = -1;
		$("#obj86949").trigger("obj86949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86949) {
				console.warn("de-queueing event obj86949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86949_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj86949 
hide_86952();
function hide_86952() {
	var selector = "#obj86949";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86949_onTap_runningActionsCount = obj86949_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86949_onTap_runningActionsCount = window.obj86949_onTap_runningActionsCount - 1;
if (window.obj86949_onTap_runningActionsCount < 0) {
	window.obj86949_onTap_runningActionsCount = 0;
} else if (window.obj86949_onTap_runningActionsCount == 0) {
	obj86949_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86952(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86949_onTap_runningActionsCount = window.obj86949_onTap_runningActionsCount - 1;
if (window.obj86949_onTap_runningActionsCount < 0) {
	window.obj86949_onTap_runningActionsCount = 0;
} else if (window.obj86949_onTap_runningActionsCount == 0) {
	obj86949_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86949_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86949_onTap_activeActionGroupIndex = -1;
		$("#obj86949").trigger("obj86949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86949) {
				console.warn("de-queueing event obj86949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86949_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj86944
(function(){
	window.obj86949_onTap_runningActionsCount = obj86949_onTap_runningActionsCount + 1;

	var selector = "#obj86944";
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
					window.obj86949_onTap_runningActionsCount = window.obj86949_onTap_runningActionsCount - 1;
if (window.obj86949_onTap_runningActionsCount < 0) {
	window.obj86949_onTap_runningActionsCount = 0;
} else if (window.obj86949_onTap_runningActionsCount == 0) {
	obj86949_onTap_actionGroup3();
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
				window.obj86949_onTap_runningActionsCount = window.obj86949_onTap_runningActionsCount - 1;
if (window.obj86949_onTap_runningActionsCount < 0) {
	window.obj86949_onTap_runningActionsCount = 0;
} else if (window.obj86949_onTap_runningActionsCount == 0) {
	obj86949_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86949_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86949_onTap_activeActionGroupIndex = -1;
		$("#obj86949").trigger("obj86949_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86949) {
				console.warn("de-queueing event obj86949." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86949").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86949_onTap_activeActionGroupIndex = 3;
	





















};
obj86944_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86944_onTap_activeActionGroupIndex = -1;
		$("#obj86944").trigger("obj86944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86944) {
				console.warn("de-queueing event obj86944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86944_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj86944 
hide_86946();
function hide_86946() {
	var selector = "#obj86944";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj86944_onTap_runningActionsCount = obj86944_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj86944_onTap_runningActionsCount = window.obj86944_onTap_runningActionsCount - 1;
if (window.obj86944_onTap_runningActionsCount < 0) {
	window.obj86944_onTap_runningActionsCount = 0;
} else if (window.obj86944_onTap_runningActionsCount == 0) {
	obj86944_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_86946(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj86944_onTap_runningActionsCount = window.obj86944_onTap_runningActionsCount - 1;
if (window.obj86944_onTap_runningActionsCount < 0) {
	window.obj86944_onTap_runningActionsCount = 0;
} else if (window.obj86944_onTap_runningActionsCount == 0) {
	obj86944_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj86944_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86944_onTap_activeActionGroupIndex = -1;
		$("#obj86944").trigger("obj86944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86944) {
				console.warn("de-queueing event obj86944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86944_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj86949
(function(){
	window.obj86944_onTap_runningActionsCount = obj86944_onTap_runningActionsCount + 1;

	var selector = "#obj86949";
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
					window.obj86944_onTap_runningActionsCount = window.obj86944_onTap_runningActionsCount - 1;
if (window.obj86944_onTap_runningActionsCount < 0) {
	window.obj86944_onTap_runningActionsCount = 0;
} else if (window.obj86944_onTap_runningActionsCount == 0) {
	obj86944_onTap_actionGroup2();
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
				window.obj86944_onTap_runningActionsCount = window.obj86944_onTap_runningActionsCount - 1;
if (window.obj86944_onTap_runningActionsCount < 0) {
	window.obj86944_onTap_runningActionsCount = 0;
} else if (window.obj86944_onTap_runningActionsCount == 0) {
	obj86944_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj86944_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj86944_onTap_activeActionGroupIndex = -1;
		$("#obj86944").trigger("obj86944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86944) {
				console.warn("de-queueing event obj86944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86944_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj86954 
playAudio_86948();
function playAudio_86948() {
	window.obj86944_onTap_runningActionsCount = obj86944_onTap_runningActionsCount + 1;
	var myAudio = $("#obj86954")[0];
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
		    window.obj86944_onTap_runningActionsCount = window.obj86944_onTap_runningActionsCount - 1;
if (window.obj86944_onTap_runningActionsCount < 0) {
	window.obj86944_onTap_runningActionsCount = 0;
} else if (window.obj86944_onTap_runningActionsCount == 0) {
	obj86944_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj86944_onTap_runningActionsCount = window.obj86944_onTap_runningActionsCount - 1;
if (window.obj86944_onTap_runningActionsCount < 0) {
	window.obj86944_onTap_runningActionsCount = 0;
} else if (window.obj86944_onTap_runningActionsCount == 0) {
	obj86944_onTap_actionGroup3();
}
	}
}









};
obj86944_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj86944_onTap_activeActionGroupIndex = -1;
		$("#obj86944").trigger("obj86944_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 86944) {
				console.warn("de-queueing event obj86944." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj86944").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj86944_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj1866: Event Touch Down
 *
 */
$("#obj1866").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1866_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1866_onTap is still running");
	return;
}
var obj1866_onTap_runningActionsCount = 0;
var obj1866_onTap_loopCount = 0;
obj1866_onTap_actionGroup0();
});










/*
 *
 *   obj1869: Event Touch Down
 *
 */
$("#obj1869").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1869_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1869_onTap is still running");
	return;
}
var obj1869_onTap_runningActionsCount = 0;
var obj1869_onTap_loopCount = 0;
obj1869_onTap_actionGroup0();
});










/*
 *
 *   obj1872: Event Touch Down
 *
 */
$("#obj1872").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj1872_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1872_onTap is still running");
	return;
}
var obj1872_onTap_runningActionsCount = 0;
var obj1872_onTap_loopCount = 0;
obj1872_onTap_actionGroup0();
});

















































































































































































































































/*
 *
 *   obj1929: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1929");
	var winTarget = document.getElementById("obj1929");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1929").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1929_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1929_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1929_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1929_onTouchDown is still running");
	return;
}
var obj1929_onTouchDown_runningActionsCount = 0;
var obj1929_onTouchDown_loopCount = 0;
obj1929_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1929: Event SCActionDragDrop1949_droppedOutsideTargetActions
 *
 */
$("#obj1929").bind("SCActionDragDrop1949_droppedOutsideTargetActions", function(event) {
	if (window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1929_SCActionDragDrop1949_droppedOutsideTargetActions is still running");
	return;
}
var obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_loopCount = 0;
obj1929_SCActionDragDrop1949_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1929: Event droppedInsideTargetActions_4
 *
 */
$("#obj1929").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1929_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1929_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1929_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_4_loopCount = 0;
obj1929_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1929: Event droppedInsideTargetActions_3
 *
 */
$("#obj1929").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1929_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1929_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1929_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_3_loopCount = 0;
obj1929_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1929: Event droppedInsideTargetActions_2
 *
 */
$("#obj1929").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1929_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1929_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1929_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_2_loopCount = 0;
obj1929_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1929: Event droppedInsideTargetActions
 *
 */
$("#obj1929").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1929_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1929_droppedInsideTargetActions is still running");
	return;
}
var obj1929_droppedInsideTargetActions_runningActionsCount = 0;
var obj1929_droppedInsideTargetActions_loopCount = 0;
obj1929_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1933: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1933");
	var winTarget = document.getElementById("obj1933");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1933").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1933_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1933_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1933_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1933_onTouchDown is still running");
	return;
}
var obj1933_onTouchDown_runningActionsCount = 0;
var obj1933_onTouchDown_loopCount = 0;
obj1933_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1933: Event SCActionDragDrop1979_droppedOutsideTargetActions
 *
 */
$("#obj1933").bind("SCActionDragDrop1979_droppedOutsideTargetActions", function(event) {
	if (window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1933_SCActionDragDrop1979_droppedOutsideTargetActions is still running");
	return;
}
var obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_loopCount = 0;
obj1933_SCActionDragDrop1979_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1933: Event droppedInsideTargetActions_4
 *
 */
$("#obj1933").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1933_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1933_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1933_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_4_loopCount = 0;
obj1933_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1933: Event droppedInsideTargetActions_3
 *
 */
$("#obj1933").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1933_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1933_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1933_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_3_loopCount = 0;
obj1933_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1933: Event droppedInsideTargetActions_2
 *
 */
$("#obj1933").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1933_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1933_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1933_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_2_loopCount = 0;
obj1933_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1933: Event droppedInsideTargetActions
 *
 */
$("#obj1933").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1933_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1933_droppedInsideTargetActions is still running");
	return;
}
var obj1933_droppedInsideTargetActions_runningActionsCount = 0;
var obj1933_droppedInsideTargetActions_loopCount = 0;
obj1933_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1935: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1935");
	var winTarget = document.getElementById("obj1935");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1935").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1935_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1935_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1935_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1935_onTouchDown is still running");
	return;
}
var obj1935_onTouchDown_runningActionsCount = 0;
var obj1935_onTouchDown_loopCount = 0;
obj1935_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1935: Event SCActionDragDrop1987_droppedOutsideTargetActions
 *
 */
$("#obj1935").bind("SCActionDragDrop1987_droppedOutsideTargetActions", function(event) {
	if (window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1935_SCActionDragDrop1987_droppedOutsideTargetActions is still running");
	return;
}
var obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_loopCount = 0;
obj1935_SCActionDragDrop1987_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1935: Event droppedInsideTargetActions_4
 *
 */
$("#obj1935").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1935_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1935_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1935_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_4_loopCount = 0;
obj1935_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1935: Event droppedInsideTargetActions_3
 *
 */
$("#obj1935").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1935_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1935_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1935_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_3_loopCount = 0;
obj1935_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1935: Event droppedInsideTargetActions_2
 *
 */
$("#obj1935").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1935_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1935_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1935_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_2_loopCount = 0;
obj1935_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1935: Event droppedInsideTargetActions
 *
 */
$("#obj1935").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1935_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1935_droppedInsideTargetActions is still running");
	return;
}
var obj1935_droppedInsideTargetActions_runningActionsCount = 0;
var obj1935_droppedInsideTargetActions_loopCount = 0;
obj1935_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj1944: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj1944");
	var winTarget = document.getElementById("obj1944");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj1944").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj1944_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj1944_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj1944_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1944_onTouchDown is still running");
	return;
}
var obj1944_onTouchDown_runningActionsCount = 0;
var obj1944_onTouchDown_loopCount = 0;
obj1944_onTouchDown_actionGroup0();
});



/*
 *
 *   obj1944: Event SCActionDragDrop1971_droppedOutsideTargetActions
 *
 */
$("#obj1944").bind("SCActionDragDrop1971_droppedOutsideTargetActions", function(event) {
	if (window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1944_SCActionDragDrop1971_droppedOutsideTargetActions is still running");
	return;
}
var obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_runningActionsCount = 0;
var obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_loopCount = 0;
obj1944_SCActionDragDrop1971_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj1944: Event droppedInsideTargetActions_4
 *
 */
$("#obj1944").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj1944_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1944_droppedInsideTargetActions_4 is still running");
	return;
}
var obj1944_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_4_loopCount = 0;
obj1944_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj1944: Event droppedInsideTargetActions_3
 *
 */
$("#obj1944").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj1944_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1944_droppedInsideTargetActions_3 is still running");
	return;
}
var obj1944_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_3_loopCount = 0;
obj1944_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj1944: Event droppedInsideTargetActions_2
 *
 */
$("#obj1944").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj1944_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1944_droppedInsideTargetActions_2 is still running");
	return;
}
var obj1944_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_2_loopCount = 0;
obj1944_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj1944: Event droppedInsideTargetActions
 *
 */
$("#obj1944").bind("droppedInsideTargetActions", function(event) {
	if (window.obj1944_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj1944_droppedInsideTargetActions is still running");
	return;
}
var obj1944_droppedInsideTargetActions_runningActionsCount = 0;
var obj1944_droppedInsideTargetActions_loopCount = 0;
obj1944_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj65166: Event Touch Down
 *
 */
$("#obj65166").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65166_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65166_onTap is still running");
	return;
}
var obj65166_onTap_runningActionsCount = 0;
var obj65166_onTap_loopCount = 0;
obj65166_onTap_actionGroup0();
});










/*
 *
 *   obj65158: Event Touch Down
 *
 */
$("#obj65158").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj65158_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj65158_onTap is still running");
	return;
}
var obj65158_onTap_runningActionsCount = 0;
var obj65158_onTap_loopCount = 0;
obj65158_onTap_actionGroup0();
});










/*
 *
 *   obj86949: Event Touch Down
 *
 */
$("#obj86949").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86949_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86949_onTap is still running");
	return;
}
var obj86949_onTap_runningActionsCount = 0;
var obj86949_onTap_loopCount = 0;
obj86949_onTap_actionGroup0();
});










/*
 *
 *   obj86944: Event Touch Down
 *
 */
$("#obj86944").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj86944_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj86944_onTap is still running");
	return;
}
var obj86944_onTap_runningActionsCount = 0;
var obj86944_onTap_loopCount = 0;
obj86944_onTap_actionGroup0();
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
	
$("#obj1864").trigger('SCEventShow');
$("#obj1866").trigger('SCEventShow');
$("#obj1869").trigger('SCEventShow');
$("#obj1872").trigger('SCEventShow');
$("#obj1889").trigger('SCEventShow');
$("#obj1891").trigger('SCEventShow');
$("#obj1893").trigger('SCEventShow');
$("#obj1899").trigger('SCEventShow');
$("#obj1895").trigger('SCEventShow');
$("#obj1897").trigger('SCEventShow');
$("#obj1901").trigger('SCEventShow');
$("#obj1903").trigger('SCEventShow');
$("#obj1907").trigger('SCEventShow');
$("#obj1909").trigger('SCEventShow');
$("#obj1911").trigger('SCEventShow');
$("#obj1913").trigger('SCEventShow');
$("#obj1915").trigger('SCEventShow');
$("#obj1917").trigger('SCEventShow');
$("#obj1919").trigger('SCEventShow');
$("#obj1921").trigger('SCEventShow');
$("#obj1923").trigger('SCEventShow');
$("#obj1925").trigger('SCEventShow');
$("#obj1927").trigger('SCEventShow');
$("#obj1946").trigger('SCEventShow');
$("#obj1955").trigger('SCEventShow');
$("#obj1956").trigger('SCEventShow');
$("#obj1968").trigger('SCEventShow');
$("#obj1929").trigger('SCEventShow');
$("#obj1933").trigger('SCEventShow');
$("#obj1935").trigger('SCEventShow');
$("#obj1944").trigger('SCEventShow');
$("#obj65166").trigger('SCEventShow');
$("#obj65158").trigger('SCEventShow');
$("#obj86949").trigger('SCEventShow');
$("#obj86944").trigger('SCEventShow');
$("#obj86954").trigger('SCEventShow');
$("#obj94655").trigger('SCEventShow');
$("#obj65172").trigger('SCEventShow');
	
});