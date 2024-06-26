pubcoder.projectID = pubcoder.projectID || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.id = pubcoder.project.id || "AA533DC33A492F4898D0EFF060E4B374";
pubcoder.project.title = pubcoder.project.title || "English P4";
pubcoder.page.id = pubcoder.page.id || 11161;
pubcoder.page.title = pubcoder.page.title || "51";
pubcoder.page.number = pubcoder.page.number || 51;
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
var obj71798_onTap_activeActionGroupIndex = -1;
var obj71798_onTap_runningActionsCount = 0;
var obj71798_onTap_loopCount = 0;
var obj71795_onTap_activeActionGroupIndex = -1;
var obj71795_onTap_runningActionsCount = 0;
var obj71795_onTap_loopCount = 0;
var obj71791_onTap_activeActionGroupIndex = -1;
var obj71791_onTap_runningActionsCount = 0;
var obj71791_onTap_loopCount = 0;
var obj71676_onDrag_activeActionGroupIndex = -1;
var obj71676_onDrag_runningActionsCount = 0;
var obj71676_onDrag_loopCount = 0;
var obj71676_onTouchDown_activeActionGroupIndex = -1;
var obj71676_onTouchDown_runningActionsCount = 0;
var obj71676_onTouchDown_loopCount = 0;
var obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_loopCount = 0;
var obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_5_loopCount = 0;
var obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_4_loopCount = 0;
var obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_3_loopCount = 0;
var obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_2_loopCount = 0;
var obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71676_droppedInsideTargetActions_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_loopCount = 0;
var obj71609_onDrag_activeActionGroupIndex = -1;
var obj71609_onDrag_runningActionsCount = 0;
var obj71609_onDrag_loopCount = 0;
var obj71609_onTouchDown_activeActionGroupIndex = -1;
var obj71609_onTouchDown_runningActionsCount = 0;
var obj71609_onTouchDown_loopCount = 0;
var obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_loopCount = 0;
var obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_5_loopCount = 0;
var obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_4_loopCount = 0;
var obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_3_loopCount = 0;
var obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_2_loopCount = 0;
var obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71609_droppedInsideTargetActions_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_loopCount = 0;
var obj71535_onDrag_activeActionGroupIndex = -1;
var obj71535_onDrag_runningActionsCount = 0;
var obj71535_onDrag_loopCount = 0;
var obj71535_onTouchDown_activeActionGroupIndex = -1;
var obj71535_onTouchDown_runningActionsCount = 0;
var obj71535_onTouchDown_loopCount = 0;
var obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_loopCount = 0;
var obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_5_loopCount = 0;
var obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_4_loopCount = 0;
var obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_3_loopCount = 0;
var obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_2_loopCount = 0;
var obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71535_droppedInsideTargetActions_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_loopCount = 0;
var obj71468_onDrag_activeActionGroupIndex = -1;
var obj71468_onDrag_runningActionsCount = 0;
var obj71468_onDrag_loopCount = 0;
var obj71468_onTouchDown_activeActionGroupIndex = -1;
var obj71468_onTouchDown_runningActionsCount = 0;
var obj71468_onTouchDown_loopCount = 0;
var obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_loopCount = 0;
var obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_5_loopCount = 0;
var obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_4_loopCount = 0;
var obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_3_loopCount = 0;
var obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_2_loopCount = 0;
var obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71468_droppedInsideTargetActions_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_loopCount = 0;
var obj71401_onDrag_activeActionGroupIndex = -1;
var obj71401_onDrag_runningActionsCount = 0;
var obj71401_onDrag_loopCount = 0;
var obj71401_onTouchDown_activeActionGroupIndex = -1;
var obj71401_onTouchDown_runningActionsCount = 0;
var obj71401_onTouchDown_loopCount = 0;
var obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_loopCount = 0;
var obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_5_loopCount = 0;
var obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_4_loopCount = 0;
var obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_3_loopCount = 0;
var obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_2_loopCount = 0;
var obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71401_droppedInsideTargetActions_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_loopCount = 0;
var obj71334_onDrag_activeActionGroupIndex = -1;
var obj71334_onDrag_runningActionsCount = 0;
var obj71334_onDrag_loopCount = 0;
var obj71334_onTouchDown_activeActionGroupIndex = -1;
var obj71334_onTouchDown_runningActionsCount = 0;
var obj71334_onTouchDown_loopCount = 0;
var obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_activeActionGroupIndex = -1;
var obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_loopCount = 0;
var obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
var obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_5_loopCount = 0;
var obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
var obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_4_loopCount = 0;
var obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
var obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_3_loopCount = 0;
var obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
var obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_2_loopCount = 0;
var obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
var obj71334_droppedInsideTargetActions_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_loopCount = 0;
var obj71316_onTap_activeActionGroupIndex = -1;
var obj71316_onTap_runningActionsCount = 0;
var obj71316_onTap_loopCount = 0;
var obj71308_onTap_activeActionGroupIndex = -1;
var obj71308_onTap_runningActionsCount = 0;
var obj71308_onTap_loopCount = 0;
var obj87357_onTap_activeActionGroupIndex = -1;
var obj87357_onTap_runningActionsCount = 0;
var obj87357_onTap_loopCount = 0;
var obj87352_onTap_activeActionGroupIndex = -1;
var obj87352_onTap_runningActionsCount = 0;
var obj87352_onTap_loopCount = 0;
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
		
