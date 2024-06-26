pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 42095;
pubcoder.page.title = pubcoder.page.title || "145";
pubcoder.page.number = pubcoder.page.number || 145;
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
var obj42500_onTap_activeActionGroupIndex = -1;
var obj42500_onTap_runningActionsCount = 0;
var obj42500_onTap_loopCount = 0;
var obj42497_onTap_activeActionGroupIndex = -1;
var obj42497_onTap_runningActionsCount = 0;
var obj42497_onTap_loopCount = 0;
var obj42493_onTap_activeActionGroupIndex = -1;
var obj42493_onTap_runningActionsCount = 0;
var obj42493_onTap_loopCount = 0;
var obj42523_onDrag_activeActionGroupIndex = -1;
var obj42523_onDrag_runningActionsCount = 0;
var obj42523_onDrag_loopCount = 0;
var obj42523_onTouchDown_activeActionGroupIndex = -1;
var obj42523_onTouchDown_runningActionsCount = 0;
var obj42523_onTouchDown_loopCount = 0;
var obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_loopCount = 0;
var obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_6_loopCount = 0;
var obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_5_loopCount = 0;
var obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_4_loopCount = 0;
var obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_3_loopCount = 0;
var obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_2_loopCount = 0;
var obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj42523_droppedInsideTargetActions_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_loopCount = 0;
var obj42526_onDrag_activeActionGroupIndex = -1;
var obj42526_onDrag_runningActionsCount = 0;
var obj42526_onDrag_loopCount = 0;
var obj42526_onTouchDown_activeActionGroupIndex = -1;
var obj42526_onTouchDown_runningActionsCount = 0;
var obj42526_onTouchDown_loopCount = 0;
var obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_loopCount = 0;
var obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_6_loopCount = 0;
var obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_5_loopCount = 0;
var obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_4_loopCount = 0;
var obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_3_loopCount = 0;
var obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_2_loopCount = 0;
var obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj42526_droppedInsideTargetActions_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_loopCount = 0;
var obj42662_onDrag_activeActionGroupIndex = -1;
var obj42662_onDrag_runningActionsCount = 0;
var obj42662_onDrag_loopCount = 0;
var obj42662_onTouchDown_activeActionGroupIndex = -1;
var obj42662_onTouchDown_runningActionsCount = 0;
var obj42662_onTouchDown_loopCount = 0;
var obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_loopCount = 0;
var obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_6_loopCount = 0;
var obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_5_loopCount = 0;
var obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_4_loopCount = 0;
var obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_3_loopCount = 0;
var obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_2_loopCount = 0;
var obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj42662_droppedInsideTargetActions_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_loopCount = 0;
var obj42709_onDrag_activeActionGroupIndex = -1;
var obj42709_onDrag_runningActionsCount = 0;
var obj42709_onDrag_loopCount = 0;
var obj42709_onTouchDown_activeActionGroupIndex = -1;
var obj42709_onTouchDown_runningActionsCount = 0;
var obj42709_onTouchDown_loopCount = 0;
var obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_loopCount = 0;
var obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_6_loopCount = 0;
var obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_5_loopCount = 0;
var obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_4_loopCount = 0;
var obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_3_loopCount = 0;
var obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_2_loopCount = 0;
var obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj42709_droppedInsideTargetActions_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_loopCount = 0;
var obj42755_onDrag_activeActionGroupIndex = -1;
var obj42755_onDrag_runningActionsCount = 0;
var obj42755_onDrag_loopCount = 0;
var obj42755_onTouchDown_activeActionGroupIndex = -1;
var obj42755_onTouchDown_runningActionsCount = 0;
var obj42755_onTouchDown_loopCount = 0;
var obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_loopCount = 0;
var obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
var obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_6_loopCount = 0;
var obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_5_loopCount = 0;
var obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_4_loopCount = 0;
var obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_3_loopCount = 0;
var obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_2_loopCount = 0;
var obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj42755_droppedInsideTargetActions_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_loopCount = 0;
var obj67326_onTap_activeActionGroupIndex = -1;
var obj67326_onTap_runningActionsCount = 0;
var obj67326_onTap_loopCount = 0;
var obj67318_onTap_activeActionGroupIndex = -1;
var obj67318_onTap_runningActionsCount = 0;
var obj67318_onTap_loopCount = 0;
var obj88609_onTap_activeActionGroupIndex = -1;
var obj88609_onTap_runningActionsCount = 0;
var obj88609_onTap_loopCount = 0;
var obj88604_onTap_activeActionGroupIndex = -1;
var obj88604_onTap_runningActionsCount = 0;
var obj88604_onTap_loopCount = 0;
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
		