obj71798_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71798_onTap_activeActionGroupIndex = -1;
		$("#obj71798").trigger("obj71798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71798) {
				console.warn("de-queueing event obj71798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71798_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71800();
function goToPage_71800() {
	window.obj71798_onTap_runningActionsCount = obj71798_onTap_runningActionsCount + 1;
	$("#anchor308")[0].click();
	window.obj71798_onTap_runningActionsCount = window.obj71798_onTap_runningActionsCount - 1;
if (window.obj71798_onTap_runningActionsCount < 0) {
	window.obj71798_onTap_runningActionsCount = 0;
} else if (window.obj71798_onTap_runningActionsCount == 0) {
	obj71798_onTap_actionGroup1();
}
}





















};
obj71798_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71798_onTap_activeActionGroupIndex = -1;
		$("#obj71798").trigger("obj71798_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71798) {
				console.warn("de-queueing event obj71798." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71798").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71798_onTap_activeActionGroupIndex = 1;
	





















};
obj71795_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71795_onTap_activeActionGroupIndex = -1;
		$("#obj71795").trigger("obj71795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71795) {
				console.warn("de-queueing event obj71795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71795_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71797();
function goToPage_71797() {
	window.obj71795_onTap_runningActionsCount = obj71795_onTap_runningActionsCount + 1;
	$("#anchor309")[0].click();
	window.obj71795_onTap_runningActionsCount = window.obj71795_onTap_runningActionsCount - 1;
if (window.obj71795_onTap_runningActionsCount < 0) {
	window.obj71795_onTap_runningActionsCount = 0;
} else if (window.obj71795_onTap_runningActionsCount == 0) {
	obj71795_onTap_actionGroup1();
}
}





















};
obj71795_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71795_onTap_activeActionGroupIndex = -1;
		$("#obj71795").trigger("obj71795_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71795) {
				console.warn("de-queueing event obj71795." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71795").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71795_onTap_activeActionGroupIndex = 1;
	





















};
obj71791_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71791_onTap_activeActionGroupIndex = -1;
		$("#obj71791").trigger("obj71791_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71791) {
				console.warn("de-queueing event obj71791." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71791").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71791_onTap_activeActionGroupIndex = 0;
	
//	action: goToPage
goToPage_71793();
function goToPage_71793() {
	window.obj71791_onTap_runningActionsCount = obj71791_onTap_runningActionsCount + 1;
	$("#anchor310")[0].click();
	window.obj71791_onTap_runningActionsCount = window.obj71791_onTap_runningActionsCount - 1;
if (window.obj71791_onTap_runningActionsCount < 0) {
	window.obj71791_onTap_runningActionsCount = 0;
} else if (window.obj71791_onTap_runningActionsCount == 0) {
	obj71791_onTap_actionGroup1();
}
}





















};
obj71791_onTap_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71791_onTap_activeActionGroupIndex = -1;
		$("#obj71791").trigger("obj71791_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71791) {
				console.warn("de-queueing event obj71791." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71791").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71791_onTap_activeActionGroupIndex = 1;
	





















};
obj71676_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71676");
//	action: dragDrop
//	target: obj71676 
dragDrop_71679();
function dragDrop_71679() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71676_onTouchDown_runningActionsCount = obj71676_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71676');
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
	  	containerNode = $('#obj71781');
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
    	window.obj71676_onTouchDown_runningActionsCount = window.obj71676_onTouchDown_runningActionsCount - 1;
if (window.obj71676_onTouchDown_runningActionsCount < 0) {
	window.obj71676_onTouchDown_runningActionsCount = 0;
} else if (window.obj71676_onTouchDown_runningActionsCount == 0) {
	obj71676_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71771","#obj71777","#obj71775","#obj71773","#obj71753");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71679 = false;
    	var dropped_id_71679;
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
					dropped_71679 = true;
					dropped_id_71679 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71679) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71676").trigger('SCActionDragDrop71679_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71676_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71676 
move_92244();
function move_92244() {
	window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount = obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71676");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 99;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount = window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71676_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71730();
function runjs_71730() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71731();
function runjs_71731() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#C00000"); $("#obj71753").css("border-width", "2px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71751 
hide_71732();
function hide_71732() {
	var selector = "#obj71751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71732(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71676_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71733();
function runjs_71733() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71676").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71734();
function switchText_71734() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71676 
move_71735();
function move_71735() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj71676");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 99;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj71676_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71736();
function runjs_71736() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71737();
function runjs_71737() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#000000"); $("#obj71753").css("border-width", "1px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71751
(function(){
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj71751";
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
					window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71676_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71739();
function runjs_71739() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71676").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71740();
function runjs_71740() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71676").css("border-color", "rgba(0,0,0,0)"); $("#obj71676").css("border-width", "0px"); $("#obj71676").css("border-style", "solid"); $("#obj71676").css("border-radius", "10px"); $("#obj71676").css("-webkit-border-radius", "10px"); $("#obj71676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71741();
function playAudio_71741() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj71676_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71742();
function switchText_71742() {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = obj71676_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_5_runningActionsCount = window.obj71676_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj71676_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71716();
function runjs_71716() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71717();
function runjs_71717() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#C00000"); $("#obj71773").css("border-width", "2px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71765 
hide_71718();
function hide_71718() {
	var selector = "#obj71765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71718(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71676_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71719();
function runjs_71719() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71676").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71720();
function switchText_71720() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71676 
move_71721();
function move_71721() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj71676");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 99;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj71676_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71722();
function runjs_71722() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71723();
function runjs_71723() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#000000"); $("#obj71773").css("border-width", "1px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71765
(function(){
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj71765";
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
					window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71676_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71725();
function runjs_71725() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71676").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71726();
function runjs_71726() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71676").css("border-color", "rgba(0,0,0,0)"); $("#obj71676").css("border-width", "0px"); $("#obj71676").css("border-style", "solid"); $("#obj71676").css("border-radius", "10px"); $("#obj71676").css("-webkit-border-radius", "10px"); $("#obj71676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71727();
function playAudio_71727() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj71676_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71728();
function switchText_71728() {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = obj71676_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_4_runningActionsCount = window.obj71676_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj71676_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71702();
function runjs_71702() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71703();
function runjs_71703() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#C00000"); $("#obj71775").css("border-width", "2px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71767 
hide_71704();
function hide_71704() {
	var selector = "#obj71767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71704(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71676_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71705();
function runjs_71705() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71676").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71706();
function switchText_71706() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71676 
move_71707();
function move_71707() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj71676");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 99;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj71676_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71708();
function runjs_71708() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71709();
function runjs_71709() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#000000"); $("#obj71775").css("border-width", "1px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71767
(function(){
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71767";
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
					window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71676_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71711();
function runjs_71711() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71676").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71712();
function runjs_71712() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71676").css("border-color", "rgba(0,0,0,0)"); $("#obj71676").css("border-width", "0px"); $("#obj71676").css("border-style", "solid"); $("#obj71676").css("border-radius", "10px"); $("#obj71676").css("-webkit-border-radius", "10px"); $("#obj71676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71713();
function playAudio_71713() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj71676_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71714();
function switchText_71714() {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = obj71676_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_3_runningActionsCount = window.obj71676_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj71676_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71688();
function runjs_71688() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71689();
function runjs_71689() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#C00000"); $("#obj71777").css("border-width", "2px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71769 
hide_71690();
function hide_71690() {
	var selector = "#obj71769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71690(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71676_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71691();
function runjs_71691() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71676").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71692();
function switchText_71692() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71676 
move_71693();
function move_71693() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj71676");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 99;
	var moveY = 588;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj71676_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71694();
function runjs_71694() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71695();
function runjs_71695() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#000000"); $("#obj71777").css("border-width", "1px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71769
(function(){
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71769";
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
					window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71676_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71697();
function runjs_71697() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71676").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71698();
function runjs_71698() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71676").css("border-color", "rgba(0,0,0,0)"); $("#obj71676").css("border-width", "0px"); $("#obj71676").css("border-style", "solid"); $("#obj71676").css("border-radius", "10px"); $("#obj71676").css("-webkit-border-radius", "10px"); $("#obj71676").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71699();
function playAudio_71699() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj71676_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71700();
function switchText_71700() {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = obj71676_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_2_runningActionsCount = window.obj71676_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj71676_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71681();
function runjs_71681() {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71685();
function switchText_71685() {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71682();
function runjs_71682() {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#058E3F"); $("#obj71771").css("border-width", "2px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71763 
hide_71683();
function hide_71683() {
	var selector = "#obj71763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71683(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71676_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71684();
function runjs_71684() {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71676").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj71676_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71759 
playAudio_71686();
function playAudio_71686() {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71759")[0];
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
		    window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj71676_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90162();
function switchText_90162() {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = obj71676_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71676_droppedInsideTargetActions_runningActionsCount = window.obj71676_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71676_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71676_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71676_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71676_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj71676_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71676").trigger("obj71676_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71676) {
				console.warn("de-queueing event obj71676." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71676").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71676_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj71609_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71609");
//	action: dragDrop
//	target: obj71609 
dragDrop_71612();
function dragDrop_71612() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71609_onTouchDown_runningActionsCount = obj71609_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71609');
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
	  	containerNode = $('#obj71781');
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
    	window.obj71609_onTouchDown_runningActionsCount = window.obj71609_onTouchDown_runningActionsCount - 1;
if (window.obj71609_onTouchDown_runningActionsCount < 0) {
	window.obj71609_onTouchDown_runningActionsCount = 0;
} else if (window.obj71609_onTouchDown_runningActionsCount == 0) {
	obj71609_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71773","#obj71777","#obj71775","#obj71771","#obj71753");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71612 = false;
    	var dropped_id_71612;
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
					dropped_71612 = true;
					dropped_id_71612 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71612) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71609").trigger('SCActionDragDrop71612_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71609_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71609 
move_92248();
function move_92248() {
	window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount = obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount = window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71609_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71663();
function runjs_71663() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71664();
function runjs_71664() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#C00000"); $("#obj71753").css("border-width", "2px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71751 
hide_71665();
function hide_71665() {
	var selector = "#obj71751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71665(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71609_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71666();
function runjs_71666() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71667();
function switchText_71667() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71609 
move_71668();
function move_71668() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj71609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj71609_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71669();
function runjs_71669() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71670();
function runjs_71670() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#000000"); $("#obj71753").css("border-width", "1px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71751
(function(){
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj71751";
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
					window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71609_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71672();
function runjs_71672() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71609").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71673();
function runjs_71673() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71609").css("border-color", "rgba(0,0,0,0)"); $("#obj71609").css("border-width", "0px"); $("#obj71609").css("border-style", "solid"); $("#obj71609").css("border-radius", "10px"); $("#obj71609").css("-webkit-border-radius", "10px"); $("#obj71609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71674();
function playAudio_71674() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj71609_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71675();
function switchText_71675() {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = obj71609_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_5_runningActionsCount = window.obj71609_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj71609_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71649();
function runjs_71649() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71650();
function runjs_71650() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#C00000"); $("#obj71771").css("border-width", "2px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71763 
hide_71651();
function hide_71651() {
	var selector = "#obj71763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71651(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71609_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71652();
function runjs_71652() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71653();
function switchText_71653() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71609 
move_71654();
function move_71654() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj71609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj71609_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71655();
function runjs_71655() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71656();
function runjs_71656() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#000000"); $("#obj71771").css("border-width", "1px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71763
(function(){
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj71763";
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
					window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71609_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71658();
function runjs_71658() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71609").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71659();
function runjs_71659() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71609").css("border-color", "rgba(0,0,0,0)"); $("#obj71609").css("border-width", "0px"); $("#obj71609").css("border-style", "solid"); $("#obj71609").css("border-radius", "10px"); $("#obj71609").css("-webkit-border-radius", "10px"); $("#obj71609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71660();
function playAudio_71660() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj71609_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71661();
function switchText_71661() {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = obj71609_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_4_runningActionsCount = window.obj71609_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj71609_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71635();
function runjs_71635() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71636();
function runjs_71636() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#C00000"); $("#obj71775").css("border-width", "2px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71767 
hide_71637();
function hide_71637() {
	var selector = "#obj71767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71637(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71609_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71638();
function runjs_71638() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71639();
function switchText_71639() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71609 
move_71640();
function move_71640() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj71609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj71609_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71641();
function runjs_71641() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71642();
function runjs_71642() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#000000"); $("#obj71775").css("border-width", "1px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71767
(function(){
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71767";
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
					window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71609_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71644();
function runjs_71644() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71609").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71645();
function runjs_71645() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71609").css("border-color", "rgba(0,0,0,0)"); $("#obj71609").css("border-width", "0px"); $("#obj71609").css("border-style", "solid"); $("#obj71609").css("border-radius", "10px"); $("#obj71609").css("-webkit-border-radius", "10px"); $("#obj71609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71646();
function playAudio_71646() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj71609_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71647();
function switchText_71647() {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = obj71609_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_3_runningActionsCount = window.obj71609_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj71609_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71621();
function runjs_71621() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71622();
function runjs_71622() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#C00000"); $("#obj71777").css("border-width", "2px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71769 
hide_71623();
function hide_71623() {
	var selector = "#obj71769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71623(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71609_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71624();
function runjs_71624() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71625();
function switchText_71625() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71609 
move_71626();
function move_71626() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj71609");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj71609_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71627();
function runjs_71627() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71628();
function runjs_71628() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#000000"); $("#obj71777").css("border-width", "1px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71769
(function(){
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71769";
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
					window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71609_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71630();
function runjs_71630() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71609").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71631();
function runjs_71631() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71609").css("border-color", "rgba(0,0,0,0)"); $("#obj71609").css("border-width", "0px"); $("#obj71609").css("border-style", "solid"); $("#obj71609").css("border-radius", "10px"); $("#obj71609").css("-webkit-border-radius", "10px"); $("#obj71609").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71632();
function playAudio_71632() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj71609_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71633();
function switchText_71633() {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = obj71609_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_2_runningActionsCount = window.obj71609_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj71609_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71614();
function runjs_71614() {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71618();
function switchText_71618() {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71615();
function runjs_71615() {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#058E3F"); $("#obj71773").css("border-width", "2px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71765 
hide_71616();
function hide_71616() {
	var selector = "#obj71765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71616(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71609_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71617();
function runjs_71617() {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71609").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj71609_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71759 
playAudio_71619();
function playAudio_71619() {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71759")[0];
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
		    window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj71609_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90164();
function switchText_90164() {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = obj71609_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71609_droppedInsideTargetActions_runningActionsCount = window.obj71609_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71609_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71609_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71609_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71609_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj71609_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71609").trigger("obj71609_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71609) {
				console.warn("de-queueing event obj71609." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71609").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71609_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj71535_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71535");
//	action: dragDrop
//	target: obj71535 
dragDrop_71538();
function dragDrop_71538() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71535_onTouchDown_runningActionsCount = obj71535_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71535');
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
	  	containerNode = $('#obj71781');
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
    	window.obj71535_onTouchDown_runningActionsCount = window.obj71535_onTouchDown_runningActionsCount - 1;
if (window.obj71535_onTouchDown_runningActionsCount < 0) {
	window.obj71535_onTouchDown_runningActionsCount = 0;
} else if (window.obj71535_onTouchDown_runningActionsCount == 0) {
	obj71535_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71777","#obj71775","#obj71773","#obj71771","#obj71753");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71538 = false;
    	var dropped_id_71538;
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
					dropped_71538 = true;
					dropped_id_71538 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71538) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71535").trigger('SCActionDragDrop71538_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71535_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71535 
move_92252();
function move_92252() {
	window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount = obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71535");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount = window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71535_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71596();
function runjs_71596() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71597();
function runjs_71597() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#C00000"); $("#obj71753").css("border-width", "2px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71751 
hide_71598();
function hide_71598() {
	var selector = "#obj71751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71598(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71535_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71599();
function runjs_71599() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71535").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71600();
function switchText_71600() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71535 
move_71601();
function move_71601() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj71535");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj71535_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71602();
function runjs_71602() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71603();
function runjs_71603() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#000000"); $("#obj71753").css("border-width", "1px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71751
(function(){
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj71751";
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
					window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71535_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71605();
function runjs_71605() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71535").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71606();
function runjs_71606() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71535").css("border-color", "rgba(0,0,0,0)"); $("#obj71535").css("border-width", "0px"); $("#obj71535").css("border-style", "solid"); $("#obj71535").css("border-radius", "10px"); $("#obj71535").css("-webkit-border-radius", "10px"); $("#obj71535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71607();
function playAudio_71607() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj71535_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71608();
function switchText_71608() {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = obj71535_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_5_runningActionsCount = window.obj71535_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj71535_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71582();
function runjs_71582() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71583();
function runjs_71583() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#C00000"); $("#obj71771").css("border-width", "2px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71763 
hide_71584();
function hide_71584() {
	var selector = "#obj71763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71584(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71535_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71585();
function runjs_71585() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71535").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71586();
function switchText_71586() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71535 
move_71587();
function move_71587() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj71535");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj71535_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71588();
function runjs_71588() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71589();
function runjs_71589() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#000000"); $("#obj71771").css("border-width", "1px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71763
(function(){
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj71763";
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
					window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71535_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71591();
function runjs_71591() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71535").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71592();
function runjs_71592() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71535").css("border-color", "rgba(0,0,0,0)"); $("#obj71535").css("border-width", "0px"); $("#obj71535").css("border-style", "solid"); $("#obj71535").css("border-radius", "10px"); $("#obj71535").css("-webkit-border-radius", "10px"); $("#obj71535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71593();
function playAudio_71593() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj71535_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71594();
function switchText_71594() {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = obj71535_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_4_runningActionsCount = window.obj71535_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj71535_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71568();
function runjs_71568() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71569();
function runjs_71569() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#C00000"); $("#obj71773").css("border-width", "2px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71765 
hide_71570();
function hide_71570() {
	var selector = "#obj71765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71570(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71535_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71571();
function runjs_71571() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71535").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71572();
function switchText_71572() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71535 
move_71573();
function move_71573() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj71535");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj71535_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71574();
function runjs_71574() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71575();
function runjs_71575() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#000000"); $("#obj71773").css("border-width", "1px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71765
(function(){
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71765";
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
					window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71535_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71577();
function runjs_71577() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71535").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71578();
function runjs_71578() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71535").css("border-color", "rgba(0,0,0,0)"); $("#obj71535").css("border-width", "0px"); $("#obj71535").css("border-style", "solid"); $("#obj71535").css("border-radius", "10px"); $("#obj71535").css("-webkit-border-radius", "10px"); $("#obj71535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71579();
function playAudio_71579() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj71535_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71580();
function switchText_71580() {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = obj71535_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_3_runningActionsCount = window.obj71535_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj71535_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71554();
function runjs_71554() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71555();
function runjs_71555() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#C00000"); $("#obj71775").css("border-width", "2px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71767 
hide_71556();
function hide_71556() {
	var selector = "#obj71767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71556(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71535_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71557();
function runjs_71557() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71535").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71558();
function switchText_71558() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71535 
move_71559();
function move_71559() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj71535");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj71535_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71560();
function runjs_71560() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71561();
function runjs_71561() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#000000"); $("#obj71775").css("border-width", "1px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71767
(function(){
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71767";
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
					window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71535_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71563();
function runjs_71563() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71535").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71564();
function runjs_71564() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71535").css("border-color", "rgba(0,0,0,0)"); $("#obj71535").css("border-width", "0px"); $("#obj71535").css("border-style", "solid"); $("#obj71535").css("border-radius", "10px"); $("#obj71535").css("-webkit-border-radius", "10px"); $("#obj71535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71565();
function playAudio_71565() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj71535_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71566();
function switchText_71566() {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = obj71535_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_2_runningActionsCount = window.obj71535_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj71535_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71540();
function runjs_71540() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71541();
function runjs_71541() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#C00000"); $("#obj71777").css("border-width", "2px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup2();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71769 
hide_71542();
function hide_71542() {
	var selector = "#obj71769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71542(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71535_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71543();
function runjs_71543() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71535").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup4();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71544();
function switchText_71544() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup5();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71535 
move_71545();
function move_71545() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71535");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 584;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup6();
}
		}, 1);
	});
}



















};
obj71535_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71546();
function runjs_71546() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup7();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71547();
function runjs_71547() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#000000"); $("#obj71777").css("border-width", "1px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup8();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71769
(function(){
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	var selector = "#obj71769";
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
					window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup9();
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
				window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71535_droppedInsideTargetActions_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71549();
function runjs_71549() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71535").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup10();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71550();
function runjs_71550() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71535").css("border-color", "rgba(0,0,0,0)"); $("#obj71535").css("border-width", "0px"); $("#obj71535").css("border-style", "solid"); $("#obj71535").css("border-radius", "10px"); $("#obj71535").css("-webkit-border-radius", "10px"); $("#obj71535").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup11();
}
	}, 1);
}







};
obj71535_droppedInsideTargetActions_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71551();
function playAudio_71551() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup12();
}
	}
}









};
obj71535_droppedInsideTargetActions_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71552();
function switchText_71552() {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = obj71535_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71535_droppedInsideTargetActions_runningActionsCount = window.obj71535_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71535_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71535_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71535_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71535_droppedInsideTargetActions_actionGroup13();
}
		}, 1);
	}
}






};
obj71535_droppedInsideTargetActions_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71535").trigger("obj71535_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71535) {
				console.warn("de-queueing event obj71535." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71535").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71535_droppedInsideTargetActions_activeActionGroupIndex = 13;
	





















};
obj71468_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71468");
//	action: dragDrop
//	target: obj71468 
dragDrop_71471();
function dragDrop_71471() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71468_onTouchDown_runningActionsCount = obj71468_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71468');
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
	  	containerNode = $('#obj71781');
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
    	window.obj71468_onTouchDown_runningActionsCount = window.obj71468_onTouchDown_runningActionsCount - 1;
if (window.obj71468_onTouchDown_runningActionsCount < 0) {
	window.obj71468_onTouchDown_runningActionsCount = 0;
} else if (window.obj71468_onTouchDown_runningActionsCount == 0) {
	obj71468_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71777","#obj71775","#obj71773","#obj71771","#obj71753");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71471 = false;
    	var dropped_id_71471;
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
					dropped_71471 = true;
					dropped_id_71471 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71471) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71468").trigger('SCActionDragDrop71471_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71468_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71468 
move_92246();
function move_92246() {
	window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount = obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71468");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 101;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount = window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71468_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71522();
function runjs_71522() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71523();
function runjs_71523() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#C00000"); $("#obj71753").css("border-width", "2px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71751 
hide_71524();
function hide_71524() {
	var selector = "#obj71751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71524(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71468_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71525();
function runjs_71525() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71468").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71526();
function switchText_71526() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71468 
move_71527();
function move_71527() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj71468");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 101;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj71468_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71528();
function runjs_71528() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71529();
function runjs_71529() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#000000"); $("#obj71753").css("border-width", "1px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71751
(function(){
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj71751";
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
					window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71468_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71531();
function runjs_71531() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71468").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71532();
function runjs_71532() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71468").css("border-color", "rgba(0,0,0,0)"); $("#obj71468").css("border-width", "0px"); $("#obj71468").css("border-style", "solid"); $("#obj71468").css("border-radius", "10px"); $("#obj71468").css("-webkit-border-radius", "10px"); $("#obj71468").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71533();
function playAudio_71533() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj71468_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71534();
function switchText_71534() {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = obj71468_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_5_runningActionsCount = window.obj71468_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj71468_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71508();
function runjs_71508() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71509();
function runjs_71509() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#C00000"); $("#obj71771").css("border-width", "2px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71763 
hide_71510();
function hide_71510() {
	var selector = "#obj71763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71510(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71468_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71511();
function runjs_71511() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71468").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71512();
function switchText_71512() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71468 
move_71513();
function move_71513() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj71468");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 101;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj71468_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71514();
function runjs_71514() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71515();
function runjs_71515() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#000000"); $("#obj71771").css("border-width", "1px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71763
(function(){
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj71763";
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
					window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71468_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71517();
function runjs_71517() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71468").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71518();
function runjs_71518() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71468").css("border-color", "rgba(0,0,0,0)"); $("#obj71468").css("border-width", "0px"); $("#obj71468").css("border-style", "solid"); $("#obj71468").css("border-radius", "10px"); $("#obj71468").css("-webkit-border-radius", "10px"); $("#obj71468").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71519();
function playAudio_71519() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj71468_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71520();
function switchText_71520() {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = obj71468_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_4_runningActionsCount = window.obj71468_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj71468_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71494();
function runjs_71494() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71495();
function runjs_71495() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#C00000"); $("#obj71773").css("border-width", "2px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71765 
hide_71496();
function hide_71496() {
	var selector = "#obj71765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71496(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71468_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71497();
function runjs_71497() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71468").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71498();
function switchText_71498() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71468 
move_71499();
function move_71499() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj71468");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 101;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj71468_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71500();
function runjs_71500() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71501();
function runjs_71501() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#000000"); $("#obj71773").css("border-width", "1px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71765
(function(){
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71765";
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
					window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71468_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71503();
function runjs_71503() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71468").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71504();
function runjs_71504() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71468").css("border-color", "rgba(0,0,0,0)"); $("#obj71468").css("border-width", "0px"); $("#obj71468").css("border-style", "solid"); $("#obj71468").css("border-radius", "10px"); $("#obj71468").css("-webkit-border-radius", "10px"); $("#obj71468").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71505();
function playAudio_71505() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj71468_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71506();
function switchText_71506() {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = obj71468_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_3_runningActionsCount = window.obj71468_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj71468_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71480();
function runjs_71480() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71481();
function runjs_71481() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#C00000"); $("#obj71775").css("border-width", "2px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71767 
hide_71482();
function hide_71482() {
	var selector = "#obj71767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71482(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71468_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71483();
function runjs_71483() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71468").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71484();
function switchText_71484() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71468 
move_71485();
function move_71485() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj71468");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 101;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj71468_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71486();
function runjs_71486() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71487();
function runjs_71487() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#000000"); $("#obj71775").css("border-width", "1px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71767
(function(){
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71767";
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
					window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71468_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71489();
function runjs_71489() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71468").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71490();
function runjs_71490() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71468").css("border-color", "rgba(0,0,0,0)"); $("#obj71468").css("border-width", "0px"); $("#obj71468").css("border-style", "solid"); $("#obj71468").css("border-radius", "10px"); $("#obj71468").css("-webkit-border-radius", "10px"); $("#obj71468").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71491();
function playAudio_71491() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj71468_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71492();
function switchText_71492() {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = obj71468_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_2_runningActionsCount = window.obj71468_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj71468_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71473();
function runjs_71473() {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71477();
function switchText_71477() {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71474();
function runjs_71474() {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#058E3F"); $("#obj71777").css("border-width", "2px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71769 
hide_71475();
function hide_71475() {
	var selector = "#obj71769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71475(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71468_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71476();
function runjs_71476() {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71468").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj71468_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71759 
playAudio_71478();
function playAudio_71478() {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71759")[0];
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
		    window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj71468_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90163();
function switchText_90163() {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = obj71468_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71468_droppedInsideTargetActions_runningActionsCount = window.obj71468_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71468_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71468_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71468_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71468_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj71468_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71468").trigger("obj71468_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71468) {
				console.warn("de-queueing event obj71468." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71468").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71468_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj71401_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71401");
//	action: dragDrop
//	target: obj71401 
dragDrop_71404();
function dragDrop_71404() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71401_onTouchDown_runningActionsCount = obj71401_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71401');
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
	  	containerNode = $('#obj71781');
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
    	window.obj71401_onTouchDown_runningActionsCount = window.obj71401_onTouchDown_runningActionsCount - 1;
if (window.obj71401_onTouchDown_runningActionsCount < 0) {
	window.obj71401_onTouchDown_runningActionsCount = 0;
} else if (window.obj71401_onTouchDown_runningActionsCount == 0) {
	obj71401_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71753","#obj71777","#obj71775","#obj71773","#obj71771");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71404 = false;
    	var dropped_id_71404;
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
					dropped_71404 = true;
					dropped_id_71404 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71404) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71401").trigger('SCActionDragDrop71404_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71401_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71401 
move_92250();
function move_92250() {
	window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount = obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71401");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount = window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71401_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71455();
function runjs_71455() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71456();
function runjs_71456() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#C00000"); $("#obj71771").css("border-width", "2px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71763 
hide_71457();
function hide_71457() {
	var selector = "#obj71763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71457(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71401_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71458();
function runjs_71458() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71401").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71459();
function switchText_71459() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71401 
move_71460();
function move_71460() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj71401");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj71401_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71461();
function runjs_71461() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71462();
function runjs_71462() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#000000"); $("#obj71771").css("border-width", "1px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71763
(function(){
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj71763";
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
					window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71401_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71464();
function runjs_71464() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71401").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71465();
function runjs_71465() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71401").css("border-color", "rgba(0,0,0,0)"); $("#obj71401").css("border-width", "0px"); $("#obj71401").css("border-style", "solid"); $("#obj71401").css("border-radius", "10px"); $("#obj71401").css("-webkit-border-radius", "10px"); $("#obj71401").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71466();
function playAudio_71466() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj71401_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71467();
function switchText_71467() {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = obj71401_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_5_runningActionsCount = window.obj71401_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj71401_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71441();
function runjs_71441() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71442();
function runjs_71442() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#C00000"); $("#obj71773").css("border-width", "2px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71765 
hide_71443();
function hide_71443() {
	var selector = "#obj71765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71443(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71401_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71444();
function runjs_71444() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71401").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71445();
function switchText_71445() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71401 
move_71446();
function move_71446() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj71401");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj71401_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71447();
function runjs_71447() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71448();
function runjs_71448() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#000000"); $("#obj71773").css("border-width", "1px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71765
(function(){
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj71765";
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
					window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71401_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71450();
function runjs_71450() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71401").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71451();
function runjs_71451() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71401").css("border-color", "rgba(0,0,0,0)"); $("#obj71401").css("border-width", "0px"); $("#obj71401").css("border-style", "solid"); $("#obj71401").css("border-radius", "10px"); $("#obj71401").css("-webkit-border-radius", "10px"); $("#obj71401").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71452();
function playAudio_71452() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj71401_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71453();
function switchText_71453() {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = obj71401_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_4_runningActionsCount = window.obj71401_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj71401_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71427();
function runjs_71427() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71428();
function runjs_71428() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#C00000"); $("#obj71775").css("border-width", "2px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71767 
hide_71429();
function hide_71429() {
	var selector = "#obj71767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71429(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71401_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71430();
function runjs_71430() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71401").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71431();
function switchText_71431() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71401 
move_71432();
function move_71432() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj71401");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj71401_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71433();
function runjs_71433() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71434();
function runjs_71434() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#000000"); $("#obj71775").css("border-width", "1px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71767
(function(){
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71767";
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
					window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71401_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71436();
function runjs_71436() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71401").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71437();
function runjs_71437() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71401").css("border-color", "rgba(0,0,0,0)"); $("#obj71401").css("border-width", "0px"); $("#obj71401").css("border-style", "solid"); $("#obj71401").css("border-radius", "10px"); $("#obj71401").css("-webkit-border-radius", "10px"); $("#obj71401").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71438();
function playAudio_71438() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj71401_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71439();
function switchText_71439() {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = obj71401_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_3_runningActionsCount = window.obj71401_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj71401_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71413();
function runjs_71413() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71414();
function runjs_71414() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#C00000"); $("#obj71777").css("border-width", "2px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71769 
hide_71415();
function hide_71415() {
	var selector = "#obj71769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71415(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71401_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71416();
function runjs_71416() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71401").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71417();
function switchText_71417() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71401 
move_71418();
function move_71418() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj71401");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 248;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj71401_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71419();
function runjs_71419() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71420();
function runjs_71420() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#000000"); $("#obj71777").css("border-width", "1px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71769
(function(){
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71769";
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
					window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71401_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71422();
function runjs_71422() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71401").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71423();
function runjs_71423() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71401").css("border-color", "rgba(0,0,0,0)"); $("#obj71401").css("border-width", "0px"); $("#obj71401").css("border-style", "solid"); $("#obj71401").css("border-radius", "10px"); $("#obj71401").css("-webkit-border-radius", "10px"); $("#obj71401").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71424();
function playAudio_71424() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj71401_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71425();
function switchText_71425() {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = obj71401_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_2_runningActionsCount = window.obj71401_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj71401_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71406();
function runjs_71406() {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71410();
function switchText_71410() {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71407();
function runjs_71407() {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#058E3F"); $("#obj71753").css("border-width", "2px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71751 
hide_71408();
function hide_71408() {
	var selector = "#obj71751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71408(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71401_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71409();
function runjs_71409() {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71401").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj71401_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71759 
playAudio_71411();
function playAudio_71411() {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71759")[0];
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
		    window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj71401_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90165();
function switchText_90165() {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = obj71401_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71401_droppedInsideTargetActions_runningActionsCount = window.obj71401_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71401_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71401_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71401_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71401_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj71401_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71401").trigger("obj71401_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71401) {
				console.warn("de-queueing event obj71401." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71401").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71401_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj71334_onTouchDown_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_onTouchDown_activeActionGroupIndex = 0;
	










//prevent windows
if (window.SCuaosIsWindows)
	SCPreventTouch("#obj71334");
//	action: dragDrop
//	target: obj71334 
dragDrop_71337();
function dragDrop_71337() {
	event = window.eventObj;
	event.stopPropagation();
	window.obj71334_onTouchDown_runningActionsCount = obj71334_onTouchDown_runningActionsCount + 1;
	
	var node = $('#obj71334');
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
	  	containerNode = $('#obj71781');
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
    	window.obj71334_onTouchDown_runningActionsCount = window.obj71334_onTouchDown_runningActionsCount - 1;
if (window.obj71334_onTouchDown_runningActionsCount < 0) {
	window.obj71334_onTouchDown_runningActionsCount = 0;
} else if (window.obj71334_onTouchDown_runningActionsCount == 0) {
	obj71334_onTouchDown_actionGroup1();
}
    	//define droppable elements
    	var droppableElements = new Array("#obj71775","#obj71777","#obj71773","#obj71771","#obj71753");
    	var actionsOnDrop = new Array("droppedInsideTargetActions","droppedInsideTargetActions_2","droppedInsideTargetActions_3","droppedInsideTargetActions_4","droppedInsideTargetActions_5") //for example: "SCActionDragDrop4180_droppedInsideTargetActions","SCActionDragDrop4180_droppedInsideTargetActions2";
    	var dropped_71337 = false;
    	var dropped_id_71337;
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
					dropped_71337 = true;
					dropped_id_71337 = droppableElements[i];
					break;
				}
			}
		} 
		if (dropped_71337) {
			if (actionsOnDrop[i]) node.trigger(actionsOnDrop[i]);
		} else {
			$("#obj71334").trigger('SCActionDragDrop71337_droppedOutsideTargetActions');
		}
    };
	$(this).bind(window.touchUpEvent, function(e) { endDrag(e); });
	// $(".SCPage").bind("mouseleave", function(e) { endDrag(e); });
}











};
obj71334_onTouchDown_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_onTouchDown_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_onTouchDown_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_onTouchDown_activeActionGroupIndex = 1;
	





















};
obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_activeActionGroupIndex = 0;
	


//	action: move
//	target: obj71334 
move_92254();
function move_92254() {
	window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount = obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount + 1;

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
	var targetObject = $("#obj71334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount = window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount - 1;
if (window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount < 0) {
	window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount == 0) {
	obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_actionGroup1();
}
		}, 1);
	});
}



















};
obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_activeActionGroupIndex = 1;
	





















};
obj71334_droppedInsideTargetActions_5_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71388();
function runjs_71388() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup1();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71389();
function runjs_71389() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#C00000"); $("#obj71753").css("border-width", "2px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup2();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71751 
hide_71390();
function hide_71390() {
	var selector = "#obj71751";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71390(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71334_droppedInsideTargetActions_5_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71391();
function runjs_71391() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71334").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup4();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71392();
function switchText_71392() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup5();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_5_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71334 
move_71393();
function move_71393() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

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
	var targetObject = $("#obj71334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup6();
}
		}, 1);
	});
}



















};
obj71334_droppedInsideTargetActions_5_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71394();
function runjs_71394() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup7();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71395();
function runjs_71395() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71753").css("border-color", "#000000"); $("#obj71753").css("border-width", "1px"); $("#obj71753").css("border-style", "solid"); $("#obj71753").css("border-radius", "10px"); $("#obj71753").css("-webkit-border-radius", "10px"); $("#obj71753").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup8();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71751
(function(){
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	var selector = "#obj71751";
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
					window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup9();
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
				window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71334_droppedInsideTargetActions_5_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71397();
function runjs_71397() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71334").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup10();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71398();
function runjs_71398() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;

	$("#obj71334").css("border-color", "rgba(0,0,0,0)"); $("#obj71334").css("border-width", "0px"); $("#obj71334").css("border-style", "solid"); $("#obj71334").css("border-radius", "10px"); $("#obj71334").css("-webkit-border-radius", "10px"); $("#obj71334").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup11();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_5_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71399();
function playAudio_71399() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup12();
}
	}
}









};
obj71334_droppedInsideTargetActions_5_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71400();
function switchText_71400() {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = obj71334_droppedInsideTargetActions_5_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_5_runningActionsCount = window.obj71334_droppedInsideTargetActions_5_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_5_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_5_actionGroup13();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_5_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_5_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex = 13;
	





















};
obj71334_droppedInsideTargetActions_4_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71374();
function runjs_71374() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup1();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71375();
function runjs_71375() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#C00000"); $("#obj71771").css("border-width", "2px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup2();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71763 
hide_71376();
function hide_71376() {
	var selector = "#obj71763";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71376(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71334_droppedInsideTargetActions_4_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71377();
function runjs_71377() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71334").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup4();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71378();
function switchText_71378() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup5();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_4_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71334 
move_71379();
function move_71379() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

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
	var targetObject = $("#obj71334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup6();
}
		}, 1);
	});
}



















};
obj71334_droppedInsideTargetActions_4_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71380();
function runjs_71380() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup7();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71381();
function runjs_71381() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71771").css("border-color", "#000000"); $("#obj71771").css("border-width", "1px"); $("#obj71771").css("border-style", "solid"); $("#obj71771").css("border-radius", "10px"); $("#obj71771").css("-webkit-border-radius", "10px"); $("#obj71771").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup8();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71763
(function(){
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	var selector = "#obj71763";
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
					window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup9();
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
				window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71334_droppedInsideTargetActions_4_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71383();
function runjs_71383() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71334").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup10();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71384();
function runjs_71384() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;

	$("#obj71334").css("border-color", "rgba(0,0,0,0)"); $("#obj71334").css("border-width", "0px"); $("#obj71334").css("border-style", "solid"); $("#obj71334").css("border-radius", "10px"); $("#obj71334").css("-webkit-border-radius", "10px"); $("#obj71334").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup11();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_4_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71385();
function playAudio_71385() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup12();
}
	}
}









};
obj71334_droppedInsideTargetActions_4_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71386();
function switchText_71386() {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = obj71334_droppedInsideTargetActions_4_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_4_runningActionsCount = window.obj71334_droppedInsideTargetActions_4_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_4_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_4_actionGroup13();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_4_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_4_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex = 13;
	





















};
obj71334_droppedInsideTargetActions_3_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71360();
function runjs_71360() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup1();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71361();
function runjs_71361() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#C00000"); $("#obj71773").css("border-width", "2px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup2();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71765 
hide_71362();
function hide_71362() {
	var selector = "#obj71765";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71362(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71334_droppedInsideTargetActions_3_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71363();
function runjs_71363() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71334").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup4();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71364();
function switchText_71364() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup5();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_3_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71334 
move_71365();
function move_71365() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

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
	var targetObject = $("#obj71334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup6();
}
		}, 1);
	});
}



















};
obj71334_droppedInsideTargetActions_3_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71366();
function runjs_71366() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup7();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71367();
function runjs_71367() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71773").css("border-color", "#000000"); $("#obj71773").css("border-width", "1px"); $("#obj71773").css("border-style", "solid"); $("#obj71773").css("border-radius", "10px"); $("#obj71773").css("-webkit-border-radius", "10px"); $("#obj71773").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup8();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71765
(function(){
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	var selector = "#obj71765";
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
					window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup9();
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
				window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71334_droppedInsideTargetActions_3_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71369();
function runjs_71369() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71334").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup10();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71370();
function runjs_71370() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;

	$("#obj71334").css("border-color", "rgba(0,0,0,0)"); $("#obj71334").css("border-width", "0px"); $("#obj71334").css("border-style", "solid"); $("#obj71334").css("border-radius", "10px"); $("#obj71334").css("-webkit-border-radius", "10px"); $("#obj71334").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup11();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_3_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71371();
function playAudio_71371() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup12();
}
	}
}









};
obj71334_droppedInsideTargetActions_3_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71372();
function switchText_71372() {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = obj71334_droppedInsideTargetActions_3_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_3_runningActionsCount = window.obj71334_droppedInsideTargetActions_3_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_3_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_3_actionGroup13();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_3_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_3_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex = 13;
	





















};
obj71334_droppedInsideTargetActions_2_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71346();
function runjs_71346() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup1();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 1;
	















//	action: Run JavaScript
runjs_71347();
function runjs_71347() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#C00000"); $("#obj71777").css("border-width", "2px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup2();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 2;
	

//	action: hide
//	selector: obj#obj71769 
hide_71348();
function hide_71348() {
	var selector = "#obj71769";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup3();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71348(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup3();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71334_droppedInsideTargetActions_2_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 3;
	















//	action: Run JavaScript
runjs_71349();
function runjs_71349() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71334").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup4();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 4;
	















//	action: Switch Text
switchText_71350();
function switchText_71350() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #c00000;\">Not correct, try again!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup5();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup5();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_2_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 5;
	


//	action: move
//	target: obj71334 
move_71351();
function move_71351() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

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
	var targetObject = $("#obj71334");
	var attr = targetObject.attr("data-SCPageObject-PreviousPosition");
	var moveX = 381;
	var moveY = 646;
	var isMoveBack = false;
	if (isMoveBack && typeof attr !== typeof undefined) {
		moveX = attr.split(",")[0];
		moveY = attr.split(",")[1];
	}
	targetObject.attr("data-SCPageObject-PreviousPosition", parseInt(targetObject.css("left")).toString() + "," + parseInt(targetObject.css("top")).toString());
	targetObject.animate({ left: moveX+'px', top: moveY+'px'}, 300, easing, function() {
		setTimeout(function() {
			window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup6();
}
		}, 1);
	});
}



















};
obj71334_droppedInsideTargetActions_2_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 6;
	















//	action: Run JavaScript
runjs_71352();
function runjs_71352() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("background-color", "#BFBFBF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup7();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup7 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 7;
	















//	action: Run JavaScript
runjs_71353();
function runjs_71353() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71777").css("border-color", "#000000"); $("#obj71777").css("border-width", "1px"); $("#obj71777").css("border-style", "solid"); $("#obj71777").css("border-radius", "10px"); $("#obj71777").css("-webkit-border-radius", "10px"); $("#obj71777").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup8();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup8 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 8;
	

//	action: show 
//	selector: #obj71769
(function(){
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	var selector = "#obj71769";
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
					window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup9();
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
				window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup9();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71334_droppedInsideTargetActions_2_actionGroup9 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 9;
	















//	action: Run JavaScript
runjs_71355();
function runjs_71355() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71334").css("background-color", "#FFC000");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup10();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup10 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 10;
	















//	action: Run JavaScript
runjs_71356();
function runjs_71356() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;

	$("#obj71334").css("border-color", "rgba(0,0,0,0)"); $("#obj71334").css("border-width", "0px"); $("#obj71334").css("border-style", "solid"); $("#obj71334").css("border-radius", "10px"); $("#obj71334").css("-webkit-border-radius", "10px"); $("#obj71334").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup11();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_2_actionGroup11 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 11;
	












//	action: playAudio
//	target: obj71755 
playAudio_71357();
function playAudio_71357() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;
	var myAudio = $("#obj71755")[0];
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
		    window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup12();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup12();
}
	}
}









};
obj71334_droppedInsideTargetActions_2_actionGroup12 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 12;
	















//	action: Switch Text
switchText_71358();
function switchText_71358() {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = obj71334_droppedInsideTargetActions_2_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup13();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_2_runningActionsCount = window.obj71334_droppedInsideTargetActions_2_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_2_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_2_actionGroup13();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_2_actionGroup13 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_2_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex = 13;
	





















};
obj71334_droppedInsideTargetActions_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 0;
	















//	action: Run JavaScript
runjs_71339();
function runjs_71339() {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71775").css("background-color", "#FFFFFF");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup1();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 1;
	















//	action: Switch Text
switchText_71343();
function switchText_71343() {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "<p><span style=\"font-family: Roboto; font-size: 18px; color: #058e3f;\">Excellent, you got it right!</span></p>";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup2();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup2();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 2;
	















//	action: Run JavaScript
runjs_71340();
function runjs_71340() {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71775").css("border-color", "#058E3F"); $("#obj71775").css("border-width", "2px"); $("#obj71775").css("border-style", "solid"); $("#obj71775").css("border-radius", "10px"); $("#obj71775").css("-webkit-border-radius", "10px"); $("#obj71775").css("-moz-border-radius", "10px");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup3();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_actionGroup3 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 3;
	

//	action: hide
//	selector: obj#obj71767 
hide_71341();
function hide_71341() {
	var selector = "#obj71767";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup4();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71341(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup4();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj71334_droppedInsideTargetActions_actionGroup4 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 4;
	















//	action: Run JavaScript
runjs_71342();
function runjs_71342() {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;

	$("#obj71334").css("background-color", "rgba(0,0,0,0)");
	
	setTimeout(function() {
		window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup5();
}
	}, 1);
}







};
obj71334_droppedInsideTargetActions_actionGroup5 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 5;
	












//	action: playAudio
//	target: obj71759 
playAudio_71344();
function playAudio_71344() {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;
	var myAudio = $("#obj71759")[0];
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
		    window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup6();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup6();
}
	}
}









};
obj71334_droppedInsideTargetActions_actionGroup6 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 6;
	















//	action: Switch Text
switchText_90166();
function switchText_90166() {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = obj71334_droppedInsideTargetActions_runningActionsCount + 1;
	var fadeTime = 0;
	var newHtml = "";
	if (fadeTime > 0) {
		var obj_content = document.querySelector("#obj71757_content");
		var obj_content_new = document.createElement("div");
		obj_content_new.setAttribute("id", "#obj71757_content_new");
		obj_content_new.setAttribute("class", obj_content.getAttribute("class"));
		obj_content_new.style.display = "none";
		obj_content_new.innerHTML = newHtml;
		document.querySelector("#obj71757").appendChild(obj_content_new);
		$(obj_content).fadeOut(fadeTime);
		$(obj_content_new).fadeIn(fadeTime, function () {
			obj_content.parentNode.removeChild(obj_content); // element.remove() not supported on IE
			obj_content_new.setAttribute("id", "obj71757_content");
			setTimeout(function () {
				window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup7();
}
			}, 1);
		});
	} else {
		$("#obj71757 .SCTextContainer").html(newHtml);
		setTimeout(function () {
			window.obj71334_droppedInsideTargetActions_runningActionsCount = window.obj71334_droppedInsideTargetActions_runningActionsCount - 1;
if (window.obj71334_droppedInsideTargetActions_runningActionsCount < 0) {
	window.obj71334_droppedInsideTargetActions_runningActionsCount = 0;
} else if (window.obj71334_droppedInsideTargetActions_runningActionsCount == 0) {
	obj71334_droppedInsideTargetActions_actionGroup7();
}
		}, 1);
	}
}






};
obj71334_droppedInsideTargetActions_actionGroup7 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = -1;
		$("#obj71334").trigger("obj71334_droppedInsideTargetActions_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71334) {
				console.warn("de-queueing event obj71334." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71334").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71334_droppedInsideTargetActions_activeActionGroupIndex = 7;
	





















};
obj71316_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71316_onTap_activeActionGroupIndex = -1;
		$("#obj71316").trigger("obj71316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71316) {
				console.warn("de-queueing event obj71316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71316_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71316 
hide_71319();
function hide_71319() {
	var selector = "#obj71316";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71316_onTap_runningActionsCount = obj71316_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71316_onTap_runningActionsCount = window.obj71316_onTap_runningActionsCount - 1;
if (window.obj71316_onTap_runningActionsCount < 0) {
	window.obj71316_onTap_runningActionsCount = 0;
} else if (window.obj71316_onTap_runningActionsCount == 0) {
	obj71316_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71319(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71316_onTap_runningActionsCount = window.obj71316_onTap_runningActionsCount - 1;
if (window.obj71316_onTap_runningActionsCount < 0) {
	window.obj71316_onTap_runningActionsCount = 0;
} else if (window.obj71316_onTap_runningActionsCount == 0) {
	obj71316_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




//	action: stopMovie 
//	target: obj71306 
stopMovie_71318();
function stopMovie_71318() {
	window.obj71316_onTap_runningActionsCount = obj71316_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71306")[0];
	myVideo.pause();
	window.obj71316_onTap_runningActionsCount = window.obj71316_onTap_runningActionsCount - 1;
if (window.obj71316_onTap_runningActionsCount < 0) {
	window.obj71316_onTap_runningActionsCount = 0;
} else if (window.obj71316_onTap_runningActionsCount == 0) {
	obj71316_onTap_actionGroup1();
}
}
















};
obj71316_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71316_onTap_activeActionGroupIndex = -1;
		$("#obj71316").trigger("obj71316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71316) {
				console.warn("de-queueing event obj71316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71316_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71308
(function(){
	window.obj71316_onTap_runningActionsCount = obj71316_onTap_runningActionsCount + 1;

	var selector = "#obj71308";
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
					window.obj71316_onTap_runningActionsCount = window.obj71316_onTap_runningActionsCount - 1;
if (window.obj71316_onTap_runningActionsCount < 0) {
	window.obj71316_onTap_runningActionsCount = 0;
} else if (window.obj71316_onTap_runningActionsCount == 0) {
	obj71316_onTap_actionGroup2();
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
				window.obj71316_onTap_runningActionsCount = window.obj71316_onTap_runningActionsCount - 1;
if (window.obj71316_onTap_runningActionsCount < 0) {
	window.obj71316_onTap_runningActionsCount = 0;
} else if (window.obj71316_onTap_runningActionsCount == 0) {
	obj71316_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71316_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71316_onTap_activeActionGroupIndex = -1;
		$("#obj71316").trigger("obj71316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71316) {
				console.warn("de-queueing event obj71316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71316_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71306 
move_71321();
function move_71321() {
	window.obj71316_onTap_runningActionsCount = obj71316_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71306");
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
			window.obj71316_onTap_runningActionsCount = window.obj71316_onTap_runningActionsCount - 1;
if (window.obj71316_onTap_runningActionsCount < 0) {
	window.obj71316_onTap_runningActionsCount = 0;
} else if (window.obj71316_onTap_runningActionsCount == 0) {
	obj71316_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71316_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71316_onTap_activeActionGroupIndex = -1;
		$("#obj71316").trigger("obj71316_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71316) {
				console.warn("de-queueing event obj71316." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71316").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71316_onTap_activeActionGroupIndex = 3;
	





















};
obj71308_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71308_onTap_activeActionGroupIndex = -1;
		$("#obj71308").trigger("obj71308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71308) {
				console.warn("de-queueing event obj71308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71308_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj71308 
hide_71311();
function hide_71311() {
	var selector = "#obj71308";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj71308_onTap_runningActionsCount = obj71308_onTap_runningActionsCount + 1;
	
	var animationType = "fadeOut";
	var animationDurationMs = 0;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj71308_onTap_runningActionsCount = window.obj71308_onTap_runningActionsCount - 1;
if (window.obj71308_onTap_runningActionsCount < 0) {
	window.obj71308_onTap_runningActionsCount = 0;
} else if (window.obj71308_onTap_runningActionsCount == 0) {
	obj71308_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_71311(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj71308_onTap_runningActionsCount = window.obj71308_onTap_runningActionsCount - 1;
if (window.obj71308_onTap_runningActionsCount < 0) {
	window.obj71308_onTap_runningActionsCount = 0;
} else if (window.obj71308_onTap_runningActionsCount == 0) {
	obj71308_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}



//	action: playPauseMovie
//	target: obj71306 
playPauseMovie_71310();
function playPauseMovie_71310() {
	window.obj71308_onTap_runningActionsCount = obj71308_onTap_runningActionsCount + 1;
	var myVideo = $("#obj71306")[0];
	if (myVideo.paused) {
		myVideo.play();
	} else {
		myVideo.pause();
	}
	window.obj71308_onTap_runningActionsCount = window.obj71308_onTap_runningActionsCount - 1;
if (window.obj71308_onTap_runningActionsCount < 0) {
	window.obj71308_onTap_runningActionsCount = 0;
} else if (window.obj71308_onTap_runningActionsCount == 0) {
	obj71308_onTap_actionGroup1();
}
}

















};
obj71308_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71308_onTap_activeActionGroupIndex = -1;
		$("#obj71308").trigger("obj71308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71308) {
				console.warn("de-queueing event obj71308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71308_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj71316
(function(){
	window.obj71308_onTap_runningActionsCount = obj71308_onTap_runningActionsCount + 1;

	var selector = "#obj71316";
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
					window.obj71308_onTap_runningActionsCount = window.obj71308_onTap_runningActionsCount - 1;
if (window.obj71308_onTap_runningActionsCount < 0) {
	window.obj71308_onTap_runningActionsCount = 0;
} else if (window.obj71308_onTap_runningActionsCount == 0) {
	obj71308_onTap_actionGroup2();
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
				window.obj71308_onTap_runningActionsCount = window.obj71308_onTap_runningActionsCount - 1;
if (window.obj71308_onTap_runningActionsCount < 0) {
	window.obj71308_onTap_runningActionsCount = 0;
} else if (window.obj71308_onTap_runningActionsCount == 0) {
	obj71308_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj71308_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj71308_onTap_activeActionGroupIndex = -1;
		$("#obj71308").trigger("obj71308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71308) {
				console.warn("de-queueing event obj71308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71308_onTap_activeActionGroupIndex = 2;
	


//	action: move
//	target: obj71306 
move_71313();
function move_71313() {
	window.obj71308_onTap_runningActionsCount = obj71308_onTap_runningActionsCount + 1;

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
	var targetObject = $("#obj71306");
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
			window.obj71308_onTap_runningActionsCount = window.obj71308_onTap_runningActionsCount - 1;
if (window.obj71308_onTap_runningActionsCount < 0) {
	window.obj71308_onTap_runningActionsCount = 0;
} else if (window.obj71308_onTap_runningActionsCount == 0) {
	obj71308_onTap_actionGroup3();
}
		}, 1);
	});
}



















};
obj71308_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj71308_onTap_activeActionGroupIndex = -1;
		$("#obj71308").trigger("obj71308_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 71308) {
				console.warn("de-queueing event obj71308." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj71308").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj71308_onTap_activeActionGroupIndex = 3;
	





















};
obj87357_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87357_onTap_activeActionGroupIndex = -1;
		$("#obj87357").trigger("obj87357_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87357) {
				console.warn("de-queueing event obj87357." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87357").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87357_onTap_activeActionGroupIndex = 0;
	













//	action: stopMovie 
//	target: obj87362 
stopAudio_87359();
function stopAudio_87359() {
	window.obj87357_onTap_runningActionsCount = obj87357_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87362")[0];
	myAudio.pause();
	window.obj87357_onTap_runningActionsCount = window.obj87357_onTap_runningActionsCount - 1;
if (window.obj87357_onTap_runningActionsCount < 0) {
	window.obj87357_onTap_runningActionsCount = 0;
} else if (window.obj87357_onTap_runningActionsCount == 0) {
	obj87357_onTap_actionGroup1();
}
}








};
obj87357_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87357_onTap_activeActionGroupIndex = -1;
		$("#obj87357").trigger("obj87357_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87357) {
				console.warn("de-queueing event obj87357." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87357").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87357_onTap_activeActionGroupIndex = 1;
	

//	action: hide
//	selector: obj#obj87357 
hide_87360();
function hide_87360() {
	var selector = "#obj87357";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87357_onTap_runningActionsCount = obj87357_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87357_onTap_runningActionsCount = window.obj87357_onTap_runningActionsCount - 1;
if (window.obj87357_onTap_runningActionsCount < 0) {
	window.obj87357_onTap_runningActionsCount = 0;
} else if (window.obj87357_onTap_runningActionsCount == 0) {
	obj87357_onTap_actionGroup2();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87360(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87357_onTap_runningActionsCount = window.obj87357_onTap_runningActionsCount - 1;
if (window.obj87357_onTap_runningActionsCount < 0) {
	window.obj87357_onTap_runningActionsCount = 0;
} else if (window.obj87357_onTap_runningActionsCount == 0) {
	obj87357_onTap_actionGroup2();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87357_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87357_onTap_activeActionGroupIndex = -1;
		$("#obj87357").trigger("obj87357_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87357) {
				console.warn("de-queueing event obj87357." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87357").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87357_onTap_activeActionGroupIndex = 2;
	

//	action: show 
//	selector: #obj87352
(function(){
	window.obj87357_onTap_runningActionsCount = obj87357_onTap_runningActionsCount + 1;

	var selector = "#obj87352";
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
					window.obj87357_onTap_runningActionsCount = window.obj87357_onTap_runningActionsCount - 1;
if (window.obj87357_onTap_runningActionsCount < 0) {
	window.obj87357_onTap_runningActionsCount = 0;
} else if (window.obj87357_onTap_runningActionsCount == 0) {
	obj87357_onTap_actionGroup3();
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
				window.obj87357_onTap_runningActionsCount = window.obj87357_onTap_runningActionsCount - 1;
if (window.obj87357_onTap_runningActionsCount < 0) {
	window.obj87357_onTap_runningActionsCount = 0;
} else if (window.obj87357_onTap_runningActionsCount == 0) {
	obj87357_onTap_actionGroup3();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87357_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87357_onTap_activeActionGroupIndex = -1;
		$("#obj87357").trigger("obj87357_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87357) {
				console.warn("de-queueing event obj87357." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87357").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87357_onTap_activeActionGroupIndex = 3;
	





















};
obj87352_onTap_actionGroup0 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87352_onTap_activeActionGroupIndex = -1;
		$("#obj87352").trigger("obj87352_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87352) {
				console.warn("de-queueing event obj87352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87352_onTap_activeActionGroupIndex = 0;
	

//	action: hide
//	selector: obj#obj87352 
hide_87354();
function hide_87354() {
	var selector = "#obj87352";
	$(selector).removeClass("animated bounce flash pulse rubberBand shake headShake swing tada wobble jello bounceIn bounceInDown bounceInLeft bounceInRight bounceInUp bounceOut bounceOutDown bounceOutLeft bounceOutRight bounceOutUp fadeIn fadeInDown fadeInDownBig fadeInLeft fadeInLeftBig fadeInRight fadeInRightBig fadeInUp fadeInUpBig fadeOut fadeOutDown fadeOutDownBig fadeOutLeft fadeOutLeftBig fadeOutRight fadeOutRightBig fadeOutUp fadeOutUpBig flipInX flipInY flipOutX flipOutY lightSpeedIn lightSpeedOut rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge jackInTheBox rollIn rollOut zoomIn zoomInDown zoomInLeft zoomInRight zoomInUp zoomOut zoomOutDown zoomOutLeft zoomOutRight zoomOutUp slideInDown slideInLeft slideInRight slideInUp slideOutDown slideOutLeft slideOutRight slideOutUp heartBeat");
	
	window.obj87352_onTap_runningActionsCount = obj87352_onTap_runningActionsCount + 1;
	
	var animationType = "";
	var animationDurationMs = 300;
	var animationIterationCount = "1";
	if ($(selector).css("display") == "none" || animationType == "" || animationDurationMs == 0) {
		setTimeout(function() {
			$(selector).css("display", "none");
			window.obj87352_onTap_runningActionsCount = window.obj87352_onTap_runningActionsCount - 1;
if (window.obj87352_onTap_runningActionsCount < 0) {
	window.obj87352_onTap_runningActionsCount = 0;
} else if (window.obj87352_onTap_runningActionsCount == 0) {
	obj87352_onTap_actionGroup1();
}
		}, 1);
		return;
	};
	$(selector).css("animation-duration", animationDurationMs + "ms");
	$(selector).css("animation-iteration-count", animationIterationCount);
	if ($(selector).attr("sccurrentanimation") != null) {
		$(selector).trigger("animationend", $(selector).attr("sccurrentanimation"));
		setTimeout(hide_87354(), 100);
		return;
	}
	setTimeout(function() {
		$(selector).css("display", "none");
		window.obj87352_onTap_runningActionsCount = window.obj87352_onTap_runningActionsCount - 1;
if (window.obj87352_onTap_runningActionsCount < 0) {
	window.obj87352_onTap_runningActionsCount = 0;
} else if (window.obj87352_onTap_runningActionsCount == 0) {
	obj87352_onTap_actionGroup1();
}
	}, animationDurationMs);
	$(selector).addClass("animated " + animationType);
}




















};
obj87352_onTap_actionGroup1 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87352_onTap_activeActionGroupIndex = -1;
		$("#obj87352").trigger("obj87352_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87352) {
				console.warn("de-queueing event obj87352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87352_onTap_activeActionGroupIndex = 1;
	

//	action: show 
//	selector: #obj87357
(function(){
	window.obj87352_onTap_runningActionsCount = obj87352_onTap_runningActionsCount + 1;

	var selector = "#obj87357";
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
					window.obj87352_onTap_runningActionsCount = window.obj87352_onTap_runningActionsCount - 1;
if (window.obj87352_onTap_runningActionsCount < 0) {
	window.obj87352_onTap_runningActionsCount = 0;
} else if (window.obj87352_onTap_runningActionsCount == 0) {
	obj87352_onTap_actionGroup2();
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
				window.obj87352_onTap_runningActionsCount = window.obj87352_onTap_runningActionsCount - 1;
if (window.obj87352_onTap_runningActionsCount < 0) {
	window.obj87352_onTap_runningActionsCount = 0;
} else if (window.obj87352_onTap_runningActionsCount == 0) {
	obj87352_onTap_actionGroup2();
}
			}
			$(element).trigger('SCEventShow');
		}, animationDurationMs);
	
		$(element).addClass("animated " + animationType);
		$(element).css("display", "block");
	}
})();




















};
obj87352_onTap_actionGroup2 = function(){
	isLastActionGroup = false;
	if (isLastActionGroup) {
		window.obj87352_onTap_activeActionGroupIndex = -1;
		$("#obj87352").trigger("obj87352_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87352) {
				console.warn("de-queueing event obj87352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87352_onTap_activeActionGroupIndex = 2;
	












//	action: playAudio
//	target: obj87362 
playAudio_87356();
function playAudio_87356() {
	window.obj87352_onTap_runningActionsCount = obj87352_onTap_runningActionsCount + 1;
	var myAudio = $("#obj87362")[0];
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
		    window.obj87352_onTap_runningActionsCount = window.obj87352_onTap_runningActionsCount - 1;
if (window.obj87352_onTap_runningActionsCount < 0) {
	window.obj87352_onTap_runningActionsCount = 0;
} else if (window.obj87352_onTap_runningActionsCount == 0) {
	obj87352_onTap_actionGroup3();
}
		};
		myAudio.addEventListener('pause', actionEnded, false);
		myAudio.addEventListener('ended', actionEnded, false);
	} else {
		window.obj87352_onTap_runningActionsCount = window.obj87352_onTap_runningActionsCount - 1;
if (window.obj87352_onTap_runningActionsCount < 0) {
	window.obj87352_onTap_runningActionsCount = 0;
} else if (window.obj87352_onTap_runningActionsCount == 0) {
	obj87352_onTap_actionGroup3();
}
	}
}









};
obj87352_onTap_actionGroup3 = function(){
	isLastActionGroup = true;
	if (isLastActionGroup) {
		window.obj87352_onTap_activeActionGroupIndex = -1;
		$("#obj87352").trigger("obj87352_onTap_ended");
		
		for (var i = 0; i < pubcoder.queuedEvents.length; i++) {
			const evt = pubcoder.queuedEvents[i];
			if (evt.senderObjectId == 87352) {
				console.warn("de-queueing event obj87352." + evt.eventName);
				pubcoder.queuedEvents.splice(i, 1);
				$("#obj87352").trigger(evt.eventName);
				return;
			}
		}
		return;
	}
	window.obj87352_onTap_activeActionGroupIndex = 3;
	





















};
		
		/*
		 *
	 	 *  Events
	 	 *
	 	 */
		













/*
 *
 *   obj71798: Event Touch Down
 *
 */
$("#obj71798").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71798_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71798_onTap is still running");
	return;
}
var obj71798_onTap_runningActionsCount = 0;
var obj71798_onTap_loopCount = 0;
obj71798_onTap_actionGroup0();
});










/*
 *
 *   obj71795: Event Touch Down
 *
 */
$("#obj71795").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71795_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71795_onTap is still running");
	return;
}
var obj71795_onTap_runningActionsCount = 0;
var obj71795_onTap_loopCount = 0;
obj71795_onTap_actionGroup0();
});










/*
 *
 *   obj71791: Event Touch Down
 *
 */
$("#obj71791").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71791_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71791_onTap is still running");
	return;
}
var obj71791_onTap_runningActionsCount = 0;
var obj71791_onTap_loopCount = 0;
obj71791_onTap_actionGroup0();
});



























































































































































































































































/*
 *
 *   obj71676: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71676");
	var winTarget = document.getElementById("obj71676");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71676").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71676_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71676_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71676_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_onTouchDown is still running");
	return;
}
var obj71676_onTouchDown_runningActionsCount = 0;
var obj71676_onTouchDown_loopCount = 0;
obj71676_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71676: Event SCActionDragDrop71679_droppedOutsideTargetActions
 *
 */
$("#obj71676").bind("SCActionDragDrop71679_droppedOutsideTargetActions", function(event) {
	if (window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_SCActionDragDrop71679_droppedOutsideTargetActions is still running");
	return;
}
var obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_loopCount = 0;
obj71676_SCActionDragDrop71679_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71676: Event droppedInsideTargetActions_5
 *
 */
$("#obj71676").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj71676_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_droppedInsideTargetActions_5 is still running");
	return;
}
var obj71676_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_5_loopCount = 0;
obj71676_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj71676: Event droppedInsideTargetActions_4
 *
 */
$("#obj71676").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj71676_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_droppedInsideTargetActions_4 is still running");
	return;
}
var obj71676_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_4_loopCount = 0;
obj71676_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj71676: Event droppedInsideTargetActions_3
 *
 */
$("#obj71676").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj71676_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_droppedInsideTargetActions_3 is still running");
	return;
}
var obj71676_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_3_loopCount = 0;
obj71676_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj71676: Event droppedInsideTargetActions_2
 *
 */
$("#obj71676").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj71676_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_droppedInsideTargetActions_2 is still running");
	return;
}
var obj71676_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_2_loopCount = 0;
obj71676_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj71676: Event droppedInsideTargetActions
 *
 */
$("#obj71676").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71676_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71676_droppedInsideTargetActions is still running");
	return;
}
var obj71676_droppedInsideTargetActions_runningActionsCount = 0;
var obj71676_droppedInsideTargetActions_loopCount = 0;
obj71676_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj71609: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71609");
	var winTarget = document.getElementById("obj71609");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71609").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71609_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71609_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71609_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_onTouchDown is still running");
	return;
}
var obj71609_onTouchDown_runningActionsCount = 0;
var obj71609_onTouchDown_loopCount = 0;
obj71609_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71609: Event SCActionDragDrop71612_droppedOutsideTargetActions
 *
 */
$("#obj71609").bind("SCActionDragDrop71612_droppedOutsideTargetActions", function(event) {
	if (window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_SCActionDragDrop71612_droppedOutsideTargetActions is still running");
	return;
}
var obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_loopCount = 0;
obj71609_SCActionDragDrop71612_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71609: Event droppedInsideTargetActions_5
 *
 */
$("#obj71609").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj71609_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_droppedInsideTargetActions_5 is still running");
	return;
}
var obj71609_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_5_loopCount = 0;
obj71609_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj71609: Event droppedInsideTargetActions_4
 *
 */
$("#obj71609").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj71609_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_droppedInsideTargetActions_4 is still running");
	return;
}
var obj71609_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_4_loopCount = 0;
obj71609_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj71609: Event droppedInsideTargetActions_3
 *
 */
$("#obj71609").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj71609_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_droppedInsideTargetActions_3 is still running");
	return;
}
var obj71609_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_3_loopCount = 0;
obj71609_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj71609: Event droppedInsideTargetActions_2
 *
 */
$("#obj71609").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj71609_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_droppedInsideTargetActions_2 is still running");
	return;
}
var obj71609_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_2_loopCount = 0;
obj71609_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj71609: Event droppedInsideTargetActions
 *
 */
$("#obj71609").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71609_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71609_droppedInsideTargetActions is still running");
	return;
}
var obj71609_droppedInsideTargetActions_runningActionsCount = 0;
var obj71609_droppedInsideTargetActions_loopCount = 0;
obj71609_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj71535: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71535");
	var winTarget = document.getElementById("obj71535");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71535").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71535_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71535_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71535_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_onTouchDown is still running");
	return;
}
var obj71535_onTouchDown_runningActionsCount = 0;
var obj71535_onTouchDown_loopCount = 0;
obj71535_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71535: Event SCActionDragDrop71538_droppedOutsideTargetActions
 *
 */
$("#obj71535").bind("SCActionDragDrop71538_droppedOutsideTargetActions", function(event) {
	if (window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_SCActionDragDrop71538_droppedOutsideTargetActions is still running");
	return;
}
var obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_loopCount = 0;
obj71535_SCActionDragDrop71538_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71535: Event droppedInsideTargetActions_5
 *
 */
$("#obj71535").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj71535_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_droppedInsideTargetActions_5 is still running");
	return;
}
var obj71535_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_5_loopCount = 0;
obj71535_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj71535: Event droppedInsideTargetActions_4
 *
 */
$("#obj71535").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj71535_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_droppedInsideTargetActions_4 is still running");
	return;
}
var obj71535_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_4_loopCount = 0;
obj71535_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj71535: Event droppedInsideTargetActions_3
 *
 */
$("#obj71535").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj71535_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_droppedInsideTargetActions_3 is still running");
	return;
}
var obj71535_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_3_loopCount = 0;
obj71535_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj71535: Event droppedInsideTargetActions_2
 *
 */
$("#obj71535").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj71535_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_droppedInsideTargetActions_2 is still running");
	return;
}
var obj71535_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_2_loopCount = 0;
obj71535_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj71535: Event droppedInsideTargetActions
 *
 */
$("#obj71535").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71535_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71535_droppedInsideTargetActions is still running");
	return;
}
var obj71535_droppedInsideTargetActions_runningActionsCount = 0;
var obj71535_droppedInsideTargetActions_loopCount = 0;
obj71535_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj71468: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71468");
	var winTarget = document.getElementById("obj71468");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71468").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71468_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71468_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71468_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_onTouchDown is still running");
	return;
}
var obj71468_onTouchDown_runningActionsCount = 0;
var obj71468_onTouchDown_loopCount = 0;
obj71468_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71468: Event SCActionDragDrop71471_droppedOutsideTargetActions
 *
 */
$("#obj71468").bind("SCActionDragDrop71471_droppedOutsideTargetActions", function(event) {
	if (window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_SCActionDragDrop71471_droppedOutsideTargetActions is still running");
	return;
}
var obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_loopCount = 0;
obj71468_SCActionDragDrop71471_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71468: Event droppedInsideTargetActions_5
 *
 */
$("#obj71468").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj71468_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_droppedInsideTargetActions_5 is still running");
	return;
}
var obj71468_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_5_loopCount = 0;
obj71468_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj71468: Event droppedInsideTargetActions_4
 *
 */
$("#obj71468").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj71468_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_droppedInsideTargetActions_4 is still running");
	return;
}
var obj71468_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_4_loopCount = 0;
obj71468_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj71468: Event droppedInsideTargetActions_3
 *
 */
$("#obj71468").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj71468_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_droppedInsideTargetActions_3 is still running");
	return;
}
var obj71468_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_3_loopCount = 0;
obj71468_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj71468: Event droppedInsideTargetActions_2
 *
 */
$("#obj71468").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj71468_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_droppedInsideTargetActions_2 is still running");
	return;
}
var obj71468_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_2_loopCount = 0;
obj71468_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj71468: Event droppedInsideTargetActions
 *
 */
$("#obj71468").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71468_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71468_droppedInsideTargetActions is still running");
	return;
}
var obj71468_droppedInsideTargetActions_runningActionsCount = 0;
var obj71468_droppedInsideTargetActions_loopCount = 0;
obj71468_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj71401: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71401");
	var winTarget = document.getElementById("obj71401");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71401").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71401_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71401_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71401_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_onTouchDown is still running");
	return;
}
var obj71401_onTouchDown_runningActionsCount = 0;
var obj71401_onTouchDown_loopCount = 0;
obj71401_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71401: Event SCActionDragDrop71404_droppedOutsideTargetActions
 *
 */
$("#obj71401").bind("SCActionDragDrop71404_droppedOutsideTargetActions", function(event) {
	if (window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_SCActionDragDrop71404_droppedOutsideTargetActions is still running");
	return;
}
var obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_loopCount = 0;
obj71401_SCActionDragDrop71404_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71401: Event droppedInsideTargetActions_5
 *
 */
$("#obj71401").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj71401_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_droppedInsideTargetActions_5 is still running");
	return;
}
var obj71401_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_5_loopCount = 0;
obj71401_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj71401: Event droppedInsideTargetActions_4
 *
 */
$("#obj71401").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj71401_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_droppedInsideTargetActions_4 is still running");
	return;
}
var obj71401_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_4_loopCount = 0;
obj71401_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj71401: Event droppedInsideTargetActions_3
 *
 */
$("#obj71401").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj71401_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_droppedInsideTargetActions_3 is still running");
	return;
}
var obj71401_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_3_loopCount = 0;
obj71401_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj71401: Event droppedInsideTargetActions_2
 *
 */
$("#obj71401").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj71401_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_droppedInsideTargetActions_2 is still running");
	return;
}
var obj71401_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_2_loopCount = 0;
obj71401_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj71401: Event droppedInsideTargetActions
 *
 */
$("#obj71401").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71401_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71401_droppedInsideTargetActions is still running");
	return;
}
var obj71401_droppedInsideTargetActions_runningActionsCount = 0;
var obj71401_droppedInsideTargetActions_loopCount = 0;
obj71401_droppedInsideTargetActions_actionGroup0();
});






/*
 *
 *   obj71334: Event Touch Down
 *
 */
 
 if (window.SCuaosIsWindows) {
	SCPreventTouch("#obj71334");
	var winTarget = document.getElementById("obj71334");
	winTarget.addEventListener("MSGestureHold", function(e){ e.preventDefault() }, false);
	winTarget.addEventListener("contextmenu", function(e){e.preventDefault()}, false);	
 }
$("#obj71334").bind(window.touchDownEvent, function(event) {
	event.preventDefault();	
	window.eventObj = event; 
	if ((window['obj71334_onTouchUp_activeActionGroupIndex'] != undefined) && window.obj71334_onTouchUp_activeActionGroupIndex != -1) return;
	if (window.obj71334_onTouchDown_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_onTouchDown is still running");
	return;
}
var obj71334_onTouchDown_runningActionsCount = 0;
var obj71334_onTouchDown_loopCount = 0;
obj71334_onTouchDown_actionGroup0();
});



/*
 *
 *   obj71334: Event SCActionDragDrop71337_droppedOutsideTargetActions
 *
 */
$("#obj71334").bind("SCActionDragDrop71337_droppedOutsideTargetActions", function(event) {
	if (window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_SCActionDragDrop71337_droppedOutsideTargetActions is still running");
	return;
}
var obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_runningActionsCount = 0;
var obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_loopCount = 0;
obj71334_SCActionDragDrop71337_droppedOutsideTargetActions_actionGroup0();
});
/*
 *
 *   obj71334: Event droppedInsideTargetActions_5
 *
 */
$("#obj71334").bind("droppedInsideTargetActions_5", function(event) {
	if (window.obj71334_droppedInsideTargetActions_5_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_droppedInsideTargetActions_5 is still running");
	return;
}
var obj71334_droppedInsideTargetActions_5_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_5_loopCount = 0;
obj71334_droppedInsideTargetActions_5_actionGroup0();
});
/*
 *
 *   obj71334: Event droppedInsideTargetActions_4
 *
 */
$("#obj71334").bind("droppedInsideTargetActions_4", function(event) {
	if (window.obj71334_droppedInsideTargetActions_4_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_droppedInsideTargetActions_4 is still running");
	return;
}
var obj71334_droppedInsideTargetActions_4_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_4_loopCount = 0;
obj71334_droppedInsideTargetActions_4_actionGroup0();
});
/*
 *
 *   obj71334: Event droppedInsideTargetActions_3
 *
 */
$("#obj71334").bind("droppedInsideTargetActions_3", function(event) {
	if (window.obj71334_droppedInsideTargetActions_3_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_droppedInsideTargetActions_3 is still running");
	return;
}
var obj71334_droppedInsideTargetActions_3_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_3_loopCount = 0;
obj71334_droppedInsideTargetActions_3_actionGroup0();
});
/*
 *
 *   obj71334: Event droppedInsideTargetActions_2
 *
 */
$("#obj71334").bind("droppedInsideTargetActions_2", function(event) {
	if (window.obj71334_droppedInsideTargetActions_2_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_droppedInsideTargetActions_2 is still running");
	return;
}
var obj71334_droppedInsideTargetActions_2_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_2_loopCount = 0;
obj71334_droppedInsideTargetActions_2_actionGroup0();
});
/*
 *
 *   obj71334: Event droppedInsideTargetActions
 *
 */
$("#obj71334").bind("droppedInsideTargetActions", function(event) {
	if (window.obj71334_droppedInsideTargetActions_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71334_droppedInsideTargetActions is still running");
	return;
}
var obj71334_droppedInsideTargetActions_runningActionsCount = 0;
var obj71334_droppedInsideTargetActions_loopCount = 0;
obj71334_droppedInsideTargetActions_actionGroup0();
});





/*
 *
 *   obj71316: Event Touch Down
 *
 */
$("#obj71316").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71316_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71316_onTap is still running");
	return;
}
var obj71316_onTap_runningActionsCount = 0;
var obj71316_onTap_loopCount = 0;
obj71316_onTap_actionGroup0();
});










/*
 *
 *   obj71308: Event Touch Down
 *
 */
$("#obj71308").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj71308_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj71308_onTap is still running");
	return;
}
var obj71308_onTap_runningActionsCount = 0;
var obj71308_onTap_loopCount = 0;
obj71308_onTap_actionGroup0();
});










/*
 *
 *   obj87357: Event Touch Down
 *
 */
$("#obj87357").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87357_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87357_onTap is still running");
	return;
}
var obj87357_onTap_runningActionsCount = 0;
var obj87357_onTap_loopCount = 0;
obj87357_onTap_actionGroup0();
});










/*
 *
 *   obj87352: Event Touch Down
 *
 */
$("#obj87352").bind(PubCoder.Events.Tap, function(event) {
	event.preventDefault();	
	if (window.obj87352_onTap_activeActionGroupIndex != -1) {
	console.warn("action list window.obj87352_onTap is still running");
	return;
}
var obj87352_onTap_runningActionsCount = 0;
var obj87352_onTap_loopCount = 0;
obj87352_onTap_actionGroup0();
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
	
$("#obj71801").trigger('SCEventShow');
$("#obj71798").trigger('SCEventShow');
$("#obj71795").trigger('SCEventShow');
$("#obj71791").trigger('SCEventShow');
$("#obj71789").trigger('SCEventShow');
$("#obj71787").trigger('SCEventShow');
$("#obj71785").trigger('SCEventShow');
$("#obj71783").trigger('SCEventShow');
$("#obj71781").trigger('SCEventShow');
$("#obj71779").trigger('SCEventShow');
$("#obj71777").trigger('SCEventShow');
$("#obj71775").trigger('SCEventShow');
$("#obj71773").trigger('SCEventShow');
$("#obj71771").trigger('SCEventShow');
$("#obj71769").trigger('SCEventShow');
$("#obj71767").trigger('SCEventShow');
$("#obj71765").trigger('SCEventShow');
$("#obj71763").trigger('SCEventShow');
$("#obj71761").trigger('SCEventShow');
$("#obj71759").trigger('SCEventShow');
$("#obj71757").trigger('SCEventShow');
$("#obj71755").trigger('SCEventShow');
$("#obj71753").trigger('SCEventShow');
$("#obj71751").trigger('SCEventShow');
$("#obj71749").trigger('SCEventShow');
$("#obj71747").trigger('SCEventShow');
$("#obj71745").trigger('SCEventShow');
$("#obj71743").trigger('SCEventShow');
$("#obj71676").trigger('SCEventShow');
$("#obj71609").trigger('SCEventShow');
$("#obj71535").trigger('SCEventShow');
$("#obj71468").trigger('SCEventShow');
$("#obj71401").trigger('SCEventShow');
$("#obj71334").trigger('SCEventShow');
$("#obj71316").trigger('SCEventShow');
$("#obj71308").trigger('SCEventShow');
$("#obj87357").trigger('SCEventShow');
$("#obj87352").trigger('SCEventShow');
$("#obj87362").trigger('SCEventShow');
$("#obj94731").trigger('SCEventShow');
$("#obj71306").trigger('SCEventShow');
	
});