obj42500_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42500_onTap_activeActionGroupIndex = -1;
		$("#obj42500").trigger("obj42500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42500) {
				console.warn("de-queueing event obj42500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42500_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_42502();
function goToPage_42502() {
	window.obj42500_onTap_runningActionsCount = obj42500_onTap_runningActionsCount + 1;
	$("#anchor857")[0].click();
	window.obj42500_onTap_runningActionsCount = window.obj42500_onTap_runningActionsCount - 1;
if (window.obj42500_onTap_runningActionsCount < 0) {
	window.obj42500_onTap_runningActionsCount = 0;
} else if (window.obj42500_onTap_runningActionsCount == 0) {
	obj42500_onTap_actionGroup1();
}
}





















};
obj42500_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42500_onTap_activeActionGroupIndex = -1;
		$("#obj42500").trigger("obj42500_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42500) {
				console.warn("de-queueing event obj42500." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42500").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42500_onTap_activeActionGroupIndex = 1;
	





















};
obj42497_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42497_onTap_activeActionGroupIndex = -1;
		$("#obj42497").trigger("obj42497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42497) {
				console.warn("de-queueing event obj42497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42497_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_42499();
function goToPage_42499() {
	window.obj42497_onTap_runningActionsCount = obj42497_onTap_runningActionsCount + 1;
	$("#anchor858")[0].click();
	window.obj42497_onTap_runningActionsCount = window.obj42497_onTap_runningActionsCount - 1;
if (window.obj42497_onTap_runningActionsCount < 0) {
	window.obj42497_onTap_runningActionsCount = 0;
} else if (window.obj42497_onTap_runningActionsCount == 0) {
	obj42497_onTap_actionGroup1();
}
}





















};
obj42497_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42497_onTap_activeActionGroupIndex = -1;
		$("#obj42497").trigger("obj42497_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42497) {
				console.warn("de-queueing event obj42497." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42497").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42497_onTap_activeActionGroupIndex = 1;
	





















};
obj42493_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42493_onTap_activeActionGroupIndex = -1;
		$("#obj42493").trigger("obj42493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42493) {
				console.warn("de-queueing event obj42493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42493_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_42495();
function goToPage_42495() {
	window.obj42493_onTap_runningActionsCount = obj42493_onTap_runningActionsCount + 1;
	$("#anchor859")[0].click();
	window.obj42493_onTap_runningActionsCount = window.obj42493_onTap_runningActionsCount - 1;
if (window.obj42493_onTap_runningActionsCount < 0) {
	window.obj42493_onTap_runningActionsCount = 0;
} else if (window.obj42493_onTap_runningActionsCount == 0) {
	obj42493_onTap_actionGroup1();
}
}





















};
obj42493_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42493_onTap_activeActionGroupIndex = -1;
		$("#obj42493").trigger("obj42493_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42493) {
				console.warn("de-queueing event obj42493." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42493").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42493_onTap_activeActionGroupIndex = 1;
	





















};
obj42523_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj42523");
//	action: dragDrop
//	target: obj42523 
dragDrop_42538();
function dragDrop_42538() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj42523_onTouchDown_runningActionsCount = obj42523_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj42523');
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
	  	containerNode = $('#obj42485');
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
    	window.obj42523_onTouchDown_runningActionsCount = window.obj42523_onTouchDown_runningActionsCount - 1;
if (window.obj42523_onTouchDown_runningActionsCount < 0) {
	window.obj42523_onTouchDown_runningActionsCount = 0;
} else if (window.obj42523_onTouchDown_runningActionsCount == 0) {
	obj42523_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj42475","#obj42467","#obj42518","#obj42477","#obj42469","#obj42461");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_42538 = false;
    	var dropped_id_42538;
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
					dropped_42538 = true;
					dropped_id_42538 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_42538) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj42523").trigger('SCActionDragDrop42538_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj42523_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj42523 
move_92621();
function move_92621() {
	window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount = obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount = window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj42523_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42591();
function runjs_42591() {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42523").css("border-color", "#C00000"); $("#obj42523").css("border-width", "2px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "10px"); $("#obj42523").css("-webkit-border-radius", "10px"); $("#obj42523").css("-moz-border-radius", "10px"); $("#obj42523_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42439 
hide_42592();
function hide_42592() {
	var selector = "#obj42439";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42592(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42523_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42593();
function switchText_42593() {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42523 
move_42594();
function move_42594() {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj42523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj42523_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42595();
function runjs_42595() {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42523").css("border-color", "rgba(0,0,0,0)"); $("#obj42523").css("border-width", "0px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "0px"); $("#obj42523").css("-webkit-border-radius", "0px"); $("#obj42523").css("-moz-border-radius", "0px"); $("#obj42523_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42439
(function(){
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj42439";
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
					window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42523_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42597();
function playAudio_42597() {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj42523_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42598();
function switchText_42598() {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = obj42523_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_6_runningActionsCount = window.obj42523_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj42523_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42582();
function runjs_42582() {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42523").css("border-color", "#C00000"); $("#obj42523").css("border-width", "2px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "10px"); $("#obj42523").css("-webkit-border-radius", "10px"); $("#obj42523").css("-moz-border-radius", "10px"); $("#obj42523_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42447 
hide_42583();
function hide_42583() {
	var selector = "#obj42447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42583(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42523_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42584();
function switchText_42584() {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42523 
move_42585();
function move_42585() {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj42523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj42523_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42586();
function runjs_42586() {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42523").css("border-color", "rgba(0,0,0,0)"); $("#obj42523").css("border-width", "0px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "0px"); $("#obj42523").css("-webkit-border-radius", "0px"); $("#obj42523").css("-moz-border-radius", "0px"); $("#obj42523_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42447
(function(){
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj42447";
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
					window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42523_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42588();
function playAudio_42588() {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj42523_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42589();
function switchText_42589() {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = obj42523_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_5_runningActionsCount = window.obj42523_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj42523_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42570();
function runjs_42570() {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42523").css("border-color", "#C00000"); $("#obj42523").css("border-width", "2px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "10px"); $("#obj42523").css("-webkit-border-radius", "10px"); $("#obj42523").css("-moz-border-radius", "10px"); $("#obj42523_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42455 
hide_42571();
function hide_42571() {
	var selector = "#obj42455";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42571(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42523_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42561();
function switchText_42561() {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42523 
move_42562();
function move_42562() {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj42523");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 86;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj42523_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42574();
function runjs_42574() {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42523").css("border-color", "rgba(0,0,0,0)"); $("#obj42523").css("border-width", "0px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "0px"); $("#obj42523").css("-webkit-border-radius", "0px"); $("#obj42523").css("-moz-border-radius", "0px"); $("#obj42523_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42455
(function(){
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj42455";
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
					window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42523_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42568();
function playAudio_42568() {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj42523_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42569();
function switchText_42569() {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = obj42523_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_4_runningActionsCount = window.obj42523_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj42523_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42552();
function runjs_42552() {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = obj42523_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42523").css("border-color", "#058E3F"); $("#obj42523").css("border-width", "2px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "10px"); $("#obj42523").css("-webkit-border-radius", "10px"); $("#obj42523").css("-moz-border-radius", "10px"); $("#obj42523_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42554();
function switchText_42554() {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = obj42523_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42520 
hide_42553();
function hide_42553() {
	var selector = "#obj42520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = obj42523_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42553(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42523_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42555();
function playAudio_42555() {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = obj42523_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj42523_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90516();
function switchText_90516() {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = obj42523_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_3_runningActionsCount = window.obj42523_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj42523_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42547();
function runjs_42547() {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = obj42523_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42523").css("border-color", "#058E3F"); $("#obj42523").css("border-width", "2px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "10px"); $("#obj42523").css("-webkit-border-radius", "10px"); $("#obj42523").css("-moz-border-radius", "10px"); $("#obj42523_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42549();
function switchText_42549() {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = obj42523_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42445 
hide_42548();
function hide_42548() {
	var selector = "#obj42445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = obj42523_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42548(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42523_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42550();
function playAudio_42550() {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = obj42523_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj42523_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90515();
function switchText_90515() {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = obj42523_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_2_runningActionsCount = window.obj42523_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj42523_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42545();
function runjs_42545() {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = obj42523_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42523").css("border-color", "#058E3F"); $("#obj42523").css("border-width", "2px"); $("#obj42523").css("border-style", "solid"); $("#obj42523").css("border-radius", "10px"); $("#obj42523").css("-webkit-border-radius", "10px"); $("#obj42523").css("-moz-border-radius", "10px"); $("#obj42523_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj42523_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42543();
function switchText_42543() {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = obj42523_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42453 
hide_42541();
function hide_42541() {
	var selector = "#obj42453";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42523_droppedInsideTargetActions_runningActionsCount = obj42523_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42541(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42523_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42544();
function playAudio_42544() {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = obj42523_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj42523_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90514();
function switchText_90514() {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = obj42523_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42523_droppedInsideTargetActions_runningActionsCount = window.obj42523_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42523_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42523_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42523_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42523_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj42523_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42523").trigger("obj42523_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42523) {
				console.warn("de-queueing event obj42523." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42523").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42523_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj42526_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj42526");
//	action: dragDrop
//	target: obj42526 
dragDrop_42612();
function dragDrop_42612() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj42526_onTouchDown_runningActionsCount = obj42526_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj42526');
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
	  	containerNode = $('#obj42485');
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
    	window.obj42526_onTouchDown_runningActionsCount = window.obj42526_onTouchDown_runningActionsCount - 1;
if (window.obj42526_onTouchDown_runningActionsCount < 0) {
	window.obj42526_onTouchDown_runningActionsCount = 0;
} else if (window.obj42526_onTouchDown_runningActionsCount == 0) {
	obj42526_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj42477","#obj42469","#obj42461","#obj42475","#obj42467","#obj42518");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_42612 = false;
    	var dropped_id_42612;
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
					dropped_42612 = true;
					dropped_id_42612 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_42612) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj42526").trigger('SCActionDragDrop42612_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj42526_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj42526 
move_92623();
function move_92623() {
	window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount = obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42526");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 173;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount = window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj42526_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42647();
function runjs_42647() {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42526").css("border-color", "#C00000"); $("#obj42526").css("border-width", "2px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "10px"); $("#obj42526").css("-webkit-border-radius", "10px"); $("#obj42526").css("-moz-border-radius", "10px"); $("#obj42526_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42520 
hide_42648();
function hide_42648() {
	var selector = "#obj42520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42648(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42526_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42649();
function switchText_42649() {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42526 
move_42650();
function move_42650() {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj42526");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 173;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj42526_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42651();
function runjs_42651() {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42526").css("border-color", "rgba(0,0,0,0)"); $("#obj42526").css("border-width", "0px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "0px"); $("#obj42526").css("-webkit-border-radius", "0px"); $("#obj42526").css("-moz-border-radius", "0px"); $("#obj42526_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42520
(function(){
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj42520";
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
					window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42526_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42653();
function playAudio_42653() {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj42526_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42654();
function switchText_42654() {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = obj42526_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_6_runningActionsCount = window.obj42526_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj42526_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42638();
function runjs_42638() {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42526").css("border-color", "#C00000"); $("#obj42526").css("border-width", "2px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "10px"); $("#obj42526").css("-webkit-border-radius", "10px"); $("#obj42526").css("-moz-border-radius", "10px"); $("#obj42526_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42445 
hide_42639();
function hide_42639() {
	var selector = "#obj42445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42639(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42526_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42640();
function switchText_42640() {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42526 
move_42641();
function move_42641() {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj42526");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 173;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj42526_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42642();
function runjs_42642() {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42526").css("border-color", "rgba(0,0,0,0)"); $("#obj42526").css("border-width", "0px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "0px"); $("#obj42526").css("-webkit-border-radius", "0px"); $("#obj42526").css("-moz-border-radius", "0px"); $("#obj42526_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42445
(function(){
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj42445";
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
					window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42526_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42644();
function playAudio_42644() {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj42526_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42645();
function switchText_42645() {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = obj42526_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_5_runningActionsCount = window.obj42526_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj42526_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42629();
function runjs_42629() {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42526").css("border-color", "#C00000"); $("#obj42526").css("border-width", "2px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "10px"); $("#obj42526").css("-webkit-border-radius", "10px"); $("#obj42526").css("-moz-border-radius", "10px"); $("#obj42526_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42453 
hide_42630();
function hide_42630() {
	var selector = "#obj42453";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42630(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42526_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42631();
function switchText_42631() {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42526 
move_42632();
function move_42632() {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj42526");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 173;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj42526_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42633();
function runjs_42633() {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42526").css("border-color", "rgba(0,0,0,0)"); $("#obj42526").css("border-width", "0px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "0px"); $("#obj42526").css("-webkit-border-radius", "0px"); $("#obj42526").css("-moz-border-radius", "0px"); $("#obj42526_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42453
(function(){
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj42453";
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
					window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42526_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42635();
function playAudio_42635() {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj42526_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42636();
function switchText_42636() {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = obj42526_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_4_runningActionsCount = window.obj42526_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj42526_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42624();
function runjs_42624() {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = obj42526_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42526").css("border-color", "#058E3F"); $("#obj42526").css("border-width", "2px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "10px"); $("#obj42526").css("-webkit-border-radius", "10px"); $("#obj42526").css("-moz-border-radius", "10px"); $("#obj42526_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42626();
function switchText_42626() {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = obj42526_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42439 
hide_42625();
function hide_42625() {
	var selector = "#obj42439";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = obj42526_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42625(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42526_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42627();
function playAudio_42627() {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = obj42526_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj42526_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90519();
function switchText_90519() {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = obj42526_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_3_runningActionsCount = window.obj42526_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj42526_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42619();
function runjs_42619() {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = obj42526_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42526").css("border-color", "#058E3F"); $("#obj42526").css("border-width", "2px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "10px"); $("#obj42526").css("-webkit-border-radius", "10px"); $("#obj42526").css("-moz-border-radius", "10px"); $("#obj42526_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42621();
function switchText_42621() {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = obj42526_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42447 
hide_42620();
function hide_42620() {
	var selector = "#obj42447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = obj42526_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42620(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42526_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42622();
function playAudio_42622() {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = obj42526_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj42526_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90518();
function switchText_90518() {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = obj42526_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_2_runningActionsCount = window.obj42526_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj42526_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42614();
function runjs_42614() {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = obj42526_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42526").css("border-color", "#058E3F"); $("#obj42526").css("border-width", "2px"); $("#obj42526").css("border-style", "solid"); $("#obj42526").css("border-radius", "10px"); $("#obj42526").css("-webkit-border-radius", "10px"); $("#obj42526").css("-moz-border-radius", "10px"); $("#obj42526_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj42526_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42616();
function switchText_42616() {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = obj42526_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42455 
hide_42615();
function hide_42615() {
	var selector = "#obj42455";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42526_droppedInsideTargetActions_runningActionsCount = obj42526_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42615(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42526_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42617();
function playAudio_42617() {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = obj42526_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj42526_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90517();
function switchText_90517() {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = obj42526_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42526_droppedInsideTargetActions_runningActionsCount = window.obj42526_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42526_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42526_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42526_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42526_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj42526_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42526").trigger("obj42526_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42526) {
				console.warn("de-queueing event obj42526." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42526").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42526_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj42662_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj42662");
//	action: dragDrop
//	target: obj42662 
dragDrop_42665();
function dragDrop_42665() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj42662_onTouchDown_runningActionsCount = obj42662_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj42662');
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
	  	containerNode = $('#obj42485');
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
    	window.obj42662_onTouchDown_runningActionsCount = window.obj42662_onTouchDown_runningActionsCount - 1;
if (window.obj42662_onTouchDown_runningActionsCount < 0) {
	window.obj42662_onTouchDown_runningActionsCount = 0;
} else if (window.obj42662_onTouchDown_runningActionsCount == 0) {
	obj42662_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj42477","#obj42469","#obj42461","#obj42475","#obj42467","#obj42518");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_42665 = false;
    	var dropped_id_42665;
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
					dropped_42665 = true;
					dropped_id_42665 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_42665) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj42662").trigger('SCActionDragDrop42665_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj42662_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj42662 
move_92625();
function move_92625() {
	window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount = obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 264;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount = window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj42662_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42700();
function runjs_42700() {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42662").css("border-color", "#C00000"); $("#obj42662").css("border-width", "2px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "10px"); $("#obj42662").css("-webkit-border-radius", "10px"); $("#obj42662").css("-moz-border-radius", "10px"); $("#obj42662_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42520 
hide_42701();
function hide_42701() {
	var selector = "#obj42520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42701(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42662_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42702();
function switchText_42702() {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42662 
move_42703();
function move_42703() {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj42662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 264;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj42662_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42704();
function runjs_42704() {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42662").css("border-color", "rgba(0,0,0,0)"); $("#obj42662").css("border-width", "0px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "0px"); $("#obj42662").css("-webkit-border-radius", "0px"); $("#obj42662").css("-moz-border-radius", "0px"); $("#obj42662_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42520
(function(){
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj42520";
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
					window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42662_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42706();
function playAudio_42706() {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj42662_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42707();
function switchText_42707() {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = obj42662_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_6_runningActionsCount = window.obj42662_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj42662_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42691();
function runjs_42691() {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42662").css("border-color", "#C00000"); $("#obj42662").css("border-width", "2px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "10px"); $("#obj42662").css("-webkit-border-radius", "10px"); $("#obj42662").css("-moz-border-radius", "10px"); $("#obj42662_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42445 
hide_42692();
function hide_42692() {
	var selector = "#obj42445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42692(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42662_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42693();
function switchText_42693() {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42662 
move_42694();
function move_42694() {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj42662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 264;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj42662_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42695();
function runjs_42695() {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42662").css("border-color", "rgba(0,0,0,0)"); $("#obj42662").css("border-width", "0px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "0px"); $("#obj42662").css("-webkit-border-radius", "0px"); $("#obj42662").css("-moz-border-radius", "0px"); $("#obj42662_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42445
(function(){
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj42445";
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
					window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42662_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42697();
function playAudio_42697() {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj42662_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42698();
function switchText_42698() {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = obj42662_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_5_runningActionsCount = window.obj42662_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj42662_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42682();
function runjs_42682() {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42662").css("border-color", "#C00000"); $("#obj42662").css("border-width", "2px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "10px"); $("#obj42662").css("-webkit-border-radius", "10px"); $("#obj42662").css("-moz-border-radius", "10px"); $("#obj42662_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42453 
hide_42683();
function hide_42683() {
	var selector = "#obj42453";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42683(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42662_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42684();
function switchText_42684() {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42662 
move_42685();
function move_42685() {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj42662");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 264;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj42662_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42686();
function runjs_42686() {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42662").css("border-color", "rgba(0,0,0,0)"); $("#obj42662").css("border-width", "0px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "0px"); $("#obj42662").css("-webkit-border-radius", "0px"); $("#obj42662").css("-moz-border-radius", "0px"); $("#obj42662_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42453
(function(){
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj42453";
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
					window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42662_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42688();
function playAudio_42688() {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj42662_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42689();
function switchText_42689() {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = obj42662_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_4_runningActionsCount = window.obj42662_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj42662_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42677();
function runjs_42677() {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = obj42662_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42662").css("border-color", "#058E3F"); $("#obj42662").css("border-width", "2px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "10px"); $("#obj42662").css("-webkit-border-radius", "10px"); $("#obj42662").css("-moz-border-radius", "10px"); $("#obj42662_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42679();
function switchText_42679() {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = obj42662_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42439 
hide_42678();
function hide_42678() {
	var selector = "#obj42439";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = obj42662_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42678(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42662_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42680();
function playAudio_42680() {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = obj42662_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj42662_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90522();
function switchText_90522() {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = obj42662_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_3_runningActionsCount = window.obj42662_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj42662_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42672();
function runjs_42672() {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = obj42662_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42662").css("border-color", "#058E3F"); $("#obj42662").css("border-width", "2px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "10px"); $("#obj42662").css("-webkit-border-radius", "10px"); $("#obj42662").css("-moz-border-radius", "10px"); $("#obj42662_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42674();
function switchText_42674() {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = obj42662_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42447 
hide_42673();
function hide_42673() {
	var selector = "#obj42447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = obj42662_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42673(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42662_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42675();
function playAudio_42675() {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = obj42662_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj42662_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90521();
function switchText_90521() {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = obj42662_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_2_runningActionsCount = window.obj42662_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj42662_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42667();
function runjs_42667() {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = obj42662_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42662").css("border-color", "#058E3F"); $("#obj42662").css("border-width", "2px"); $("#obj42662").css("border-style", "solid"); $("#obj42662").css("border-radius", "10px"); $("#obj42662").css("-webkit-border-radius", "10px"); $("#obj42662").css("-moz-border-radius", "10px"); $("#obj42662_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj42662_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42669();
function switchText_42669() {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = obj42662_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42455 
hide_42668();
function hide_42668() {
	var selector = "#obj42455";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42662_droppedInsideTargetActions_runningActionsCount = obj42662_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42668(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42662_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42670();
function playAudio_42670() {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = obj42662_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj42662_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90520();
function switchText_90520() {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = obj42662_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42662_droppedInsideTargetActions_runningActionsCount = window.obj42662_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42662_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42662_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42662_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42662_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj42662_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42662").trigger("obj42662_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42662) {
				console.warn("de-queueing event obj42662." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42662").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42662_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj42709_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj42709");
//	action: dragDrop
//	target: obj42709 
dragDrop_42712();
function dragDrop_42712() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj42709_onTouchDown_runningActionsCount = obj42709_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj42709');
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
	  	containerNode = $('#obj42485');
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
    	window.obj42709_onTouchDown_runningActionsCount = window.obj42709_onTouchDown_runningActionsCount - 1;
if (window.obj42709_onTouchDown_runningActionsCount < 0) {
	window.obj42709_onTouchDown_runningActionsCount = 0;
} else if (window.obj42709_onTouchDown_runningActionsCount == 0) {
	obj42709_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj42475","#obj42467","#obj42518","#obj42477","#obj42469","#obj42461");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_42712 = false;
    	var dropped_id_42712;
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
					dropped_42712 = true;
					dropped_id_42712 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_42712) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj42709").trigger('SCActionDragDrop42712_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj42709_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj42709 
move_92627();
function move_92627() {
	window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount = obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42709");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount = window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj42709_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42747();
function runjs_42747() {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42709").css("border-color", "#C00000"); $("#obj42709").css("border-width", "2px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "10px"); $("#obj42709").css("-webkit-border-radius", "10px"); $("#obj42709").css("-moz-border-radius", "10px"); $("#obj42709_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42439 
hide_42748();
function hide_42748() {
	var selector = "#obj42439";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42748(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42709_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42749();
function switchText_42749() {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42709 
move_42750();
function move_42750() {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj42709");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj42709_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42751();
function runjs_42751() {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42709").css("border-color", "rgba(0,0,0,0)"); $("#obj42709").css("border-width", "0px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "0px"); $("#obj42709").css("-webkit-border-radius", "0px"); $("#obj42709").css("-moz-border-radius", "0px"); $("#obj42709_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42439
(function(){
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj42439";
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
					window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42709_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42753();
function playAudio_42753() {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj42709_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42754();
function switchText_42754() {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = obj42709_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_6_runningActionsCount = window.obj42709_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj42709_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42738();
function runjs_42738() {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42709").css("border-color", "#C00000"); $("#obj42709").css("border-width", "2px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "10px"); $("#obj42709").css("-webkit-border-radius", "10px"); $("#obj42709").css("-moz-border-radius", "10px"); $("#obj42709_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42447 
hide_42739();
function hide_42739() {
	var selector = "#obj42447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42739(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42709_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42740();
function switchText_42740() {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42709 
move_42741();
function move_42741() {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj42709");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj42709_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42742();
function runjs_42742() {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42709").css("border-color", "rgba(0,0,0,0)"); $("#obj42709").css("border-width", "0px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "0px"); $("#obj42709").css("-webkit-border-radius", "0px"); $("#obj42709").css("-moz-border-radius", "0px"); $("#obj42709_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42447
(function(){
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj42447";
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
					window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42709_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42744();
function playAudio_42744() {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj42709_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42745();
function switchText_42745() {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = obj42709_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_5_runningActionsCount = window.obj42709_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj42709_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42729();
function runjs_42729() {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42709").css("border-color", "#C00000"); $("#obj42709").css("border-width", "2px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "10px"); $("#obj42709").css("-webkit-border-radius", "10px"); $("#obj42709").css("-moz-border-radius", "10px"); $("#obj42709_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42455 
hide_42730();
function hide_42730() {
	var selector = "#obj42455";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42730(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42709_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42731();
function switchText_42731() {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42709 
move_42732();
function move_42732() {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj42709");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 356;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj42709_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42733();
function runjs_42733() {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42709").css("border-color", "rgba(0,0,0,0)"); $("#obj42709").css("border-width", "0px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "0px"); $("#obj42709").css("-webkit-border-radius", "0px"); $("#obj42709").css("-moz-border-radius", "0px"); $("#obj42709_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42455
(function(){
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj42455";
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
					window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42709_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42735();
function playAudio_42735() {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj42709_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42736();
function switchText_42736() {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = obj42709_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_4_runningActionsCount = window.obj42709_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj42709_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42724();
function runjs_42724() {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = obj42709_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42709").css("border-color", "#058E3F"); $("#obj42709").css("border-width", "2px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "10px"); $("#obj42709").css("-webkit-border-radius", "10px"); $("#obj42709").css("-moz-border-radius", "10px"); $("#obj42709_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42726();
function switchText_42726() {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = obj42709_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42520 
hide_42725();
function hide_42725() {
	var selector = "#obj42520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = obj42709_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42725(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42709_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42727();
function playAudio_42727() {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = obj42709_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj42709_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90525();
function switchText_90525() {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = obj42709_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_3_runningActionsCount = window.obj42709_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj42709_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42719();
function runjs_42719() {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = obj42709_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42709").css("border-color", "#058E3F"); $("#obj42709").css("border-width", "2px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "10px"); $("#obj42709").css("-webkit-border-radius", "10px"); $("#obj42709").css("-moz-border-radius", "10px"); $("#obj42709_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42721();
function switchText_42721() {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = obj42709_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42445 
hide_42720();
function hide_42720() {
	var selector = "#obj42445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = obj42709_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42720(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42709_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42722();
function playAudio_42722() {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = obj42709_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj42709_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90524();
function switchText_90524() {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = obj42709_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_2_runningActionsCount = window.obj42709_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj42709_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42714();
function runjs_42714() {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = obj42709_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42709").css("border-color", "#058E3F"); $("#obj42709").css("border-width", "2px"); $("#obj42709").css("border-style", "solid"); $("#obj42709").css("border-radius", "10px"); $("#obj42709").css("-webkit-border-radius", "10px"); $("#obj42709").css("-moz-border-radius", "10px"); $("#obj42709_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj42709_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42716();
function switchText_42716() {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = obj42709_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42453 
hide_42715();
function hide_42715() {
	var selector = "#obj42453";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42709_droppedInsideTargetActions_runningActionsCount = obj42709_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42715(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42709_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42717();
function playAudio_42717() {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = obj42709_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj42709_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90523();
function switchText_90523() {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = obj42709_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42709_droppedInsideTargetActions_runningActionsCount = window.obj42709_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42709_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42709_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42709_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42709_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj42709_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42709").trigger("obj42709_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42709) {
				console.warn("de-queueing event obj42709." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42709").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42709_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj42755_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj42755");
//	action: dragDrop
//	target: obj42755 
dragDrop_42758();
function dragDrop_42758() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj42755_onTouchDown_runningActionsCount = obj42755_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj42755');
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
	  	containerNode = $('#obj42485');
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
    	window.obj42755_onTouchDown_runningActionsCount = window.obj42755_onTouchDown_runningActionsCount - 1;
if (window.obj42755_onTouchDown_runningActionsCount < 0) {
	window.obj42755_onTouchDown_runningActionsCount = 0;
} else if (window.obj42755_onTouchDown_runningActionsCount == 0) {
	obj42755_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj42475","#obj42467","#obj42518","#obj42477","#obj42469","#obj42461");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5","droppedInsideTargetActions_6") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_42758 = false;
    	var dropped_id_42758;
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
					dropped_42758 = true;
					dropped_id_42758 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_42758) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj42755").trigger('SCActionDragDrop42758_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj42755_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_onTouchDown_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj42755 
move_92629();
function move_92629() {
	window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount = obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj42755");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 447;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount = window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj42755_droppedInsideTargetActions_6_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42793();
function runjs_42793() {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42755").css("border-color", "#C00000"); $("#obj42755").css("border-width", "2px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "10px"); $("#obj42755").css("-webkit-border-radius", "10px"); $("#obj42755").css("-moz-border-radius", "10px"); $("#obj42755_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup1();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_6_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42439 
hide_42794();
function hide_42794() {
	var selector = "#obj42439";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42794(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42755_droppedInsideTargetActions_6_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42795();
function switchText_42795() {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup3();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_6_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42755 
move_42796();
function move_42796() {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;

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
	var targetObject = $("#obj42755");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 447;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup4();
}
		}, 1);
	});
}



















};
obj42755_droppedInsideTargetActions_6_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42797();
function runjs_42797() {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;

	$("#obj42755").css("border-color", "rgba(0,0,0,0)"); $("#obj42755").css("border-width", "0px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "0px"); $("#obj42755").css("-webkit-border-radius", "0px"); $("#obj42755").css("-moz-border-radius", "0px"); $("#obj42755_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup5();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_6_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42439
(function(){
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;

	var selector = "#obj42439";
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
					window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup6();
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
				window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42755_droppedInsideTargetActions_6_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42799();
function playAudio_42799() {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup7();
}
	}
}









};
obj42755_droppedInsideTargetActions_6_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42800();
function switchText_42800() {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = obj42755_droppedInsideTargetActions_6_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_6_runningActionsCount = window.obj42755_droppedInsideTargetActions_6_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_6_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_6_actionGroup8();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_6_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_6_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex = 8;
	





















};
obj42755_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42784();
function runjs_42784() {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42755").css("border-color", "#C00000"); $("#obj42755").css("border-width", "2px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "10px"); $("#obj42755").css("-webkit-border-radius", "10px"); $("#obj42755").css("-moz-border-radius", "10px"); $("#obj42755_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42447 
hide_42785();
function hide_42785() {
	var selector = "#obj42447";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42785(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42755_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42786();
function switchText_42786() {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42755 
move_42787();
function move_42787() {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj42755");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 447;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup4();
}
		}, 1);
	});
}



















};
obj42755_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42788();
function runjs_42788() {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj42755").css("border-color", "rgba(0,0,0,0)"); $("#obj42755").css("border-width", "0px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "0px"); $("#obj42755").css("-webkit-border-radius", "0px"); $("#obj42755").css("-moz-border-radius", "0px"); $("#obj42755_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup5();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42447
(function(){
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj42447";
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
					window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup6();
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
				window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42755_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42790();
function playAudio_42790() {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup7();
}
	}
}









};
obj42755_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42791();
function switchText_42791() {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = obj42755_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_5_runningActionsCount = window.obj42755_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_5_actionGroup8();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	





















};
obj42755_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42775();
function runjs_42775() {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42755").css("border-color", "#C00000"); $("#obj42755").css("border-width", "2px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "10px"); $("#obj42755").css("-webkit-border-radius", "10px"); $("#obj42755").css("-moz-border-radius", "10px"); $("#obj42755_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj42455 
hide_42776();
function hide_42776() {
	var selector = "#obj42455";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42776(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42755_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	















//	action: Switch Text
switchText_42777();
function switchText_42777() {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup3();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	


//	action: move
//	target: obj42755 
move_42778();
function move_42778() {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj42755");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 447;
	var moveY = 621;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup4();
}
		}, 1);
	});
}



















};
obj42755_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_42779();
function runjs_42779() {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj42755").css("border-color", "rgba(0,0,0,0)"); $("#obj42755").css("border-width", "0px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "0px"); $("#obj42755").css("-webkit-border-radius", "0px"); $("#obj42755").css("-moz-border-radius", "0px"); $("#obj42755_img").css("top", "0px").css("left", "0px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup5();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	

//	action: show 
//	selector: #obj42455
(function(){
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj42455";
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
					window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup6();
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
				window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup6();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj42755_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	












//	action: playAudio
//	target: obj42429 
playAudio_42781();
function playAudio_42781() {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj42429")[0];
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
		    window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup7();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup7();
}
	}
}









};
obj42755_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Switch Text
switchText_42782();
function switchText_42782() {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = obj42755_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup8();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_4_runningActionsCount = window.obj42755_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_4_actionGroup8();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	





















};
obj42755_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42770();
function runjs_42770() {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = obj42755_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj42755").css("border-color", "#058E3F"); $("#obj42755").css("border-width", "2px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "10px"); $("#obj42755").css("-webkit-border-radius", "10px"); $("#obj42755").css("-moz-border-radius", "10px"); $("#obj42755_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42772();
function switchText_42772() {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = obj42755_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup2();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42520 
hide_42771();
function hide_42771() {
	var selector = "#obj42520";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = obj42755_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42771(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42755_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42773();
function playAudio_42773() {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = obj42755_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup4();
}
	}
}









};
obj42755_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90528();
function switchText_90528() {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = obj42755_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_3_runningActionsCount = window.obj42755_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	





















};
obj42755_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42765();
function runjs_42765() {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = obj42755_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj42755").css("border-color", "#058E3F"); $("#obj42755").css("border-width", "2px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "10px"); $("#obj42755").css("-webkit-border-radius", "10px"); $("#obj42755").css("-moz-border-radius", "10px"); $("#obj42755_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42767();
function switchText_42767() {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = obj42755_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup2();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42445 
hide_42766();
function hide_42766() {
	var selector = "#obj42445";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = obj42755_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42766(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42755_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42768();
function playAudio_42768() {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = obj42755_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup4();
}
	}
}









};
obj42755_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90527();
function switchText_90527() {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = obj42755_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_2_runningActionsCount = window.obj42755_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	





















};
obj42755_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_42760();
function runjs_42760() {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = obj42755_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj42755").css("border-color", "#058E3F"); $("#obj42755").css("border-width", "2px"); $("#obj42755").css("border-style", "solid"); $("#obj42755").css("border-radius", "10px"); $("#obj42755").css("-webkit-border-radius", "10px"); $("#obj42755").css("-moz-border-radius", "10px"); $("#obj42755_img").css("top", "-2px").css("left", "-2px");
	
	setTimeout(function() {
		window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj42755_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_42762();
function switchText_42762() {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = obj42755_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj42453 
hide_42761();
function hide_42761() {
	var selector = "#obj42453";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj42755_droppedInsideTargetActions_runningActionsCount = obj42755_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_42761(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj42755_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = 3;
	












//	action: playAudio
//	target: obj42431 
playAudio_42763();
function playAudio_42763() {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = obj42755_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj42431")[0];
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
		    window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup4();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup4();
}
	}
}









};
obj42755_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_90526();
function switchText_90526() {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = obj42755_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj42433_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj42433_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj42433").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj42433_content");
			setTimeout(function () {
				window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj42433 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj42755_droppedInsideTargetActions_runningActionsCount = window.obj42755_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj42755_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj42755_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj42755_droppedInsideTargetActions_runningActionsCount == 0) {
	obj42755_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj42755_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj42755").trigger("obj42755_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 42755) {
				console.warn("de-queueing event obj42755." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj42755").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj42755_droppedInsideTargetActions_activeActionGroupIndex = 5;
	





















};
obj67326_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67326_onTap_activeActionGroupIndex = -1;
		$("#obj67326").trigger("obj67326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67326) {
				console.warn("de-queueing event obj67326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67326_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67326 
hide_67329();
function hide_67329() {
	var selector = "#obj67326";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67326_onTap_runningActionsCount = obj67326_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67326_onTap_runningActionsCount = window.obj67326_onTap_runningActionsCount - 1;
if (window.obj67326_onTap_runningActionsCount < 0) {
	window.obj67326_onTap_runningActionsCount = 0;
} else if (window.obj67326_onTap_runningActionsCount == 0) {
	obj67326_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67329(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67326_onTap_runningActionsCount = window.obj67326_onTap_runningActionsCount - 1;
if (window.obj67326_onTap_runningActionsCount < 0) {
	window.obj67326_onTap_runningActionsCount = 0;
} else if (window.obj67326_onTap_runningActionsCount == 0) {
	obj67326_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj67332 
stopMovie_67328();
function stopMovie_67328() {
	window.obj67326_onTap_runningActionsCount = obj67326_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67332")[0];
	myVideo.pause();
	window.obj67326_onTap_runningActionsCount = window.obj67326_onTap_runningActionsCount - 1;
if (window.obj67326_onTap_runningActionsCount < 0) {
	window.obj67326_onTap_runningActionsCount = 0;
} else if (window.obj67326_onTap_runningActionsCount == 0) {
	obj67326_onTap_actionGroup1();
}
}
















};
obj67326_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67326_onTap_activeActionGroupIndex = -1;
		$("#obj67326").trigger("obj67326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67326) {
				console.warn("de-queueing event obj67326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67326_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67318
(function(){
	window.obj67326_onTap_runningActionsCount = obj67326_onTap_runningActionsCount + 1;

	var selector = "#obj67318";
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
					window.obj67326_onTap_runningActionsCount = window.obj67326_onTap_runningActionsCount - 1;
if (window.obj67326_onTap_runningActionsCount < 0) {
	window.obj67326_onTap_runningActionsCount = 0;
} else if (window.obj67326_onTap_runningActionsCount == 0) {
	obj67326_onTap_actionGroup2();
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
				window.obj67326_onTap_runningActionsCount = window.obj67326_onTap_runningActionsCount - 1;
if (window.obj67326_onTap_runningActionsCount < 0) {
	window.obj67326_onTap_runningActionsCount = 0;
} else if (window.obj67326_onTap_runningActionsCount == 0) {
	obj67326_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67326_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67326_onTap_activeActionGroupIndex = -1;
		$("#obj67326").trigger("obj67326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67326) {
				console.warn("de-queueing event obj67326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67326_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67332 
move_67331();
function move_67331() {
	window.obj67326_onTap_runningActionsCount = obj67326_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67332");
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
			window.obj67326_onTap_runningActionsCount = window.obj67326_onTap_runningActionsCount - 1;
if (window.obj67326_onTap_runningActionsCount < 0) {
	window.obj67326_onTap_runningActionsCount = 0;
} else if (window.obj67326_onTap_runningActionsCount == 0) {
	obj67326_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67326_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67326_onTap_activeActionGroupIndex = -1;
		$("#obj67326").trigger("obj67326_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67326) {
				console.warn("de-queueing event obj67326." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67326").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67326_onTap_activeActionGroupIndex = 3;
	





















};
obj67318_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67318_onTap_activeActionGroupIndex = -1;
		$("#obj67318").trigger("obj67318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67318) {
				console.warn("de-queueing event obj67318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67318_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj67318 
hide_67321();
function hide_67321() {
	var selector = "#obj67318";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj67318_onTap_runningActionsCount = obj67318_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj67318_onTap_runningActionsCount = window.obj67318_onTap_runningActionsCount - 1;
if (window.obj67318_onTap_runningActionsCount < 0) {
	window.obj67318_onTap_runningActionsCount = 0;
} else if (window.obj67318_onTap_runningActionsCount == 0) {
	obj67318_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_67321(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj67318_onTap_runningActionsCount = window.obj67318_onTap_runningActionsCount - 1;
if (window.obj67318_onTap_runningActionsCount < 0) {
	window.obj67318_onTap_runningActionsCount = 0;
} else if (window.obj67318_onTap_runningActionsCount == 0) {
	obj67318_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj67332 
playPauseMovie_67320();
function playPauseMovie_67320() {
	window.obj67318_onTap_runningActionsCount = obj67318_onTap_runningActionsCount + 1;
	var myVideo = $("#obj67332")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj67318_onTap_runningActionsCount = window.obj67318_onTap_runningActionsCount - 1;
if (window.obj67318_onTap_runningActionsCount < 0) {
	window.obj67318_onTap_runningActionsCount = 0;
} else if (window.obj67318_onTap_runningActionsCount == 0) {
	obj67318_onTap_actionGroup1();
}
}

















};
obj67318_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67318_onTap_activeActionGroupIndex = -1;
		$("#obj67318").trigger("obj67318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67318) {
				console.warn("de-queueing event obj67318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67318_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj67326
(function(){
	window.obj67318_onTap_runningActionsCount = obj67318_onTap_runningActionsCount + 1;

	var selector = "#obj67326";
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
					window.obj67318_onTap_runningActionsCount = window.obj67318_onTap_runningActionsCount - 1;
if (window.obj67318_onTap_runningActionsCount < 0) {
	window.obj67318_onTap_runningActionsCount = 0;
} else if (window.obj67318_onTap_runningActionsCount == 0) {
	obj67318_onTap_actionGroup2();
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
				window.obj67318_onTap_runningActionsCount = window.obj67318_onTap_runningActionsCount - 1;
if (window.obj67318_onTap_runningActionsCount < 0) {
	window.obj67318_onTap_runningActionsCount = 0;
} else if (window.obj67318_onTap_runningActionsCount == 0) {
	obj67318_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj67318_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj67318_onTap_activeActionGroupIndex = -1;
		$("#obj67318").trigger("obj67318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67318) {
				console.warn("de-queueing event obj67318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67318_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj67332 
move_67323();
function move_67323() {
	window.obj67318_onTap_runningActionsCount = obj67318_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj67332");
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
			window.obj67318_onTap_runningActionsCount = window.obj67318_onTap_runningActionsCount - 1;
if (window.obj67318_onTap_runningActionsCount < 0) {
	window.obj67318_onTap_runningActionsCount = 0;
} else if (window.obj67318_onTap_runningActionsCount == 0) {
	obj67318_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj67318_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj67318_onTap_activeActionGroupIndex = -1;
		$("#obj67318").trigger("obj67318_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 67318) {
				console.warn("de-queueing event obj67318." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj67318").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj67318_onTap_activeActionGroupIndex = 3;
	





















};
obj88609_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88609_onTap_activeActionGroupIndex = -1;
		$("#obj88609").trigger("obj88609_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88609) {
				console.warn("de-queueing event obj88609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88609_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj88614 
stopAudio_88611();
function stopAudio_88611() {
	window.obj88609_onTap_runningActionsCount = obj88609_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88614")[0];
	myAudio.pause();
	window.obj88609_onTap_runningActionsCount = window.obj88609_onTap_runningActionsCount - 1;
if (window.obj88609_onTap_runningActionsCount < 0) {
	window.obj88609_onTap_runningActionsCount = 0;
} else if (window.obj88609_onTap_runningActionsCount == 0) {
	obj88609_onTap_actionGroup1();
}
}








};
obj88609_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88609_onTap_activeActionGroupIndex = -1;
		$("#obj88609").trigger("obj88609_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88609) {
				console.warn("de-queueing event obj88609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88609_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj88609 
hide_88612();
function hide_88612() {
	var selector = "#obj88609";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88609_onTap_runningActionsCount = obj88609_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88609_onTap_runningActionsCount = window.obj88609_onTap_runningActionsCount - 1;
if (window.obj88609_onTap_runningActionsCount < 0) {
	window.obj88609_onTap_runningActionsCount = 0;
} else if (window.obj88609_onTap_runningActionsCount == 0) {
	obj88609_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88612(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88609_onTap_runningActionsCount = window.obj88609_onTap_runningActionsCount - 1;
if (window.obj88609_onTap_runningActionsCount < 0) {
	window.obj88609_onTap_runningActionsCount = 0;
} else if (window.obj88609_onTap_runningActionsCount == 0) {
	obj88609_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88609_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88609_onTap_activeActionGroupIndex = -1;
		$("#obj88609").trigger("obj88609_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88609) {
				console.warn("de-queueing event obj88609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88609_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj88604
(function(){
	window.obj88609_onTap_runningActionsCount = obj88609_onTap_runningActionsCount + 1;

	var selector = "#obj88604";
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
					window.obj88609_onTap_runningActionsCount = window.obj88609_onTap_runningActionsCount - 1;
if (window.obj88609_onTap_runningActionsCount < 0) {
	window.obj88609_onTap_runningActionsCount = 0;
} else if (window.obj88609_onTap_runningActionsCount == 0) {
	obj88609_onTap_actionGroup3();
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
				window.obj88609_onTap_runningActionsCount = window.obj88609_onTap_runningActionsCount - 1;
if (window.obj88609_onTap_runningActionsCount < 0) {
	window.obj88609_onTap_runningActionsCount = 0;
} else if (window.obj88609_onTap_runningActionsCount == 0) {
	obj88609_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88609_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88609_onTap_activeActionGroupIndex = -1;
		$("#obj88609").trigger("obj88609_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88609) {
				console.warn("de-queueing event obj88609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88609_onTap_activeActionGroupIndex = 3;
	





















};
obj88604_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88604_onTap_activeActionGroupIndex = -1;
		$("#obj88604").trigger("obj88604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88604) {
				console.warn("de-queueing event obj88604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88604_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj88604 
hide_88606();
function hide_88606() {
	var selector = "#obj88604";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj88604_onTap_runningActionsCount = obj88604_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj88604_onTap_runningActionsCount = window.obj88604_onTap_runningActionsCount - 1;
if (window.obj88604_onTap_runningActionsCount < 0) {
	window.obj88604_onTap_runningActionsCount = 0;
} else if (window.obj88604_onTap_runningActionsCount == 0) {
	obj88604_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_88606(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj88604_onTap_runningActionsCount = window.obj88604_onTap_runningActionsCount - 1;
if (window.obj88604_onTap_runningActionsCount < 0) {
	window.obj88604_onTap_runningActionsCount = 0;
} else if (window.obj88604_onTap_runningActionsCount == 0) {
	obj88604_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj88604_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88604_onTap_activeActionGroupIndex = -1;
		$("#obj88604").trigger("obj88604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88604) {
				console.warn("de-queueing event obj88604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88604_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj88609
(function(){
	window.obj88604_onTap_runningActionsCount = obj88604_onTap_runningActionsCount + 1;

	var selector = "#obj88609";
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
					window.obj88604_onTap_runningActionsCount = window.obj88604_onTap_runningActionsCount - 1;
if (window.obj88604_onTap_runningActionsCount < 0) {
	window.obj88604_onTap_runningActionsCount = 0;
} else if (window.obj88604_onTap_runningActionsCount == 0) {
	obj88604_onTap_actionGroup2();
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
				window.obj88604_onTap_runningActionsCount = window.obj88604_onTap_runningActionsCount - 1;
if (window.obj88604_onTap_runningActionsCount < 0) {
	window.obj88604_onTap_runningActionsCount = 0;
} else if (window.obj88604_onTap_runningActionsCount == 0) {
	obj88604_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj88604_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj88604_onTap_activeActionGroupIndex = -1;
		$("#obj88604").trigger("obj88604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88604) {
				console.warn("de-queueing event obj88604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88604_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj88614 
playAudio_88608();
function playAudio_88608() {
	window.obj88604_onTap_runningActionsCount = obj88604_onTap_runningActionsCount + 1;
	var myAudio = $("#obj88614")[0];
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
		    window.obj88604_onTap_runningActionsCount = window.obj88604_onTap_runningActionsCount - 1;
if (window.obj88604_onTap_runningActionsCount < 0) {
	window.obj88604_onTap_runningActionsCount = 0;
} else if (window.obj88604_onTap_runningActionsCount == 0) {
	obj88604_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj88604_onTap_runningActionsCount = window.obj88604_onTap_runningActionsCount - 1;
if (window.obj88604_onTap_runningActionsCount < 0) {
	window.obj88604_onTap_runningActionsCount = 0;
} else if (window.obj88604_onTap_runningActionsCount == 0) {
	obj88604_onTap_actionGroup3();
}
	}
}









};
obj88604_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj88604_onTap_activeActionGroupIndex = -1;
		$("#obj88604").trigger("obj88604_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 88604) {
				console.warn("de-queueing event obj88604." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj88604").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj88604_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj42500: Event Touch Down
 *
 */
$("#obj42500").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42500_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42500_onTap is still running");
	return;
}
var obj42500_onTap_runningActionsCount = 0;
var obj42500_onTap_loopCount = 0;
obj42500_onTap_actionGroup0();
});










/*
 *
 *   obj42497: Event Touch Down
 *
 */
$("#obj42497").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42497_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42497_onTap is still running");
	return;
}
var obj42497_onTap_runningActionsCount = 0;
var obj42497_onTap_loopCount = 0;
obj42497_onTap_actionGroup0();
});










/*
 *
 *   obj42493: Event Touch Down
 *
 */
$("#obj42493").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj42493_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42493_onTap is still running");
	return;
}
var obj42493_onTap_runningActionsCount = 0;
var obj42493_onTap_loopCount = 0;
obj42493_onTap_actionGroup0();
});



























































































































































































































































/*
 *
 *   obj42523: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj42523");
	var winTarget = document.getElementById("obj42523");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj42523").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj42523_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj42523_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj42523_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_onTouchDown is still running");
	return;
}
var obj42523_onTouchDown_runningActionsCount = 0;
var obj42523_onTouchDown_loopCount = 0;
obj42523_onTouchDown_actionGroup0();
});



/*
 *
 *   obj42523: Event SCActionDragDrop42538_droppedOutsideTargetActions
 *
 */
$("#obj42523").bind("SCActionDragDrop42538_droppedOutsideTargetActions", function(event) {
	if (window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_SCActionDragDrop42538_droppedOutsideTargetActions is still running");
	return;
}
var obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_loopCount = 0;
obj42523_SCActionDragDrop42538_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj42523: Event droppedInsideTargetActions_6
 *
 */
$("#obj42523").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj42523_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_droppedInsideTargetActions_6 is still running");
	return;
}
var obj42523_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_6_loopCount = 0;
obj42523_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj42523: Event droppedInsideTargetActions_5
 *
 */
$("#obj42523").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj42523_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_droppedInsideTargetActions_5 is still running");
	return;
}
var obj42523_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_5_loopCount = 0;
obj42523_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj42523: Event droppedInsideTargetActions_4
 *
 */
$("#obj42523").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj42523_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_droppedInsideTargetActions_4 is still running");
	return;
}
var obj42523_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_4_loopCount = 0;
obj42523_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj42523: Event droppedInsideTargetActions_3
 *
 */
$("#obj42523").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj42523_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_droppedInsideTargetActions_3 is still running");
	return;
}
var obj42523_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_3_loopCount = 0;
obj42523_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj42523: Event droppedInsideTargetActions_2
 *
 */
$("#obj42523").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj42523_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_droppedInsideTargetActions_2 is still running");
	return;
}
var obj42523_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_2_loopCount = 0;
obj42523_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj42523: Event droppedInsideTargetActions
 *
 */
$("#obj42523").bind("droppedInsideTargetActions", function(event) {
	if (window.obj42523_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42523_droppedInsideTargetActions is still running");
	return;
}
var obj42523_droppedInsideTargetActions_runningActionsCount = 0;
var obj42523_droppedInsideTargetActions_loopCount = 0;
obj42523_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj42526: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj42526");
	var winTarget = document.getElementById("obj42526");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj42526").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj42526_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj42526_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj42526_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_onTouchDown is still running");
	return;
}
var obj42526_onTouchDown_runningActionsCount = 0;
var obj42526_onTouchDown_loopCount = 0;
obj42526_onTouchDown_actionGroup0();
});



/*
 *
 *   obj42526: Event SCActionDragDrop42612_droppedOutsideTargetActions
 *
 */
$("#obj42526").bind("SCActionDragDrop42612_droppedOutsideTargetActions", function(event) {
	if (window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_SCActionDragDrop42612_droppedOutsideTargetActions is still running");
	return;
}
var obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_loopCount = 0;
obj42526_SCActionDragDrop42612_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj42526: Event droppedInsideTargetActions_6
 *
 */
$("#obj42526").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj42526_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_droppedInsideTargetActions_6 is still running");
	return;
}
var obj42526_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_6_loopCount = 0;
obj42526_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj42526: Event droppedInsideTargetActions_5
 *
 */
$("#obj42526").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj42526_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_droppedInsideTargetActions_5 is still running");
	return;
}
var obj42526_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_5_loopCount = 0;
obj42526_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj42526: Event droppedInsideTargetActions_4
 *
 */
$("#obj42526").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj42526_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_droppedInsideTargetActions_4 is still running");
	return;
}
var obj42526_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_4_loopCount = 0;
obj42526_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj42526: Event droppedInsideTargetActions_3
 *
 */
$("#obj42526").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj42526_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_droppedInsideTargetActions_3 is still running");
	return;
}
var obj42526_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_3_loopCount = 0;
obj42526_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj42526: Event droppedInsideTargetActions_2
 *
 */
$("#obj42526").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj42526_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_droppedInsideTargetActions_2 is still running");
	return;
}
var obj42526_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_2_loopCount = 0;
obj42526_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj42526: Event droppedInsideTargetActions
 *
 */
$("#obj42526").bind("droppedInsideTargetActions", function(event) {
	if (window.obj42526_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42526_droppedInsideTargetActions is still running");
	return;
}
var obj42526_droppedInsideTargetActions_runningActionsCount = 0;
var obj42526_droppedInsideTargetActions_loopCount = 0;
obj42526_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj42662: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj42662");
	var winTarget = document.getElementById("obj42662");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj42662").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj42662_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj42662_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj42662_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_onTouchDown is still running");
	return;
}
var obj42662_onTouchDown_runningActionsCount = 0;
var obj42662_onTouchDown_loopCount = 0;
obj42662_onTouchDown_actionGroup0();
});



/*
 *
 *   obj42662: Event SCActionDragDrop42665_droppedOutsideTargetActions
 *
 */
$("#obj42662").bind("SCActionDragDrop42665_droppedOutsideTargetActions", function(event) {
	if (window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_SCActionDragDrop42665_droppedOutsideTargetActions is still running");
	return;
}
var obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_loopCount = 0;
obj42662_SCActionDragDrop42665_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj42662: Event droppedInsideTargetActions_6
 *
 */
$("#obj42662").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj42662_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_droppedInsideTargetActions_6 is still running");
	return;
}
var obj42662_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_6_loopCount = 0;
obj42662_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj42662: Event droppedInsideTargetActions_5
 *
 */
$("#obj42662").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj42662_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_droppedInsideTargetActions_5 is still running");
	return;
}
var obj42662_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_5_loopCount = 0;
obj42662_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj42662: Event droppedInsideTargetActions_4
 *
 */
$("#obj42662").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj42662_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_droppedInsideTargetActions_4 is still running");
	return;
}
var obj42662_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_4_loopCount = 0;
obj42662_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj42662: Event droppedInsideTargetActions_3
 *
 */
$("#obj42662").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj42662_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_droppedInsideTargetActions_3 is still running");
	return;
}
var obj42662_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_3_loopCount = 0;
obj42662_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj42662: Event droppedInsideTargetActions_2
 *
 */
$("#obj42662").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj42662_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_droppedInsideTargetActions_2 is still running");
	return;
}
var obj42662_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_2_loopCount = 0;
obj42662_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj42662: Event droppedInsideTargetActions
 *
 */
$("#obj42662").bind("droppedInsideTargetActions", function(event) {
	if (window.obj42662_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42662_droppedInsideTargetActions is still running");
	return;
}
var obj42662_droppedInsideTargetActions_runningActionsCount = 0;
var obj42662_droppedInsideTargetActions_loopCount = 0;
obj42662_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj42709: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj42709");
	var winTarget = document.getElementById("obj42709");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj42709").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj42709_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj42709_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj42709_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_onTouchDown is still running");
	return;
}
var obj42709_onTouchDown_runningActionsCount = 0;
var obj42709_onTouchDown_loopCount = 0;
obj42709_onTouchDown_actionGroup0();
});



/*
 *
 *   obj42709: Event SCActionDragDrop42712_droppedOutsideTargetActions
 *
 */
$("#obj42709").bind("SCActionDragDrop42712_droppedOutsideTargetActions", function(event) {
	if (window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_SCActionDragDrop42712_droppedOutsideTargetActions is still running");
	return;
}
var obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_loopCount = 0;
obj42709_SCActionDragDrop42712_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj42709: Event droppedInsideTargetActions_6
 *
 */
$("#obj42709").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj42709_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_droppedInsideTargetActions_6 is still running");
	return;
}
var obj42709_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_6_loopCount = 0;
obj42709_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj42709: Event droppedInsideTargetActions_5
 *
 */
$("#obj42709").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj42709_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_droppedInsideTargetActions_5 is still running");
	return;
}
var obj42709_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_5_loopCount = 0;
obj42709_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj42709: Event droppedInsideTargetActions_4
 *
 */
$("#obj42709").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj42709_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_droppedInsideTargetActions_4 is still running");
	return;
}
var obj42709_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_4_loopCount = 0;
obj42709_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj42709: Event droppedInsideTargetActions_3
 *
 */
$("#obj42709").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj42709_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_droppedInsideTargetActions_3 is still running");
	return;
}
var obj42709_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_3_loopCount = 0;
obj42709_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj42709: Event droppedInsideTargetActions_2
 *
 */
$("#obj42709").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj42709_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_droppedInsideTargetActions_2 is still running");
	return;
}
var obj42709_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_2_loopCount = 0;
obj42709_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj42709: Event droppedInsideTargetActions
 *
 */
$("#obj42709").bind("droppedInsideTargetActions", function(event) {
	if (window.obj42709_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42709_droppedInsideTargetActions is still running");
	return;
}
var obj42709_droppedInsideTargetActions_runningActionsCount = 0;
var obj42709_droppedInsideTargetActions_loopCount = 0;
obj42709_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj42755: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj42755");
	var winTarget = document.getElementById("obj42755");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj42755").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj42755_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj42755_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj42755_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_onTouchDown is still running");
	return;
}
var obj42755_onTouchDown_runningActionsCount = 0;
var obj42755_onTouchDown_loopCount = 0;
obj42755_onTouchDown_actionGroup0();
});



/*
 *
 *   obj42755: Event SCActionDragDrop42758_droppedOutsideTargetActions
 *
 */
$("#obj42755").bind("SCActionDragDrop42758_droppedOutsideTargetActions", function(event) {
	if (window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_SCActionDragDrop42758_droppedOutsideTargetActions is still running");
	return;
}
var obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_runningActionsCount = 0;
var obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_loopCount = 0;
obj42755_SCActionDragDrop42758_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj42755: Event droppedInsideTargetActions_6
 *
 */
$("#obj42755").bind("droppedInsideTargetActions_6", function(event) {
	if (window.obj42755_droppedInsideTargetActions_6_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_droppedInsideTargetActions_6 is still running");
	return;
}
var obj42755_droppedInsideTargetActions_6_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_6_loopCount = 0;
obj42755_droppedInsideTargetActions_6_actionGroup0();
});
/*
 *
 *   obj42755: Event droppedInsideTargetActions_5
 *
 */
$("#obj42755").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj42755_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_droppedInsideTargetActions_5 is still running");
	return;
}
var obj42755_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_5_loopCount = 0;
obj42755_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj42755: Event droppedInsideTargetActions_4
 *
 */
$("#obj42755").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj42755_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_droppedInsideTargetActions_4 is still running");
	return;
}
var obj42755_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_4_loopCount = 0;
obj42755_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj42755: Event droppedInsideTargetActions_3
 *
 */
$("#obj42755").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj42755_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_droppedInsideTargetActions_3 is still running");
	return;
}
var obj42755_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_3_loopCount = 0;
obj42755_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj42755: Event droppedInsideTargetActions_2
 *
 */
$("#obj42755").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj42755_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_droppedInsideTargetActions_2 is still running");
	return;
}
var obj42755_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_2_loopCount = 0;
obj42755_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj42755: Event droppedInsideTargetActions
 *
 */
$("#obj42755").bind("droppedInsideTargetActions", function(event) {
	if (window.obj42755_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj42755_droppedInsideTargetActions is still running");
	return;
}
var obj42755_droppedInsideTargetActions_runningActionsCount = 0;
var obj42755_droppedInsideTargetActions_loopCount = 0;
obj42755_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj67326: Event Touch Down
 *
 */
$("#obj67326").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67326_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67326_onTap is still running");
	return;
}
var obj67326_onTap_runningActionsCount = 0;
var obj67326_onTap_loopCount = 0;
obj67326_onTap_actionGroup0();
});










/*
 *
 *   obj67318: Event Touch Down
 *
 */
$("#obj67318").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj67318_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj67318_onTap is still running");
	return;
}
var obj67318_onTap_runningActionsCount = 0;
var obj67318_onTap_loopCount = 0;
obj67318_onTap_actionGroup0();
});










/*
 *
 *   obj88609: Event Touch Down
 *
 */
$("#obj88609").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88609_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88609_onTap is still running");
	return;
}
var obj88609_onTap_runningActionsCount = 0;
var obj88609_onTap_loopCount = 0;
obj88609_onTap_actionGroup0();
});










/*
 *
 *   obj88604: Event Touch Down
 *
 */
$("#obj88604").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj88604_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj88604_onTap is still running");
	return;
}
var obj88604_onTap_runningActionsCount = 0;
var obj88604_onTap_loopCount = 0;
obj88604_onTap_actionGroup0();
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
	
$("#obj42516").trigger('SCEventShow');
$("#obj42500").trigger('SCEventShow');
$("#obj42497").trigger('SCEventShow');
$("#obj42493").trigger('SCEventShow');
$("#obj42491").trigger('SCEventShow');
$("#obj42489").trigger('SCEventShow');
$("#obj42487").trigger('SCEventShow');
$("#obj42485").trigger('SCEventShow');
$("#obj42483").trigger('SCEventShow');
$("#obj42481").trigger('SCEventShow');
$("#obj42477").trigger('SCEventShow');
$("#obj42475").trigger('SCEventShow');
$("#obj42469").trigger('SCEventShow');
$("#obj42467").trigger('SCEventShow');
$("#obj42461").trigger('SCEventShow');
$("#obj42459").trigger('SCEventShow');
$("#obj42455").trigger('SCEventShow');
$("#obj42453").trigger('SCEventShow');
$("#obj42447").trigger('SCEventShow');
$("#obj42445").trigger('SCEventShow');
$("#obj42439").trigger('SCEventShow');
$("#obj42437").trigger('SCEventShow');
$("#obj42435").trigger('SCEventShow');
$("#obj42433").trigger('SCEventShow');
$("#obj42431").trigger('SCEventShow');
$("#obj42429").trigger('SCEventShow');
$("#obj42518").trigger('SCEventShow');
$("#obj42520").trigger('SCEventShow');
$("#obj42523").trigger('SCEventShow');
$("#obj42526").trigger('SCEventShow');
$("#obj42662").trigger('SCEventShow');
$("#obj42709").trigger('SCEventShow');
$("#obj42755").trigger('SCEventShow');
$("#obj67326").trigger('SCEventShow');
$("#obj67318").trigger('SCEventShow');
$("#obj88609").trigger('SCEventShow');
$("#obj88604").trigger('SCEventShow');
$("#obj88614").trigger('SCEventShow');
$("#obj89630").trigger('SCEventShow');
$("#obj94919").trigger('SCEventShow');
$("#obj67332").trigger('SCEventShow');
	
});